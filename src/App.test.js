import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import DarkModeToggle from './components/DarkModeToggle';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './contexts/ThemeContext';

beforeEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove('light', 'dark');
  window.scrollTo.mockClear();
});

test('renders the current portfolio sections', async () => {
  render(<App />);

  expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument();
  expect(await screen.findByRole('heading', { name: /projects/i })).toBeInTheDocument();
  expect(await screen.findByRole('heading', { name: /certificates/i })).toBeInTheDocument();
  expect(await screen.findByRole('link', { name: /view resume/i })).toHaveAttribute('href');
});

test('filters projects by technology category', () => {
  render(<Projects />);

  fireEvent.click(screen.getByRole('button', { name: 'Python' }));

  expect(screen.getByText(/data analysis of commodity market/i)).toBeInTheDocument();
  expect(screen.queryByText(/search engine c\+\+ project/i)).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Python' })).toHaveAttribute('aria-pressed', 'true');
});

test('persists an explicit theme selection', async () => {
  render(
    <ThemeProvider>
      <DarkModeToggle />
    </ThemeProvider>
  );

  fireEvent.click(screen.getByRole('button', { name: /switch to dark mode/i }));

  await waitFor(() => expect(document.documentElement).toHaveClass('dark'));
  expect(localStorage.getItem('theme')).toBe('dark');
});

test('exposes mobile navigation state to assistive technology', () => {
  render(
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );

  const menuButton = screen.getByRole('button', { name: /open navigation menu/i });
  fireEvent.click(menuButton);

  expect(screen.getByRole('button', { name: /close navigation menu/i })).toHaveAttribute('aria-expanded', 'true');
  expect(document.getElementById('mobile-navigation-menu')).toBeInTheDocument();
});

test('reveals the scroll-to-top control after the skills section', () => {
  Object.defineProperty(window, 'pageYOffset', { configurable: true, value: 100 });

  render(
    <>
      <div id="skills" />
      <ScrollToTop />
    </>
  );
  fireEvent.scroll(window);

  const button = screen.getByRole('button', { name: /scroll to top/i });
  fireEvent.click(button);
  expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
});
