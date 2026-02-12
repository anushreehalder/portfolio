import React from 'react';

const Footer = ({ contact }) => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">GitHub</a>
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} Anushree Halder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
