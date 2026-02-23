import React from 'react';

const Footer = ({ footer }) => {
  return (
    <footer className="bg-bg-dark text-text-light text-center py-10 text-sm opacity-90">
      <p>{footer.copyright}</p>
    </footer>
  );
};

export default Footer;
