import { render } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
import BosphorusSkyline from './BosphorusSkyline';
import { PALETTES } from './bosphorusArt';
import { ThemeProvider } from '../contexts/ThemeContext';

const recordingContext = () => {
  const colors = new Set();
  const ctx = {
    canvas: null,
    fillStyle: '',
    globalAlpha: 1,
    clearRect: vi.fn(),
    drawImage: vi.fn(),
    save: vi.fn(),
    restore: vi.fn(),
    fillRect: vi.fn(() => colors.add(ctx.fillStyle)),
  };
  return { ctx, colors };
};

const renderSkyline = () => render(
  <ThemeProvider>
    <BosphorusSkyline />
  </ThemeProvider>
);

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  vi.restoreAllMocks();
});

test('keeps the skyline canvas out of the accessibility tree', () => {
  const { container } = renderSkyline();

  expect(container.querySelector('canvas.about__skyline')).toHaveAttribute('aria-hidden', 'true');
});

test('paints the skyline in the palette of the active theme', () => {
  const { ctx, colors } = recordingContext();
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(ctx);
  localStorage.setItem('theme', 'dark');

  renderSkyline();

  expect(colors.has(PALETTES.dark.ink)).toBe(true);
  expect(colors.has(PALETTES.dark.stoneLit)).toBe(true);
  expect(colors.has(PALETTES.dark.sea)).toBe(true);
  expect(colors.has(PALETTES.light.ink)).toBe(false);
});
