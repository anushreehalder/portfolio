import React from 'react';

const Hero = ({ name, title }) => {
  return (
    <section className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="text-2xl mt-4">{title}</p>
    </section>
  );
};

export default Hero;
