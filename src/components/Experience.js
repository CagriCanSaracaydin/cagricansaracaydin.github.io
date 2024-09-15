import React from 'react';
import boschLogo from '../images/bosch-logo.png';

function Experience() {
  return (
    <section id="experience" className="container py-5">
      <h2 className="section-heading text-center mb-5">Experience</h2>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card mb-4 border-0 rounded-lg shadow-lg hover-lift">
            <div className="card-body p-0">
              <div className="row g-0">
                <div className="col-md-3 bg-light d-flex align-items-center justify-content-center p-4">
                  <img
                    src={boschLogo}
                    loading="lazy"
                    alt="Bosch Logo"
                    className="img-fluid"
                    style={{ maxWidth: '120px' }}
                  />
                </div>
                <div className="col-md-9 p-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3 className="card-title h4 mb-0">
                      Software Engineer Intern
                    </h3>
                    <span className="badge bg-primary rounded-pill fs-6">
                      2024 - Present
                    </span>
                  </div>
                  <p className="text-muted mb-3">
                    <i className="fas fa-map-marker-alt me-2"></i>Bosch,
                    Bursa/Turkey
                  </p>
                  <p className="card-text">
                    Joined as a Summer School Student at Bosch, where I
                    undertook a significant project as part of an intensive
                    program designed for third-year and master's students in
                    Engineering and Business disciplines. This role provided a
                    robust platform for applying academic knowledge in a
                    real-world business environment.
                  </p>
                  <div className="mt-3">
                    <span
                      className="badge me-2 mb-2"
                      style={{ backgroundColor: '#0d6efd', color: 'white' }}
                    >
                      Engineering
                    </span>
                    <span
                      className="badge me-2 mb-2"
                      style={{ backgroundColor: '#0d6efd', color: 'white' }}
                    >
                      Business
                    </span>
                    <span
                      className="badge me-2 mb-2"
                      style={{ backgroundColor: '#0d6efd', color: 'white' }}
                    >
                      Project Management
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add more experiences here if needed */}
        </div>
      </div>
    </section>
  );
}

export default Experience;
