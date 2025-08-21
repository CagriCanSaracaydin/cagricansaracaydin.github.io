import React from 'react';

import batLink from '../files/BAT-Turkiye-Liderlik-Okulu_BAT-Turkiye-Liderlik-Okulu_Cagri-Can-Saracaydin.pdf';
import harvardLink from '../files/CagriCanSaracaydin-CS50Certificate.pdf';
import sabanciLink from '../files/CagriCanSaracaydin-CertificateOfAchievement.pdf';

// Array of certificate data
const certificates = [
  {
    title: 'BAT Turkey Leadership',
    image: '/images/media/bat-logo.png',
    description: 'Comprehensive leadership training program for high-caliber professional environments.',
    badges: ['Leadership', 'Decision-Making', 'Team Dynamics'],
    link: batLink,
  },
  {
    title: 'Harvard CS50',
    image: '/images/media/harvard.png',
    description: "Introduction to fundamental concepts of computer science from Harvard University.",
    badges: ['Python', 'C', 'HTML/CSS', 'SQL', 'Flask'],
    link: harvardLink,
  },
  {
    title: 'Certificate of Achievement',
    image: '/images/media/Sabanci_University_logo.png',
    description: 'Intensive language preparation program at Sabanci University School of Languages.',
    badges: ['English Proficiency', 'Academic Writing', 'Critical Thinking'],
    link: sabanciLink,
  },
];

// Certificates component
function Certificates() {
  return (
    <section id="certificates" className="container py-5">
      <h2 className="text-center mb-5">Certificates</h2>
      <div className="row g-4">
        {certificates.map((cert, index) => (
          <div className="col-md-4" key={index}>
            <div className="certificate-card">
              <div className="logo-container">
                <img src={cert.image} alt={cert.title} className="certificate-logo" />
              </div>
              <h5 className="mt-3 mb-2">{cert.title}</h5>
              <p className="text-muted small mb-3">{cert.description}</p>
              <div className="mb-3">
                {cert.badges.map((badge, idx) => (
                  <span key={idx} className="badge bg-light text-dark me-1 mb-1">{badge}</span>
                ))}
              </div>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .certificate-card {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 1.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .certificate-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .logo-container {
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .certificate-logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .badge {
          font-size: 0.7rem;
          font-weight: normal;
        }
      `}</style>
    </section>
  );
}

export default Certificates;
