import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';

// Critical components loaded immediately
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import About from './components/About';

// Keep the hero available immediately; split the lower sections into separate chunks.
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Certificates = lazy(() => import('./components/Certificates'));
const Resume = lazy(() => import('./components/Resume'));

// Loading fallback component
const LoadingFallback = () => (
  <div 
    style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '200px',
      color: 'var(--muted-foreground)'
    }}
  >
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

/**
 * Optimized App component with code splitting and lazy loading
 * - The hero and navigation render on the initial pass.
 * - Lower sections are split into separate chunks, then rendered on this page.
 */
function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <About />
        <Suspense fallback={<LoadingFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Education />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Certificates />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Resume />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
