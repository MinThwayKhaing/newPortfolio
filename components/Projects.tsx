
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Code, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50 scroll-mt-28">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600">A selection of impact-driven software solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="mb-4">
                  <div className="inline-block p-2 bg-accent/10 rounded-lg">
                    <Code className="text-accent" size={24} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.name}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="p-6 pt-0 mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-accent hover:text-sky-700 transition-colors"
                  >
                    View Project <ExternalLink size={14} className="ml-1" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
