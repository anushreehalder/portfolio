import React from 'react';

const skills = [
  "User Research",
  "FIGMA",
  "Prototyping",
  "Visual Design",
  "Layout",
  "Typography",
  "Design Mock Ups",
  "Time Management",
  "Good Team Player",
  "Wireframing",
  "Colour Systems",
  "Communications"
];

const SkillsGrid = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-5 lg:px-16">
        {/* Section heading */}
        <div className="mb-10">
          <p className="font-semibold text-[13px] text-[#566166] tracking-[14px] uppercase leading-[14px] mb-3">
            CAPABILITIES
          </p>
          <div>
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[46px] text-[#1a1c1d] tracking-[-1px] leading-[46px]">
              Skills &{' '}
            </span>
            <span className="font-['Playfair_Display',serif] font-semibold italic text-accent-blue text-[56px] leading-[60px] tracking-[-1.3px] capitalize">
              Expertise
            </span>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className={`bg-white border border-[rgba(0,0,0,0.09)] rounded-[10px] py-8 px-6 flex items-center justify-center text-center transition-shadow hover:shadow-md ${
                skill === 'FIGMA'
                  ? 'shadow-[0px_5px_15px_rgba(0,88,188,0.55)] font-medium'
                  : 'shadow-[0px_2.5px_14px_rgba(0,0,0,0.04)]'
              }`}
            >
              <span className="text-[17px] text-[#454545] tracking-[-0.3px] capitalize">
                {skill}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <p className="text-[13px] text-[#566166] leading-[18px] max-w-[260px] mt-14">
          At the intersection of empathy and precision, crafting intentional interfaces for the modern era.
        </p>
      </div>
    </section>
  );
};

export default SkillsGrid;
