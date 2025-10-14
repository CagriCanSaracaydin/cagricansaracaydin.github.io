import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

// Array of project data
const projects = [
  {
    id: 1,
    title: 'Search Engine C++ Project (CS300)',
    description:
      'Implemented advanced data structures and algorithms to optimize search engine performance. Performed comprehensive evaluations of speed and efficiency on searching algorithms and search techniques, significantly enhancing the effectiveness of information retrieval systems.',
    image: '/images/media/project1.png',
    technologies: ['C++', 'Data Structures', 'Algorithms'],
    category: 'C++',
    githubUrl: 'https://github.com/CagriCanSaracaydin/Search-Engine',
    featured: true,
  },
  {
    id: 2,
    title: 'Electronic Air-Hockey Project (CS303)',
    description:
      'Engineered a dynamic system integrating LED and seven-segment display simulations for realistic puck movement and interactive player experiences. Collaborated effectively with a partner to design and implement the hardware simulation, emphasizing teamwork and technical proficiency in digital systems.',
    image: '/images/media/project2.png',
    technologies: ['Verilog HDL', 'Digital Systems', 'Hardware Design'],
    category: 'Verilog HDL',
    githubUrl: 'https://github.com/CagriCanSaracaydin/Digi-Hockey-Verilog',
    featured: true,
  },
  {
    id: 3,
    title: 'Open-Source Project Whisky',
    description:
      'Contributed over 100 English to Turkish translations, improving the gaming experience for Turkish speakers. Engaged with a global community of developers to support the Wine wrapper project, expanding the use of open-source software.',
    image: '/images/media/project3.png',
    technologies: ['Open Source', 'Translation', 'Community'],
    category: 'Other',
    githubUrl: 'https://github.com/Whisky-App/Whisky',
    featured: false,
  },
  {
    id: 4,
    title: 'Data Analysis of Commodity Market',
    description:
      'Analyzed commodity market trends from 2019 to 2024 across key commodities including natural gas, crude oil, precious metals, and cryptocurrencies. Utilized data cleaning, exploratory analysis, and machine learning models like KNN and Decision Trees to predict future price movements.',
    image: '/images/media/project4.png',
    technologies: ['Python', 'Machine Learning', 'Pandas'],
    category: 'Python',
    githubUrl: 'https://github.com/CagriCanSaracaydin/Data-Analysis-of-Commodity-Market',
    featured: true,
  },
  {
    id: 5,
    title: 'SongSpot Backend API',
    description:
      'Developed a robust backend API for SongSpot, facilitating song searches, comments, and ratings to enhance user interactions across a detailed music database.',
    image: '/images/media/project5.png',
    technologies: ['Java', 'Spring Boot', 'MongoDB'],
    category: 'Java',
    githubUrl: 'https://github.com/CagriCanSaracaydin/SongSpot-Backend',
    featured: true,
  },
  {
    id: 6,
    title: 'SongSpot Frontend Android',
    description:
      'Built the SongSpot app\'s frontend with Java and Android SDK, offering a user-friendly mobile interface for exploring and interacting with a vast music database.',
    image: '/images/media/project6.png',
    technologies: ['Java', 'Android SDK', 'Mobile Development'],
    category: 'Java',
    githubUrl: 'https://github.com/CagriCanSaracaydin/SongSpot-Frontend',
    featured: false,
  },
];

const filterCategories = [
  { name: 'All', value: 'all' },
  { name: 'Python', value: 'Python' },
  { name: 'C++', value: 'C++' },
  { name: 'Java', value: 'Java' },
  { name: 'Verilog HDL', value: 'Verilog HDL' },
];

// Projects component to display the projects section
function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-5" data-aos="fade-up" style={{ backgroundColor: 'var(--background)', padding: '4rem 1rem' }}>
      <Container style={{ maxWidth: '1400px' }}>
        {/* Header */}
        <h2 className="mb-2" style={{ 
          color: 'var(--foreground)', 
          fontSize: 'clamp(2rem, 5vw, 3rem)', 
          fontWeight: 'bold',
          textAlign: 'left'
        }}>
          Github Projects
        </h2>
        <p style={{ 
          fontSize: '1.125rem', 
          color: 'var(--muted-foreground)', 
          marginBottom: '4rem', 
          maxWidth: '42rem' 
        }}>
          A collection of my technical projects showcasing skills in software development, data science, and system design.
        </p>

        {/* Filter Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {filterCategories.map((category) => (
            <Button
              key={category.value}
              onClick={() => setActiveFilter(category.value)}
              variant={activeFilter === category.value ? 'primary' : 'outline-primary'}
              className={`filter-btn ${activeFilter === category.value ? 'active' : ''}`}
              style={
                activeFilter === category.value
                  ? {
                      backgroundColor: 'var(--primary)',
                      borderColor: 'var(--primary)',
                      color: 'var(--primary-foreground)',
                    }
                  : {
                      backgroundColor: 'transparent',
                      borderColor: 'var(--primary)',
                      color: 'var(--primary)',
                    }
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <Row xs={1} md={2} lg={3} className="g-4 g-md-5">
          {filteredProjects.map((project) => (
            <Col key={project.id} data-aos="fade-up">
              <Card
                className="h-100 project-card"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                  borderRadius: 'var(--radius)',
                  overflow: 'hidden',
                }}
              >
                {/* Project Image */}
                <div className="project-image-wrapper">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    style={{ height: '192px', objectFit: 'cover' }}
                  />
                  <div className="image-overlay"></div>
                </div>

                <Card.Body className="p-4 d-flex flex-column">
                  {/* Title */}
                  <Card.Title className="fs-5 fw-bold mb-3 project-title" style={{ color: 'var(--foreground)' }}>
                    {project.title}
                  </Card.Title>

                  {/* Description */}
                  <Card.Text className="small mb-4 flex-grow-1" style={{ color: 'var(--muted-foreground)', lineHeight: '1.6' }}>
                    {project.description}
                  </Card.Text>

                  {/* Technologies */}
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge
                        key={index}
                        bg=""
                        className="tech-badge"
                        style={{
                          backgroundColor: 'var(--secondary)',
                          color: 'var(--secondary-foreground)',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          padding: '0.25rem 0.75rem',
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        bg=""
                        style={{
                          backgroundColor: 'var(--secondary)',
                          color: 'var(--secondary-foreground)',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                        }}
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* GitHub Button */}
                  <Button
                    variant="outline-primary"
                    className="w-100 github-btn"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      borderWidth: '2px',
                      borderColor: 'var(--border)',
                      backgroundColor: 'transparent',
                      color: 'var(--foreground)',
                    }}
                  >
                    <FaGithub className="me-2" size={16} />
                    View on GitHub
                    <BiLinkExternal className="ms-2 external-link-icon" size={16} style={{ opacity: 0 }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-5">
            <p className="fs-5" style={{ color: 'var(--muted-foreground)' }}>
              No projects found for this category.
            </p>
          </div>
        )}
      </Container>

      <style jsx>{`
        .filter-btn {
          transition: all 0.3s ease;
        }
        
        .filter-btn:hover {
          transform: translateY(-2px);
        }

        .project-card {
          transition: all 0.3s ease;
          border: 1px solid var(--border);
        }

        .project-card:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: rgba(var(--primary-rgb), 0.5);
        }

        .project-image-wrapper {
          position: relative;
          overflow: hidden;
          background-color: rgba(var(--secondary-rgb), 0.3);
        }

        .project-image {
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(var(--background-rgb), 0.8), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .image-overlay {
          opacity: 1;
        }

        .project-title {
          transition: color 0.3s ease;
        }

        .project-card:hover .project-title {
          color: var(--primary);
        }

        .tech-badge {
          transition: all 0.3s ease;
        }

        .tech-badge:hover {
          background-color: rgba(var(--accent-rgb), 0.2) !important;
          color: var(--accent) !important;
        }

        .github-btn {
          transition: all 0.3s ease;
          position: relative;
        }

        .github-btn:hover {
          background-color: var(--primary) !important;
          color: var(--primary-foreground) !important;
          border-color: var(--primary) !important;
        }

        .github-btn:hover .external-link-icon {
          opacity: 1 !important;
        }

        @media (max-width: 768px) {
          .project-image-wrapper {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;
