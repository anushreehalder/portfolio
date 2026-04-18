import React, { useState, useEffect } from 'react';
import portrait from '../assets/images/portrait.png';

const Banner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <header
      className="bg-white relative overflow-hidden"
      style={{ minHeight: 'clamp(580px, 80vh, 880px)' }}
    >
      <div className="max-w-[1440px] mx-auto relative h-full" style={{ minHeight: 'inherit' }}>

        {/* ── Nav ── */}
        <nav className="relative z-20 flex items-center justify-between px-5 md:px-10 lg:px-[7.5%] py-6 lg:py-8">
          <div
            className={`font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] lg:text-[20px] text-[#0f172a] tracking-[-0.5px] transition-opacity duration-700 ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            ANUSHREE.
          </div>
          <a
            href="#contact"
            className="bg-accent-blue text-white font-semibold text-[13px] lg:text-[15px] px-6 lg:px-8 py-[11px] lg:py-[14px] rounded-[44px] border border-white/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Let's talk
          </a>
        </nav>

        {/* ── Portrait (desktop only, absolutely positioned) ── */}
        <div
          className={`hidden lg:block absolute top-0 bottom-0 pointer-events-none transition-opacity duration-1000 delay-300 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ left: 'calc(50% + 40px)', right: 0 }}
        >
          {/* Blue glow blobs — positions mirror Figma ellipse layout */}
          <div className="absolute top-[22%] left-[5%]  w-[280px] h-[230px] rounded-full bg-accent-blue opacity-35 blur-[80px]" />
          <div className="absolute top-[45%] left-[42%] w-[250px] h-[210px] rounded-full bg-accent-blue opacity-30 blur-[75px]" />
          <div className="absolute top-[6%]  left-[53%] w-[230px] h-[195px] rounded-full bg-accent-blue opacity-25 blur-[70px]" />
          <div className="absolute top-[62%] left-[12%] w-[215px] h-[195px] rounded-full bg-accent-blue opacity-30 blur-[65px]" />
          <div className="absolute top-[22%] left-[72%] w-[200px] h-[195px] rounded-full bg-accent-blue opacity-25 blur-[60px]" />

          {/* Portrait image + bottom fade — matches Figma image container exactly */}
          <div className="absolute inset-0">
            <img
              src={portrait}
              alt="Anushree — UI/UX Designer"
              className="absolute max-w-none"
              style={{
                width: '97.25%',
                height: '104.83%',
                left: '2.51%',
                top: '-4.29%',
                objectFit: 'cover',
                objectPosition: 'top center',
              }}
            />
            {/* Figma gradient: linear-gradient(181.49deg, rgba(255,255,255,0) 58.36%, rgb(255,255,255) 96.75%) */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(181.49deg, rgba(255,255,255,0) 58.36%, rgb(255,255,255) 96.75%)',
              }}
            />
          </div>
        </div>

        {/* ── Hero text — left column capped to ~50% so it never touches portrait ── */}
        <div
          className={`relative z-10 px-5 md:px-10 lg:px-[7.5%] pt-2 lg:pt-6 pb-8 lg:pb-20 w-full lg:w-[50%] transition-all duration-700 delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {/* "Hi, I'm Anushree, / An UI/UX Designer" — Plus Jakarta Sans ExtraBold */}
          <div
            className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#0f172a]"
            style={{ letterSpacing: '-0.025em' }}
          >
            <p className="text-[28px] sm:text-[38px] lg:text-[52px] xl:text-[62px] leading-[1.1] mb-0">
              Hi, I'm <span className="italic">Anushree</span>,
            </p>
            <p className="text-[19px] sm:text-[26px] lg:text-[40px] xl:text-[48px] leading-[1.2] mb-0 font-medium italic">
              An UI/UX Designer
            </p>
          </div>

          {/* Playfair italic tagline — Figma: 75px SemiBold Italic, tracking-[-2px] */}
          <div
            className="font-['Playfair_Display',serif] font-semibold italic text-accent-blue capitalize mt-2 lg:mt-3"
            style={{ letterSpacing: '-0.025em' }}
          >
            <p className="text-[22px] sm:text-[30px] lg:text-[44px] xl:text-[52px] leading-[1.2] mb-0">
              Crafting Intuitive
            </p>
            <p className="text-[22px] sm:text-[30px] lg:text-[44px] xl:text-[52px] leading-[1.2] mb-0">
              Digital Experiences.
            </p>
          </div>

          {/* Subtitle — Figma: Inter Medium 20px, #475569, leading-[30px], max-w-[448px] */}
          <p
            className="mt-5 lg:mt-7 text-[13px] sm:text-[14px] lg:text-[15px] text-[#475569] leading-[1.75] max-w-[400px]"
            style={{ fontFamily: '"Inter", sans-serif', fontWeight: 500 }}
          >
            At the intersection of empathy and precision, crafting intentional interfaces for the modern era.
          </p>

          {/* Buttons — Figma: h-[60px] w-[157px] rounded-[44px] text-[18px] */}
          <div className="flex flex-wrap gap-4 mt-7 lg:mt-9">
            <a
              href="#projects"
              className="bg-accent-blue text-white font-semibold text-[13px] lg:text-[15px] px-7 lg:px-[34px] py-[13px] lg:py-[17px] rounded-[44px] tracking-[-0.3px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              View Work
            </a>
            <a
              href="#contact"
              className="bg-white text-[#414755] font-semibold text-[13px] lg:text-[15px] px-7 lg:px-[34px] py-[13px] lg:py-[17px] rounded-[44px] border border-[rgba(65,71,85,0.44)] tracking-[-0.3px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Contact me
            </a>
          </div>
        </div>

        {/* ── Mobile portrait — in-flow, shown below text on small screens ── */}
        <div
          className={`lg:hidden relative mx-5 mb-10 mt-2 overflow-hidden rounded-2xl transition-opacity duration-700 delay-200 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ height: 'clamp(260px, 60vw, 380px)' }}
        >
          {/* Subtle blue blob behind portrait on mobile */}
          <div className="absolute top-0 right-0 w-[60%] h-[60%] rounded-full bg-accent-blue opacity-25 blur-[60px] pointer-events-none" />
          <img
            src={portrait}
            alt="Anushree — UI/UX Designer"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          {/* Bottom fade to white */}
          <div
            className="absolute inset-0"
            style={{ backgroundImage: 'linear-gradient(to bottom, transparent 55%, white 98%)' }}
          />
        </div>

      </div>
    </header>
  );
};

export default Banner;
