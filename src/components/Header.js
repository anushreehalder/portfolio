import React from 'react';
import portrait from '../assets/images/portrait.png';
import { TYPOGRAPHY } from '../constants/fonts';

const Header = ({ name, title }) => {
  return (
    <header className="bg-bg-dark text-text-light text-base pt-12 rounded-b-3xl relative overflow-hidden lg:h-[1100px]">
      <div className="container mx-auto px-5 lg:px-[150px] h-full flex flex-col">
        <nav className="flex justify-between items-center text-base mb-16" style={TYPOGRAPHY.navBase}>
          <div className="flex gap-10">
            <a href="#about" className="hover:text-accent-yellow transition-colors">About</a>
            <a href="#skills" className="hover:text-accent-yellow transition-colors">Skills</a>
            <a href="#projects" className="hover:text-accent-yellow transition-colors">Work</a>
          </div>
          <a href="#contact" className="text-accent-yellow hover:text-white transition-colors">Contact Me</a>
        </nav>

        <div className="flex justify-between items-start flex-wrap h-full">
          <div className="hero-text flex-1 min-w-[300px] pt-40">
            <p className="text-base opacity-80 mb-2.5" style={TYPOGRAPHY.heroSubtitle}>Hello, I'm</p>
            <h1 className="text-7xl font-light mb-2.5 leading-none" style={TYPOGRAPHY.heroName} dangerouslySetInnerHTML={{ __html: name.replace(' ', '<br/>') }}></h1>
            <h2 className="text-2xl opacity-90 font-light mb-7" style={TYPOGRAPHY.heading2}>{title}</h2>
            <a href="#contact" className="btn inline-block bg-accent-yellow text-text-dark py-3 px-9 rounded-full font-semibold text-sm transition-transform duration-300 hover:bg-accent-hover hover:-translate-y-0.5" style={TYPOGRAPHY.buttonLg}>Hire Me</a>
          </div>
        </div>
         <img 
            src={portrait} 
            alt={`${name} - UI/UX Designer`}
            className="absolute right-0 bottom-0 max-h-[1150px] object-cover grayscale mask-image-bottom"
            />
      </div>
    </header>
  );
};

export default Header;
