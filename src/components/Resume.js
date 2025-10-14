import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaFilePdf } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import resumeLink from '../files/Cagri_Can_Saracaydin_CV_EN.pdf';

// Resume and Contact component - combined section with two cards
function Resume() {
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
            Get In Touch
          </h2>
          <p style={{ 
            color: 'var(--muted-foreground)',
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            maxWidth: '42rem',
            lineHeight: '1.75'
          }}>
            Download my resume or reach out to me directly via email.
          </p>
        </div>

        <Row className="g-4 g-md-5">
          {/* Resume Card */}
          <Col lg={6}>
            <Card 
              className="h-100 shadow-sm"
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
                    <FaFilePdf size={32} style={{ color: 'var(--primary)' }} />
                  </div>
                  
                  <h3 className="mb-3" style={{ 
                    color: 'var(--foreground)',
                    fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                    fontWeight: '600'
                  }}>
                    Resume
                  </h3>
                  
                  <p className="mb-4" style={{ 
                    color: 'var(--muted-foreground)',
                    fontSize: '0.875rem',
                    lineHeight: '1.6'
                  }}>
                    View my full resume to learn more about my qualifications and experience.
                  </p>
                  
                  <a
                    href={resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ 
                      backgroundColor: 'transparent',
                      color: 'var(--foreground)',
                      border: '2px solid var(--border)',
                      padding: '0.75rem 1.5rem',
                      fontSize: '1rem',
                      fontWeight: '500',
                      borderRadius: 'var(--radius)',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary)';
                      e.currentTarget.style.color = 'var(--primary-foreground)';
                      e.currentTarget.style.borderColor = 'var(--primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--foreground)';
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                  >
                    <FaFilePdf size={18} />
                    View Resume
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Card */}
          <Col lg={6}>
            <Card 
              className="h-100 shadow-sm"
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
                    Contact
                  </h3>
                  
                  <p className="mb-4" style={{ 
                    color: 'var(--muted-foreground)',
                    fontSize: '0.875rem',
                    lineHeight: '1.6'
                  }}>
                    If you have any questions or would like to get in touch, feel free to contact me.
                  </p>
                  
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
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Resume;
