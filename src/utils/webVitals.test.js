import { afterEach, expect, test, vi } from 'vitest';
import { onINP } from 'web-vitals';
import { initWebVitals } from './webVitals';

vi.mock('web-vitals', () => ({
  onCLS: vi.fn(),
  onINP: vi.fn(),
  onFCP: vi.fn(),
  onLCP: vi.fn(),
  onTTFB: vi.fn(),
}));

afterEach(() => {
  delete window.gtag;
  vi.clearAllMocks();
});

test('reports a good INP measurement to analytics', () => {
  window.gtag = vi.fn();

  initWebVitals();
  expect(onINP).toHaveBeenCalledOnce();

  const reportINP = onINP.mock.calls[0][0];
  reportINP({ name: 'INP', value: 180, delta: 180, id: 'inp-1' });

  expect(window.gtag).toHaveBeenCalledWith('event', 'INP', expect.objectContaining({
    value: 180,
    metric_rating: 'good',
  }));
});
