import { useState } from 'react';
import { ArrowUpRight, Github, Layers3 } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import './Projects.css';

// githubUrl, image, and organization are optional for future private or corporate projects.
const projects = [
  {
    id: 1,
    title: 'Search Engine C++ Project (CS300)',
    description:
      'Built a C++ search engine using data structures and algorithms to improve information retrieval speed.',
    image: '/images/optimized/project1.png',
    technologies: ['C++', 'Data Structures', 'Algorithms'],
    category: 'C++',
    githubUrl: 'https://github.com/CagriCanSaracaydin/Search-Engine',
    featured: true,
  },
  {
    id: 2,
    title: 'Electronic Air-Hockey Project (CS303)',
    description:
      'Designed a Verilog air-hockey simulation with puck movement, LEDs, and seven-segment score displays.',
    image: '/images/optimized/project2.png',
    technologies: ['Verilog HDL', 'Digital Systems', 'Hardware Design'],
    category: 'Verilog HDL',
    githubUrl: 'https://github.com/CagriCanSaracaydin/Digi-Hockey-Verilog',
    featured: true,
  },
  {
    id: 3,
    title: 'Open-Source Project Whisky',
    description:
      'Contributed over 100 English-to-Turkish translations to the open-source Whisky app.',
    image: '/images/optimized/project3.png',
    technologies: ['Open Source', 'Translation', 'Community'],
    category: 'Other',
    githubUrl: 'https://github.com/Whisky-App/Whisky',
    featured: false,
  },
  {
    id: 4,
    title: 'Data Analysis of Commodity Market',
    description:
      'Analyzed 2019–2024 commodity trends and used machine learning to explore future price movements.',
    image: '/images/optimized/project4.png',
    technologies: ['Python', 'Machine Learning', 'Pandas'],
    category: 'Python',
    githubUrl: 'https://github.com/CagriCanSaracaydin/Data-Analysis-of-Commodity-Market',
    featured: true,
  },
  {
    id: 5,
    title: 'SongSpot Backend API',
    description:
      'Built a Java API for song search, comments, and ratings backed by MongoDB.',
    image: '/images/optimized/project5.png',
    technologies: ['Java', 'Spring Boot', 'MongoDB'],
    category: 'Java',
    githubUrl: 'https://github.com/CagriCanSaracaydin/SongSpot-Backend',
    featured: true,
  },
  {
    id: 6,
    title: 'SongSpot Frontend Android',
    description:
      'Built an Android app for exploring music and interacting with the SongSpot database.',
    image: '/images/optimized/project6.png',
    technologies: ['Java', 'Android SDK', 'Mobile Development'],
    category: 'Java',
    githubUrl: 'https://github.com/CagriCanSaracaydin/SongSpot-Frontend',
    featured: false,
  },
];

const projectWebpSrcSet = (src) => {
  const base = src.slice(0, src.lastIndexOf('.'));
  return `${base}-thumbnail.webp 150w, ${base}-small.webp 400w, ${base}-medium.webp 800w, ${base}.webp 1024w`;
};

function Projects({ items = projects }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const categories = ['all', ...new Set(items.map((project) => project.category).filter(Boolean))];
  const filteredProjects = activeFilter === 'all'
    ? items
    : items.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <div className="projects__intro">
          <h2>Projects</h2>
          <p>A selection of work across software development, data science, and system design.</p>
        </div>

        <div className="projects__filters" role="group" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`projects__filter${activeFilter === category ? ' is-active' : ''}`}
              onClick={() => setActiveFilter(category)}
              aria-pressed={activeFilter === category}
            >
              {category === 'all' ? 'All' : category}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="projects__card">
              <div className="projects__media">
                {project.image ? (
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    className="projects__image"
                    width="1024"
                    height="1024"
                    webpSrcSet={projectWebpSrcSet(project.image)}
                    sizes="(max-width: 620px) 152px, 164px"
                  />
                ) : (
                  <div className="projects__media-placeholder" aria-hidden="true">
                    <Layers3 size={38} strokeWidth={1.4} />
                    <span>{project.organization || project.category || 'Project'}</span>
                  </div>
                )}
              </div>

              <div className="projects__content">
                <p className="projects__category">{project.organization || project.category}</p>
                <h3>{project.title}</h3>
                <p className="projects__description">{project.description}</p>

                {((project.technologies?.length ?? 0) > 0 || project.githubUrl) && (
                  <div className="projects__bottom">
                    {(project.technologies?.length ?? 0) > 0 && (
                      <div className="projects__technologies" aria-label="Technologies used">
                        {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                      </div>
                    )}
                    {project.githubUrl && (
                      <a
                        className="projects__link"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={17} aria-hidden="true" />
                        View on GitHub
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="projects__empty">No projects found for this category.</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
