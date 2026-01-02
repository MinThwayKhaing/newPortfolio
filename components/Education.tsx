import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-2">
             Education
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">{edu.degree}</h3>
                <p className="text-accent font-medium">{edu.institution}</p>
                <div className="flex justify-between text-sm text-slate-500 mt-2">
                  <span>{edu.location}</span>
                  <span>{edu.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
