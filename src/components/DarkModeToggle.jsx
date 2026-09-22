import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const DarkModeToggle = () => {
  const { toggleTheme, isDark } = useTheme();
  const label = `Switch to ${isDark ? 'light' : 'dark'} mode`;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle site-nav__glass"
      aria-label={label}
      title={label}
    >
      {isDark ? <Sun size={19} strokeWidth={1.8} aria-hidden="true" /> : <Moon size={19} strokeWidth={1.8} aria-hidden="true" />}
    </button>
  );
};

export default DarkModeToggle;
