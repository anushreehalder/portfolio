import React, { useState, useEffect } from 'react';
import portrait from '../assets/images/portrait.png';
import { TYPOGRAPHY } from '../constants/fonts';

const TopBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex items-center justify-between py-6 transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}
    >
      <div
        className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[22px] text-[#0f172a] tracking-[-0.5px] leading-7"
      >
        ANUSHREE.
      </div>
      <a
        href="#contact"
        className="bg-accent-blue text-white font-semibold text-[15px] tracking-[-0.35px] leading-7 px-7 py-3 rounded-[44px] border border-white/40 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        style={{ fontFamily: '"Inter", sans-serif' }}
      >
        Let's talk
      </a>
    </div>
  );
};

const HeroTitle = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex flex-col gap-0 transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* Main intro line */}
      <div className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#0f172a] tracking-[-1.8px]">
        <p className="text-[56px] leading-[58px] mb-0">
          <span>Hi, I'm </span>
          <span className="italic">Anushree</span>
          <span>, </span>
        </p>
        <p className="text-[42px] leading-[58px] mb-0">
          <span className="font-medium italic">An UI/UX Designer</span>
        </p>
      </div>

      {/* Tagline */}
      <div className="font-['Playfair_Display',serif] font-semibold italic text-accent-blue text-[50px] leading-[56px] tracking-[-1.5px] capitalize mt-1">
        <p className="mb-0">Crafting Intuitive</p>
        <p className="mb-0">Digital Experiences.</p>
      </div>
    </div>
  );
};

const Header = ({ name, title }) => {
  return (
    <header className="bg-white text-text-dark relative overflow-hidden">
      <div className="container mx-auto px-5 lg:px-16 flex flex-col">
        <TopBar />
        <div className="flex justify-between items-start pt-10 pb-6">
          <div className="flex-1">
            <HeroTitle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
