import React from 'react';
import { Card, Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { Award, ExternalLink } from 'lucide-react';

import batLink from '../files/BAT-Turkiye-Liderlik-Okulu_BAT-Turkiye-Liderlik-Okulu_Cagri-Can-Saracaydin.pdf';
import harvardLink from '../files/CagriCanSaracaydin-CS50Certificate.pdf';
import sabanciLink from '../files/CagriCanSaracaydin-CertificateOfAchievement.pdf';

// Array of certificate data
const certificates = [
  {
    organization: 'McKinsey & Company',
    title: 'McKinsey Forward Program',
    description: '10-week program developing essential workplace skills for the future of work.',
    image: '/images/media/mckinsey-logo.png',
    skills: ['Adaptability', 'Problem Solving', 'Communication'],
    link: batLink,
  },
  {
    organization: 'Harvard University',
    title: 'Harvard CS50',
    description: 'Introduction to fundamental concepts of computer science from Harvard University.',
    image: '/images/media/Harvard_University.png',
    skills: ['Python', 'C', 'HTML/CSS', 'SQL', 'Flask'],
    link: harvardLink,
  },
  {
    organization: 'Sabanci University',
    title: 'Certificate of Achievement',
    description: 'Intensive language preparation program at Sabanci University School of Languages.',
    image: '/images/media/Sabancı_University.png',
    skills: ['English Proficiency', 'Academic Writing', 'Critical Thinking'],
    link: sabanciLink,
  },
];

// Certificates component
function Certificates() {
  return (
    <section 
      id="certificates" 
      style={{ 
        backgroundColor: 'rgba(var(--muted), 0.3)',
        padding: '4rem 1rem'
      }}
    >
      <Container style={{ maxWidth: '1400px' }}>
        <div className="mb-5">
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            fontWeight: 'bold', 
            color: 'var(--foreground)',
            marginBottom: '1rem'
          }}>
            Certificates
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: 'var(--muted-foreground)', 
            maxWidth: '42rem'
          }}>
            Professional certifications and courses that enhance my technical expertise and professional skills.
          </p>
        </div>

        <Row className="g-4 g-md-5">
          {certificates.map((cert, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card 
                className="certificate-card h-100"
                style={{ 
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border)',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden'
                }}
              >
                <Card.Body className="p-4 d-flex flex-column">
                  {/* Logo Section */}
                  <div className="mb-4 d-flex justify-content-center">
                    <div className="logo-wrapper">
                      <img
                        src={cert.image}
                        alt={`${cert.organization} logo`}
                        className={`certificate-logo ${
                          cert.organization === 'Harvard University' ? 'harvard-logo' : 
                          cert.organization === 'McKinsey & Company' ? 'mckinsey-logo' :
                          cert.organization === 'Sabanci University' ? 'sabanci-logo' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-grow-1 d-flex flex-column">
                    <div className="mb-3">
                      <h3 className="cert-title" style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: 'bold', 
                        color: 'var(--foreground)',
                        marginBottom: '0.5rem',
                        transition: 'color 0.3s ease'
                      }}>
                        {cert.title}
                      </h3>
                      <p style={{ 
                        fontSize: '0.875rem', 
                        color: 'var(--muted-foreground)',
                        lineHeight: '1.6',
                        marginBottom: '1rem'
                      }}>
                        {cert.description}
                      </p>
                    </div>

                    {/* Skills/Topics */}
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          bg=""
                          className="skill-badge"
                          style={{ 
                            backgroundColor: 'var(--secondary) !important',
                            color: 'var(--secondary-foreground) !important',
                            fontSize: '0.75rem',
                            padding: '0.25rem 0.75rem',
                            fontWeight: '500',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Button */}
                    <Button
                      variant="outline"
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto view-cert-btn d-flex align-items-center justify-content-center gap-2"
                      style={{ 
                        width: '100%',
                        backgroundColor: 'transparent',
                        color: 'var(--foreground)',
                        border: '2px solid var(--border)',
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius)',
                        transition: 'all 0.3s ease',
                        fontWeight: '500'
                      }}
                    >
                      <Award size={16} />
                      View Certificate
                      <ExternalLink size={16} className="external-icon" style={{ opacity: 0, transition: 'opacity 0.3s ease' }} />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
      <style jsx>{`
        .logo-wrapper {
          width: 128px;
          height: 128px;
          border-radius: 8px;
          background-color: rgba(var(--secondary), 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 1px solid rgba(var(--border), 0.5);
          transition: transform 0.3s ease;
        }
        .certificate-card:hover .logo-wrapper {
          transform: scale(1.05);
        }
        .certificate-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 1rem;
        }
        .harvard-logo {
          padding: 0.5rem;
          transform: scale(1.3);
        }
        .mckinsey-logo {
          padding: 0.5rem;
          transform: scale(1.2);
        }
        .sabanci-logo {
          padding: 0.5rem;
          transform: scale(1.2);
        }
        .certificate-card {
          transition: all 0.3s ease;
        }
        .certificate-card:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
          border-color: rgba(var(--primary), 0.5) !important;
        }
        .certificate-card:hover .cert-title {
          color: var(--primary) !important;
        }
        .skill-badge:hover {
          background-color: rgba(var(--accent), 0.2) !important;
          color: var(--accent) !important;
        }
        .view-cert-btn:hover {
          background-color: var(--primary) !important;
          color: var(--primary-foreground) !important;
          border-color: var(--primary) !important;
        }
        .view-cert-btn:hover .external-icon {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}

export default Certificates;
