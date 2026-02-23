import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="pb-24">
      <div className="container mx-auto px-5 lg:px-[150px]">
        <h2 className="text-6xl text-center mb-16">{projects.title}</h2>
        
        <div className="grid grid-cols-12 gap-5 max-w-7xl mx-auto">
          {projects.projectList.map((project) => (
            <div key={project.id} className={`rounded-lg overflow-hidden relative bg-gray-200 ${project.span} ${project.height}`}>
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
