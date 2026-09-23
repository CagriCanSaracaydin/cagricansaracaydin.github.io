import { CalendarDays, MapPin } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import './Education.css';

// Education data array containing information about each educational institution
const educationData = [
  {
    institution: 'Sabanci University',
    degree: 'Bachelor of Science in Computer Science and Engineering',
    location: 'Istanbul, Turkey',
    duration: '2021 - 2025',
    type: 'University',
    description:
      'The program covers a broad range of computer science topics including algorithms, data structures, software engineering, and machine learning. It provides a solid foundation for pursuing a career in software development and data science.',
    logo: '/images/optimized/Sabancı_University.png'
  },
  {
    institution: 'Bornova Anatolian High School',
    degree: 'High School Diploma',
    location: 'Izmir, Turkey',
    duration: '2016 - 2020',
    type: 'High School',
    description:
      'Focused on a science-intensive curriculum that prepared me for a career in engineering. Achieved high academic standards and participated in various extracurricular activities.',
    logo: '/images/optimized/BAL_Logo.png'
  },
];

function Education() {
  return (
    <section id="education" className="education">
      <div className="education__inner">
        <div className="education__intro">
          <h2>Education</h2>
          <p>Academic foundations in computer science, engineering, and problem solving.</p>
        </div>

        <div className="education__grid">
          {educationData.map((edu) => (
            <article className="education__card" key={edu.institution}>
              <div className="education__top">
                <div className="education__logo">
                  <OptimizedImage src={edu.logo} alt={`${edu.institution} logo`} />
                </div>
                <span className="education__period">
                  <CalendarDays size={15} aria-hidden="true" /> {edu.duration}
                </span>
              </div>

              <div className="education__content">
                <p className="education__type">{edu.type}</p>
                <h3>{edu.institution}</h3>
                <p className="education__degree">{edu.degree}</p>
                <p className="education__location">
                  <MapPin size={16} aria-hidden="true" /> {edu.location}
                </p>
                <p className="education__description">{edu.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
