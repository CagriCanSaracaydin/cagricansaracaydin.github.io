import React from 'react';

const Interests = () => {
  return (
    <section id="interests" className="py-5">
      <div className="container">
        <h2 className="section-heading text-center mb-5">Interests</h2>
        <ul className="list-unstyled">
          <li className="mb-3">Artificial Intelligence and Machine Learning</li>
          <li className="mb-3">Data Science and Analytics</li>
          <li className="mb-3">Software Development</li>
          <li className="mb-3">Open Source Contribution</li>
          <li className="mb-3">Blockchain Technology</li>
        </ul>
      </div>
      <style jsx>{`
        .section-heading {
          font-size: 2.5rem;
          font-weight: bold;
          color: #0056b3;
        }
        .list-unstyled {
          font-size: 1.2rem;
          color: #333;
        }
        .list-unstyled li {
          padding: 10px 0;
          border-bottom: 1px solid #ddd;
        }
      `}</style>
    </section>
  );
};

export default Interests;
