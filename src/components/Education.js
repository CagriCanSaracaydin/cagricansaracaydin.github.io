import React from 'react';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import { MapPin, Calendar, GraduationCap, School } from 'lucide-react';

// Education data array containing information about each educational institution
const educationData = [
  {
    institution: 'Sabanci University',
    degree: 'Bachelor of Science in Computer Science and Engineering',
    location: 'Istanbul, Turkey',
    duration: '2021 - 2025',
    type: 'University',
    description:
      'The program covers a broad range of computer science topics including algorithms, data structures, software engineering, and machine learning. It provides a solid foundation for pursuing a career in software development and data science.',
    logo: '/images/media/Sabancı_University.png',
    logoClass: 'sabanci-logo'
  },
  {
    institution: 'Bornova Anatolian High School',
    degree: 'High School Diploma',
    location: 'Izmir, Turkey',
    duration: '2016 - 2020',
    type: 'High School',
    description:
      'Focused on a science-intensive curriculum that prepared me for a career in engineering. Achieved high academic standards and participated in various extracurricular activities.',
    logo: '/images/media/BAL_Logo.png',
    logoClass: 'bornova-logo'
  },
];

// Education component to display educational background
function Education() {
  return (
    <section id="education" className="py-5" style={{ backgroundColor: 'var(--background)', padding: '4rem 1rem' }}>
      <Container style={{ maxWidth: '1400px' }}>
        <h2 className="mb-2" style={{ 
          color: 'var(--foreground)', 
          fontSize: 'clamp(2rem, 5vw, 3rem)', 
          fontWeight: 'bold',
          textAlign: 'left'
        }}>
          Education
        </h2>
        <p style={{ 
          fontSize: '1.125rem', 
          color: 'var(--muted-foreground)', 
          marginBottom: '4rem', 
          maxWidth: '42rem' 
        }}>
          My academic journey and educational background that shaped my technical foundation.
        </p>

        <div className="d-flex flex-column gap-4">
          {educationData.map((edu, index) => (
            <Card 
              key={index}
              className="education-card" 
              style={{ 
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                borderRadius: 'calc(var(--radius) + 4px)',
                border: '1px solid var(--border)',
                transition: 'all 0.3s ease',
                overflow: 'hidden'
              }}
            >
              <Card.Body className="p-4 p-md-5">
                <div className="d-flex flex-column flex-sm-row gap-4">
                  {/* Logo Section */}
                  <div className="flex-shrink-0" style={{ alignSelf: 'flex-start' }}>
                    <div className="logo-wrapper" style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        className={`img-fluid ${edu.logoClass}`}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          width: 'auto',
                          height: 'auto',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-grow-1" style={{ minWidth: 0, alignSelf: 'flex-start' }}>
                    <div className="mb-4">
                      <div className="d-flex flex-wrap align-items-center gap-3 mb-2">
                        <h3 style={{ 
                          fontSize: '1.5rem', 
                          fontWeight: 'bold', 
                          color: 'var(--foreground)',
                          margin: 0
                        }}>
                          {edu.institution}
                        </h3>
                        <Badge 
                          bg=""
                          className="d-inline-flex align-items-center gap-1"
                          style={{ 
                            backgroundColor: 'var(--secondary) !important',
                            color: 'var(--secondary-foreground) !important',
                            fontSize: '0.75rem',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '12px',
                            fontWeight: '500'
                          }}
                        >
                          <GraduationCap size={12} />
                          {edu.type}
                        </Badge>
                      </div>
                      
                      <p style={{ 
                        fontSize: '1.125rem', 
                        fontWeight: '600', 
                        color: 'var(--primary)',
                        marginBottom: '0.75rem'
                      }}>
                        {edu.degree}
                      </p>

                      <div className="d-flex flex-wrap gap-3" style={{ fontSize: '0.875rem' }}>
                        <span className="d-flex align-items-center gap-2" style={{ color: 'var(--muted-foreground)' }}>
                          <MapPin size={16} className="flex-shrink-0" />
                          <span>{edu.location}</span>
                        </span>
                        <span className="d-flex align-items-center gap-2" style={{ color: 'var(--muted-foreground)' }}>
                          <Calendar size={16} className="flex-shrink-0" />
                          <span>{edu.duration}</span>
                        </span>
                      </div>
                    </div>

                    <p style={{ 
                      fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                      color: 'var(--muted-foreground)', 
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      {edu.description}
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
      <style jsx>{`
        .logo-wrapper {
          width: 128px;
          height: 128px;
          min-width: 128px;
          min-height: 128px;
          max-width: 128px;
          max-height: 128px;
          background-color: rgba(var(--secondary), 0.5);
          border-radius: 12px;
          padding: 1rem;
          transition: transform 0.3s ease;
          box-sizing: border-box;
        }
        .education-card:hover .logo-wrapper {
          transform: scale(1.05);
        }
        .sabanci-logo,
        .bornova-logo {
          display: block;
        }
        .education-card:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
          border-color: rgba(var(--primary), 0.5) !important;
        }
        @media (min-width: 576px) {
          .logo-wrapper {
            width: 144px;
            height: 144px;
            min-width: 144px;
            min-height: 144px;
            max-width: 144px;
            max-height: 144px;
          }
        }
        @media (max-width: 575px) {
          .logo-wrapper {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}

export default Education;
