import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import './About.css';

const About = () => (
  <section id="about" className="about">
    <div className="about__inner">
      <div className="about__content">
        <h1 className="about__name">Cagri Can Saracaydin</h1>
        <p className="about__role">Engineering, AI &amp; Data Business Analyst <span>@ Deloitte</span></p>
        <p className="about__description">
          Computer Science and Engineering graduate from Sabanci University in Istanbul, Turkey.
          I build software and data solutions that turn complex operational problems into reliable,
          maintainable systems.
        </p>

        <div className="about__actions">
          <a className="about__link about__link--primary" href="#contact" aria-label="Contact Me">
            <Mail size={18} aria-hidden="true" />
            Contact me
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a
            className="about__link about__link--glass"
            href="https://www.linkedin.com/in/cagrisaracaydin/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} aria-hidden="true" /> LinkedIn
          </a>
          <a
            className="about__link about__link--glass"
            href="https://github.com/CagriCanSaracaydin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <Github size={18} aria-hidden="true" /> GitHub
          </a>
        </div>

      </div>

      <div className="about__visual">
        <div className="about__portrait-frame">
          <OptimizedImage
            src="/images/optimized/hero.jpg"
            alt="Cagri Can Saracaydin"
            className="about__portrait"
            width="877"
            height="812"
            priority
          />
        </div>
        <div className="about__location">
          <MapPin size={16} aria-hidden="true" /> Istanbul, Turkey
        </div>
      </div>
    </div>
  </section>
);

export default About;
