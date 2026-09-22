import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Mail } from 'lucide-react';

// Footer component to display the footer section of the website
function Footer() {
  return (
    <footer 
      style={{ 
        backgroundColor: 'var(--card)', 
        borderTop: '1px solid var(--border)',
        color: 'var(--foreground)',
        padding: 'clamp(2rem, 4vw, 3rem) 1rem'
      }}
    >
      <Container style={{ maxWidth: '1400px' }}>
        <div className="text-center">
          {/* Social Media Icons */}
          <div className="d-flex gap-3 justify-content-center mb-4">
            <a
              href="https://www.linkedin.com/in/cagricansaracaydin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                backgroundColor: 'var(--background)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                color: 'var(--foreground)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.backgroundColor = 'var(--secondary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.backgroundColor = 'var(--background)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://github.com/CagriCanSaracaydin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                backgroundColor: 'var(--background)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                color: 'var(--foreground)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.backgroundColor = 'var(--secondary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.backgroundColor = 'var(--background)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <FaGithub size={20} />
            </a>

            <a
              href="mailto:cagrisaracaydin@gmail.com"
              aria-label="Email"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                backgroundColor: 'var(--background)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                color: 'var(--foreground)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.backgroundColor = 'var(--secondary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.backgroundColor = 'var(--background)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p style={{ 
            color: 'var(--muted-foreground)', 
            margin: '0',
            fontSize: '0.875rem'
          }}>
            &copy; {new Date().getFullYear()} Cagri Can Saracaydin. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
