import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
import DarkModeToggle from './DarkModeToggle';
import Experience from './Experience';
import { PALETTES } from './bosphorusArt';
import { ThemeProvider } from '../contexts/ThemeContext';

const recordingContext = () => {
  const colors = [];
  const ctx = {
    fillStyle: '',
    globalAlpha: 1,
    clearRect: vi.fn(),
    fillRect: vi.fn(() => colors.push(ctx.fillStyle)),
  };
  return { ctx, colors };
};

beforeEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove('light', 'dark');
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

test('Tombili naps on the newest experience card and meows when clicked', () => {
  vi.useFakeTimers();
  const { container } = render(<Experience />);

  const cats = container.querySelectorAll('.tombili');
  expect(cats).toHaveLength(1);
  expect(cats[0]).toHaveAttribute('aria-hidden', 'true');
  expect(cats[0].closest('.experience__card')).toHaveTextContent('Deloitte');

  fireEvent.click(cats[0].querySelector('canvas'));
  expect(screen.getByText('miyav!')).toBeInTheDocument();

  act(() => vi.advanceTimersByTime(2000));
  expect(screen.queryByText('miyav!')).not.toBeInTheDocument();
});

test('theme toggle repaints Galata floodlit at night after the sunset animation', () => {
  vi.useFakeTimers();
  const { ctx, colors } = recordingContext();
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(ctx);
  render(
    <ThemeProvider>
      <DarkModeToggle />
    </ThemeProvider>
  );
  expect(colors).not.toContain(PALETTES.dark.stoneLit);

  fireEvent.click(screen.getByRole('button', { name: /switch to dark mode/i }));
  act(() => vi.advanceTimersByTime(1000));

  expect(screen.getByRole('button', { name: /switch to light mode/i })).toBeInTheDocument();
  expect(colors).toContain(PALETTES.dark.stoneLit);
});
