import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

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
  const [activeExperience, setActiveExperience] = useState(experiences[0]);

  return (
    <section id="experience" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Experience</h2>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`timeline-item ${exp === activeExperience ? 'active' : ''}`}
                  onClick={() => setActiveExperience(exp)}
                >
                  <div className="timeline-badge">{exp.year}</div>
                  <Card className="timeline-card">
                    <Card.Body>
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} Logo`}
                          className="company-logo me-4"  // Changed from me-3 to me-4 for more space
                        />
                        <div>
                          <h4 className="mb-0">{exp.company}</h4>
                          <p className="text-muted mb-0">{exp.title}</p>
                          <p className="text-muted mb-0"><small>{exp.period}</small></p>
                        </div>
                      </div>
                      <ul className="mb-3">
                        {exp.description.map((bullet, bulletIndex) => (
                          <li key={bulletIndex}>{bullet}</li>
                        ))}
                      </ul>
                      <div>
                        {exp.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="badge bg-light text-dark me-2 mb-2">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .timeline {
          position: relative;
          padding: 20px 0;
        }
        .timeline::before {
          content: '';
          position: absolute;
          top: 20px;
          bottom: 20px;
          left: 50%;
          width: 2px;
          background-color: #000000;
          transform: translateX(-50%);
        }
        .timeline-item {
          position: relative;
          margin-bottom: 50px;
          cursor: pointer;
        }
        .timeline-badge {
          position: absolute;
          top: 0;
          left: 50%;
          width: 40px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          background-color: #adb5bd;
          color: #fff;
          border-radius: 50%;
          transform: translateX(-50%);
          z-index: 2;
          transition: all 0.3s ease;
        }
        .timeline-card {
          width: calc(50% - 30px);
          margin-left: auto;
          transition: all 0.3s ease;
        }
        .timeline-item:nth-child(even) .timeline-card {
          margin-left: 0;
          margin-right: auto;
        }
        .timeline-item.active .timeline-badge {
          background-color: #007bff;
        }
        .timeline-item.active .timeline-card {
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        }
        .company-logo {
          width: 120px;  
          height: 120px;
          object-fit: contain;
        }
        @media (max-width: 767px) {
          .timeline::before {
            left: 40px;
          }
          .timeline-badge {
            left: 40px;
          }
          .timeline-card {
            width: calc(100% - 80px);
            margin-left: 80px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
