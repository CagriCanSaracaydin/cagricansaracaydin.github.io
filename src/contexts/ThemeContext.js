import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

/**
 * Optimized ThemeProvider with memoization to prevent unnecessary re-renders
 * - Memoizes theme value to prevent context updates on every render
 * - Uses useCallback for toggle function
 * - Batches DOM updates for better performance
 */
export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Use requestAnimationFrame for smoother DOM updates
    requestAnimationFrame(() => {
      // Remove both classes first
      root.classList.remove('light', 'dark');
      
      // Add the current theme class
      root.classList.add(theme);
      
      // Save to localStorage
      localStorage.setItem('theme', theme);
    });
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only auto-switch if user hasn't manually set a preference
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    // Use addEventListener with passive option for better scroll performance
    mediaQuery.addEventListener('change', handleChange, { passive: true });
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Memoize toggle function to prevent recreating on every render
  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }, []);

  // Memoize context value to prevent unnecessary re-renders of consumers
  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      isDark: theme === 'dark'
    }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
