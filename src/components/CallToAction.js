import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-5 lg:px-[150px] flex items-center justify-between">
        <div>
          <p className="text-[40px] font-bold text-text-dark tracking-tight leading-[48px] font-['Plus_Jakarta_Sans',sans-serif]">
            Narratives
          </p>
          <p className="text-[58px] font-semibold italic text-accent-blue tracking-tight leading-[64px] font-['Playfair_Display',serif] capitalize">
            Through Pixels.
          </p>
        </div>
        <a
          href="#contact"
          className="bg-accent-blue text-white font-semibold text-[15px] py-[16px] px-12 rounded-full hover:opacity-90 transition-opacity"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
