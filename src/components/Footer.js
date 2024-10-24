import React from 'react';

// Footer component to display the footer section of the website
function Footer() {
  return (
    <footer className="text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>&copy; 2024 Cagri Can Saracaydin. All Rights Reserved.</p>
            <p>
              Follow me on{' '}
              <a
                href="https://www.linkedin.com/in/cagrisaracaydin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{' '}
              |{' '}
              <a
                href="https://github.com/CagriCanSaracaydin"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
