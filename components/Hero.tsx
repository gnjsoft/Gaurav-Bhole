import React from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-[90vh]">
      <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
        <span id="whiteOverlay" className="w-full h-full absolute opacity-90 bg-white"></span>
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold tracking-wide uppercase">
              Immediate Joiner 
            </div>
            <h1 className="text-slate-900 font-bold text-5xl md:text-7xl">
              {PERSONAL_INFO.name}
            </h1>
            <h2 className="mt-4 text-2xl md:text-3xl text-blue-600 font-medium">
              {PERSONAL_INFO.title}
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {PERSONAL_INFO.objective}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-blue-600" />
                <span>{PERSONAL_INFO.address.split('|')[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-blue-600" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-blue-600" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
            </div>

            <div className="mt-10 flex justify-center gap-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="bg-blue-600 active:bg-blue-700 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1"
              >
                Hire Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Gaurav_Bhole_CV.pdf"
                className="bg-transparent border border-slate-300 active:bg-slate-200 hover:bg-slate-100 text-slate-700 font-bold py-3 px-8 rounded-full flex items-center gap-2 transition"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;