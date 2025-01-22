import React from 'react';

const projects = [
  { title: 'Project One', description: 'Project One.', color: 'bg-red-400' },
  { title: 'Project Two', description: 'Project two.', color: 'bg-blue-400' },
  { title: 'Project Three', description: 'Project three.', color: 'bg-green-400' },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white p-8">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-12">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${project.color} rounded-lg p-6 text-center hover:scale-105 transition transform duration-300`}>
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;