import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = " Commercial IT Analyst Intern @ Philip Morris International";

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
    <section id="about" className="py-5 position-relative overflow-hidden">
      <div className="container">
        <div className={`row align-items-center ${isVisible ? 'fade-in' : ''}`}>
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="position-relative">
              <img
                src="/images/media/hero.jpg"
                alt="Cagri"
                className="img-fluid rounded-circle shadow-lg border border-5 border-white"
                width="350"
                height="350"
                aria-label="Profile picture of Cagri Can Saracaydin"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <h1 className="display-4 fw-bold mb-4 text-primary">Cagri Can Saracaydin</h1>
            <p className="lead mb-4 typewriter">{typedText}</p>
            <p className="mb-4">
              Senior at Sabanci University in Istanbul, Turkey. With a passion for technology and its potential to solve complex problems, 
              I am eager to forge a career that bridges software development and data science.
            </p>
            <div className="d-flex flex-wrap gap-3 mb-4">
              <a
                href="https://www.linkedin.com/in/cagrisaracaydin/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="me-2" /> LinkedIn
              </a>
              <a
                href="https://github.com/CagriCanSaracaydin"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark btn-lg"
                aria-label="GitHub Profile"
              >
                <FaGithub className="me-2" /> GitHub
              </a>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="btn btn-outline-secondary btn-lg"
                aria-label="Contact Me"
              >
                <FaEnvelope className="me-2" /> Contact Me
              </Link>
            </div>
            <div className="d-flex flex-wrap gap-3">
              <span className="badge bg-secondary p-2">Python</span>
              <span className="badge bg-secondary p-2">Java</span>
              <span className="badge bg-secondary p-2">C++</span>
              <span className="badge bg-secondary p-2">Data Science</span>
            </div>
          </div>
        </div>
      </div>
      <div className="background-animation"></div>
      <style jsx>{`
        .fade-in {
          animation: fadeIn 1s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .typewriter {
          border-right: .15em solid #007bff;
          white-space: nowrap;
          overflow: hidden;
        }
        .background-animation {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, #f3f3f3 25%, transparent 25%, transparent 75%, #f3f3f3 75%, #f3f3f3),
                      linear-gradient(45deg, #f3f3f3 25%, transparent 25%, transparent 75%, #f3f3f3 75%, #f3f3f3);
          background-size: 60px 60px;
          background-position: 0 0, 30px 30px;
          animation: slide 4s infinite linear;
          opacity: 0.1;
          z-index: -1;
        }
        @keyframes slide {
          from { background-position: 0 0, 30px 30px; }
          to { background-position: 60px 60px, 90px 90px; }
        }
      `}</style>
    </section>
  );
};

export default About;
