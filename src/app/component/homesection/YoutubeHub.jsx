"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight, Code2, Database, Layout } from 'lucide-react';

const YoutubeHub = () => {
  const tutorials = [
    {
      title: "MERN Stack: Student Result Management",
      views: "Part 1 - Setup",
      duration: "15:53 mins",
      thumbnail: "https://i.ytimg.com/vi/_IaFyzYqut4/maxresdefault.jpg", 
      link: "https://www.youtube.com/watch?v=_IaFyzYqut4",
      tag: "Full Stack",
      icon: <Code2 size={16} />
    },
    {
      title: "Python for Data Analytics: Full Course",
      views: "Part 1 - Basics",
      duration: "05:35 mins",
      thumbnail: "https://i.ytimg.com/vi/TfpBU6d7je8/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=TfpBU6d7je8",
      tag: "Data Science",
      icon: <Database size={16} />
    },
    {
      title: "Web Design: HTML, CSS & Bootstrap",
      views: "2025 Series",
      duration: "07:51 mins",
      thumbnail: "https://i.ytimg.com/vi/tTPXOrVuh0w/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=tTPXOrVuh0w",
      tag: "UI/UX Design",
      icon: <Layout size={16} />
    }
  ];

  const companies = ["TCS", "Wipro", "Accenture", "Infosys", "HCL", "Cognizant", "Capgemini", "Amazon", "Microsoft", "Google"];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* --- HEADER --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* Manual SVG to avoid Lucide Export Errors */}
              <div className="w-12 h-12 bg-[#009df2] rounded-2xl flex items-center justify-center text-white">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/>
                </svg>
              </div>
              <span className="text-[#009df2] font-black uppercase tracking-[0.2em] text-sm">Learning Ecosystem</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tighter mb-6">
              Master the Skills <br/> for <span className="text-[#009df2] underline decoration-[#009df2]">Future Tech.</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              Chahe <b>Web Design</b> ho, <b>MERN Stack</b> ho ya <b>Data Analytics</b>—hum bilkul zero level se industrial training dete hain.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <p className="text-4xl font-black text-slate-900 mb-2">3+</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-tight">Specialized <br/> Career Tracks</p>
            </div>
            <div className="bg-[#0f172a] p-8 rounded-[2rem] text-white shadow-xl">
              <p className="text-4xl font-black text- [#009df2] mb-2">100%</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-tight">Practical & <br/> Project Based</p>
            </div>
          </div>
        </div>

        {/* --- DIVERSIFIED VIDEO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {tutorials.map((video, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -12 }} 
              className="group cursor-pointer relative"
              onClick={() => window.open(video.link, '_blank')}
            >
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-6 shadow-2xl shadow-slate-200/50 border border-slate-100">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-all flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
                    <Play fill="currentColor" size={24} className="ml-1" />
                  </div>
                </div>
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 shadow-lg">
                  <span className="text-red-600">{video.icon}</span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-900">{video.tag}</span>
                </div>
              </div>
              
              <div className="px-4">
                <div className="flex items-center justify-between mb-3">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-lg">{video.views}</span>
                   <span className="text-[10px] font-bold text-slate-400">{video.duration}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- LEGAL SAFE PLACEMENT SECTION --- */}
        {/* <div className="pt-20 border-t border-slate-100">
          <div className="text-center mb-12">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-4">PNINFOSYS Students Build Careers At</h3>
            <div className="h-px w-20 bg-red-600 mx-auto"></div>
          </div>

          <div className="relative flex overflow-hidden py-10">
            <div className="flex animate-marquee whitespace-nowrap gap-16 items-center opacity-40 hover:opacity-100 transition-opacity">
              {[...companies, ...companies].map((company, i) => (
                <span key={i} className="text-3xl md:text-5xl font-black text-slate-300 hover:text-slate-500 transition-colors cursor-default uppercase tracking-tighter italic">
                  {company}
                </span>
              ))}
            </div>
          </div>
          <p className="text-center text-[10px] text-slate-300 mt-4 uppercase tracking-[0.2em]">
            *Trademark names belong to their respective owners
          </p>
        </div> */}

      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default YoutubeHub;