import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Modal } from 'react-bootstrap';
import project1Img from '../images/project1.png';
import project2Img from '../images/project2.png';
import project3Img from '../images/project3.png';
import project4Img from '../images/project4.png';
import project5Img from '../images/project5.png';
import project6Img from '../images/project6.png';

// Array of project data
const projects = [
  {
    title: 'Search Engine C++ Project (CS300)',
    image: project1Img,
    description:
      'Implemented advanced data structures and algorithms to optimize search engine performance. Performed comprehensive evaluations of speed and efficiency on sorting algorithms and search techniques, significantly enhancing the effectiveness of information retrieval systems.',
    badges: ['C++', 'Data Structures', 'Algorithms', 'Optimization'],
    link: 'https://github.com/CagriCanSaracaydin/Search-Engine',
  },
  {
    title: 'Electronic Air-Hockey Project (CS303)',
    image: project2Img,
    description:
      'Engineered a dynamic system integrating LED and seven-segment display simulations for realistic puck movement and interactive player experiences. Collaborated effectively with a partner to design and implement the hardware simulation, emphasizing teamwork and technical proficiency in digital systems.',
    badges: ['Verilog HDL', 'FPGA', 'Vivado'],
    link: 'https://github.com/CagriCanSaracaydin/Digi-Hockey-Verilog',
  },
  {
    title: 'Open-Source Project Whisky',
    image: project3Img,
    description:
      'Contributed over 100 English to Turkish translations, improving the gaming experience for Turkish speakers. Engaged with a global community of developers to support the Wine wrapper project, expanding the use of open-source software.',
    badges: ['Open-Source', 'Localization', 'Translation'],
    link: 'https://github.com/Whisky-App/Whisky',
  },
  {
    title: 'Data Analysis of Commodity Market',
    image: project4Img,
    description:
      'Analyzed commodity market trends from 2019 to 2024 across key commodities including natural gas, crude oil, precious metals, and cryptocurrencies. Utilized data cleaning, exploratory analysis, and machine learning models like KNN and Decision Trees to predict future price movements.',
    badges: ['Python', 'Data Analysis', 'Machine Learning'],
    link: 'https://github.com/CagriCanSaracaydin/Data-Analysis-of-Commodity-Market',
  },
  {
    title: 'SongSpot Backend API',
    image: project5Img,
    description:
      'Developed a robust backend API for SongSpot, facilitating song searches, comments, and ratings to enhance user interactions across a detailed music database.',
    badges: ['Java', 'Backend', 'Spring', 'MongoDB'],
    link: 'https://github.com/CagriCanSaracaydin/SongSpot-Backend',
  },
  {
    title: 'SongSpot Frontend Android',
    image: project6Img,
    description:
      'Built the SongSpot app’s frontend with Java and Android SDK, offering a user-friendly mobile interface for exploring and interacting with a vast music database.',
    badges: ['Java', 'Frontend', 'Android', 'UI'],
    link: 'https://github.com/CagriCanSaracaydin/SongSpot-Frontend',
  },
];

// ProjectCard component to display individual project cards
const ProjectCard = ({ project, onClick }) => (
  <Card className="h-100 shadow-lg project-card" onClick={() => onClick(project)}>
    <Card.Img
      variant="top"
      src={project.image}
      alt={`${project.title} Image`}
      style={{ objectFit: 'cover', height: '200px' }}
      loading="lazy"
    />
    <Card.Body className="d-flex flex-column">
      <Card.Title className="fw-bold">{project.title}</Card.Title>
      <Card.Text className="flex-grow-1">{project.description}</Card.Text>
      <div className="mt-3">
        {project.badges.map((badge, idx) => (
          <Badge bg="primary" className="me-2 mb-2" key={idx}>
            {badge}
          </Badge>
        ))}
      </div>
    </Card.Body>
  </Card>
);

// Projects component to display the projects section
function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const handleClose = () => setSelectedProject(null);
  const handleShow = (project) => setSelectedProject(project);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.badges.includes(filter));

  const filterOptions = ['All', 'Python', 'C++', 'Java', 'Verilog HDL'];

  return (
    <section id="projects" className="mt-5 py-5" data-aos="fade-up">
      <Container>
        <h2 className="section-heading text-center mb-5">Projects</h2>
        <div className="text-center mb-4">
          {filterOptions.map(option => (
            <Button
              key={option}
              variant={filter === option ? 'primary' : 'outline-primary'}
              className="me-2 mb-2"
              onClick={() => setFilter(option)}
            >
              {option}
            </Button>
          ))}
        </div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {filteredProjects.map((project, index) => (
            <Col key={index} data-aos="fade-up">
              <ProjectCard project={project} onClick={handleShow} />
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={selectedProject !== null} onHide={handleClose} size="lg" centered>
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex flex-column flex-md-row align-items-center mb-4">
                <div className="project-image-container me-md-4 mb-3 mb-md-0">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="project-image"
                  />
                </div>
                <div className="project-details">
                  <p>{selectedProject.description}</p>
                  <h5 className="mt-3">Technologies Used:</h5>
                  <div>
                    {selectedProject.badges.map((badge, idx) => (
                      <Badge bg="primary" className="me-2 mb-2" key={idx}>
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" href={selectedProject.link} target="_blank">
                View Project
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      <style jsx>{`
        .project-card {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          cursor: pointer;
        }
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .project-image-container {
          width: 200px;
          height: 200px;
          overflow: hidden;
          border-radius: 10px;
        }
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .project-details {
          flex: 1;
        }
        @media (max-width: 768px) {
          .project-image-container {
            width: 100%;
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;
