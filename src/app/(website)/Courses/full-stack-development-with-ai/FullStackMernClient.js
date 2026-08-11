"use client";
import React, { useState } from 'react';
import EnrollModal from "../../../component/website/EnrollModel";
import { motion, AnimatePresence } from 'framer-motion';
// Stable Icons (No Export Errors)
import { 
    FaCode, FaLayerGroup, FaDatabase, FaCheckCircle, 
    FaPlay, FaGraduationCap, FaUserCheck, 
    FaLaptopCode, FaServer, FaChevronDown, FaChevronUp, FaTools, FaGlobe 
} from 'react-icons/fa'; 
// MERN Tech Icons
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, SiJavascript } from 'react-icons/si';

const FullStackMern = () => {
    const [openMonth, setOpenMonth] = useState(0);
    const [showEnroll, setShowEnroll] = useState(false);

    const roadmap = [
        { title: "Frontend Magic", desc: "HTML5, CSS3, Tailwind & Modern JavaScript", status: "Month 1-2" },
        { title: "React Mastery", desc: "Hooks, Redux, Context API & UI Design", status: "Month 3" },
        { title: "Backend Systems", desc: "Node.js, Express & Server Architecture", status: "Month 4" },
        { title: "Full Stack Integration", desc: "MongoDB, JWT Auth & Cloud Deployment", status: "Month 5-6" },
    ];

    const syllabus = [
        {
            month: "Phase 1: Frontend Excellence",
            topics: ["Semantic HTML & CSS Grid/Flexbox", "Tailwind CSS Responsive Design", "JavaScript ES6+ Concepts", "DOM Manipulation"],
            icon: <FaCode className="text-blue-500" />
        },
        {
            month: "Phase 2: React Development",
            topics: ["Component Architecture", "State Management (Redux)", "API Integration (Axios)", "React Router & Navigation"],
            icon: <SiReact className="text-cyan-400" />
        },
        {
            month: "Phase 3: Backend & Database",
            topics: ["Node.js Runtime & NPM", "Express Framework", "MongoDB CRUD Operations", "Mongoose Schemas"],
            icon: <SiNodedotjs className="text-green-500" />
        },
        {
            month: "Phase 4: Real-world Deployment",
            topics: ["JWT Authentication", "File Uploads (Multer/Cloudinary)", "GitHub & Version Control", "Hosting on Vercel/Render"],
            icon: <FaServer className="text-slate-600" />
        }
    ];

    const tools = [
        { name: "React", icon: <SiReact className="text-cyan-500" />, desc: "Frontend Library" },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" />, desc: "Runtime Env" },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, desc: "NoSQL Database" },
        { name: "Express", icon: <SiExpress className="text-slate-800" />, desc: "Backend Framework" },
    ];

    return (
        <div className="pt-20 bg-white font-sans overflow-hidden">
            
            {/* --- HERO SECTION --- */}
            <section className="relative bg-slate-900 py-24 px-6 overflow-hidden">
                <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <span className="bg-cyan-500 text-slate-900 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                                Internship + Training 2026
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
                                Full Stack <br /> <span className="text-cyan-400">MERN Developer with AI.</span>
                            </h1>
                            <p className="text-slate-400 text-lg md:text-xl font-medium mb-10 max-w-xl leading-relaxed">
                                Zero se hero tak ki development journey. Gwalior's best training with a 1-month free demo and live projects.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <button
                                    onClick={() => setShowEnroll(true)}
                                    className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-cyan-500/20"
                                >
                                    Start Learning ₹9000
                                </button>
                                <button
                                    onClick={() => setShowEnroll(true)}
                                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all"
                                >
                                    1 Month Free Demo
                                </button>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-[3rem] p-10 shadow-2xl relative">
                            <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-6 py-2 rounded-full font-black text-xs rotate-12">
                                PNINFOSYS
                            </div>
                            <h3 className="text-slate-900 text-3xl font-black mb-6 tracking-tighter">Course Overview</h3>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-slate-700 font-bold"><FaCheckCircle className="text-green-500" /> Professional MERN Curriculum</div>
                                <div className="flex items-center gap-3 text-slate-700 font-bold"><FaCheckCircle className="text-green-500" /> React + Node + Express + Mongo</div>
                                <div className="flex items-center gap-3 text-slate-700 font-bold"><FaCheckCircle className="text-green-500" /> ISO Certified Internship Cert.</div>
                            </div>
                            <div className="border-t border-slate-100 pt-6">
                                <div className="text-4xl font-black text-slate-900 mb-1">₹9000</div>
                                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest leading-none">Complete Course Fee</p>
                            </div>
                            <button
                                onClick={() => setShowEnroll(true)}
                                className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all"
                            >
                                Apply Now
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- SUCCESS STORIES VIDEO SECTION --- */}
            <section className="bg-slate-900 py-24 px-6 text-white border-t border-white/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-black mb-8 leading-tight tracking-tight">Watch Our Student <br/>Projects in Action.</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start bg-white/5 p-6 rounded-3xl border border-white/10">
                                <div className="p-3 bg-cyan-500 text-slate-900 rounded-2xl text-xl"><FaLaptopCode/></div>
                                <div>
                                    <h4 className="font-black text-lg">Project-Based Learning</h4>
                                    <p className="text-slate-400 text-sm">Ecommerce se lekar Social Media tak, real projects par kaam karein.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <div className="aspect-video bg-slate-800 rounded-[3rem] border-4 border-white/10 overflow-hidden shadow-2xl">
                            {/* Student Success/Project Video */}
                            <iframe 
                                className="w-full h-full object-cover"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="MERN Stack Success"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="absolute -top-4 -left-4 bg-cyan-500 text-slate-900 px-4 py-2 rounded-full font-black text-xs uppercase shadow-lg">
                            Live Demo
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SYLLABUS SECTION --- */}
            <section className="py-24 bg-slate-50 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16 tracking-tighter">Detailed Syllabus.</h2>
                    <div className="space-y-4">
                        {syllabus.map((item, index) => (
                            <div key={index} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setOpenMonth(openMonth === index ? -1 : index)}
                                    className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-all text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-slate-50 rounded-2xl">{item.icon}</div>
                                        <span className="font-black text-slate-800 md:text-lg">{item.month}</span>
                                    </div>
                                    {openMonth === index ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
                                </button>
                                <AnimatePresence>
                                    {openMonth === index && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                                            <div className="px-10 pb-8 md:px-20">
                                                <ul className="grid md:grid-cols-2 gap-4">
                                                    {item.topics.map((topic, i) => (
                                                        <li key={i} className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                                                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> {topic}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- TOOLS SECTION --- */}
            <section className="py-24 px-6 max-w-7xl mx-auto text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {tools.map((tool, i) => (
                        <div key={i} className="p-8 rounded-[3rem] border border-slate-100 hover:border-cyan-200 transition-all group">
                            <div className="text-5xl flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                {tool.icon}
                            </div>
                            <h4 className="font-black text-slate-900">{tool.name}</h4>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tool.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- ENROLL MODAL --- */}
            <EnrollModal
                isOpen={showEnroll}
                onClose={() => setShowEnroll(false)}
                courseTitle="Full Stack MERN Developer"
            />

        </div>
    );
};

export default FullStackMern;
