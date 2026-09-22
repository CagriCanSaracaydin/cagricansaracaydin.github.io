import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import './Navbar.css';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

const NavigationBar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;
      const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

      if (isNearBottom) {
        setActiveSection(sections[sections.length - 1]);
        return;
      }

      for (let index = sections.length - 1; index >= 0; index -= 1) {
        const section = sections[index];
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: window.scrollY + element.getBoundingClientRect().top - 96,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  const renderNavItem = (item, mobile = false) => {
    const isActive = activeSection === item.href.slice(1);
    return (
      <button
        key={item.name}
        type="button"
        onClick={() => scrollToSection(item.href)}
        aria-current={isActive ? 'location' : undefined}
        className={`site-nav__link${mobile ? ' site-nav__link--mobile' : ''}${isActive ? ' is-active' : ''}`}
      >
        {item.name}
      </button>
    );
  };

  return (
    <nav className={`site-nav${isScrolled ? ' is-scrolled' : ''}`} aria-label="Primary navigation">
      <div className="site-nav__inner">
        <button
          type="button"
          className="site-nav__brand site-nav__glass"
          onClick={() => scrollToSection('#about')}
          aria-label="Go to About section"
        >
          C<span className="site-nav__brand-accent">/</span>S
          <span className="site-nav__brand-name">Cagri Can Saracaydin</span>
        </button>

        <div className="site-nav__links site-nav__glass">
          {navItems.map((item) => renderNavItem(item))}
        </div>

        <div className="site-nav__actions">
          <DarkModeToggle />
          <button
            type="button"
            className="site-nav__menu-button site-nav__glass"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-navigation-menu" className="site-nav__mobile site-nav__glass">
          {navItems.map((item) => renderNavItem(item, true))}
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
