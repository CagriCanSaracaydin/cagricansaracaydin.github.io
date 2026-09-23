import { ArrowUpRight, Mail } from 'lucide-react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section__inner">
        <div className="contact-section__intro">
          <h2>Get In Touch</h2>
          <p>Have a question or an opportunity? I&apos;d be glad to hear from you.</p>
        </div>

        <article className="contact-section__card">
          <span className="contact-section__icon" aria-hidden="true"><Mail size={25} strokeWidth={1.8} /></span>
          <div className="contact-section__card-content">
            <p className="contact-section__eyebrow">CONTACT</p>
            <h3>Let&apos;s connect</h3>
            <p>For collaborations, opportunities, or a quick hello, send me a note.</p>
          </div>
          <a className="contact-section__email-link" href="mailto:cagrisaracaydin@gmail.com">
            <span>cagrisaracaydin@gmail.com</span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </article>
      </div>
    </section>
  );
}

export default Contact;
