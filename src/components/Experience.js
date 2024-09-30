import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import boschImage from '../images/bosch-logo.png';
import IBTechImage from '../images/ibtech-logo.png';

const experiences = [
  {
    year: '2025',
    company: 'IBTech',
    title: 'Software Engineer Intern',
    location: 'Istanbul, Turkey',
    description:
      'Worked on developing and maintaining banking software solutions, gaining hands-on experience in fintech and large-scale software systems.',
    logo: IBTechImage,
    skills: ['Java', 'Spring Boot', 'Microservices', 'SQL', 'Agile'],
  },
  {
    year: '2024',
    company: 'Bosch',
    title: 'R&D Software Engineer Intern',
    location: 'Bursa, Turkey',
    description:
      "Joined as a Summer School Student at Bosch, where I undertook a significant project as part of an intensive program designed for third-year and master's students in Engineering and Business disciplines.",
    logo: boschImage,
    skills: ['Engineering', 'Business', 'Project Management', 'Python', 'Data Analysis'],
  },
];

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
                        </div>
                      </div>
                      <p className="mb-3">{exp.description}</p>
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