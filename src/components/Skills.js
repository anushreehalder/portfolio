import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills">
      <div className="bg-bg-card mx-5 lg:mx-[150px] mb-24 rounded-3xl p-16">
        <div className="flex justify-between items-start mb-12 flex-wrap">
          <h2 className="text-5xl">{skills.title}</h2>
          <div className="max-w-xs text-sm text-text-grey text-right">
            {skills.description}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.skillList.map((skill, index) => (
            <div 
              key={index}
              className={`bg-white p-6 text-center rounded-lg font-medium shadow-sm transition-transform duration-300 hover:bg-accent-yellow hover:-translate-y-1.5 ${skill === 'FIGMA' ? 'bg-accent-yellow' : ''}`}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
