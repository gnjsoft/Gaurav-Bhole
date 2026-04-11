import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
          Professional <span className="text-blue-600">Journey</span>
        </h2>
        <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
          A track record of managing critical data center infrastructure and delivering high-availability solutions.
        </p>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-slate-200 transform md:-translate-x-1/2"></div>

          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className={`relative flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Spacer for the other side */}
              <div className="hidden md:block w-1/2" />

              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white transform -translate-x-2 md:-translate-x-1/2 z-10 shadow-lg"></div>

              {/* Content Card */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-400 transition shadow-md group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition">{exp.role}</h3>
                    <div className="flex items-center text-slate-500 text-sm mt-1 sm:mt-0 bg-slate-50 border border-slate-100 px-2 py-1 rounded">
                      <Calendar size={14} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-slate-600 font-medium mb-3">
                    <Briefcase size={16} className="mr-2 text-blue-500" />
                    {exp.company}
                  </div>
                  
                  <div className="flex items-center text-slate-500 text-sm mb-4">
                    <MapPin size={14} className="mr-1" />
                    {exp.location}
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start text-slate-600 text-sm">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;