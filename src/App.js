import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

/**
 * The main App component that sets up the routing and renders the different sections of the website.
 * It includes the Navbar, About, Skills, Experience, Projects, Education, Certificates, Resume (with Contact), Footer, and ScrollToTop components.
 */
function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certificates />
        <Resume />
        <Footer />
        <ScrollToTop /> {/* Add ScrollToTop Button */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
