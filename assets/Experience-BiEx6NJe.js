import{l as e,o as t,s as n,t as r}from"./Container-D0iNxU27.js";import{t as i}from"./Card-BzQ5eT3x.js";import{t as a}from"./Badge-CD9bJSff.js";import{n as o,t as s}from"./map-pin-DmkEpshJ.js";import{t as c}from"./index-DqWjH5pZ.js";var l=e(n()),u=t(),d=[{year:`2026`,company:`Deloitte`,title:`Engineering, AI & Data Business Analyst`,location:`Istanbul, Turkey`,period:`June 2026 - Present`,description:[],skills:[]},{year:`2025`,company:`Philip Morris International`,title:`Commercial IT Analyst Intern`,location:`Istanbul, Turkey`,period:`July 2025 - May 2026`,description:[`Migrated Power BI reports from AWS to Snowflake database with optimized queries and modernized UI design, improving report performance and user experience`,`Automated key IT workflows using Jira and AWS, including test reporting and security monitoring, to improve team productivity and support compliance efforts`],logo:`/images/optimized/pmi-logo.png`,skills:[`Power BI`,`AWS`,`Snowflake`,`Jira`,`SQL`,`UI Design`]},{year:`2025`,company:`McKinsey & Company`,title:`Experience McKinsey Program Participant`,location:`Istanbul, Turkey`,period:`June 2025`,description:[`Applied McKinsey problem-solving frameworks to real business cases, developed investment strategies in team settings, and networked with consultants from diverse backgrounds`],logo:`/images/optimized/mckinsey-logo.png`,skills:[`Problem-Solving`,`Investment Strategy`,`Consulting`,`Teamwork`,`Networking`]},{year:`2024`,company:`QNB IBTech`,title:`Software Developer`,location:`Kocaeli, Turkey`,period:`October 2024 - March 2025`,description:[`Refactored C# and Java code and optimized Oracle SQL queries for the Leasing Branch application, resulting in a 10% faster transaction data retrieval rate`,`Leveraged Jira and Azure DevOps to manage daily feature tasks and optimizations assigned by the Product Manager, ensuring on-time delivery and streamlined development workflows`],logo:`/images/optimized/ibtech-logo.png`,skills:[`C#`,`Java`,`Oracle SQL`,`Jira`,`Azure DevOps`,`Agile`]},{year:`2024`,company:`Bosch Turkey`,title:`R&D Software Engineer Intern`,location:`Bursa, Turkey`,period:`July 2024 - September 2024`,description:[`Developed and integrated a Python-based data analysis application, boosting process performance by 90% and enabling analysis of 50 times more data`,`Shortened the nozzle R&D cycle by 20% through effective collaboration with cross-functional teams`],logo:`/images/optimized/bosch-logo.png`,skills:[`Python`,`Data Analysis`,`R&D`,`Cross-functional Collaboration`,`Process Optimization`]}],f=()=>{let[e,t]=(0,l.useState)(0);return(0,u.jsxs)(`section`,{id:`experience`,className:`py-5`,style:{backgroundColor:`var(--background)`,padding:`4rem 1rem`},children:[(0,u.jsxs)(r,{style:{maxWidth:`1400px`},children:[(0,u.jsx)(`h2`,{className:`mb-2`,style:{color:`var(--foreground)`,fontSize:`clamp(2rem, 5vw, 3rem)`,fontWeight:`bold`,textAlign:`left`},children:`Experience`}),(0,u.jsx)(`p`,{style:{fontSize:`1.125rem`,color:`var(--muted-foreground)`,marginBottom:`4rem`,maxWidth:`42rem`},children:`A timeline of my professional journey and key contributions across various organizations.`}),(0,u.jsxs)(`div`,{style:{position:`relative`},children:[(0,u.jsx)(`div`,{className:`timeline-line d-none d-sm-block`,style:{position:`absolute`,left:`0`,top:`0`,bottom:`0`,width:`1px`,backgroundColor:`var(--border)`}}),(0,u.jsx)(`div`,{children:d.map((n,r)=>(0,u.jsxs)(`div`,{className:`experience-item`,onClick:()=>t(r),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),t(r))},role:`button`,tabIndex:0,"aria-pressed":e===r,style:{position:`relative`,marginBottom:r===d.length-1?`0`:`3rem`,cursor:`pointer`},children:[(0,u.jsx)(`div`,{className:`year-badge d-none d-sm-flex`,style:{position:`absolute`,left:`0`,top:`0`,transform:`translateX(-50%)`,zIndex:10,width:`64px`,height:`64px`,borderRadius:`50%`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`0.875rem`,fontWeight:`600`,backgroundColor:e===r?`var(--primary)`:`var(--muted)`,color:e===r?`var(--primary-foreground)`:`var(--muted-foreground)`,transition:`all 0.3s ease`,transform:e===r?`translateX(-50%) scale(1.1)`:`translateX(-50%)`,boxShadow:e===r?`0 10px 15px -3px rgba(0, 0, 0, 0.1)`:`none`},children:n.year}),(0,u.jsx)(`div`,{style:{paddingLeft:`0`},children:(0,u.jsx)(i,{style:{backgroundColor:e===r?`var(--card)`:`rgba(var(--card-rgb), 0.5)`,borderColor:e===r?`rgba(var(--primary-rgb), 0.5)`:`var(--border)`,borderRadius:`var(--radius)`,transition:`all 0.3s ease`,boxShadow:e===r?`0 10px 15px -3px rgba(0, 0, 0, 0.1)`:`0 1px 2px 0 rgba(0, 0, 0, 0.05)`},className:`experience-card`,children:(0,u.jsxs)(i.Body,{className:`p-4 p-md-5`,children:[(0,u.jsx)(`div`,{className:`d-sm-none mb-3`,children:(0,u.jsx)(a,{bg:``,style:{backgroundColor:e===r?`var(--primary)`:`var(--secondary)`,color:e===r?`var(--primary-foreground)`:`var(--secondary-foreground)`,fontSize:`0.875rem`,fontWeight:`600`},children:n.year})}),(0,u.jsxs)(`div`,{className:`d-flex align-items-start gap-3 ${n.description.length>0||n.skills.length>0?`mb-4 mb-md-5`:``}`,children:[(0,u.jsx)(`div`,{style:{width:`120px`,height:`120px`,borderRadius:`8px`,backgroundColor:`rgba(var(--secondary-rgb), 0.5)`,display:`flex`,alignItems:`center`,justifyContent:`center`,overflow:`hidden`,flexShrink:0},children:n.logo?(0,u.jsx)(c,{src:n.logo,alt:`${n.company} logo`,style:{width:`100%`,height:`100%`,objectFit:`contain`,padding:`12px`}}):(0,u.jsxs)(`span`,{style:{color:`var(--foreground)`,fontWeight:700},children:[`Deloitte`,(0,u.jsx)(`span`,{style:{color:`#86bc25`},children:`.`})]})}),(0,u.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,u.jsx)(`h3`,{className:`mb-1`,style:{fontSize:`1.25rem`,fontWeight:`bold`,color:`var(--foreground)`},children:n.company}),(0,u.jsx)(`p`,{className:`mb-2`,style:{fontSize:`1rem`,fontWeight:`500`,color:`var(--primary)`},children:n.title}),(0,u.jsxs)(`div`,{className:`d-flex flex-wrap gap-3`,style:{fontSize:`0.875rem`,color:`var(--muted-foreground)`},children:[(0,u.jsxs)(`span`,{className:`d-flex align-items-center gap-1`,children:[(0,u.jsx)(s,{size:16}),n.location]}),(0,u.jsxs)(`span`,{className:`d-flex align-items-center gap-1`,children:[(0,u.jsx)(o,{size:16}),n.period]})]})]})]}),n.description.length>0&&(0,u.jsx)(`ul`,{className:`mb-4 mb-md-5`,style:{color:`rgba(var(--foreground-rgb), 0.9)`,lineHeight:`1.6`,paddingLeft:`0`,listStyle:`none`},children:n.description.map((e,t)=>(0,u.jsxs)(`li`,{className:`d-flex gap-3 mb-3`,style:{fontSize:`clamp(0.875rem, 2vw, 1rem)`},children:[(0,u.jsx)(`span`,{style:{color:`var(--accent)`,marginTop:`0.375rem`,flexShrink:0},children:`•`}),(0,u.jsx)(`span`,{children:e})]},t))}),n.skills.length>0&&(0,u.jsx)(`div`,{className:`d-flex flex-wrap gap-2`,children:n.skills.map((e,t)=>(0,u.jsx)(a,{bg:``,style:{backgroundColor:`var(--secondary)`,color:`var(--secondary-foreground)`,fontSize:`0.75rem`,fontWeight:`500`},children:e},t))})]})})})]},r))})]})]}),(0,u.jsx)(`style`,{children:`
        .experience-card:hover {
          background-color: var(--card) !important;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
        }

        .year-badge:hover {
          background-color: var(--secondary) !important;
          transform: translateX(-50%) scale(1.05) !important;
        }

        @media (min-width: 576px) {
          .timeline-line {
            left: 0 !important;
          }
          
          .experience-item > div:last-child {
            padding-left: 3rem !important;
          }
        }

        @media (min-width: 768px) {
          .timeline-line {
            left: 50% !important;
            transform: translateX(-50%);
          }
          
          .experience-item:nth-child(even) > div:last-child {
            margin-left: auto;
            padding-left: 3rem !important;
            padding-right: 0;
          }
          
          .experience-item:nth-child(odd) > div:last-child {
            margin-right: auto;
            padding-right: 3rem !important;
            padding-left: 0;
          }
          
          .experience-item > div:last-child {
            width: calc(50% - 1.5rem);
          }
          
          .year-badge {
            left: 50% !important;
          }
        }
      `})]})};export{f as default};