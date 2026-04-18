import React from 'react';

const Footer = ({ footer }) => {
  return (
    <footer className="bg-[#272727] text-white text-center py-16">
      <p className="text-[16px] tracking-[-0.3px] leading-[20px]">{footer.copyright}</p>
    </footer>
  );
};

export default Footer;
