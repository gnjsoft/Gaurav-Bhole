import React, { useState, useRef, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, Download, 
  Server, Cpu, Shield, Network, Terminal,
  MessageSquare, X, Send, Bot, Sparkles,
  GraduationCap, Github, Linkedin, Menu
} from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { PERSONAL_INFO, EXPERIENCES, SKILLS, PROFILE_IMAGE, RESUME_PATH } from './constants';
import { ChatSender, ChatMessage } from './types';
import { generateChatResponse } from './services/geminiService';

// --- COMPONENTS ---

const Sidebar: React.FC<{ isOpen: boolean; toggle: () => void }> = ({ isOpen, toggle }) => {
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if on mobile
    if (window.innerWidth < 768) {
      toggle();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden" 
          onClick={toggle}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 left-0 h-screen bg-slate-50 border-r border-slate-200 z-40
        w-72 transform transition-transform duration-300 ease-in-out flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
      `}>
        {/* Header Section */}
        <div className="p-8 text-center border-b border-slate-200 bg-white">
          <div className="w-32 h-32 mx-auto mb-4 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 overflow-hidden shadow-md border-4 border-white">
             <img 
               src={PROFILE_IMAGE} 
               alt={PERSONAL_INFO.name}
               className="w-full h-full object-cover"
             />
          </div>
          <h1 className="text-xl font-bold text-slate-900">{PERSONAL_INFO.name}</h1>
          <p className="text-sm text-cyan-600 font-bold mt-2 uppercase tracking-wide">{PERSONAL_INFO.title}</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-4 overflow-y-auto">
          <ul className="space-y-1">
            {['About', 'Experience', 'Skills', 'Education'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className="flex items-center px-4 py-3 text-slate-600 hover:text-cyan-600 hover:bg-white hover:shadow-sm rounded-lg transition-all group"
                >
                  <span className="text-sm font-medium tracking-wide group-hover:translate-x-1 transition-transform">{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer/Contact Info */}
        <div className="p-6 border-t border-slate-200 bg-white">
          <p className="text-xs text-center text-slate-400">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}.
          </p>
        </div>
      </aside>
    </>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 md:px-16 py-20 bg-white">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Column */}
        <div className="order-2 md:order-1 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Hi, I'm <span className="text-cyan-600">{PERSONAL_INFO.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-600 font-light mb-8">
            A dedicated <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-500 to-blue-600">{PERSONAL_INFO.title}</span> based in Pune/Mumbai.
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed mb-10 border-l-4 border-cyan-500 pl-6">
            {PERSONAL_INFO.objective}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 text-slate-600 mb-10">
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-cyan-600" />
              <span>{PERSONAL_INFO.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-cyan-600" />
              <span>{PERSONAL_INFO.phone}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md font-medium transition shadow-sm hover:shadow-md border border-transparent"
            >
              Contact Me
            </a>
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              download="Gaurav_Bhole_CV.pdf"
              className="px-8 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-md font-medium transition flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-in fade-in slide-in-from-right-8 duration-1000">
           <div className="relative w-64 h-64 md:w-80 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-8 border-slate-50 ring-1 ring-slate-100 transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={PROFILE_IMAGE} 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
           </div>
        </div>

      </div>
    </section>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-8 md:px-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl">
        <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-2">My Journey</h2>
        <h3 className="text-3xl font-bold text-slate-900 mb-12">Professional Experience</h3>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 border-l border-slate-300 group">
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-slate-300 rounded-full group-hover:bg-cyan-600 transition-colors"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                <h4 className="text-xl font-bold text-slate-800">{exp.role}</h4>
                <span className="text-sm font-mono text-slate-500 bg-white px-2 py-1 rounded border border-slate-200 mt-1 sm:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <div className="text-cyan-600 font-medium mb-1">{exp.company}</div>
              <div className="text-slate-400 text-sm mb-4 flex items-center gap-1">
                <MapPin size={12} /> {exp.location}
              </div>

              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start">
                    <span className="mr-2 mt-2 w-1 h-1 bg-cyan-400 rounded-full flex-shrink-0"></span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsSection: React.FC = () => {
  const chartData = SKILLS.map(skill => ({
    subject: skill.category,
    A: skill.items.length * 20, 
    fullMark: 150,
  }));

  const getIcon = (category: string) => {
    if (category.includes('Data Center')) return <Server className="w-5 h-5" />;
    if (category.includes('Virtualization')) return <Cpu className="w-5 h-5" />;
    if (category.includes('Operating')) return <Terminal className="w-5 h-5" />;
    if (category.includes('Network')) return <Network className="w-5 h-5" />;
    return <Shield className="w-5 h-5" />;
  };

  return (
    <section id="skills" className="py-20 px-8 md:px-16 bg-white border-t border-slate-200">
      <div className="max-w-5xl">
        <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-2">Expertise</h2>
        <h3 className="text-3xl font-bold text-slate-900 mb-12">Technical Skills</h3>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          
          {/* Skill Lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 order-2 xl:order-1">
            {SKILLS.map((skillGroup, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:border-cyan-200 transition">
                <div className="flex items-center gap-3 mb-4 text-cyan-600">
                  {getIcon(skillGroup.category)}
                  <h4 className="font-semibold text-slate-800">{skillGroup.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white border border-slate-200 rounded text-slate-600 hover:border-cyan-200 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="h-[300px] md:h-[400px] w-full bg-slate-50 rounded-2xl border border-slate-100 p-4 order-1 xl:order-2 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10, fontWeight: 500 }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                <Radar
                  name="Skill Level"
                  dataKey="A"
                  stroke="#0891b2"
                  strokeWidth={2}
                  fill="#06b6d4"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 px-8 md:px-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl">
        <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-2">Background</h2>
        <h3 className="text-3xl font-bold text-slate-900 mb-12">Education & Languages</h3>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-cyan-600">
              <GraduationCap size={20} />
              <h4 className="text-lg font-bold text-slate-800">Education</h4>
            </div>
            <div className="space-y-8">
              {PERSONAL_INFO.education.map((edu, idx) => (
                <div key={idx} className="relative pl-6 border-l border-slate-300">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-white border-2 border-slate-300 rounded-full"></div>
                  <h5 className="font-bold text-slate-800">{edu.degree}</h5>
                  <p className="text-slate-500 text-sm mt-1">{edu.institution}</p>
                  <span className="inline-block mt-2 text-xs font-mono text-slate-500">
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-cyan-600">
              <MessageSquare size={20} />
              <h4 className="text-lg font-bold text-slate-800">Languages</h4>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {PERSONAL_INFO.languages.map((lang, idx) => (
                <div key={idx} className="p-4 bg-white border border-slate-200 rounded text-center text-slate-700 shadow-sm hover:border-cyan-200 transition-colors">
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      text: "Hi! I'm Gaurav's AI assistant. Ask me anything about his experience.",
      sender: ChatSender.BOT,
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: ChatSender.USER,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const history = messages.map(m => ({
      role: m.sender === ChatSender.USER ? 'user' : 'model',
      parts: [{ text: m.text }]
    }));

    const responseText = await generateChatResponse(history, userMsg.text);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      text: responseText,
      sender: ChatSender.BOT,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[320px] md:w-[380px] h-[500px] bg-white border border-slate-200 rounded-lg shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          <div className="bg-slate-900 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-cyan-600 p-1.5 rounded-full">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <h3 className="font-medium text-white text-sm">Chat with Gaurav</h3>
                <p className="text-[10px] text-slate-400 flex items-center gap-1">
                  <Sparkles size={8} /> AI Powered
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === ChatSender.USER ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed shadow-sm ${
                    msg.sender === ChatSender.USER 
                      ? 'bg-cyan-600 text-white' 
                      : 'bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white border-t border-slate-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-slate-50 text-slate-900 border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 placeholder:text-slate-400"
              />
              <button 
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="bg-cyan-600 text-white p-2 rounded hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-slate-700' : 'bg-cyan-600 hover:bg-cyan-700'} text-white p-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

// --- MAIN APP ---

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-cyan-100 selection:text-cyan-900">
      {/* Mobile Toggle Button (Visible only on small screens) */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-white p-2 rounded-md shadow-md border border-slate-200 text-slate-700"
        >
          <Menu size={24} />
        </button>
      </div>

      <Sidebar isOpen={mobileMenuOpen} toggle={() => setMobileMenuOpen(false)} />

      {/* Main Content Area - Pushed right on desktop */}
      <main className="md:ml-72 transition-all duration-300">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        
        {/* Simple Footer for Main Content */}
        <footer className="py-8 text-center text-slate-400 text-sm border-t border-slate-200 bg-white">
          <p>Designed by Gayatri Chourasiya</p>
        </footer>
      </main>

      <AIChat />
    </div>
  );
};

export default App;