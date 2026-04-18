import React from 'react';
import apothecaryImg from '../assets/images/the-digital-apothecary.png';
import agewiseImg from '../assets/images/agewise.png';
import flowsyncImg from '../assets/images/flowsync.png';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 13L13 1M13 1H4M13 1V10" stroke="#0058BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const projectData = [
  {
    number: "01",
    image: apothecaryImg,
    category: "Skin care clinic",
    title: "The digital Apothecary",
    description: "The Digital Apothecary is a premium skincare and wellness website designed to blend modern clinical expertise with the calm, restorative essence of botanical care.",
    link: "https://www.figma.com/design/oJfYft0BFCDLYglHF3UFO9/Untitled?node-id=0-1&p=f&t=R6DFUoyQYDIlSvcZ-0",
    layout: "horizontal",
  },
  {
    number: "02",
    image: agewiseImg,
    category: "Elderly Care Service Platform",
    title: "AgeWise",
    description: "Agewise is an elderly care platform designed to provide accessible, compassionate, and user-friendly digital solutions for seniors and their families.",
    link: "https://www.figma.com/design/Ar8rMaudPZLHvoR50JVrtW/AGEWISE?node-id=13-1179&t=iJjqg84FgiCbZD6U-1",
    layout: "vertical",
    imagePosition: "top",
  },
  {
    number: "03",
    image: flowsyncImg,
    category: "Productivity & Performance Dashboard",
    title: "FlowSync",
    description: "FlowSync is a modern SaaS dashboard designed to help teams manage tasks, track performance, and monitor productivity in a visually engaging and data-driven environment.",
    link: "https://www.figma.com/design/x5YFauNpEkA77zV5QbVK0y/Flowsync?node-id=8-271&t=Df9Vc2npotpdF80v-0",
    layout: "vertical",
    imagePosition: "center",
  },
];

const Projects = () => {
  const [first, ...rest] = projectData;

  return (
    <section className="py-20">
      <div className="container mx-auto px-5 lg:px-16">

        {/* Header — left: label + headings | right: description + button */}
        <div className="flex items-stretch justify-between mb-14">
          {/* Left */}
          <div className="flex flex-col">
            <p className="font-semibold text-[13px] text-[#566166] tracking-[14px] uppercase leading-[14px] mb-5">
              SELECTED WORK
            </p>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[38px] text-text-dark tracking-tight leading-[48px]">
              Narratives
            </p>
            <p className="font-['Playfair_Display',serif] font-semibold italic text-accent-blue text-[52px] leading-[60px] tracking-tight capitalize">
              Through Pixels.
            </p>
          </div>
          {/* Right */}
          <div className="hidden lg:flex flex-col justify-between items-start max-w-[320px] pt-1 pb-1">
            <p className="text-[14px] text-[#475569] leading-[22px]">
              At the intersection of empathy and precision, crafting intentional interfaces for the modern era.
            </p>
            <a
              href="#contact"
              className="mt-6 shrink-0 bg-accent-blue text-white font-semibold text-[14px] py-4 px-10 rounded-full hover:opacity-90 transition-opacity"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Project 1 — horizontal card */}
        <div className="bg-white rounded-[22px] border border-[rgba(0,0,0,0.12)] shadow-[0px_25px_50px_rgba(26,28,29,0.1)] overflow-hidden flex flex-col lg:flex-row mb-6">
          <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
            <p className="text-[13px] text-[#414755] font-medium mb-6">
              {first.number} / {first.category}
            </p>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[30px] text-[#1a1c1d] leading-[38px] mb-6">
              {first.title}
            </h3>
            <p className="text-[14px] text-[#414755] leading-[22px] max-w-[340px] mb-7">
              {first.description}
            </p>
            <a
              href={first.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-blue font-semibold text-[14px] tracking-[1.4px] underline hover:opacity-80 transition-opacity"
            >
              VIEW PROJECT <ArrowIcon />
            </a>
          </div>
          {/* Project image */}
          <div className="lg:w-1/2 min-h-[300px] lg:min-h-[420px] rounded-tr-none rounded-br-none lg:rounded-tr-[22px] lg:rounded-br-[22px] overflow-hidden">
            <img src={first.image} alt={first.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Projects 2 & 3 — two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {rest.map((project) => (
            <div
              key={project.number}
              className="bg-white rounded-[22px] border border-[rgba(0,0,0,0.12)] shadow-[0px_25px_50px_rgba(26,28,29,0.06)] overflow-hidden flex flex-col"
            >
              {/* Project image */}
              <div className="h-[360px] lg:h-[420px] w-full overflow-hidden">
                <img src={project.image} alt={project.title} className={`w-full h-full object-cover object-${project.imagePosition || 'center'}`} />
              </div>
              {/* Info */}
              <div className="p-10 flex flex-col flex-1">
                <p className="text-[13px] text-[#414755] font-medium mb-4">
                  {project.number} / {project.category}
                </p>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[30px] text-[#1a1c1d] leading-[38px] mb-4">
                  {project.title}
                </h3>
                <p className="text-[14px] text-[#414755] leading-[22px] mb-7 flex-1">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-blue font-semibold text-[14px] tracking-[1.4px] underline hover:opacity-80 transition-opacity"
                >
                  VIEW PROJECT <ArrowIcon />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
