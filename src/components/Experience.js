import React from 'react';

const experiences = [
  {
    title: "UI/UX Designing Course",
    company: "Webskitters Academy",
    year: "2024",
    description: "Leading design systems and accessibility initiatives across the services ecosystem, impacting millions of users daily."
  },
  {
    title: "UI/UX Designer",
    company: "Esolz TECHNOLOGIES",
    year: "2025 — 2026",
    description: "Crafted immersive guest experiences and enhanced host tooling during a period of rapid international growth."
  }
];

const ExperienceItem = ({ title, company, year, description, isLast }) => (
  <div className={`flex flex-col gap-5 pb-8 ${!isLast ? 'border-b border-[rgba(42,52,57,0.14)]' : ''}`}>
      <div className="flex justify-between items-start gap-4 flex-wrap">
      <div>
        <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[22px] text-[#1a1c1d] leading-[29px]">
          {title}
        </h3>
        <p className="text-[17px] text-[#414755] font-medium leading-[26px] mt-0.5">
          {company}
        </p>
      </div>
      <span className="text-[13px] text-[#414755] tracking-[0.6px] uppercase mt-1">
        {year}
      </span>
    </div>
    <p className="text-[15px] text-[#414755] leading-[24px]">
      {description}
    </p>
  </div>
);

const Experience = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-5 lg:px-16 flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Left: Section heading */}
        <div className="lg:w-[30%]">
          <p className="font-semibold text-[13px] text-[#566166] tracking-[14px] uppercase leading-[14px] mb-4">
            EXPERIENCE
          </p>
          <div>
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] lg:text-[46px] text-[#1a1c1d] tracking-[-1px] leading-[34px] lg:leading-[46px]">
              My design{' '}
            </span>
            <br />
            <span className="font-['Playfair_Display',serif] font-semibold italic text-accent-blue text-[34px] lg:text-[56px] leading-[40px] lg:leading-[60px] tracking-[-1.3px] capitalize">
              Journey
            </span>
          </div>
        </div>

        {/* Right: Experience items */}
        <div className="lg:w-[70%] flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={exp.title}
              {...exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
