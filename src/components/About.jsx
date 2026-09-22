import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import OptimizedImage from './OptimizedImage';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = " Engineering, AI & Data Business Analyst @ Deloitte";

  useEffect(() => {
    setIsVisible(true);
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 50);

    return () => {
      clearInterval(typing);
      setTypedText('');
    };
  }, []);

  return (
    <section id="about" className="py-5 position-relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container">
        <div className={`row align-items-center ${isVisible ? 'fade-in' : ''}`}>
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="position-relative">
              <OptimizedImage
                src="/images/optimized/hero.jpg"
                alt="Cagri Can Saracaydin"
                className="img-fluid rounded-circle shadow-lg border border-5"
                style={{ borderColor: 'var(--card)' }}
                width="350"
                height="350"
                priority
              />
            </div>
          </div>
          <div className="col-lg-7">
            <h1 className="display-4 fw-bold mb-4" style={{ color: 'var(--foreground)' }}>Cagri Can Saracaydin</h1>
            <p className="lead mb-4 typewriter" style={{ color: 'var(--foreground)' }} aria-label={fullText.trim()}>
              <span aria-hidden="true">{typedText}</span>
            </p>
            <p className="mb-4" style={{ color: 'var(--muted-foreground)' }}>
              Computer Science and Engineering graduate from Sabanci University in Istanbul, Turkey. I build software and data solutions
              that turn complex operational problems into reliable, maintainable systems.
            </p>
            <div className="d-flex flex-wrap gap-3 mb-4">
              <a
                href="https://www.linkedin.com/in/cagrisaracaydin/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg"
                style={{ 
                  backgroundColor: 'var(--primary)', 
                  color: 'var(--primary-foreground)',
                  border: 'none'
                }}
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="me-2" /> LinkedIn
              </a>
              <a
                href="https://github.com/CagriCanSaracaydin"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg"
                style={{ 
                  backgroundColor: 'var(--foreground)', 
                  color: 'var(--background)',
                  border: 'none'
                }}
                aria-label="GitHub Profile"
              >
                <FaGithub className="me-2" /> GitHub
              </a>
              <a
                href="#contact"
                className="btn btn-lg"
                style={{ 
                  backgroundColor: 'transparent', 
                  color: 'var(--foreground)',
                  border: '2px solid var(--border)'
                }}
                aria-label="Contact Me"
              >
                <FaEnvelope className="me-2" /> Contact Me
              </a>
            </div>
            <div className="d-flex flex-wrap gap-3">
              <span className="badge p-2" style={{ backgroundColor: 'var(--secondary)', color: 'var(--secondary-foreground)' }}>Python</span>
              <span className="badge p-2" style={{ backgroundColor: 'var(--secondary)', color: 'var(--secondary-foreground)' }}>Java</span>
              <span className="badge p-2" style={{ backgroundColor: 'var(--secondary)', color: 'var(--secondary-foreground)' }}>C++</span>
              <span className="badge p-2" style={{ backgroundColor: 'var(--secondary)', color: 'var(--secondary-foreground)' }}>Data Science</span>
            </div>
          </div>
        </div>
      </div>
      <div className="background-animation"></div>
      <style>{`
        .fade-in {
          animation: fadeIn 1s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .typewriter {
          white-space: nowrap;
          overflow: hidden;
        }
        @media (max-width: 767px) {
          .typewriter {
            white-space: normal;
            overflow: visible;
          }
        }
        .background-animation {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, var(--muted) 25%, transparent 25%, transparent 75%, var(--muted) 75%, var(--muted)),
                      linear-gradient(45deg, var(--muted) 25%, transparent 25%, transparent 75%, var(--muted) 75%, var(--muted));
          background-size: 60px 60px;
          background-position: 0 0, 30px 30px;
          animation: slide 4s infinite linear;
          opacity: 0.3;
          z-index: -1;
        }
        @keyframes slide {
          from { background-position: 0 0, 30px 30px; }
          to { background-position: 60px 60px, 90px 90px; }
        }
        .btn:hover {
          opacity: 0.9;
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default About;
