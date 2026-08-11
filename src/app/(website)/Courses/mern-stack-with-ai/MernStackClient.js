"use client";
import React, { useState } from 'react';
import EnrollModal from "../../../component/website/EnrollModel";
import { motion, AnimatePresence } from 'framer-motion';
// Stable Font Awesome Icons (FA version)
import { 
    FaReact, FaNodeJs, FaCode, FaLaptopCode, FaCheckCircle, 
    FaFileAlt, FaPlay, FaGraduationCap, FaUserCheck, 
    FaBriefcase, FaClock, FaChevronDown, FaChevronUp, FaTools, FaRocket 
} from 'react-icons/fa'; 
// Simple Icons (MERN Logos)
import { SiExpress, SiMongodb, SiPostman, SiGithub, SiVercel, SiRailway } from 'react-icons/si';

const MernStack = () => {
    const [openMonth, setOpenMonth] = useState(0);
    const [showEnroll, setShowEnroll] = useState(false);

    const highlights = [
        { title: "6 Months Training", icon: <FaClock className="text-blue-500" size={28} />, desc: "Complete Industrial Roadmap" },
        { title: "1 Month Free Demo", icon: <FaLaptopCode className="text-green-500" size={28} />, desc: "Try before you join" },
        { title: "3 Live Projects", icon: <FaRocket className="text-orange-500" size={28} />, desc: "Industry Level Experience" },
        { title: "Certification", icon: <FaFileAlt className="text-purple-500" size={28} />, desc: "Internship Certificate" },
    ];

    const roadmap = [
        { title: "The Foundation", desc: "Logic building with JavaScript & ES6+", status: "Month 1" },
        { title: "Frontend Magic", desc: "Building UI with React & Tailwind CSS", status: "Month 2-3" },
        { title: "Backend Mastery", desc: "API Development with Node & Express", status: "Month 4-5" },
        { title: "Real World", desc: "Live Deployment & Final 3 Projects", status: "Month 6" },
    ];

    const tools = [
        { name: "Git & GitHub", icon: <SiGithub />, desc: "Version Control" },
        { name: "Postman", icon: <SiPostman className="text-orange-500" />, desc: "API Testing" },
        { name: "Vercel", icon: <SiVercel className="text-black" />, desc: "Frontend Hosting" },
        { name: "Railway", icon: <SiRailway className="text-purple-600" />, desc: "Backend Hosting" },
    ];

    const syllabus = [
        {
            month: "Month 1-2: Frontend Foundations",
            topics: ["HTML5 & CSS3 Advanced", "Modern JavaScript (ES6+)", "Tailwind CSS & Bootstrap", "Responsive Design Mastery"],
            icon: <FaCode className="text-orange-500" />
        },
        {
            month: "Month 3: React.js Deep Dive",
            topics: ["Components & Hooks", "State Management (Redux)", "Context API", "API Integration with Axios"],
            icon: <FaReact className="text-cyan-400" />
        },
        {
            month: "Month 4-5: Backend & Database",
            topics: ["Node.js Runtime", "Express.js Framework", "MongoDB & Mongoose", "Authentication (JWT)"],
            icon: <FaNodeJs className="text-green-500" />
        },
        {
            month: "Month 6: Live Projects & Deployment",
            topics: ["Deployment on AWS/Vercel", "3 Major Industry Projects", "Interview Preparation", "Portfolio Building"],
            icon: <FaRocket className="text-red-500" />
        }
    ];

    return (
        <div className="pt-20 bg-white font-sans overflow-hidden">

            {/* --- HERO SECTION --- */}
            <section className="relative bg-slate-900 py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                                Admission Open 2026
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
                                MERN Stack <br /> <span className="text-blue-500">With AI.</span>
                            </h1>
                            <p className="text-slate-400 text-lg md:text-xl font-medium mb-10 max-w-xl leading-relaxed">
                                Become a Job-Ready Full Stack Developer. Zero se Hero level training with real-world projects.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <button
                                    onClick={() => setShowEnroll(true)}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-blue-500/20"
                                >
                                    Enroll for ₹7000
                                </button>
                                <button
                                    onClick={() => setShowEnroll(true)}
                                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all"
                                >
                                    Join Free Demo
                                </button>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-[3rem] p-10 shadow-2xl relative">
                            <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-6 py-2 rounded-full font-black text-xs rotate-12">
                                Best Seller!
                            </div>
                            <h3 className="text-slate-900 text-3xl font-black mb-6 tracking-tighter">Course Overview</h3>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-slate-700 font-bold"><FaCheckCircle className="text-green-500" size={18} /> 6 Months Duration</div>
                                <div className="flex items-center gap-3 text-slate-700 font-bold"><FaCheckCircle className="text-green-500" size={18} /> 1 Month Free Demo</div>
                                <div className="flex items-center gap-3 text-slate-700 font-bold"><FaCheckCircle className="text-green-500" size={18} /> 3 Major Live Projects</div>
                                <div className="flex items-center gap-3 text-slate-700 font-bold"><FaCheckCircle className="text-green-500" size={18} /> Internship Certificate</div>
                            </div>
                            <div className="border-t border-slate-100 pt-6">
                                <div className="text-4xl font-black text-slate-900 mb-1">₹7000</div>
                                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest leading-none">Full Course One-time Fee</p>
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

            {/* --- ROADMAP SECTION --- */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-slate-900 tracking-tight">6-Month Career Roadmap</h2>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">Zero se Developer tak ka safar</p>
                </div>
                <div className="grid md:grid-cols-4 gap-6 relative">
                    {roadmap.map((step, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -10 }}
                            className="p-8 bg-slate-50 rounded-[2.5rem] border-l-4 border-blue-600 relative"
                        >
                            <span className="text-5xl font-black text-slate-200 absolute top-4 right-6">{i+1}</span>
                            <div className="bg-blue-100 text-blue-700 text-[10px] font-black px-3 py-1 rounded-full inline-block mb-4">
                                {step.status}
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-2">{step.title}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- WHO CAN JOIN --- */}
            <section className="bg-slate-900 py-24 px-6 text-white">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-black mb-8 leading-tight">Who is this Course for?</h2>
                        <div className="space-y-6">
                            {[
                                { title: "College Students", desc: "BCA, MCA, B.Tech students for Credits & Internships.", icon: <FaGraduationCap/> },
                                { title: "Career Switchers", desc: "Non-IT professionals wanting to enter Tech.", icon: <FaUserCheck/> },
                                { title: "Aspiring Freelancers", desc: "Start building and selling your own Web Apps.", icon: <FaBriefcase/> }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start bg-white/5 p-6 rounded-3xl border border-white/10">
                                    <div className="p-3 bg-blue-600 rounded-2xl text-xl">{item.icon}</div>
                                    <div>
                                        <h4 className="font-black text-lg">{item.title}</h4>
                                        <p className="text-slate-400 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="relative group">
                        <div className="aspect-video bg-slate-800 rounded-[3rem] border-4 border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
                            <div className="text-center group-hover:scale-110 transition-transform duration-500">
                                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-blue-500">
                                    <FaPlay className="text-white ml-1" />
                                </div>
                                <p className="font-black uppercase tracking-widest text-[10px]">Student Success Stories</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white text-slate-900 p-6 rounded-[2rem] shadow-xl">
                            <p className="font-black text-2xl">100%</p>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Practical Focus</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SYLLABUS --- */}
            <section className="py-24 bg-slate-50 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Detailed Syllabus.</h2>
                    </div>

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
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-10 pb-8 md:px-20">
                                                <ul className="grid md:grid-cols-2 gap-4">
                                                    {item.topics.map((topic, i) => (
                                                        <li key={i} className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> {topic}
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
                <div className="mb-16">
                    <FaTools size={40} className="mx-auto text-blue-600 mb-4" />
                    <h2 className="text-3xl font-black tracking-tight mb-2">Modern Developer Toolbox</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {tools.map((tool, i) => (
                        <div key={i} className="p-8 rounded-[3rem] border border-slate-100 hover:border-blue-200 transition-all group">
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
                courseTitle="MERN Stack Mastery"
            />

        </div>
    );
};

export default MernStack;
