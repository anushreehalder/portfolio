import React from 'react';
import useInView from '../hooks/useInView';

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
  const [ref, inView] = useInView();
  return (
    <section className="py-20">
      <div className="container mx-auto px-5 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left — heading + tagline */}
          <div
            ref={ref}
            className={`lg:w-[30%] shrink-0 transition-all duration-700 ease-out ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <p className="font-semibold text-[13px] text-[#566166] tracking-[14px] uppercase leading-[14px] mb-4">
              CAPABILITIES
            </p>
            <div className="mb-6">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] lg:text-[46px] text-[#1a1c1d] tracking-[-1px] leading-[34px] lg:leading-[52px]">
                Skills &{' '}
              </span>
              <span className="font-['Playfair_Display',serif] font-semibold italic text-accent-blue text-[32px] lg:text-[52px] leading-[38px] lg:leading-[58px] tracking-[-1.3px] capitalize">
                Expertise
              </span>
            </div>
            <p className="text-[15px] text-[#475569] leading-[24px] max-w-[280px]">
              At the intersection of empathy and precision, crafting intentional interfaces for the modern era.
            </p>
          </div>

          {/* Right — skills grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <div
                key={skill}
                className={`bg-white border border-[rgba(0,0,0,0.09)] rounded-[14px] h-[90px] flex items-center justify-center text-center cursor-default transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0px_7px_22px_rgba(0,88,188,0.45)] shadow-[0px_3.7px_20px_rgba(0,0,0,0.04)] ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: inView ? `${i * 60 + 100}ms` : '0ms' }}
              >
                <span className="text-[16px] text-[#454545] tracking-[-0.3px] capitalize font-normal">
                  {skill}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
