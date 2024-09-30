import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    'About',
    'Skills',
    'Experience',
    'Projects',
    'Education',
    'Certificates',
    'Resume'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= triggerPoint && bottom >= triggerPoint) {
            setActiveSection(section.toLowerCase());
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      bg={scrolled ? 'white' : 'transparent'}
      variant="light"
      className={`transition-all duration-300 ${
        scrolled ? 'shadow-lg py-2' : 'py-3'
      }`}
    >
      <Container>
        <Navbar.Brand
          href="#"
          className="text-primary font-weight-bold text-uppercase"
        >
          Cagri Can Saracaydin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {sections.map((section) => (
              <Nav.Item key={section}>
                <Link
                  activeClass="active"
                  className={`nav-link px-3 py-2 mx-1 rounded transition-all duration-300 ${
                    activeSection === section.toLowerCase()
                      ? 'bg-primary text-white'
                      : 'text-dark'
                  }`}
                  to={section.toLowerCase()}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  {section}
                </Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <style jsx>{`
        .transition-all {
          transition: all 0.3s ease-in-out;
        }
        .duration-300 {
          transition-duration: 300ms;
        }
        .nav-link:hover {
          background-color: rgba(0, 123, 255, 0.1);
        }
      `}</style>
    </Navbar>
  );
};

export default NavigationBar;