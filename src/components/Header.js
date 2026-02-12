import React, { useState } from 'react';

const Header = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{name}</h1>
        <div className="hidden md:flex space-x-4">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="#about" className="block py-2 px-4 text-sm hover:bg-gray-700">About</a>
          <a href="#skills" className="block py-2 px-4 text-sm hover:bg-gray-700">Skills</a>
          <a href="#projects" className="block py-2 px-4 text-sm hover:bg-gray-700">Projects</a>
          <a href="#contact" className="block py-2 px-4 text-sm hover:bg-gray-700">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
