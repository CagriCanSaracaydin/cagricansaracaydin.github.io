import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Mail } from 'lucide-react';

// Contact component
function Contact() {
  return (
    <section 
      id="contact" 
      className="py-5" 
      style={{ 
        backgroundColor: 'var(--background)',
        padding: 'clamp(4rem, 8vw, 6rem) 1rem'
      }}
    >
      <Container style={{ maxWidth: '1400px' }}>
        <div className="mb-5" style={{ marginBottom: 'clamp(3rem, 6vw, 4rem)' }}>
          <h2 className="mb-4" style={{ 
            color: 'var(--foreground)',
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            fontWeight: 'bold'
          }}>
            Contact Me
          </h2>
          <p style={{ 
            color: 'var(--muted-foreground)',
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            maxWidth: '42rem',
            lineHeight: '1.75'
          }}>
            If you have any questions or would like to get in touch, feel free to contact me.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Card 
              className="shadow-sm"
              style={{ 
                border: '1px solid var(--border)',
                backgroundColor: 'var(--card)',
                borderRadius: 'var(--radius)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 30px -15px var(--border)';
                e.currentTarget.style.borderColor = 'oklch(from var(--primary) calc(l * 0.7) c h / 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <Card.Body style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
                <div className="d-flex align-items-center justify-content-center flex-column text-center">
                  <div 
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <Mail size={32} style={{ color: 'var(--primary)' }} />
                  </div>
                  
                  <h3 className="mb-3" style={{ 
                    color: 'var(--foreground)',
                    fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                    fontWeight: '600'
                  }}>
                    Email
                  </h3>
                  
                  <a
                    href="mailto:cagrisaracaydin@gmail.com"
                    className="text-decoration-none"
                    style={{ 
                      color: 'var(--primary)',
                      fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                      fontWeight: '500',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent)';
                      e.currentTarget.style.textDecoration = 'underline';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--primary)';
                      e.currentTarget.style.textDecoration = 'none';
                    }}
                  >
                    cagrisaracaydin@gmail.com
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
