import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import DarkModeToggle from './components/DarkModeToggle';
import Experience from './components/Experience';
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
  expect(screen.getByRole('heading', { name: /cagri can saracaydin/i })).toBeInTheDocument();
  expect(screen.getByText(/computer science and engineering graduate/i)).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /certificates/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'cagrisaracaydin@gmail.com' })).toHaveAttribute('href', 'mailto:cagrisaracaydin@gmail.com');
  }, { timeout: 5000 });
  expect(screen.queryByRole('heading', { name: /^skills$/i })).not.toBeInTheDocument();
  expect(screen.queryByRole('button', { name: /^skills$/i })).not.toBeInTheDocument();
});

test('shows the current Deloitte role and completed PMI dates', () => {
  render(<Experience />);

  expect(screen.getByRole('heading', { name: 'Deloitte' })).toBeInTheDocument();
  expect(screen.getByText('Engineering, AI & Data Business Analyst')).toBeInTheDocument();
  expect(screen.getByText('June 2026 - Present')).toBeInTheDocument();
  expect(screen.getByText('July 2025 - May 2026')).toBeInTheDocument();
});

test('filters projects by technology category', () => {
  render(<Projects />);

  fireEvent.click(screen.getByRole('button', { name: 'Python' }));

  expect(screen.getByText(/data analysis of commodity market/i)).toBeInTheDocument();
  expect(screen.queryByText(/search engine c\+\+ project/i)).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Python' })).toHaveAttribute('aria-pressed', 'true');
});

test('shows a private corporate project without requiring an image or GitHub link', () => {
  render(<Projects items={[{
    id: 'internal-reporting',
    title: 'Internal reporting platform',
    description: 'Built an internal reporting workflow.',
    organization: 'Example Company',
    category: 'Corporate',
    technologies: ['SQL'],
  }]} />);

  expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Internal reporting platform' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Corporate' })).toBeInTheDocument();
  expect(screen.queryByRole('link', { name: /GitHub/i })).not.toBeInTheDocument();
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

test('reveals the scroll-to-top control after the experience section', () => {
  Object.defineProperty(window, 'pageYOffset', { configurable: true, value: 100 });

  render(
    <>
      <div id="experience" />
      <ScrollToTop />
    </>
  );
  fireEvent.scroll(window);

  const button = screen.getByRole('button', { name: /scroll to top/i });
  fireEvent.click(button);
  expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
});
