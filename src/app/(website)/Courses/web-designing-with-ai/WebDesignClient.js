"use client";
import React, { useState } from 'react';
import EnrollModal from "../../../component/website/EnrollModel";
import { motion, AnimatePresence } from 'framer-motion';
// Lucide React Icons - Super Stable & Clean
import { 
    Palette, Brush, CheckCircle, ChevronDown, 
    ChevronUp, Wrench, Wand2, Monitor, 
    Layers, Layout, Laptop, Code2, Globe
} from 'lucide-react';

const WebDesign = () => {
    const [openMonth, setOpenMonth] = useState(0);
    const [showEnroll, setShowEnroll] = useState(false);

    const roadmap = [
        { title: "UI/UX Concepts", desc: "Color Theory, Typography & Figma Prototyping", status: "Phase 1" },
        { title: "Modern HTML/CSS", desc: "Semantic HTML5, CSS3 & Flexbox/Grid Layouts", status: "Phase 2" },
        { title: "Responsive Frameworks", desc: "Mobile-first design with Tailwind & Bootstrap", status: "Phase 3" },
        { title: "Portfolio Projects", desc: "Live Website Deployment & Vanilla JS Animations", status: "Phase 4" },
    ];

    const syllabus = [
        {
            month: "Phase 1: UI/UX & Graphics",
            topics: ["Introduction to Figma", "Wireframing & Prototyping", "UX Case Studies", "Design Systems"],
            icon: <Palette className="text-pink-500" />
        },
        {
            month: "Phase 2: Modern Frontend",
            topics: ["HTML5 Structure", "Advanced CSS3 Animations", "SASS Preprocessing", "Web Accessibility"],
            icon: <Code2 className="text-orange-500" />
        },
        {
            month: "Phase 3: Utility Frameworks",
            topics: ["Tailwind CSS Mastery", "Bootstrap Grid System", "Responsive Breakpoints", "Custom UI Components"],
            icon: <Layers className="text-cyan-400" />
        },
        {
            month: "Phase 4: JavaScript & Deploy",
            topics: ["Vanilla JS Basics", "GitHub Pages & Netlify", "Freelancing Tips", "Final Portfolio Website"],
            icon: <Wand2 className="text-yellow-500" />
        }
    ];

    const tools = [
        { name: "Figma", icon: <Layout className="text-purple-500" />, desc: "UI/UX Design" },
        { name: "Tailwind", icon: <Layers className="text-cyan-400" />, desc: "CSS Framework" },
        { name: "HTML5/CSS3", icon: <Monitor className="text-orange-600" />, desc: "Web Structure" },
        { name: "JavaScript", icon: <Code2 className="text-yellow-500" />, desc: "Vanilla JS" },
    ];

    return (
        <div className="pt-20 bg-white font-sans overflow-hidden">
            
            {/* --- HERO SECTION --- */}
            <section className="relative bg-slate-900 py-24 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px]"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                                Design Batch 2026
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
                                Web designing <br /> <span className="text-pink-500">with AI.</span>
                            </h1>
                            <p className="text-slate-400 text-lg md:text-xl font-medium mb-10 max-w-xl leading-relaxed">
                                Professional UI/UX & Frontend Design Training in Gwalior. Zero se hero level creative skills seekhein.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <button
                                    onClick={() => setShowEnroll(true)}
                                    className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-pink-500/20"
                                >
                                    Apply for ₹3000
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
                            <div className="absolute -top-4 -right-4 bg-pink-600 text-white px-6 py-2 rounded-full font-black text-xs rotate-12">
                                Gwalior's Best
                            </div>
                            <h3 className="text-slate-900 text-3xl font-black mb-6 tracking-tighter">Design Toolkit</h3>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle className="text-green-500" size={20} /> UI/UX Design with Figma</div>
                                <div className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle className="text-green-500" size={20} /> Advanced CSS, Tailwind & JS</div>
                                <div className="flex items-center gap-3 text-slate-700 font-bold"><CheckCircle className="text-green-500" size={20} /> Internship Certificate</div>
                            </div>
                            <div className="border-t border-slate-100 pt-6">
                                <div className="text-4xl font-black text-slate-900 mb-1">₹3000</div>
                                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest leading-none">Full Course Fee</p>
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
                                    {openMonth === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                <AnimatePresence>
                                    {openMonth === index && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                                            <div className="px-10 pb-8 md:px-20">
                                                <ul className="grid md:grid-cols-2 gap-4">
                                                    {item.topics.map((topic, i) => (
                                                        <li key={i} className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                                                            <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div> {topic}
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
                        <div key={i} className="p-8 rounded-[3rem] border border-slate-100 hover:border-pink-200 transition-all group">
                            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                {React.cloneElement(tool.icon, { size: 48 })}
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
                courseTitle="Webcraft Masterclass"
            />

        </div>
    );
};

export default WebDesign;
