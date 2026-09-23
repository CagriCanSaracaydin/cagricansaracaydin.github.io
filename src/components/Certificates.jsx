import { ArrowUpRight, Award } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import './Certificates.css';

import McKinseyLink from '../files/Forward.pdf';
import harvardLink from '../files/CagriCanSaracaydin-CS50Certificate.pdf';
import sabanciLink from '../files/CagriCanSaracaydin-CertificateOfAchievement.pdf';

// Array of certificate data
const certificates = [
  {
    organization: 'Amazon Web Services',
    title: 'AWS Certified AI Practitioner',
    description: 'Foundational knowledge of AI, machine learning, and generative AI concepts and responsible use on AWS.',
    image: '/images/optimized/aws-ai-practitioner-badge.png',
    imageAlt: 'AWS Certified AI Practitioner badge',
    skills: ['AI & ML', 'Generative AI', 'Responsible AI'],
    link: 'https://www.credly.com/badges/421388ca-e006-4782-9867-7c747838d777/public_url',
  },
  {
    organization: 'Amazon Web Services',
    title: 'AWS Certified Cloud Practitioner',
    description: 'Foundational understanding of AWS Cloud concepts, services, and common use cases.',
    image: '/images/optimized/aws-cloud-practitioner-badge.png',
    imageAlt: 'AWS Certified Cloud Practitioner badge',
    skills: ['Cloud Concepts', 'AWS Services', 'Security'],
    link: 'https://www.credly.com/badges/92e20b3d-6823-478b-beab-c580ccc78dbf/public_url',
  },
  {
    organization: 'McKinsey & Company',
    title: 'McKinsey Forward Program',
    description: '10-week program developing essential workplace skills for the future of work.',
    image: '/images/optimized/mckinsey-logo.png',
    skills: ['Adaptability', 'Problem Solving', 'Communication'],
    link: McKinseyLink,
  },
  {
    organization: 'Harvard University',
    title: 'Harvard CS50',
    description: 'Introduction to fundamental concepts of computer science from Harvard University.',
    image: '/images/optimized/Harvard_University.png',
    skills: ['Python', 'C', 'HTML/CSS', 'SQL', 'Flask'],
    link: harvardLink,
  },
  {
    organization: 'Sabanci University',
    title: 'Certificate of Achievement',
    description: 'Intensive language preparation program at Sabanci University School of Languages.',
    image: '/images/optimized/Sabancı_University.png',
    skills: ['English Proficiency', 'Academic Writing', 'Critical Thinking'],
    link: sabanciLink,
  },
];

function Certificates() {
  return (
    <section id="certificates" className="certificates">
      <div className="certificates__inner">
        <div className="certificates__intro">
          <h2>Certificates</h2>
          <p>Courses and programs that broaden my technical and professional practice.</p>
        </div>

        <div className="certificates__grid">
          {certificates.map((cert) => (
            <article className="certificates__card" key={cert.title}>
              <div className="certificates__logo">
                <OptimizedImage src={cert.image} alt={cert.imageAlt ?? `${cert.organization} logo`} />
              </div>

              <div className="certificates__content">
                <p className="certificates__organization">{cert.organization}</p>
                <h3>{cert.title}</h3>
                <p className="certificates__description">{cert.description}</p>

                <div className="certificates__bottom">
                  <div className="certificates__topics" aria-label="Topics covered">
                    {cert.skills.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                  <a
                    className="certificates__link"
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${cert.title} certificate`}
                  >
                    <Award size={17} aria-hidden="true" />
                    View certificate
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
