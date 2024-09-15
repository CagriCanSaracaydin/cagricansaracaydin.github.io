import React from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      bg="white"
      variant="light"
      className="shadow-sm"
    >
      <div className="container">
        <Navbar.Brand href="#" style={{ color: '#0056b3', fontWeight: 'bold' }}>
          Cagri Can Saracaydin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {[
              'About',
              'Skills',
              'Experience',
              'Projects',
              'Education',
              'Certificates',
              'Resume',
              'Contact',
            ].map((section) => (
              <Nav.Item key={section}>
                <Link
                  activeClass="active"
                  className="nav-link"
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
      </div>
    </Navbar>
  );
}

export default NavigationBar;
