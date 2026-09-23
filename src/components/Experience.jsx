import React, { useState } from 'react';
import { CalendarDays, MapPin } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import './Experience.css';

// Array of experience data
const experiences = [
  {
    year: '2026',
    company: 'Deloitte',
    title: 'Engineering, AI & Data Business Analyst',
    location: 'Istanbul, Turkey',
    period: 'June 2026 - Present',
    description: [],
    skills: [],
  },
  {
    year: '2025',
    company: 'Philip Morris International',
    title: 'Commercial IT Analyst Intern',
    location: 'Istanbul, Turkey',
    period: 'July 2025 - May 2026',
    description: [
      'Migrated Power BI reports from AWS to Snowflake database with optimized queries and modernized UI design, improving report performance and user experience',
      'Automated key IT workflows using Jira and AWS, including test reporting and security monitoring, to improve team productivity and support compliance efforts'
    ],
    logo: '/images/optimized/pmi-logo.png',
    skills: ['Power BI', 'AWS', 'Snowflake', 'Jira', 'SQL', 'UI Design'],
  },
  {
    year: '2025',
    company: 'McKinsey & Company',
    title: 'Experience McKinsey Program Participant',
    location: 'Istanbul, Turkey',
    period: 'June 2025',
    description: [
      'Applied McKinsey problem-solving frameworks to real business cases, developed investment strategies in team settings, and networked with consultants from diverse backgrounds'
    ],
    logo: '/images/optimized/mckinsey-logo.png',
    skills: ['Problem-Solving', 'Investment Strategy', 'Consulting', 'Teamwork', 'Networking'],
  },
  {
    year: '2024',
    company: 'QNB IBTech',
    title: 'Software Developer',
    location: 'Kocaeli, Turkey',
    period: 'October 2024 - March 2025',
    description: [
      'Refactored C# and Java code and optimized Oracle SQL queries for the Leasing Branch application, resulting in a 10% faster transaction data retrieval rate',
      'Leveraged Jira and Azure DevOps to manage daily feature tasks and optimizations assigned by the Product Manager, ensuring on-time delivery and streamlined development workflows'
    ],
    logo: '/images/optimized/ibtech-logo.png',
    skills: ['C#', 'Java', 'Oracle SQL', 'Jira', 'Azure DevOps', 'Agile'],
  },
  {
    year: '2024',
    company: 'Bosch Turkey',
    title: 'R&D Software Engineer Intern',
    location: 'Bursa, Turkey',
    period: 'July 2024 - September 2024',
    description: [
      'Developed and integrated a Python-based data analysis application, boosting process performance by 90% and enabling analysis of 50 times more data',
      'Shortened the nozzle R&D cycle by 20% through effective collaboration with cross-functional teams'
    ],
    logo: '/images/optimized/bosch-logo.png',
    skills: ['Python', 'Data Analysis', 'R&D', 'Cross-functional Collaboration', 'Process Optimization'],
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const selectExperience = (index) => setActiveIndex(index);

  return (
    <section id="experience" className="experience">
      <div className="experience__inner">
        <div className="experience__intro">
          <h2>Experience</h2>
          <p>A timeline of my professional journey and key contributions across various organizations.</p>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className={`experience__entry${activeIndex === index ? ' is-active' : ''}`}
              role="button"
              tabIndex={0}
              aria-pressed={activeIndex === index}
              onClick={() => selectExperience(index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  selectExperience(index);
                }
              }}
            >
              <div className="experience__year" aria-hidden="true">{exp.year}</div>
              <div className="experience__card">
                <div className="experience__heading">
                  <div className="experience__logo">
                    {exp.logo ? (
                      <OptimizedImage
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width="64"
                        height="64"
                      />
                    ) : (
                      <span className="experience__deloitte">Deloitte<span>.</span></span>
                    )}
                  </div>
                  <div className="experience__identity">
                    <h3>{exp.company}</h3>
                    <p className="experience__title">{exp.title}</p>
                  </div>
                </div>

                <div className="experience__facts">
                  <span><CalendarDays size={16} aria-hidden="true" />{exp.period}</span>
                  <span><MapPin size={16} aria-hidden="true" />{exp.location}</span>
                </div>

                {exp.description.length > 0 && (
                  <ul className="experience__description">
                    {exp.description.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                )}

                {exp.skills.length > 0 && (
                  <div className="experience__skills" aria-label="Skills used">
                    {exp.skills.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
