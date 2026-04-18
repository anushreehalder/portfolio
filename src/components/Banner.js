import React, { useState, useEffect } from 'react';
import portrait from '../assets/images/portrait.png';

const Banner = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setNavVisible(true), 100);
    const t2 = setTimeout(() => setHeroVisible(true), 400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <header className="bg-white text-text-dark relative overflow-hidden min-h-screen flex flex-col">
      {/* Nav */}
      <div className="w-full px-5 lg:px-16 relative z-10">
        <div
          className={`flex items-center justify-between py-6 transition-all duration-700 ease-out ${
            navVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] text-[#0f172a] tracking-[-0.5px]">
            ANUSHREE.
          </div>
          <a
            href="#contact"
            className="bg-accent-blue text-white font-semibold text-[15px] tracking-[-0.3px] px-8 py-[14px] rounded-[44px] border border-white/40 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Let's talk
          </a>
        </div>
      </div>

      {/* Hero */}
      <div className="relative flex-1">
        {/* Portrait — right 55% of banner, Figma: starts at calc(41.67% + 97px) */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-[55%] transition-all duration-1000 ease-out ${
            heroVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Blobs behind portrait */}
          <div className="absolute top-[10%] left-[10%] w-[260px] h-[260px] rounded-full bg-accent-blue opacity-40 blur-[70px] pointer-events-none" />
          <div className="absolute top-[35%] right-[5%] w-[220px] h-[220px] rounded-full bg-accent-blue opacity-35 blur-[65px] pointer-events-none" />
          <div className="absolute bottom-[15%] left-[5%] w-[200px] h-[200px] rounded-full bg-accent-blue opacity-30 blur-[60px] pointer-events-none" />
          <div className="absolute top-[55%] left-[40%] w-[180px] h-[180px] rounded-full bg-accent-blue opacity-30 blur-[55px] pointer-events-none" />
          <div className="absolute top-[5%] right-[15%] w-[160px] h-[160px] rounded-full bg-accent-blue opacity-25 blur-[50px] pointer-events-none" />

          {/* Portrait image container with gradient — matches Figma */}
          <div className="absolute inset-0">
            <img
              src={portrait}
              alt="Anushree — UI/UX Designer"
              className="absolute w-[97%] h-[105%] object-cover object-top"
              style={{ left: '2.5%', top: '-4%' }}
            />
            {/* Bottom fade to white, matching Figma gradient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: 'linear-gradient(181.5deg, rgba(255,255,255,0) 58%, rgb(255,255,255) 97%)' }}
            />
          </div>
        </div>

        {/* Left text */}
        <div
          className={`relative z-10 flex flex-col pl-5 lg:pl-16 pt-10 pb-20 h-full justify-center transition-all duration-700 ease-out ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#0f172a] tracking-[-1.8px]">
            <p className="text-[68px] leading-[72px] mb-0 whitespace-nowrap">
              Hi, I'm <span className="italic">Anushree</span>,
            </p>
            <p className="text-[52px] leading-[64px] mb-0 font-medium italic whitespace-nowrap">
              An UI/UX Designer
            </p>
          </div>

          <div className="font-['Playfair_Display',serif] font-semibold italic text-accent-blue text-[60px] leading-[66px] tracking-[-1.5px] capitalize mt-2">
            <p className="mb-0">Crafting Intuitive</p>
            <p className="mb-0">Digital Experiences.</p>
          </div>

          <p
            className="mt-7 text-[15px] text-[#475569] leading-[24px] max-w-[420px]"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            At the intersection of empathy and precision, crafting intentional interfaces for the modern era.
          </p>

          <div className="flex items-center gap-5 mt-10">
            <a
              href="#projects"
              className="bg-accent-blue text-white font-semibold text-[15px] tracking-[-0.3px] px-10 py-[16px] rounded-[44px] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              View Work
            </a>
            <a
              href="#contact"
              className="bg-white text-[#414755] font-semibold text-[15px] tracking-[-0.3px] px-10 py-[16px] rounded-[44px] border border-[rgba(65,71,85,0.44)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
