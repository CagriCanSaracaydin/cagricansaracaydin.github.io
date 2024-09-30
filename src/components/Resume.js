import React from 'react';
import { FaFilePdf } from 'react-icons/fa';
import resumeLink from '../files/Cagri_Can_Saracaydin_ENG.pdf';

function Resume() {
  return (
    <section id="resume" className="container py-5">
      <h1 className="section-heading text-center mb-4">Resume</h1>
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <p className="lead mb-4">
            Download or view my full resume to learn more about my
            qualifications and experience:
          </p>
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            <FaFilePdf className="me-2" />
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
