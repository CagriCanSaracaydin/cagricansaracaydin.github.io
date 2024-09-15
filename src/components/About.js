import React from 'react';
import profileImg from '../images/vesikalik.JPG';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="container py-5 mt-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <img
                src={profileImg}
                alt="Cagri"
                className="profile-img img-fluid rounded-circle shadow-lg"
                width="250"
                height="250"
                aria-label="Profile picture of Cagri Can Saracaydin"
              />
            </div>
            <div className="col-md-8">
              <h1 className="display-4 fw-bold mb-4">Cagri Can Saracaydin</h1>
              <p className="lead mb-4">
                Hello, I'm a dedicated Computer Science and Engineering student
                at Sabanci University, based in Istanbul, Turkey. With a passion
                for technology and its potential to solve complex problems, I am
                eager to forge a career that bridges software development and
                data science.
              </p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/cagrisaracaydin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary me-2 shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href="https://github.com/CagriCanSaracaydin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
