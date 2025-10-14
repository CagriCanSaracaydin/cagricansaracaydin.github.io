import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

/**
 * DarkModeToggle Component
 * A beautiful animated toggle switch for switching between light and dark themes
 */
const DarkModeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      style={{
        position: 'relative',
        width: '60px',
        height: '32px',
        backgroundColor: isDark ? 'var(--primary)' : 'var(--muted)',
        borderRadius: '16px',
        border: '2px solid var(--border)',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: 0,
        overflow: 'hidden',
        boxShadow: isDark 
          ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)' 
          : '0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = isDark 
          ? '0 6px 12px -2px rgba(0, 0, 0, 0.4), 0 3px 6px -2px rgba(0, 0, 0, 0.3)' 
          : '0 4px 8px -2px rgba(0, 0, 0, 0.15), 0 2px 4px -2px rgba(0, 0, 0, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = isDark 
          ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)' 
          : '0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06)';
      }}
    >
      {/* Background gradient effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isDark 
            ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))' 
            : 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(252, 211, 77, 0.2))',
          transition: 'opacity 0.3s ease',
          opacity: 0.6
        }}
      />

      {/* Icons */}
      <div
        style={{
          position: 'absolute',
          left: '6px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'var(--accent)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          opacity: isDark ? 0 : 1,
          pointerEvents: 'none'
        }}
      >
        <Sun size={16} />
      </div>

      <div
        style={{
          position: 'absolute',
          right: '6px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: isDark ? 'var(--accent)' : 'rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          opacity: isDark ? 1 : 0,
          pointerEvents: 'none'
        }}
      >
        <Moon size={16} />
      </div>

      {/* Toggle ball */}
      <div
        style={{
          position: 'absolute',
          top: '3px',
          left: isDark ? 'calc(100% - 27px)' : '3px',
          width: '22px',
          height: '22px',
          backgroundColor: 'var(--background)',
          borderRadius: '50%',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none'
        }}
      >
        {/* Inner icon on the ball */}
        <div
          style={{
            color: isDark ? 'var(--primary)' : 'var(--accent)',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {isDark ? <Moon size={14} /> : <Sun size={14} />}
        </div>
      </div>

      <style jsx>{`
        .theme-toggle:focus-visible {
          outline: 2px solid var(--ring);
          outline-offset: 2px;
        }

        .theme-toggle:active {
          transform: scale(0.95) !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .theme-toggle,
          .theme-toggle > * {
            transition: none !important;
          }
        }
      `}</style>
    </button>
  );
};

export default DarkModeToggle;
