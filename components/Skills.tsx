import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { SKILLS } from '../constants';
import { Server, Cpu, Shield, Network, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  // Transform data for the radar chart
  const chartData = SKILLS.map(skill => ({
    subject: skill.category,
    A: skill.items.length * 20, // Arbitrary weight for visualization
    fullMark: 150,
  }));

  const getIcon = (category: string) => {
    if (category.includes('Data Center')) return <Server className="w-6 h-6 text-blue-500" />;
    if (category.includes('Virtualization')) return <Cpu className="w-6 h-6 text-purple-500" />;
    if (category.includes('Operating')) return <Terminal className="w-6 h-6 text-green-500" />;
    if (category.includes('Network')) return <Network className="w-6 h-6 text-orange-500" />;
    return <Shield className="w-6 h-6 text-red-500" />;
  };

  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
          Technical <span className="text-blue-600">Expertise</span>
        </h2>

        <div className="flex flex-wrap items-center">
          {/* Chart Section */}
          <div className="w-full lg:w-5/12 mb-12 lg:mb-0">
            <div className="h-[400px] w-full bg-slate-50 rounded-2xl border border-slate-200 p-4 shadow-sm">
               <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                  <PolarGrid stroke="#cbd5e1" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                  <Radar
                    name="Skill Level"
                    dataKey="A"
                    stroke="#2563eb"
                    strokeWidth={3}
                    fill="#3b82f6"
                    fillOpacity={0.4}
                  />
                </RadarChart>
              </ResponsiveContainer>
              <p className="text-center text-slate-500 text-sm mt-4">Core Competency Distribution</p>
            </div>
          </div>

          {/* List Section */}
          <div className="w-full lg:w-7/12 lg:pl-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SKILLS.map((skillGroup, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition duration-300 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    {getIcon(skillGroup.category)}
                    <h3 className="text-xl font-semibold text-slate-800">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-white text-slate-600 text-sm rounded-md border border-slate-200 shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;