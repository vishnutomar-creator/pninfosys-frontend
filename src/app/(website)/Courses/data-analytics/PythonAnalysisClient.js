"use client";
import React, { useState } from 'react';
import EnrollModal from "../../../component/website/EnrollModel";
import { motion, AnimatePresence } from 'framer-motion';
// Stable Icons
import {
    FaPython, FaDatabase, FaChartBar, FaCheckCircle,
    FaPlay, FaGraduationCap, FaUserCheck,
    FaBriefcase, FaClock, FaChevronDown, FaChevronUp, FaTools, FaFileExcel
} from 'react-icons/fa';
import { SiPandas, SiNumpy, SiJupyter } from 'react-icons/si';

const PythonAnalysis = () => {
    const [openMonth, setOpenMonth] = useState(0);
    const [showEnroll, setShowEnroll] = useState(false);

    // Syllabus & Roadmap Data (Same as before)
    const roadmap = [
        { title: "Data Foundation", desc: "Mastering Advanced Excel & Data Cleaning", status: "Month 1" },
        { title: "Python Mastery", desc: "Logic Building & Data Structures in Python", status: "Month 2" },
        { title: "Analysis Libraries", desc: "Deep Dive into Pandas & NumPy", status: "Month 3-4" },
        { title: "Visualization", desc: "Storytelling with Power BI & Dashboards", status: "Month 5-6" },
    ];

    const syllabus = [
        {
            month: "Phase 1: Advanced Excel & SQL",
            topics: ["Pivot Tables & Dashboards", "Data Validation", "SQL Queries", "Database Management"],
            icon: <FaFileExcel className="text-green-600" />
        },
        {
            month: "Phase 2: Python Core for Data",
            topics: ["Functional Programming", "List Comprehensions", "File Handling", "API Extraction"],
            icon: <FaPython className="text-blue-500" />
        },
        {
            month: "Phase 3: Scientific Computing",
            topics: ["Array Manipulation", "Data Cleaning", "EDA", "Handling Large Datasets"],
            icon: <SiPandas className="text-indigo-800" />
        },
        {
            month: "Phase 4: Visualization",
            topics: ["Matplotlib & Seaborn", "Interactive Plots", "Power BI", "Final Capstone Project"],
            icon: <FaChartBar className="text-orange-500" />
        }
    ];

    return (
        <div className="pt-20 bg-white font-sans overflow-hidden">

            {/* --- HERO SECTION --- */}
            <section className="relative bg-slate-900 py-24 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                        <span className="bg-yellow-500 text-slate-900 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Admission Open 2026
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                            Data Analysis <br /> <span className="text-yellow-500">with AI.</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl font-medium mb-10 max-w-xl">
                            Raw data ko insights mein badalna seekhein. Gwalior's top industrial training for future Data Analysts.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => setShowEnroll(true)}
                                className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-8 py-4 rounded-2xl font-black uppercase text-xs transition-all shadow-xl shadow-yellow-500/20"
                            >
                                Enroll for ₹7000
                            </button>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-[3rem] p-10 shadow-2xl relative">
                        <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-6 py-2 rounded-full font-black text-xs rotate-12">
                            PNINFOSYS
                        </div>
                        <h3 className="text-slate-900 text-3xl font-black mb-6">Course Overview</h3>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3 text-slate-700 font-bold"><FaCheckCircle className="text-green-500" /> 6 Months Industrial Training</div>
                            <div className="flex items-center gap-3 text-slate-700 font-bold"><FaCheckCircle className="text-green-500" /> Excel + SQL + Python + Power BI</div>
                            <div className="flex items-center gap-3 text-slate-700 font-bold"><FaCheckCircle className="text-green-500" /> Internship Certification</div>
                        </div>
                        <div className="border-t border-slate-100 pt-6">
                            <div className="text-4xl font-black text-slate-900">₹7000</div>
                            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Complete Course Fee</p>
                        </div>
                        <button
                            onClick={() => setShowEnroll(true)}
                            className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all"
                        >
                            Apply Now
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* --- SUCCESS STORIES (VIDEO SECTION) --- */}
            <section className="bg-slate-900 py-24 px-6 text-white">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-black mb-8 leading-tight">Student Success Stories</h2>
                        <div className="space-y-6">
                            {[
                                { title: "Job-Ready Skills", desc: "Students are now working in top MNCs as Data Analysts.", icon: <FaGraduationCap /> },
                                { title: "Practical Exposure", desc: "Hands-on training on real-world business datasets.", icon: <FaUserCheck /> }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start bg-white/5 p-6 rounded-3xl border border-white/10">
                                    <div className="p-3 bg-yellow-500 text-slate-900 rounded-2xl text-xl">{item.icon}</div>
                                    <div>
                                        <h4 className="font-black text-lg">{item.title}</h4>
                                        <p className="text-slate-400 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* VIDEO PLAYER CARD */}
                    <div className="relative group">
                        <div className="aspect-video bg-slate-800 rounded-[3rem] border-4 border-white/10 overflow-hidden shadow-2xl relative">
                            {/* Aap yahan iframe ya video tag use kar sakte ho */}
                            <iframe
                                className="w-full h-full object-cover"
                                src="https://www.youtube.com/embed/wMKw5bsLZU0?list=PLi7et6De6Hovu3z9rV0oKTe19sRJ5bMt6"
                                title="Student Success Story"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white text-slate-900 p-6 rounded-[2rem] shadow-xl">
                            <p className="font-black text-2xl text-blue-600">100%</p>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Practical Training</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ROADMAP SECTION --- */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-slate-900">Career Roadmap</h2>
                </div>
                <div className="grid md:grid-cols-4 gap-6 relative">
                    {roadmap.map((step, i) => (
                        <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border-l-4 border-yellow-500 relative">
                            <span className="text-5xl font-black text-slate-200 absolute top-4 right-6">{i + 1}</span>
                            <div className="bg-yellow-100 text-yellow-700 text-[10px] font-black px-3 py-1 rounded-full mb-4 inline-block">{step.status}</div>
                            <h4 className="text-xl font-black text-slate-900 mb-2">{step.title}</h4>
                            <p className="text-sm text-slate-500">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- SYLLABUS SECTION --- */}
            <section className="py-24 bg-slate-50 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-black text-center mb-16">Detailed Syllabus.</h2>
                    <div className="space-y-4">
                        {syllabus.map((item, index) => (
                            <div key={index} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setOpenMonth(openMonth === index ? -1 : index)}
                                    className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-all text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-slate-50 rounded-2xl">{item.icon}</div>
                                        <span className="font-black text-slate-800">{item.month}</span>
                                    </div>
                                    {openMonth === index ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                <AnimatePresence>
                                    {openMonth === index && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                                            <div className="px-10 pb-8">
                                                <ul className="grid md:grid-cols-2 gap-4">
                                                    {item.topics.map((topic, i) => (
                                                        <li key={i} className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                                                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div> {topic}
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

            {/* --- ENROLL MODAL --- */}
            <EnrollModal
                isOpen={showEnroll}
                onClose={() => setShowEnroll(false)}
                courseTitle="Data Analysis with Python"
            />

        </div>
    );
};

export default PythonAnalysis;
