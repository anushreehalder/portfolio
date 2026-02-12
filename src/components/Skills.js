import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <ul className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <li key={index} className="bg-gray-300 text-gray-800 rounded-full px-4 py-2 m-2">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
