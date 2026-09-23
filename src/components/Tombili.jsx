import { useEffect, useRef, useState } from 'react';
import { useOptionalTheme } from '../contexts/ThemeContext';
import { CAT_SIZE, drawTombili } from './pixelEggs';

const FRAME_MS = 450;
const DOZE_MS = 1200;
const MEOW_MS = 1600;

/**
 * Easter egg: Tombili, Istanbul's most famous street cat, naps on top of a card.
 * Hovering wakes her; clicking gets a "miyav!". Decorative, so hidden from assistive tech.
 */
const Tombili = () => {
  const canvasRef = useRef(null);
  const tickRef = useRef(0);
  const timersRef = useRef({});
  const [awake, setAwake] = useState(false);
  const [meowing, setMeowing] = useState(false);
  const isDark = useOptionalTheme()?.isDark ?? false;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return undefined;

    const still = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
    const draw = () => drawTombili(ctx, { awake, tick: tickRef.current, isDark, still });
    draw();
    if (still) return undefined;

    let timer = null;
    let onScreen = true;
    const stop = () => {
      clearInterval(timer);
      timer = null;
    };
    const start = () => {
      if (timer || !onScreen) return;
      timer = setInterval(() => {
        tickRef.current += 1;
        draw();
      }, FRAME_MS);
    };
    const observer = typeof IntersectionObserver === 'undefined'
      ? null
      : new IntersectionObserver(([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen) start();
        else stop();
      });
    observer?.observe(canvas);
    start();

    return () => {
      stop();
      observer?.disconnect();
    };
  }, [awake, isDark]);

  useEffect(() => {
    const timers = timersRef.current;
    return () => Object.values(timers).forEach(clearTimeout);
  }, []);

  const wake = () => {
    clearTimeout(timersRef.current.doze);
    setAwake(true);
  };
  const doze = () => {
    clearTimeout(timersRef.current.doze);
    timersRef.current.doze = setTimeout(() => setAwake(false), DOZE_MS);
  };
  const meow = (event) => {
    event.stopPropagation();
    wake();
    setMeowing(true);
    clearTimeout(timersRef.current.meow);
    timersRef.current.meow = setTimeout(() => setMeowing(false), MEOW_MS);
  };

  return (
    <div className="tombili" aria-hidden="true">
      {meowing && <span className="tombili__bubble">miyav!</span>}
      <canvas
        ref={canvasRef}
        className="tombili__cat"
        width={CAT_SIZE.cols}
        height={CAT_SIZE.rows}
        onPointerEnter={wake}
        onPointerLeave={doze}
        onClick={meow}
      />
    </div>
  );
};

export default Tombili;
