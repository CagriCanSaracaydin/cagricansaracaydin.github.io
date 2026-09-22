import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

/** Keeps system preference separate from an explicit, persisted selection. */
export const ThemeProvider = ({ children }) => {
  const getSystemTheme = useCallback(
    () => window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light',
    []
  );

  const [preference, setPreference] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'system';
    } catch {
      return 'system';
    }
  });
  const [systemTheme, setSystemTheme] = useState(getSystemTheme);
  const theme = preference === 'system' ? systemTheme : preference;

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    try {
      if (preference === 'system') {
        localStorage.removeItem('theme');
      } else {
        localStorage.setItem('theme', preference);
      }
    } catch {
      // Theme selection still works when storage is unavailable.
    }
  }, [preference, theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!mediaQuery) return undefined;

    const handleChange = (event) => setSystemTheme(event.matches ? 'dark' : 'light');

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setPreference(theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  // Memoize context value to prevent unnecessary re-renders of consumers
  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      isDark: theme === 'dark',
    }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
