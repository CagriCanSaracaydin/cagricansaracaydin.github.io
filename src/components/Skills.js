import React from 'react';
import { Card, Row, Col, ProgressBar } from 'react-bootstrap';

// Skills component to display the skills section
const Skills = () => {
  // Skill categories and their respective skills
  const skillCategories = [
    {
      name: 'Programming Languages',
      description: 'I employ the following programming languages across a range of projects, leveraging each to build robust, efficient, and scalable solutions:',
      skills: [
        { name: 'PYTHON', level: 75, color: 'var(--primary)' },
        { name: 'JAVA', level: 70, color: 'var(--primary)' },
        { name: 'C++', level: 70, color: 'var(--primary)' },
        { name: 'HTML/CSS', level: 70, color: 'var(--primary)' },
        { name: 'React', level: 50, color: 'var(--primary)' },
      ]
    },
    {
      name: 'Programming Related Skills',
      description: 'My technical skill set extends to frameworks and version control systems, essential for modern software development and data handling:',
      skills: [
        { name: 'GIT/GITHUB', level: 90, color: 'var(--primary)' },
        { name: 'SQL', level: 75, color: 'var(--primary)' },
        { name: 'PANDAS', level: 70, color: 'var(--primary)' },
        { name: 'Numpy', level: 70, color: 'var(--primary)' },
        { name: 'Matplotlib', level: 60, color: 'var(--primary)' },
      ]
    }
  ];

  // Function to render skill bars
  const renderSkillBar = (skill) => (
    <div 
      className="skill-bar mb-4" 
      key={skill.name}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="fw-semibold" style={{ 
          color: 'var(--foreground)',
          fontSize: 'clamp(0.875rem, 2vw, 1rem)'
        }}>
          {skill.name}
        </span>
        <span className="fw-bold" style={{ 
          color: 'var(--primary)',
          fontSize: '0.875rem'
        }}>
          {skill.level}%
        </span>
      </div>
      <div className="skill-progress-wrapper">
        <ProgressBar 
          now={skill.level} 
          style={{ 
            height: '10px', 
            backgroundColor: 'var(--secondary)',
            borderRadius: 'var(--radius)',
            overflow: 'hidden'
          }}
        >
          <ProgressBar 
            now={skill.level} 
            style={{ 
              backgroundColor: skill.color,
              transition: 'all 0.3s ease-in-out'
            }} 
          />
        </ProgressBar>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-5" style={{ 
      backgroundColor: 'var(--background)',
      padding: 'clamp(4rem, 8vw, 6rem) 1rem'
    }}>
      <div className="container" style={{ maxWidth: '1400px' }}>
        <div className="mb-5" style={{ marginBottom: 'clamp(3rem, 6vw, 4rem)' }}>
          <h2 className="mb-4" style={{ 
            color: 'var(--foreground)',
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            fontWeight: 'bold'
          }}>
            Skills
          </h2>
          <p style={{ 
            color: 'var(--muted-foreground)',
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            maxWidth: '42rem',
            lineHeight: '1.75'
          }}>
            A comprehensive overview of my technical proficiencies and expertise levels.
          </p>
        </div>

        <Row className="g-4 g-md-5">
          {skillCategories.map((category, index) => (
            <Col lg={6} key={index}>
              <Card className="h-100 shadow-sm" style={{ 
                border: '1px solid var(--border)',
                backgroundColor: 'var(--card)',
                borderRadius: 'var(--radius)',
                transition: 'all 0.3s ease',
              }}>
                <Card.Body style={{ padding: 'clamp(1.5rem, 4vw, 2rem)' }}>
                  <Card.Title as="h3" className="mb-3" style={{ 
                    color: 'var(--foreground)',
                    fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                    fontWeight: 'bold',
                    marginBottom: '0.75rem'
                  }}>
                    {category.name}
                  </Card.Title>
                  <Card.Text style={{ 
                    color: 'var(--muted-foreground)',
                    fontSize: '0.875rem',
                    marginBottom: '2rem',
                    lineHeight: '1.6'
                  }}>
                    {category.description}
                  </Card.Text>
                  <div style={{ marginTop: '1.5rem' }}>
                    {category.skills.map(renderSkillBar)}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <style jsx>{`
        .skill-bar:hover .skill-progress-wrapper .progress-bar {
          filter: brightness(1.1);
        }
        .skill-progress-wrapper {
          transition: all 0.3s ease;
        }
        .skill-bar:hover .skill-progress-wrapper {
          transform: translateY(-1px);
        }
        .card:hover {
          box-shadow: 0 10px 30px -15px var(--border) !important;
          border-color: oklch(from var(--primary) calc(l * 0.7) c h / 0.3) !important;
        }
      `}</style>
    </section>
  );
};

export default Skills;
