import React from 'react';
import searchIcon from '../assets/images/svgs/search.svg';
import layerIcon from '../assets/images/svgs/layer.svg';
import palletIcon from '../assets/images/svgs/pallet.svg';
import hexagonIcon from '../assets/images/svgs/hexagon.svg';
import useInView from '../hooks/useInView';

const skillCards = [
  {
    icon: searchIcon,
    title: "UX Research",
    description: "Understanding behavior patterns through quantitative data and qualitative interviews."
  },
  {
    icon: layerIcon,
    title: "Wireframing",
    description: "Structural blueprinting that prioritizes information hierarchy and user flow."
  },
  {
    icon: palletIcon,
    title: "UI Design",
    description: "Crafting bespoke design systems and pixel-perfect high-fidelity interfaces."
  },
  {
    icon: hexagonIcon,
    title: "Tools",
    description: "Expert Proficiency in Figma, Framer, Adobe CC, and Webflow."
  }
];

const SkillCard = ({ icon, title, description, className = '', style = {} }) => (
  <div className={`bg-white rounded-[28px] shadow-[0px_24px_48px_rgba(42,52,57,0.06)] p-10 flex flex-col gap-3 ${className}`} style={style}>
    <img src={icon} alt={title} className="w-7 h-7 object-contain" />
    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[20px] text-[#2a3439] leading-[30px] mt-1">
      {title}
    </h3>
    <p className="text-[15px] text-[#566166] leading-[26px]">
      {description}
    </p>
  </div>
);

const Narrative = () => {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-5 lg:px-16 flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left: Narrative text */}
        <div
          className={`lg:w-[45%] flex flex-col gap-4 transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <p className="font-semibold text-[14px] text-[#566166] tracking-[18px] uppercase leading-[16px]">
            THE NARRATIVE
          </p>

          <div className="mt-1">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[26px] lg:text-[44px] text-[#0f172a] tracking-[-1.8px] leading-[34px] lg:leading-[54px]">
              Bridging the gap between{' '}
            </span>
            <span className="font-['Playfair_Display',serif] font-semibold italic text-accent-blue text-[30px] lg:text-[52px] leading-[38px] lg:leading-[54px] tracking-[-1.6px] capitalize">
              strategy & visual poetry.
            </span>
          </div>

          <div className="mt-3 flex flex-col gap-2">
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[17px] lg:text-[21px] text-[#0f172a] tracking-[-0.4px] leading-[28px] lg:leading-[30px]">
              Design is the silent ambassador of your brand.
            </p>
            <p className="text-[17px] text-[#566166] leading-[28px]">
              With over 2 years of experience, I curate digital spaces where usability meets luxury. My approach is rooted in deep user research and refined through iterative prototyping.
            </p>
          </div>

          <p className="text-[17px] text-[#566166] leading-[28px] mt-2">
            I believe that great design is not just how something looks, but how it works and feels. My approach is rooted in empathy and data, ensuring that every pixel serves a purpose.
          </p>
        </div>

        {/* Right: Skill cards 2×2 grid */}
        <div className="lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCards.map((card, i) => (
            <SkillCard
              key={card.title}
              {...card}
              className={`transition-all duration-700 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: inView ? `${i * 110 + 120}ms` : '0ms' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Narrative;
