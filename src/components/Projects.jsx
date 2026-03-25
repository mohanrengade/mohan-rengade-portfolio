import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: 'Hospital Management System',
    desc: 'A Hospital Management System is a software solution that efficiently manages patient records, appointments, billing, and hospital operations in a centralized platform.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/mohanrengade/Hospital_Management_System',
  },
  {
    title: 'KARYAH Command Center',
    desc: 'KARYAH Command Center – A centralized platform to monitor, manage, and streamline organizational processes efficiently.',
    tags: ['React JS', 'Node JS', 'Express JS', 'MySQL'],
    github: '#',
  },
  {
    title: 'Shopping Cart',
    desc: 'Shopping Cart – A digital tool that lets users select, review, and purchase products seamlessly online.',
    tags: ['HTML ', 'CSS', "JavaScript", "Java", "Spring Boot"],
    github: 'https://github.com/mohanrengade/Shopping_Cart',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-5 py-20 text-center">
      <h2 className="text-4xl font-bold text-white mb-4">
        My <span className="text-orange-500">Projects</span>
      </h2>
      <p className="text-gray-400 mb-16 text-lg">A showcase of my recent work</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-[#131b2f]/90 border border-gray-800 rounded-3xl overflow-hidden flex flex-col text-left group hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all duration-300">
            {/* Image Placeholder */}
            <div className="h-[220px] w-full bg-[#1e293b] flex items-center justify-center border-b border-gray-800 overflow-hidden relative">
              {/* Replace this div with an actual image: <img src="..." className="w-full h-full object-cover"/> */}
              <div className="text-gray-500 flex flex-col items-center">
                <span className="font-semibold text-lg text-gray-400">Project Image</span>
                <span className="text-xs mt-1">(Placeholder)</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-7 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 text-[15px] mb-6 flex-grow leading-relaxed">{project.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-gray-800/80 text-gray-300 text-xs font-semibold rounded-full border border-gray-700/50 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#1e293b] hover:bg-gray-700/80 text-gray-200 font-semibold py-3.5 rounded-xl transition-colors duration-200"
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
                <button className="flex-1 flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3.5 rounded-xl shadow-[0_4px_15px_rgba(234,88,12,0.3)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.5)] transition-all duration-200">
                  <ExternalLink size={18} />
                  <span>Demo</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
