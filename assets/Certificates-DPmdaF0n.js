import{o as e,s as t,t as n}from"./Container-D0iNxU27.js";import{t as r}from"./Card-BzQ5eT3x.js";import{t as i}from"./Button-cMXbmE9Q.js";import{t as a}from"./Badge-CD9bJSff.js";import{n as o,t as s}from"./Row-BgXpO3Qp.js";import{o as c,t as l}from"./index-3f2McRXW.js";var u=c(`award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),d=c(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]);t();var f=`/assets/Forward-DOLaUzI5.pdf`,p=`/assets/CagriCanSaracaydin-CS50Certificate-DPBgcWoW.pdf`,m=`/assets/CagriCanSaracaydin-CertificateOfAchievement-D0GQk7wX.pdf`,h=e(),g=[{organization:`McKinsey & Company`,title:`McKinsey Forward Program`,description:`10-week program developing essential workplace skills for the future of work.`,image:`/images/optimized/mckinsey-logo.png`,skills:[`Adaptability`,`Problem Solving`,`Communication`],link:f},{organization:`Harvard University`,title:`Harvard CS50`,description:`Introduction to fundamental concepts of computer science from Harvard University.`,image:`/images/optimized/Harvard_University.png`,skills:[`Python`,`C`,`HTML/CSS`,`SQL`,`Flask`],link:p},{organization:`Sabanci University`,title:`Certificate of Achievement`,description:`Intensive language preparation program at Sabanci University School of Languages.`,image:`/images/optimized/Sabancı_University.png`,skills:[`English Proficiency`,`Academic Writing`,`Critical Thinking`],link:m}];function _(){return(0,h.jsxs)(`section`,{id:`certificates`,className:`certificates-section`,style:{backgroundColor:`rgba(var(--secondary-rgb), 0.3)`,padding:`4rem 1rem`},children:[(0,h.jsxs)(n,{style:{maxWidth:`1400px`},children:[(0,h.jsxs)(`div`,{className:`mb-5`,children:[(0,h.jsx)(`h2`,{style:{fontSize:`clamp(2rem, 5vw, 3rem)`,fontWeight:`bold`,color:`var(--foreground)`,marginBottom:`1rem`},children:`Certificates`}),(0,h.jsx)(`p`,{style:{fontSize:`1.125rem`,color:`var(--muted-foreground)`,maxWidth:`42rem`},children:`Professional certifications and courses that enhance my technical expertise and professional skills.`})]}),(0,h.jsx)(s,{className:`g-4 g-md-5`,children:g.map((e,t)=>(0,h.jsx)(o,{xs:12,md:6,lg:4,children:(0,h.jsx)(r,{className:`certificate-card h-100`,style:{backgroundColor:`var(--card)`,borderColor:`var(--border)`,borderRadius:`var(--radius)`,border:`1px solid var(--border)`,transition:`all 0.3s ease`,overflow:`hidden`},children:(0,h.jsxs)(r.Body,{className:`p-4 d-flex flex-column`,children:[(0,h.jsx)(`div`,{className:`mb-4 d-flex justify-content-center`,children:(0,h.jsx)(`div`,{className:`logo-wrapper`,children:(0,h.jsx)(l,{src:e.image,alt:`${e.organization} logo`,className:`certificate-logo ${e.organization===`Harvard University`?`harvard-logo`:e.organization===`McKinsey & Company`?`mckinsey-logo`:e.organization===`Sabanci University`?`sabanci-logo`:``}`})})}),(0,h.jsxs)(`div`,{className:`flex-grow-1 d-flex flex-column`,children:[(0,h.jsxs)(`div`,{className:`mb-3`,children:[(0,h.jsx)(`h3`,{className:`cert-title`,style:{fontSize:`1.25rem`,fontWeight:`bold`,color:`var(--foreground)`,marginBottom:`0.5rem`,transition:`color 0.3s ease`},children:e.title}),(0,h.jsx)(`p`,{style:{fontSize:`0.875rem`,color:`var(--muted-foreground)`,lineHeight:`1.6`,marginBottom:`1rem`},children:e.description})]}),(0,h.jsx)(`div`,{className:`d-flex flex-wrap gap-2 mb-4`,children:e.skills.map((e,t)=>(0,h.jsx)(a,{bg:``,className:`skill-badge`,style:{backgroundColor:`var(--secondary) !important`,color:`var(--secondary-foreground) !important`,fontSize:`0.75rem`,padding:`0.25rem 0.75rem`,fontWeight:`500`,transition:`all 0.3s ease`},children:e},t))}),(0,h.jsxs)(i,{variant:`outline`,href:e.link,target:`_blank`,rel:`noopener noreferrer`,className:`mt-auto view-cert-btn d-flex align-items-center justify-content-center gap-2`,style:{width:`100%`,backgroundColor:`transparent`,color:`var(--foreground)`,border:`2px solid var(--border)`,padding:`0.5rem 1rem`,borderRadius:`var(--radius)`,transition:`all 0.3s ease`,fontWeight:`500`},children:[(0,h.jsx)(u,{size:16}),`View Certificate`,(0,h.jsx)(d,{size:16,className:`external-icon`,style:{opacity:0,transition:`opacity 0.3s ease`}})]})]})]})})},t))})]}),(0,h.jsx)(`style`,{children:`
        .certificates-section .logo-wrapper {
          width: 128px;
          height: 128px;
          border-radius: 8px;
          background-color: rgba(var(--secondary-rgb), 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 1px solid rgba(var(--border-rgb), 0.5);
          transition: transform 0.3s ease;
        }
        .certificates-section .certificate-card:hover .logo-wrapper {
          transform: scale(1.05);
        }
        .certificate-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 1rem;
        }
        .harvard-logo {
          padding: 0.5rem;
          transform: scale(1.3);
        }
        .mckinsey-logo {
          padding: 0.5rem;
          transform: scale(1.2);
        }
        .sabanci-logo {
          padding: 0.5rem;
          transform: scale(1.2);
        }
        .certificate-card {
          transition: all 0.3s ease;
        }
        .certificate-card:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
          border-color: rgba(var(--primary-rgb), 0.5) !important;
        }
        .certificate-card:hover .cert-title {
          color: var(--primary) !important;
        }
        .skill-badge:hover {
          background-color: rgba(var(--accent-rgb), 0.2) !important;
          color: var(--accent) !important;
        }
        .view-cert-btn:hover {
          background-color: var(--primary) !important;
          color: var(--primary-foreground) !important;
          border-color: var(--primary) !important;
        }
        .view-cert-btn:hover .external-icon {
          opacity: 1 !important;
        }
      `})]})}export{_ as default};