import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/cagricansaracaydin/',
    Icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/CagriCanSaracaydin',
    Icon: Github,
  },
  {
    label: 'Email',
    href: 'mailto:cagrisaracaydin@gmail.com',
    Icon: Mail,
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__main">
          <div className="site-footer__identity">
            <a href="#about" className="site-footer__mark" aria-label="Back to About section">
              C<span>/</span>S
            </a>
            <div>
              <p className="site-footer__name">Cagri Can Saracaydin</p>
              <p className="site-footer__subtitle">Engineering, AI &amp; Data</p>
            </div>
          </div>

          <nav className="site-footer__social" aria-label="Footer social links">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                className="site-footer__link"
                aria-label={label}
                {...(href.startsWith('https://') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                <span>{label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p>&copy; {new Date().getFullYear()} Cagri Can Saracaydin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
