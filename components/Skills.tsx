import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, CERTIFICATIONS, PERSONALITY_TRAITS } from '../constants';
import { Award, CheckCircle2, ExternalLink } from 'lucide-react';

const Skills: React.FC = () => {
  // Group skills by category
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-20 bg-white scroll-mt-28">
      <div className="container mx-auto px-4">
        
        {/* Skills Section */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Proficiency</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map(category => (
              <div key={category} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-6 pb-2 border-b border-slate-200">{category}</h3>
                <div className="space-y-4">
                  {SKILLS.filter(s => s.category === category).map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                        <span className="text-xs text-slate-500 font-mono">
                          {skill.level === 5 ? 'Expert' : skill.level >= 4 ? 'Advanced' : skill.level >= 3 ? 'Intermediate' : 'Basic'}
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-accent h-2 rounded-full" 
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personality & Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Personality Traits */}
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-highlight" /> Personality Traits
            </h3>
            <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-accent rounded-full blur-3xl opacity-20" />
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                 {PERSONALITY_TRAITS.map((trait, idx) => (
                   <div key={idx} className="flex items-start gap-2">
                     <span className="text-highlight mt-1">✓</span>
                     <span className="text-slate-300 text-sm font-light">{trait}</span>
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Award className="text-accent" /> Certifications
            </h3>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, index) => (
                <a 
                  key={index} 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white border border-slate-200 rounded-xl hover:border-accent hover:shadow-md transition-all group"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-slate-800 group-hover:text-accent transition-colors">{cert.name}</h4>
                      <p className="text-sm text-slate-500">{cert.issuer}</p>
                    </div>
                    <ExternalLink size={16} className="text-slate-300 group-hover:text-accent" />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Skills;