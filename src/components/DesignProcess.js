import React from 'react';
import brainIcon from '../assets/images/svgs/brain.svg';
import filterIcon from '../assets/images/svgs/filter.svg';
import bulbIcon from '../assets/images/svgs/bulb.svg';
import pencilIcon from '../assets/images/svgs/pencil.svg';
import completIcon from '../assets/images/svgs/complet.svg';

const steps = [
  {
    icon: brainIcon,
    title: "EMPATHIZE",
    description: "Researching user needs and pain points."
  },
  {
    icon: filterIcon,
    title: "DEFINE",
    description: "Creating clear project goals and insights."
  },
  {
    icon: bulbIcon,
    title: "IDEATE",
    description: "Sketching multiple solutions rapidly."
  },
  {
    icon: pencilIcon,
    title: "DESIGN",
    description: "Building high-fidelity prototypes."
  },
  {
    icon: completIcon,
    title: "TEST",
    description: "Validating through usability testing."
  }
];

const ProcessStep = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative z-10 w-14 h-14 rounded-full bg-white border border-[rgba(169,180,185,0.1)] shadow-sm flex items-center justify-center mb-7">
      <img src={icon} alt={title} className="w-5 h-5 object-contain" />
    </div>
    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] text-[#2a3439] tracking-[0.3px] uppercase mb-2">
      {title}
    </h4>
    <p className="text-[12px] text-[#566166] leading-[17px] max-w-[160px]">
      {description}
    </p>
  </div>
);

const DesignProcess = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-5 lg:px-16">
        <div className="bg-[rgba(217,228,234,0.3)] rounded-[30px] py-14 px-8 lg:px-14">
          {/* Label */}
          <p className="text-center font-semibold text-[13px] text-[#566166] tracking-[14px] uppercase leading-[14px] mb-4">
            my METHODOLOGY
          </p>

          {/* Heading */}
          <div className="text-center mb-10">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[22px] lg:text-[38px] text-[#0f172a] tracking-[-1.4px] leading-[28px] lg:leading-[44px]">
              A Scientific Approach{' '}
            </span>
            <span className="font-['Playfair_Display',serif] font-semibold italic text-accent-blue text-[30px] lg:text-[56px] leading-[36px] lg:leading-[60px] tracking-[-1.3px] capitalize">
              to Beauty
            </span>
          </div>

          {/* Steps with connecting line */}
          <div className="relative">
            {/* Dashed connecting line — fades in from left, fixed accent color between steps */}
            <div
              className="hidden lg:block absolute left-0 right-0 pointer-events-none"
              style={{
                top: '28px',
                height: '1px',
                backgroundImage: 'repeating-linear-gradient(to right, rgba(0,88,188,0.5) 0, rgba(0,88,188,0.5) 8px, transparent 8px, transparent 16px)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 100%)',
                maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 100%)',
              }}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
              {steps.map((step) => (
                <ProcessStep key={step.title} {...step} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
