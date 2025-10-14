import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

// NavigationBar component to display the navigation bar
const NavigationBar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add shadow when scrolled
      setIsScrolled(window.scrollY > 10);

      // Detect active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      // Check if we're near the bottom of the page
      const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      
      if (isNearBottom) {
        // If near bottom, activate the last section (contact)
        setActiveSection(sections[sections.length - 1]);
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;

          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'rgba(var(--background-rgb), 0.95)',
        backdropFilter: 'blur(8px)',
        transition: 'all 0.3s ease',
        borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none'
      }}
    >
      <Container style={{ maxWidth: '1400px' }}>
        <div className="d-flex align-items-center justify-content-between" style={{ height: '64px' }}>
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection('#about')}
            style={{
              background: 'none',
              border: 'none',
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              fontWeight: '700',
              color: 'var(--primary)',
              transition: 'color 0.3s ease',
              cursor: 'pointer',
              letterSpacing: '0.05em',
              padding: 0
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary)'}
          >
            CAGRI CAN SARACAYDIN
          </button>

          {/* Desktop Navigation */}
          <div className="d-none d-md-flex align-items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="nav-item-btn"
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: isActive ? 'var(--primary)' : 'transparent',
                    color: isActive ? 'var(--primary-foreground)' : 'var(--foreground)',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--accent)';
                      e.currentTarget.style.backgroundColor = 'rgba(var(--accent-rgb), 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--foreground)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {item.name}
                  {!isActive && (
                    <span 
                      className="underline-effect"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: '2px',
                        backgroundColor: 'var(--accent)',
                        transition: 'width 0.3s ease'
                      }}
                    />
                  )}
                </button>
              );
            })}
            
            {/* Dark Mode Toggle */}
            <div style={{ marginLeft: '0.5rem', display: 'flex', alignItems: 'center' }}>
              <DarkModeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="d-md-none d-flex align-items-center gap-2">
            <DarkModeToggle />
            <Button
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                padding: '0.5rem',
                color: 'var(--foreground)'
              }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="d-md-none"
          style={{
            borderTop: '1px solid var(--border)',
            backgroundColor: 'rgba(var(--background-rgb), 0.98)',
            backdropFilter: 'blur(8px)'
          }}
        >
          <Container>
            <div className="d-flex flex-column gap-2 py-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.375rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      backgroundColor: isActive ? 'var(--primary)' : 'transparent',
                      color: isActive ? 'var(--primary-foreground)' : 'var(--foreground)',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = 'var(--accent)';
                        e.currentTarget.style.backgroundColor = 'rgba(var(--accent-rgb), 0.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = 'var(--foreground)';
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </Container>
        </div>
      )}

      <style jsx>{`
        .nav-item-btn:hover .underline-effect {
          width: 75% !important;
        }
      `}</style>
    </nav>
  );
};

export default NavigationBar;
