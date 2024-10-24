import React, { useState } from 'react';
import { Card, Row, Col, ProgressBar, Badge } from 'react-bootstrap';

// Skills component to display the skills section
const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Skill categories and their respective skills
  const skillCategories = [
    {
      name: 'Programming Languages',
      description: 'I employ the following programming languages across a range of projects, leveraging each to build robust, efficient, and scalable solutions:',
      skills: [
        { name: 'PYTHON', level: 80, color: '#00599C' },
        { name: 'JAVA', level: 75, color: '#00599C' },
        { name:  'C++', level: 75, color: '#00599C' },
        { name: 'HTML/CSS', level: 70, color: '#00599C' },
        { name: 'React', level: 70, color: '#00599C' },
      ]
    },
    {
      name: 'Programming Related Skills',
      description: 'My technical skill set extends to frameworks and version control systems, essential for modern software development and data handling:',
      skills: [
        { name: 'GIT/GITHUB', level: 85, color: '#00599C' },
        { name: 'SQL', level: 80, color: '#00599C' },
        { name: 'PANDAS', level: 75, color: '#00599C' },
        { name: 'Numpy', level: 65, color: '#00599C' },
        { name: 'Matplotlib', level: 60, color: '#00599C' },
      ]
    }
  ];

  // Function to render skill bars
  const renderSkillBar = (skill) => (
    <div 
      className="skill-bar mb-3" 
      key={skill.name}
      onMouseEnter={() => setHoveredSkill(skill)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <div className="d-flex justify-content-between align-items-center mb-1">
        <span className="fw-bold">{skill.name}</span>
        <Badge 
          bg="primary" 
          pill
          className="animated-badge"
          style={{
            backgroundColor: hoveredSkill === skill ? skill.color : 'primary',
            transform: hoveredSkill === skill ? 'scale(1.1)' : 'scale(1)',
            transition: 'all 0.3s ease-in-out'
          }}
        >
         
        </Badge>
      </div>
      <ProgressBar 
        now={skill.level} 
        variant="primary" 
        style={{ height: '10px', backgroundColor: '#e9ecef' }}
      >
        <ProgressBar 
          now={skill.level} 
          style={{ 
            backgroundColor: skill.color,
            transition: 'width 1s ease-in-out'
          }} 
        />
      </ProgressBar>
    </div>
  );

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Skills</h2>
        <Row>
          {skillCategories.map((category, index) => (
            <Col md={6} key={index}>
              <Card className="h-100 shadow-lg border-0">
                <Card.Body>
                  <Card.Title as="h3" className="mb-3">{category.name}</Card.Title>
                  <Card.Text>{category.description}</Card.Text>
                  {category.skills.map(renderSkillBar)}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <style jsx>{`
        .animated-badge {
          transition: all 0.3s ease-in-out;
        }
        .skill-bar:hover .progress-bar {
          box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Skills;
