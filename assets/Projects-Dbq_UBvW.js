import{l as e,o as t,s as n,t as r}from"./Container-D0iNxU27.js";import{t as i}from"./Card-BzQ5eT3x.js";import{t as a}from"./Badge-CD9bJSff.js";import{n as o,t as s}from"./Row-BgXpO3Qp.js";import{i as c,r as l,s as u,t as d}from"./index-DqWjH5pZ.js";var f=e(n());function p(e){return c({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z`}},{tag:`path`,attr:{d:`M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z`}}]})(e)}var m=t(),h=[{id:1,title:`Search Engine C++ Project (CS300)`,description:`Implemented advanced data structures and algorithms to optimize search engine performance. Performed comprehensive evaluations of speed and efficiency on searching algorithms and search techniques, significantly enhancing the effectiveness of information retrieval systems.`,image:`/images/optimized/project1.png`,technologies:[`C++`,`Data Structures`,`Algorithms`],category:`C++`,githubUrl:`https://github.com/CagriCanSaracaydin/Search-Engine`,featured:!0},{id:2,title:`Electronic Air-Hockey Project (CS303)`,description:`Engineered a dynamic system integrating LED and seven-segment display simulations for realistic puck movement and interactive player experiences. Collaborated effectively with a partner to design and implement the hardware simulation, emphasizing teamwork and technical proficiency in digital systems.`,image:`/images/optimized/project2.png`,technologies:[`Verilog HDL`,`Digital Systems`,`Hardware Design`],category:`Verilog HDL`,githubUrl:`https://github.com/CagriCanSaracaydin/Digi-Hockey-Verilog`,featured:!0},{id:3,title:`Open-Source Project Whisky`,description:`Contributed over 100 English to Turkish translations, improving the gaming experience for Turkish speakers. Engaged with a global community of developers to support the Wine wrapper project, expanding the use of open-source software.`,image:`/images/optimized/project3.png`,technologies:[`Open Source`,`Translation`,`Community`],category:`Other`,githubUrl:`https://github.com/Whisky-App/Whisky`,featured:!1},{id:4,title:`Data Analysis of Commodity Market`,description:`Analyzed commodity market trends from 2019 to 2024 across key commodities including natural gas, crude oil, precious metals, and cryptocurrencies. Utilized data cleaning, exploratory analysis, and machine learning models like KNN and Decision Trees to predict future price movements.`,image:`/images/optimized/project4.png`,technologies:[`Python`,`Machine Learning`,`Pandas`],category:`Python`,githubUrl:`https://github.com/CagriCanSaracaydin/Data-Analysis-of-Commodity-Market`,featured:!0},{id:5,title:`SongSpot Backend API`,description:`Developed a robust backend API for SongSpot, facilitating song searches, comments, and ratings to enhance user interactions across a detailed music database.`,image:`/images/optimized/project5.png`,technologies:[`Java`,`Spring Boot`,`MongoDB`],category:`Java`,githubUrl:`https://github.com/CagriCanSaracaydin/SongSpot-Backend`,featured:!0},{id:6,title:`SongSpot Frontend Android`,description:`Built the SongSpot app's frontend with Java and Android SDK, offering a user-friendly mobile interface for exploring and interacting with a vast music database.`,image:`/images/optimized/project6.png`,technologies:[`Java`,`Android SDK`,`Mobile Development`],category:`Java`,githubUrl:`https://github.com/CagriCanSaracaydin/SongSpot-Frontend`,featured:!1}],g=[{name:`All`,value:`all`},{name:`Python`,value:`Python`},{name:`C++`,value:`C++`},{name:`Java`,value:`Java`},{name:`Verilog HDL`,value:`Verilog HDL`}];function _(){let[e,t]=(0,f.useState)(`all`),n=e===`all`?h:h.filter(t=>t.category===e);return(0,m.jsxs)(`section`,{id:`projects`,className:`py-5`,style:{backgroundColor:`var(--background)`,padding:`4rem 1rem`},children:[(0,m.jsxs)(r,{style:{maxWidth:`1400px`},children:[(0,m.jsx)(`h2`,{className:`mb-2`,style:{color:`var(--foreground)`,fontSize:`clamp(2rem, 5vw, 3rem)`,fontWeight:`bold`,textAlign:`left`},children:`Github Projects`}),(0,m.jsx)(`p`,{style:{fontSize:`1.125rem`,color:`var(--muted-foreground)`,marginBottom:`4rem`,maxWidth:`42rem`},children:`A collection of my technical projects showcasing skills in software development, data science, and system design.`}),(0,m.jsx)(`div`,{className:`d-flex flex-wrap justify-content-center gap-3 mb-5`,children:g.map(n=>(0,m.jsx)(u,{onClick:()=>t(n.value),"aria-pressed":e===n.value,variant:e===n.value?`primary`:`outline-primary`,className:`filter-btn ${e===n.value?`active`:``}`,style:e===n.value?{backgroundColor:`var(--primary)`,borderColor:`var(--primary)`,color:`var(--primary-foreground)`}:{backgroundColor:`transparent`,borderColor:`var(--primary)`,color:`var(--primary)`},children:n.name},n.value))}),(0,m.jsx)(s,{xs:1,md:2,lg:3,className:`g-4 g-md-5`,children:n.map(e=>(0,m.jsx)(o,{children:(0,m.jsxs)(i,{className:`h-100 project-card`,style:{backgroundColor:`var(--card)`,borderColor:`var(--border)`,borderRadius:`var(--radius)`,overflow:`hidden`},children:[(0,m.jsxs)(`div`,{className:`project-image-wrapper`,children:[(0,m.jsx)(d,{src:e.image,alt:e.title,className:`project-image`,style:{width:`100%`,height:`100%`,objectFit:`cover`,objectPosition:`center`}}),(0,m.jsx)(`div`,{className:`image-overlay`})]}),(0,m.jsxs)(i.Body,{className:`p-4 d-flex flex-column`,children:[(0,m.jsx)(i.Title,{className:`fs-5 fw-bold mb-3 project-title`,style:{color:`var(--foreground)`},children:e.title}),(0,m.jsx)(i.Text,{className:`small mb-4 flex-grow-1`,style:{color:`var(--muted-foreground)`,lineHeight:`1.6`},children:e.description}),(0,m.jsxs)(`div`,{className:`d-flex flex-wrap gap-2 mb-4`,children:[e.technologies.slice(0,3).map((e,t)=>(0,m.jsx)(a,{bg:``,className:`tech-badge`,style:{backgroundColor:`var(--secondary)`,color:`var(--secondary-foreground)`,fontSize:`0.75rem`,fontWeight:`500`,padding:`0.25rem 0.75rem`},children:e},t)),e.technologies.length>3&&(0,m.jsxs)(a,{bg:``,style:{backgroundColor:`var(--secondary)`,color:`var(--secondary-foreground)`,fontSize:`0.75rem`,fontWeight:`500`},children:[`+`,e.technologies.length-3]})]}),(0,m.jsxs)(u,{variant:`outline-primary`,className:`w-100 github-btn`,href:e.githubUrl,target:`_blank`,rel:`noopener noreferrer`,style:{borderWidth:`2px`,borderColor:`var(--border)`,backgroundColor:`transparent`,color:`var(--foreground)`},children:[(0,m.jsx)(l,{className:`me-2`,size:16}),`View on GitHub`,(0,m.jsx)(p,{className:`ms-2 external-link-icon`,size:16,style:{opacity:0}})]})]})]})},e.id))}),n.length===0&&(0,m.jsx)(`div`,{className:`text-center py-5`,children:(0,m.jsx)(`p`,{className:`fs-5`,style:{color:`var(--muted-foreground)`},children:`No projects found for this category.`})})]}),(0,m.jsx)(`style`,{children:`
        .filter-btn {
          transition: all 0.3s ease;
        }
        
        .filter-btn:hover {
          transform: translateY(-2px);
        }

        .project-card {
          transition: all 0.3s ease;
          border: 1px solid var(--border);
        }

        .project-card:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: rgba(var(--primary-rgb), 0.5);
        }

        .project-image-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 192px;
          overflow: hidden;
          background-color: rgba(var(--secondary-rgb), 0.3);
        }

        .project-image-wrapper picture {
          display: block;
          width: 100%;
          height: 100%;
        }

        .project-image {
          display: block;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(var(--background-rgb), 0.8), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .image-overlay {
          opacity: 1;
        }

        .project-title {
          transition: color 0.3s ease;
        }

        .project-card:hover .project-title {
          color: var(--primary);
        }

        .tech-badge {
          transition: all 0.3s ease;
        }

        .tech-badge:hover {
          background-color: rgba(var(--accent-rgb), 0.2) !important;
          color: var(--accent) !important;
        }

        .github-btn {
          transition: all 0.3s ease;
          position: relative;
        }

        .github-btn:hover {
          background-color: var(--primary) !important;
          color: var(--primary-foreground) !important;
          border-color: var(--primary) !important;
        }

        .github-btn:hover .external-link-icon {
          opacity: 1 !important;
        }

        @media (max-width: 768px) {
          .project-image-wrapper {
            height: 200px;
          }
        }
      `})]})}export{_ as default};