import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE, CONTACT_LINKS, STATS } from '../constants';
import { ArrowRight, Download, Award, Layers } from 'lucide-react';
import { generateResume } from '../generatePDF';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 bg-slate-900 text-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-highlight/20 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider text-accent bg-accent/10 rounded-full">
            AVAILABLE FOR OPPORTUNITIES
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">{PROFILE.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300 mb-6 font-light">
            {PROFILE.role}
          </h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            {PROFILE.summary}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {CONTACT_LINKS.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 border border-slate-700 hover:border-accent"
              >
                <link.icon size={20} className="text-accent" />
                <span className="font-medium">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-12">
            <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex items-center justify-center gap-3">
              <div className="p-2 bg-accent/20 rounded-full text-accent">
                 <Award size={24} />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">{STATS.yearsOfExperience}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Years Experience</div>
              </div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex items-center justify-center gap-3">
              <div className="p-2 bg-highlight/20 rounded-full text-highlight">
                 <Layers size={24} />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">{STATS.totalProjects}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Projects Delivered</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <a href="#experience" className="px-8 py-3 bg-accent hover:bg-sky-600 text-white font-bold rounded-full transition-colors flex items-center gap-2">
              View Experience <ArrowRight size={18} />
            </a>
            <button 
              onClick={generateResume}
              className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-full transition-colors flex items-center gap-2"
            >
              Download CV <Download size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;