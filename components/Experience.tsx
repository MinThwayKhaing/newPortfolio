import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white scroll-mt-28">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Work History</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {EXPERIENCE.map((job, index) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0 mb-12 last:mb-0 group"
            >
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 group-last:bottom-auto group-last:h-full"></div>
              
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-[50%] top-6 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-md md:-translate-x-1/2 z-10"></div>

              <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-[45%]"></div>
                
                <div className="w-full md:w-[45%] bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{job.role}</h3>
                  <h4 className="text-lg font-medium text-accent mb-2">{job.company}</h4>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {job.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {job.location}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-highlight rounded-full flex-shrink-0"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {job.techStack && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200">
                      {job.techStack.map((tech) => (
                        <span key={tech} className="text-xs font-semibold px-2 py-1 bg-slate-200 text-slate-700 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;