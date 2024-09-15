import React from 'react';
import project1Img from '../images/project1.png';
import project2Img from '../images/project2.png';
import project3Img from '../images/project3.png';
import project4Img from '../images/project4.png';
import project5Img from '../images/project5.png';
import project6Img from '../images/project6.png';

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
      'This project focuses on the commodity market, analyzing trends from 2019 to 2024 across key commodities including natural gas, crude oil, precious metals, and cryptocurrencies. Using data cleaning, exploratory analysis, and machine learning models like KNN and Decision Trees, it aims to predict future price movements. Techniques include statistical hypothesis testing and feature importance analysis, leveraging tools like Pandas, Scikit-learn, and Matplotlib.',
    badges: ['Data Analysis', 'Machine Learning', 'Python'],
    link: 'https://github.com/CagriCanSaracaydin/Data-Analysis-of-Commodity-Market',
  },
  {
    title: 'SongSpot Backend API',
    image: project5Img,
    description:
      'SongSpot, dubbed the "IMDB for music," leverages this backend API to power its music discovery platform. This robust API facilitates song searches, comments, and ratings, enhancing user interactions across a detailed music database.',
    badges: ['Backend', 'Java', 'Spring', 'MongoDB'],
    link: 'https://github.com/CagriCanSaracaydin/SongSpot-Backend',
  },
  {
    title: 'SongSpot Frontend Android',
    image: project6Img,
    description:
      'The SongSpot app offers a user-friendly mobile interface for exploring and interacting with a vast music database. Its frontend, built with Java and Android SDK, enables users to navigate through different music genres, view detailed song information, and interact with features like rating and commenting on songs.',
    badges: ['Frontend', 'Android', 'Java', 'UI'],
    link: 'https://github.com/CagriCanSaracaydin/SongSpot-Frontend',
  },
];

function Projects() {
  return (
    <section id="projects" className="container mt-5 py-5">
      <h2 className="section-heading text-center mb-5">Projects</h2>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow-lg hover-lift">
              <img
                src={project.image}
                loading="lazy"
                className="card-img-top"
                alt={`${project.title} Image`}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold mb-3">{project.title}</h5>
                <p className="card-text flex-grow-1">{project.description}</p>
                <div className="mb-3">
                  {project.badges.map((badge, idx) => (
                    <span className="badge bg-primary me-2" key={idx}>
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="card-footer bg-transparent border-0 text-center">
                  <a
                    href={project.link}
                    className="btn btn-outline-primary btn-sm mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
