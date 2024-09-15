import React from 'react';
import batLogo from '../images/bat-logo.png';
import harvardLogo from '../images/harvard.png';
import sabanciLogo from '../images/Sabanci_University_logo.png';

const certificates = [
  {
    title: 'BAT Turkey Leadership',
    image: batLogo,
    description:
      'This comprehensive leadership training program offered by BAT Turkey Leadership School is dedicated to developing essential leadership skills tailored for high-caliber professional environments.',
    badges: ['Leadership', 'Decision-Making', 'Team Dynamics'],
    link: './files/BAT-Turkiye-Liderlik-Okulu_BAT-Turkiye-Liderlik-Okulu_Cagri-Can-Saracaydin.pdf',
  },
  {
    title: 'Harvard CS50',
    image: harvardLogo,
    description:
      "This prestigious certificate signifies the successful completion of Harvard University's CS50, an entry-level course that introduces the fundamental concepts of computer science.",
    badges: ['Python', 'C', 'HTML/CSS', 'SQL', 'Flask'],
    link: './files/CagriCanSaracaydin-CS50Certificate.pdf',
  },
  {
    title: 'Certificate of Achievement',
    image: sabanciLogo,
    description:
      'This Certificate of Achievement was awarded upon successful completion of the intensive language preparation program at Sabanci University School of Languages.',
    badges: ['English Proficiency', 'Academic Writing', 'Critical Thinking', 'Communication'],
    link: './files/CagriCanSaracaydin-CertificateOfAchievement.pdf',
  },
];

function Certificates() {
  return (
    <section id="certificates" className="container mt-5">
      <h2 className="section-heading text-center mb-5">Certificates</h2>
      <div className="row g-4">
        {certificates.map((cert, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 shadow-lg border-0 rounded-lg overflow-hidden">
              <div className="position-relative">
                <img
                  src={cert.image}
                  loading="lazy"
                  className="card-img-top"
                  alt={cert.title}
                />
                <div className="overlay-gradient"></div>
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold mb-3">{cert.title}</h5>
                <p className="card-text flex-grow-1">{cert.description}</p>
                <div className="mt-3">
                  {cert.badges.map((badge, idx) => (
                    <span className="badge bg-primary me-1" key={idx}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card-footer bg-transparent border-0 text-center">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
