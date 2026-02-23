import React from 'react';

const About = ({ about }) => {
  return (
    <section id="about" className="text-center py-24">
      <div className="container mx-auto px-5 lg:px-[150px]">
        <h2 className="text-6xl mb-7 text-text-dark">{about.title}</h2>
        <p 
          className="max-w-3xl mx-auto mb-10 text-lg text-text-grey"
          dangerouslySetInnerHTML={{ __html: about.description }}
        >
        </p>
        <a href="#projects" className="btn inline-block bg-accent-yellow text-text-dark py-3 px-9 rounded-full font-semibold text-sm transition-transform duration-300 hover:bg-accent-hover hover:-translate-y-0.5">See Portfolio</a>
      </div>
    </section>
  );
};

export default About;
