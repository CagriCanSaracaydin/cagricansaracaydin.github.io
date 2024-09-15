import React from 'react';

function Skills() {
  const programmingLanguages = [
    { name: 'C++', level: 80 },
    { name: 'JAVA', level: 75 },
    { name: 'PYTHON', level: 75 },
    { name: 'HTML', level: 70 },
    { name: 'CSS', level: 70 },
  ];

  const programmingSkills = [
    { name: 'GIT/GITHUB', level: 85 },
    { name: 'SQL', level: 80 },
    { name: 'PANDAS', level: 75 },
    { name: 'VERILOG', level: 65 },
    { name: 'FLASK', level: 60 },
  ];

  const renderSkillBar = (skill) => (
    <div className="skill-bar mb-3" key={skill.name}>
      <div className="d-flex justify-content-between mb-1">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="progress" style={{ height: '10px' }}>
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{ width: `${skill.level}%` }}
          aria-valuenow={skill.level}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="container py-5">
      <h1 className="section-heading">Skills</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4 shadow-lg">
            <div className="card-body">
              <h3 className="card-title h4">Programming Languages</h3>
              <p className="card-text">
                I employ the following programming languages across a
                range of projects, leveraging each to build robust, efficient,
                and scalable solutions:
              </p>
              {programmingLanguages.map(renderSkillBar)}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 shadow-lg">
            <div className="card-body">
              <h3 className="card-title h4">Programming Related Skills</h3>
              <p className="card-text">
                My technical skill set extends to frameworks and version control
                systems, essential for modern software development and data
                handling:
              </p>
              {programmingSkills.map(renderSkillBar)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
