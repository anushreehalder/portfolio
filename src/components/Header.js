import React from 'react';
import portrait from '../assets/images/portrait.jpg';

const Header = ({ name, title }) => {
  return (
    <header className="bg-bg-dark text-text-light pt-12 rounded-b-3xl relative overflow-hidden">
      <div className="container mx-auto px-5 lg:px-[150px]">
        <nav className="flex justify-between items-center text-sm mb-16">
          <div className="flex gap-5">
            <a href="#about" className="hover:text-accent-yellow transition-colors">About</a>
            <a href="#skills" className="hover:text-accent-yellow transition-colors">Skills</a>
            <a href="#projects" className="hover:text-accent-yellow transition-colors">Work</a>
          </div>
          <a href="#contact" className="text-accent-yellow hover:text-white transition-colors">Contact Me</a>
        </nav>

        <div className="flex justify-between items-center flex-wrap">
          <div className="hero-text flex-1 min-w-[300px] pb-20">
            <p className="text-base opacity-80 mb-2.5">Hello, I'm</p>
            <h1 className="text-7xl font-light mb-2.5 leading-none" dangerouslySetInnerHTML={{ __html: name.replace(' ', '<br/>') }}></h1>
            <h2 className="text-2xl opacity-90 font-light mb-7">{title}</h2>
            <a href="#contact" className="btn inline-block bg-accent-yellow text-text-dark py-3 px-9 rounded-full font-semibold text-sm transition-transform duration-300 hover:bg-accent-hover hover:-translate-y-0.5">Hire Me</a>
          </div>
          <div className="hero-image flex-1 min-w-[300px] flex justify-end items-end">
            <img 
              src={portrait} 
              alt={`${name} - UI/UX Designer`}
              className="max-h-[600px] object-cover grayscale mask-image-bottom"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
