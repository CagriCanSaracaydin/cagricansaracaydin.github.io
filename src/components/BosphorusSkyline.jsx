import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { PALETTES, ROWS, paintFrame, renderLayers } from './bosphorusArt';

// The canvas is ROWS art pixels tall; CSS sets the on-screen height, so one art pixel
// is 3px on desktop and 2px on phones.
const FALLBACK_PIXEL = 3;
const FRAME_MS = 125;

/** Decorative pixel-art Bosphorus strip along the bottom of the About section. */
const BosphorusSkyline = () => {
  const canvasRef = useRef(null);
  const tickRef = useRef(40);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return undefined;

    const palette = isDark ? PALETTES.dark : PALETTES.light;
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
    let cols = 0;
    let layers = null;
    let timer = null;
    let onScreen = true;

    const draw = () => paintFrame(ctx, layers, cols, tickRef.current, palette, isDark);

    const resize = () => {
      const pixel = canvas.clientHeight / ROWS || FALLBACK_PIXEL;
      const width = canvas.parentElement?.clientWidth ?? 0;
      const nextCols = Math.max(60, Math.ceil(width / pixel));
      if (nextCols !== cols) {
        cols = nextCols;
        canvas.width = cols;
        canvas.height = ROWS;
        canvas.style.width = `${cols * pixel}px`;
        layers = renderLayers(cols, palette, isDark, () => document.createElement('canvas'));
      }
      draw();
    };

    const stop = () => {
      clearInterval(timer);
      timer = null;
    };
    const start = () => {
      if (reduceMotion || timer || !onScreen || document.hidden) return;
      timer = setInterval(() => {
        tickRef.current += 1;
        draw();
      }, FRAME_MS);
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    resize();
    start();

    const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(resize);
    resizeObserver?.observe(canvas.parentElement ?? canvas);

    const visibilityObserver = typeof IntersectionObserver === 'undefined'
      ? null
      : new IntersectionObserver(([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen) start();
        else stop();
      });
    visibilityObserver?.observe(canvas);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      resizeObserver?.disconnect();
      visibilityObserver?.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [isDark]);

  return <canvas ref={canvasRef} className="about__skyline" aria-hidden="true" />;
};

export default BosphorusSkyline;
