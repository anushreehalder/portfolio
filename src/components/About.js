import React from 'react';

const About = ({ about }) => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <p className="text-lg text-center max-w-2xl mx-auto">{about}</p>
      </div>
    </section>
  );
};

export default About;
