import { render, screen } from '@testing-library/react';
import App from './App';
import About from './components/About';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import ScrollToTop from './components/ScrollToTop';
import Skills from './components/Skills';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders About component', () => {
  render(<About />);
  const aboutElement = screen.getByText(/Backend Developer @ IBTech-QNB IT/i);
  expect(aboutElement).toBeInTheDocument();
});

test('renders Certificates component', () => {
  render(<Certificates />);
  const certificatesElement = screen.getByText(/BAT Turkey Leadership/i);
  expect(certificatesElement).toBeInTheDocument();
});

test('renders Contact component', () => {
  render(<Contact />);
  const contactElement = screen.getByText(/Contact Me/i);
  expect(contactElement).toBeInTheDocument();
});

test('renders Education component', () => {
  render(<Education />);
  const educationElement = screen.getByText(/Sabanci University/i);
  expect(educationElement).toBeInTheDocument();
});

test('renders Experience component', () => {
  render(<Experience />);
  const experienceElement = screen.getByText(/IBTech/i);
  expect(experienceElement).toBeInTheDocument();
});

test('renders Footer component', () => {
  render(<Footer />);
  const footerElement = screen.getByText(/Cagri Can Saracaydin/i);
  expect(footerElement).toBeInTheDocument();
});

test('renders Navbar component', () => {
  render(<Navbar />);
  const navbarElement = screen.getByText(/Cagri Can Saracaydin/i);
  expect(navbarElement).toBeInTheDocument();
});

test('renders Projects component', () => {
  render(<Projects />);
  const projectsElement = screen.getByText(/Search Engine C++ Project/i);
  expect(projectsElement).toBeInTheDocument();
});

test('renders Resume component', () => {
  render(<Resume />);
  const resumeElement = screen.getByText(/View Resume/i);
  expect(resumeElement).toBeInTheDocument();
});

test('renders ScrollToTop component', () => {
  render(<ScrollToTop />);
  const scrollToTopElement = screen.getByLabelText(/Scroll to Top/i);
  expect(scrollToTopElement).toBeInTheDocument();
});

test('renders Skills component', () => {
  render(<Skills />);
  const skillsElement = screen.getByText(/Programming Languages/i);
  expect(skillsElement).toBeInTheDocument();
});
