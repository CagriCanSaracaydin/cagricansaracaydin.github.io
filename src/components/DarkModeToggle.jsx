import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ORB_DOWN, ORB_UP, SCENE_SIZE, drawGalataScene } from './pixelEggs';

const STEPS = 8;
const STEP_MS = 32;

/** Theme toggle drawn as a tiny Galata skyline: the sun sets behind the tower and the moon rises. */
const DarkModeToggle = () => {
  const { toggleTheme, isDark } = useTheme();
  const canvasRef = useRef(null);
  const shownRef = useRef(isDark);
  const label = `Switch to ${isDark ? 'light' : 'dark'} mode`;

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return undefined;

    const from = shownRef.current;
    shownRef.current = isDark;
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
    const settle = () => drawGalataScene(ctx, { night: isDark, orbY: ORB_UP });

    if (from === isDark || reduceMotion) {
      settle();
      return undefined;
    }

    // Old scene: the orb sinks behind the skyline. New scene: the other orb rises.
    let step = 0;
    const timer = setInterval(() => {
      step += 1;
      const sinking = step <= STEPS;
      const progress = sinking ? step / STEPS : (step - STEPS) / STEPS;
      drawGalataScene(ctx, sinking
        ? { night: from, orbY: ORB_UP + (ORB_DOWN - ORB_UP) * progress }
        : { night: isDark, orbY: ORB_DOWN - (ORB_DOWN - ORB_UP) * progress });
      if (step >= STEPS * 2) clearInterval(timer);
    }, STEP_MS);

    return () => {
      clearInterval(timer);
      settle();
    };
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle site-nav__glass"
      aria-label={label}
      title={label}
    >
      <canvas
        ref={canvasRef}
        className="theme-toggle__scene"
        width={SCENE_SIZE}
        height={SCENE_SIZE}
        aria-hidden="true"
      />
    </button>
  );
};

export default DarkModeToggle;
