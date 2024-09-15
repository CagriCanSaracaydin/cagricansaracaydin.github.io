import React from 'react';
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
  },
  {
    institution: 'Bornova Anatolian High School',
    degree: 'High School Diploma',
    location: 'Izmir, Turkey',
    duration: '2016 - 2020',
    description:
      'Focused on a science-intensive curriculum that prepared me for a career in engineering. Achieved high academic standards and participated in various extracurricular activities.',
    logo: bornovaLogo,
  },
];

function Education() {
  return (
    <section id="education" className="container mt-5">
      <h2 className="section-heading text-center mb-5">Education</h2>
      <div className="row">
        <div className="col-md-12">
          {educationData.map((edu, index) => (
            <div
              className="card mb-4 shadow-lg border-0 rounded-lg overflow-hidden"
              key={index}
            >
              <div className="row g-0">
                <div className="col-md-3 bg-light d-flex align-items-center justify-content-center p-4">
                  <img
                    src={edu.logo}
                    loading="lazy"
                    alt={`${edu.institution} Logo`}
                    className="edu-logo img-fluid"
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-body p-4">
                    <h4 className="card-title mb-3">{edu.degree}</h4>
                    <p className="card-text text-muted mb-2">
                      <i className="fas fa-university mr-2"></i> {edu.institution}
                      , {edu.location}
                    </p>
                    <p className="card-text text-muted mb-3">
                      <i className="fas fa-calendar-alt mr-2"></i> {edu.duration}
                    </p>
                    <p className="card-text">{edu.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
