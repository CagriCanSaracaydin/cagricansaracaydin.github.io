import React, { useState } from 'react';
import { Container, Card, Badge } from 'react-bootstrap';
import { MapPin, Calendar } from 'lucide-react';

// Array of experience data
const experiences = [
  {
    year: '2025',
    company: 'Philip Morris International',
    title: 'Commercial IT Analyst Intern',
    location: 'Istanbul, Turkey',
    period: 'July 2025 - Present',
    description: [
      'Migrated Power BI reports from AWS to Snowflake database with optimized queries and modernized UI design, improving report performance and user experience',
      'Automated key IT workflows using Jira and AWS, including test reporting and security monitoring, to improve team productivity and support compliance efforts'
    ],
    logo: '/images/media/pmi-logo.png',
    skills: ['Power BI', 'AWS', 'Snowflake', 'Jira', 'SQL', 'UI Design'],
  },
  {
    year: '2025',
    company: 'McKinsey & Company',
    title: 'Experience McKinsey Program Participant',
    location: 'Istanbul, Turkey',
    period: 'June 2025',
    description: [
      'Applied McKinsey problem-solving frameworks to real business cases, developed investment strategies in team settings, and networked with consultants from diverse backgrounds'
    ],
    logo: '/images/media/mckinsey-logo.png',
    skills: ['Problem-Solving', 'Investment Strategy', 'Consulting', 'Teamwork', 'Networking'],
  },
  {
    year: '2024',
    company: 'QNB IBTech',
    title: 'Software Developer',
    location: 'Kocaeli, Turkey',
    period: 'October 2024 - March 2025',
    description: [
      'Refactored C# and Java code and optimized Oracle SQL queries for the Leasing Branch application, resulting in a 10% faster transaction data retrieval rate',
      'Leveraged Jira and Azure DevOps to manage daily feature tasks and optimizations assigned by the Product Manager, ensuring on-time delivery and streamlined development workflows'
    ],
    logo: '/images/media/ibtech-logo.png',
    skills: ['C#', 'Java', 'Oracle SQL', 'Jira', 'Azure DevOps', 'Agile'],
  },
  {
    year: '2024',
    company: 'Bosch Turkey',
    title: 'R&D Software Engineer Intern',
    location: 'Bursa, Turkey',
    period: 'July 2024 - September 2024',
    description: [
      'Developed and integrated a Python-based data analysis application, boosting process performance by 90% and enabling analysis of 50 times more data',
      'Shortened the nozzle R&D cycle by 20% through effective collaboration with cross-functional teams'
    ],
    logo: '/images/media/bosch-logo.png',
    skills: ['Python', 'Data Analysis', 'R&D', 'Cross-functional Collaboration', 'Process Optimization'],
  },
];

// Experience component
const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="py-5" style={{ backgroundColor: 'var(--background)', padding: '4rem 1rem' }}>
      <Container style={{ maxWidth: '1400px' }}>
        <h2 className="mb-2" style={{ 
          color: 'var(--foreground)', 
          fontSize: 'clamp(2rem, 5vw, 3rem)', 
          fontWeight: 'bold',
          textAlign: 'left'
        }}>
          Experience
        </h2>
        <p style={{ 
          fontSize: '1.125rem', 
          color: 'var(--muted-foreground)', 
          marginBottom: '4rem', 
          maxWidth: '42rem' 
        }}>
          A timeline of my professional journey and key contributions across various organizations.
        </p>

        <div style={{ position: 'relative' }}>
          {/* Timeline vertical line */}
          <div 
            className="timeline-line d-none d-sm-block"
            style={{
              position: 'absolute',
              left: '0',
              top: '0',
              bottom: '0',
              width: '1px',
              backgroundColor: 'var(--border)',
            }}
          />

          <div>
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="experience-item"
                onClick={() => setActiveIndex(index)}
                style={{ 
                  position: 'relative',
                  marginBottom: index === experiences.length - 1 ? '0' : '3rem',
                  cursor: 'pointer'
                }}
              >
                {/* Year badge */}
                <div 
                  className="year-badge d-none d-sm-flex"
                  style={{
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    backgroundColor: activeIndex === index ? 'var(--primary)' : 'var(--muted)',
                    color: activeIndex === index ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
                    transition: 'all 0.3s ease',
                    transform: activeIndex === index ? 'translateX(-50%) scale(1.1)' : 'translateX(-50%)',
                    boxShadow: activeIndex === index ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none'
                  }}
                >
                  {exp.year}
                </div>

                {/* Experience card */}
                <div style={{ paddingLeft: '0' }}>
                  <Card
                    style={{
                      backgroundColor: activeIndex === index ? 'var(--card)' : 'rgba(var(--card-rgb), 0.5)',
                      borderColor: activeIndex === index ? 'rgba(var(--primary-rgb), 0.5)' : 'var(--border)',
                      borderRadius: 'var(--radius)',
                      transition: 'all 0.3s ease',
                      boxShadow: activeIndex === index ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                    }}
                    className="experience-card"
                  >
                    <Card.Body className="p-4 p-md-5">
                      {/* Mobile year badge */}
                      <div className="d-sm-none mb-3">
                        <Badge
                          bg=""
                          style={{
                            backgroundColor: activeIndex === index ? 'var(--primary)' : 'var(--secondary)',
                            color: activeIndex === index ? 'var(--primary-foreground)' : 'var(--secondary-foreground)',
                            fontSize: '0.875rem',
                            fontWeight: '600'
                          }}
                        >
                          {exp.year}
                        </Badge>
                      </div>

                      {/* Company header */}
                      <div className="d-flex align-items-start gap-3 mb-4 mb-md-5">
                        <div 
                          style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(var(--secondary-rgb), 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            flexShrink: 0
                          }}
                        >
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                              padding: '12px'
                            }}
                          />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h3 className="mb-1" style={{ 
                            fontSize: '1.25rem', 
                            fontWeight: 'bold', 
                            color: 'var(--foreground)' 
                          }}>
                            {exp.company}
                          </h3>
                          <p className="mb-2" style={{ 
                            fontSize: '1rem', 
                            fontWeight: '500', 
                            color: 'var(--primary)' 
                          }}>
                            {exp.title}
                          </p>
                          <div className="d-flex flex-wrap gap-3" style={{ 
                            fontSize: '0.875rem', 
                            color: 'var(--muted-foreground)' 
                          }}>
                            <span className="d-flex align-items-center gap-1">
                              <MapPin size={16} />
                              {exp.location}
                            </span>
                            <span className="d-flex align-items-center gap-1">
                              <Calendar size={16} />
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="mb-4 mb-md-5" style={{ 
                        color: 'rgba(var(--foreground-rgb), 0.9)', 
                        lineHeight: '1.6',
                        paddingLeft: '0',
                        listStyle: 'none'
                      }}>
                        {exp.description.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="d-flex gap-3 mb-3" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
                            <span style={{ color: 'var(--accent)', marginTop: '0.375rem', flexShrink: 0 }}>•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills */}
                      <div className="d-flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            bg=""
                            style={{
                              backgroundColor: 'var(--secondary)',
                              color: 'var(--secondary-foreground)',
                              fontSize: '0.75rem',
                              fontWeight: '500'
                            }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <style jsx>{`
        .experience-card:hover {
          background-color: var(--card) !important;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
        }

        .year-badge:hover {
          background-color: var(--secondary) !important;
          transform: translateX(-50%) scale(1.05) !important;
        }

        @media (min-width: 576px) {
          .timeline-line {
            left: 0 !important;
          }
          
          .experience-item > div:last-child {
            padding-left: 3rem !important;
          }
        }

        @media (min-width: 768px) {
          .timeline-line {
            left: 50% !important;
            transform: translateX(-50%);
          }
          
          .experience-item:nth-child(even) > div:last-child {
            margin-left: auto;
            padding-left: 3rem !important;
            padding-right: 0;
          }
          
          .experience-item:nth-child(odd) > div:last-child {
            margin-right: auto;
            padding-right: 3rem !important;
            padding-left: 0;
          }
          
          .experience-item > div:last-child {
            width: calc(50% - 1.5rem);
          }
          
          .year-badge {
            left: 50% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
