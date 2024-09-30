import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import sabanciLogo from '../images/Sabanci_University_logo.png';
import bornovaLogo from '../images/Bornova_Anadolu_Lisesi_Logo.png';

const educationData = [
  {
    institution: 'Sabanci University',
    degree: 'Bachelor of Science in Computer Science and Engineering',
    location: 'Istanbul, Turkey',
    duration: '2021 - 2025',
    description:
      'The program covers a broad range of computer science topics including algorithms, data structures, software engineering, and machine learning. It provides a solid foundation for pursuing a career in software development and data science.',
    logo: sabanciLogo,
    logoClass: 'sabanci-logo'
  },
  {
    institution: 'Bornova Anatolian High School',
    degree: 'High School Diploma',
    location: 'Izmir, Turkey',
    duration: '2016 - 2020',
    description:
      'Focused on a science-intensive curriculum that prepared me for a career in engineering. Achieved high academic standards and participated in various extracurricular activities.',
    logo: bornovaLogo,
    logoClass: 'edu-logo'
  },
];

function Education() {
  return (
    <section id="education" className="py-5">
      <Container>
        <h2 className="section-heading text-center mb-5">Education</h2>
        <Row>
          {educationData.map((edu, index) => (
            <Col md={6} key={index} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="d-flex flex-column">
                  <div className="text-center mb-4">
                    <div className="logo-container mx-auto">
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} Logo`}
                        className={`img-fluid ${edu.logoClass}`}
                      />
                    </div>
                  </div>
                  <Card.Title className="mb-3">{edu.degree}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {edu.institution}, {edu.location}
                  </Card.Subtitle>
                  <Card.Text className="text-muted mb-3 small">{edu.duration}</Card.Text>
                  <Card.Text className="flex-grow-1">{edu.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <style jsx>{`
        .logo-container {
          width: 150px;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .edu-logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .sabanci-logo {
          max-width: 140%;
          max-height: 140%;
          object-fit: contain;
        }
        .card {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.1) !important;
        }
      `}</style>
    </section>
  );
}

export default Education;
