import React from 'react';

function Contact() {
  return (
    <section id="contact" className="container py-5">
      <h1 className="section-heading text-center mb-4">Contact Me</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <p className="lead text-center mb-4">
            If you have any questions or would like to get in touch, feel free
            to contact me:
          </p>
          <ul className="list-unstyled text-center">
            <li className="mb-3">
              <i className="fas fa-envelope me-2 text-primary"></i>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:cagrisaracaydin@gmail.com"
                className="text-decoration-none"
              >
                cagrisaracaydin@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
