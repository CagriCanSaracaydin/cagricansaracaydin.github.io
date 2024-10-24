import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import heroImage from '../images/hero.jpeg';

// Hero component to display a prominent section at the top of the page
const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="hero-content">
              <h1 className="hero-title">Welcome to My Portfolio</h1>
              <p className="hero-subtitle">
                I am Cagri Can Saracaydin, a passionate software developer and data scientist.
              </p>
              <Button variant="primary" size="lg" href="#about">
                Learn More
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <div className="hero-image">
              <img src={heroImage} alt="Cagri Can Saracaydin" className="img-fluid rounded-circle" />
            </div>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .hero-section {
          padding: 100px 0;
          background-color: #f8f9fa;
          text-align: left;
        }
        .hero-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #0056b3;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: #6c757d;
          margin-bottom: 20px;
        }
        .hero-image {
          text-align: center;
        }
        @media (max-width: 768px) {
          .hero-section {
            text-align: center;
          }
          .hero-title {
            font-size: 2rem;
          }
          .hero-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
