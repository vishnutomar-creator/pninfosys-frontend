"use client";
import React, { useState, useEffect } from 'react';
import EnrollModal from "../../../component/website/EnrollModel";
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaPython, FaChartBar, FaCheckCircle, FaFileExcel,
    FaGraduationCap, FaUserCheck, FaChevronDown, FaChevronUp, FaChartPie
} from 'react-icons/fa';
import { SiPandas, SiNumpy, SiPython, SiMysql } from 'react-icons/si';
import { TbChartHistogram, TbChartLine } from 'react-icons/tb';

// Cycling formula-bar strings — the hero's signature element.
// Dramatizes the course's core promise: raw data -> cleaned data -> insight.
const FORMULAS = [
    { cell: "A1", code: "=RAW_DATA(sales_2026.csv)" },
    { cell: "B1", code: "=PANDAS.CLEAN(df).dropna()" },
    { cell: "C1", code: "=GROUPBY(region, revenue).sum()" },
    { cell: "D1", code: "=INSIGHT( \"Q3 growth: +18%\" )" },
];

const FormulaBar = () => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setIndex((i) => (i + 1) % FORMULAS.length), 2600);
        return () => clearInterval(t);
    }, []);
    const current = FORMULAS[index];
    return (
        <div className="flex items-center gap-0 rounded-xl border border-white/15 bg-[#0B121A] overflow-hidden shadow-lg shadow-black/30">
            <div className="px-4 py-3 bg-white/5 border-r border-white/15 font-mono text-xs font-bold text-[#E9A23B] tracking-wider">
                {current.cell}
            </div>
            <div className="px-3 py-3 border-r border-white/10 font-mono text-xs text-slate-500 select-none">fx</div>
            <div className="px-4 py-3 flex-1 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={current.code}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.3 }}
                        className="block font-mono text-xs sm:text-sm text-[#5FD98E] whitespace-nowrap"
                    >
                        {current.code}
                    </motion.span>
                </AnimatePresence>
            </div>
        </div>
    );
};

const PythonAnalysis = () => {
    const [openMonth, setOpenMonth] = useState(0);
    const [showEnroll, setShowEnroll] = useState(false);

    // Roadmap rendered as literal spreadsheet columns — order carries real meaning here.
    const roadmap = [
        { col: "A", title: "Data Foundation", desc: "Advanced Excel & Data Cleaning", status: "Month 1" },
        { col: "B", title: "Python Mastery", desc: "Logic Building & Data Structures", status: "Month 2" },
        { col: "C", title: "Analysis Libraries", desc: "Deep Dive into Pandas & NumPy", status: "Month 3–4" },
        { col: "D", title: "Visualization", desc: "Storytelling with Power BI", status: "Month 5–6" },
    ];

    const syllabus = [
        {
            month: "Phase 1: Advanced Excel & SQL",
            tab: "Sheet1",
            topics: ["Pivot Tables & Dashboards", "Data Validation", "SQL Queries", "Database Management"],
            icon: <FaFileExcel className="text-[#1D6F42]" />
        },
        {
            month: "Phase 2: Python Core for Data",
            tab: "Sheet2",
            topics: ["Functional Programming", "List Comprehensions", "File Handling", "API Extraction"],
            icon: <FaPython className="text-[#3776AB]" />
        },
        {
            month: "Phase 3: Scientific Computing",
            tab: "Sheet3",
            topics: ["Array Manipulation", "Data Cleaning", "EDA", "Handling Large Datasets"],
            icon: <SiPandas className="text-[#150458]" />
        },
        {
            month: "Phase 4: Visualization",
            tab: "Sheet4",
            topics: ["Matplotlib & Seaborn", "Interactive Plots", "Power BI", "Final Capstone Project"],
            icon: <FaChartBar className="text-[#E9A23B]" />
        }
    ];

    return (
        <div className="pt-20 bg-[#FAF7F0] font-sans overflow-hidden">
            {/* Fonts — move these <link> tags into your root layout's <head> for best practice */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900&family=JetBrains+Mono:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <style>{`
                .font-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
                .font-data { font-family: 'JetBrains Mono', monospace; }
                .grid-paper {
                    background-image:
                        linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px);
                    background-size: 42px 42px;
                }
            `}</style>

            {/* --- HERO --- */}
            <section className="relative bg-[#0F1720] py-24 px-6 grid-paper">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                        <span className="inline-flex items-center gap-2 bg-[#E9A23B] text-[#0F1720] px-4 py-1.5 rounded-md text-[11px] font-data font-bold uppercase tracking-widest mb-6">
                            Admission Open 2026
                        </span>
                        <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-[0.95] tracking-tight">
                            Data Analysis <br /> <span className="text-[#E9A23B] italic">with AI.</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-xl">
                            Raw data ko insights mein badalna seekhein. Gwalior's top industrial training for future Data Analysts.
                        </p>

                        <div className="mb-10 max-w-md">
                            <FormulaBar />
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => setShowEnroll(true)}
                                className="bg-[#E9A23B] hover:bg-[#d6912e] text-[#0F1720] px-8 py-4 rounded-xl font-data font-bold uppercase text-xs tracking-widest transition-all shadow-xl shadow-[#E9A23B]/10"
                            >
                                Enroll for ₹7000
                            </button>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#FAF7F0] rounded-2xl p-10 shadow-2xl relative border border-[#E2DCC8]">
                        <div className="absolute -top-4 -right-4 bg-[#0F1720] text-white px-6 py-2 rounded-lg font-data font-bold text-xs tracking-wide">
                            PNINFOSYS
                        </div>
                        <h3 className="font-display text-[#0F1720] text-3xl font-bold mb-6">Course Overview</h3>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3 text-slate-700 font-medium"><FaCheckCircle className="text-[#5FD98E]" /> 6 Months Industrial Training</div>
                            <div className="flex items-center gap-3 text-slate-700 font-medium"><FaCheckCircle className="text-[#5FD98E]" /> Excel + SQL + Python + Power BI</div>
                            <div className="flex items-center gap-3 text-slate-700 font-medium"><FaCheckCircle className="text-[#5FD98E]" /> Internship Certification</div>
                        </div>
                        <div className="border-t border-[#E2DCC8] pt-6">
                            <div className="font-display text-4xl font-bold text-[#0F1720]">₹7000</div>
                            <p className="text-slate-400 text-[10px] font-data uppercase tracking-widest mt-1">Complete Course Fee</p>
                        </div>
                        <button
                            onClick={() => setShowEnroll(true)}
                            className="mt-6 w-full bg-[#0F1720] hover:bg-[#182330] text-white py-4 rounded-xl font-data font-bold uppercase tracking-widest text-xs transition-all"
                        >
                            Apply Now
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* --- TOOLS & TECH STACK --- */}
            <section className="py-16 px-6 bg-white border-b border-[#E2DCC8]">
                <div className="max-w-6xl mx-auto">
                    <p className="text-center font-data text-[11px] uppercase tracking-widest text-slate-400 mb-10">
                        Tools You'll Master
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4">
                        {[
                            { name: "Excel", icon: <FaFileExcel className="text-[#1D6F42]" />, sub: "spreadsheets" },
                            { name: "SQL", icon: <SiMysql className="text-[#4479A1]" />, sub: "databases" },
                            { name: "Python", icon: <SiPython className="text-[#3776AB]" />, sub: "core language" },
                            { name: "NumPy", icon: <SiNumpy className="text-[#4D77CF]" />, sub: "arrays" },
                            { name: "Pandas", icon: <SiPandas className="text-[#150458]" />, sub: "data frames" },
                            { name: "Matplotlib", icon: <TbChartLine className="text-[#E9A23B]" />, sub: "plotting" },
                            { name: "Seaborn", icon: <TbChartHistogram className="text-[#5FD98E]" />, sub: "statistical viz" },
                            { name: "Power BI", icon: <FaChartPie className="text-[#F2C811]" />, sub: "dashboards" },
                        ].map((tool, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-[#E2DCC8] bg-[#FAF7F0] hover:border-[#E9A23B]/60 hover:-translate-y-0.5 transition-all"
                            >
                                <div className="text-4xl">{tool.icon}</div>
                                <div className="text-center">
                                    <p className="font-bold text-sm text-[#0F1720]">{tool.name}</p>
                                    <p className="font-data text-[10px] text-slate-400 uppercase tracking-wide">{tool.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SUCCESS STORIES --- */}
            <section className="bg-[#0F1720] py-24 px-6 text-white border-t border-white/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="font-data text-[11px] uppercase tracking-widest text-[#5FD98E]">// student_outcomes.log</span>
                        <h2 className="font-display text-4xl font-bold mt-3 mb-8 leading-tight">Student Success Stories</h2>
                        <div className="space-y-4">
                            {[
                                { title: "Job-Ready Skills", desc: "Students are now working in top MNCs as Data Analysts.", icon: <FaGraduationCap /> },
                                { title: "Practical Exposure", desc: "Hands-on training on real-world business datasets.", icon: <FaUserCheck /> }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start bg-white/[0.04] p-6 rounded-xl border border-white/10">
                                    <div className="p-3 bg-[#E9A23B] text-[#0F1720] rounded-lg text-xl">{item.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-lg">{item.title}</h4>
                                        <p className="text-slate-400 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="aspect-video bg-slate-800 rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative">
                            <iframe
                                className="w-full h-full object-cover"
                                src="https://www.youtube.com/embed/wMKw5bsLZU0?list=PLi7et6De6Hovu3z9rV0oKTe19sRJ5bMt6"
                                title="Student Success Story"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-[#FAF7F0] text-[#0F1720] p-6 rounded-xl shadow-xl border border-[#E2DCC8]">
                            <p className="font-display font-bold text-2xl text-[#E9A23B]">100%</p>
                            <p className="text-[10px] font-data text-slate-500 uppercase tracking-widest mt-1">Practical Training</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ROADMAP AS SPREADSHEET ROW --- */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="font-data text-[11px] uppercase tracking-widest text-[#E9A23B]">Row 1 · Career Path</span>
                    <h2 className="font-display text-4xl font-bold text-[#0F1720] mt-3">Career Roadmap</h2>
                </div>
                <div className="border border-[#E2DCC8] rounded-2xl overflow-hidden">
                    <div className="grid grid-cols-4 bg-[#0F1720]">
                        {roadmap.map((step) => (
                            <div key={step.col} className="font-data text-center text-[11px] font-bold text-[#E9A23B] py-2 border-r border-white/10 last:border-r-0">
                                {step.col}
                            </div>
                        ))}
                    </div>
                    <div className="grid md:grid-cols-4">
                        {roadmap.map((step, i) => (
                            <div key={i} className={`p-8 bg-white ${i !== roadmap.length - 1 ? 'md:border-r' : ''} border-b md:border-b-0 border-[#E2DCC8]`}>
                                <div className="bg-[#FAF7F0] text-[#0F1720] text-[10px] font-data font-bold px-3 py-1 rounded-md mb-4 inline-block border border-[#E2DCC8]">{step.status}</div>
                                <h4 className="font-display text-xl font-bold text-[#0F1720] mb-2">{step.title}</h4>
                                <p className="text-sm text-slate-500">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- WHAT YOU'LL LEARN (all skills visible at a glance, no clicks needed) --- */}
            <section className="py-24 px-6 bg-[#0F1720] border-t border-white/5">
                <div className="max-w-5xl mx-auto text-center">
                    <span className="font-data text-[11px] uppercase tracking-widest text-[#5FD98E]">// full_curriculum.json</span>
                    <h2 className="font-display text-4xl font-bold text-white mt-3 mb-4">What You'll Learn</h2>
                    <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
                        Excel se Power BI tak — pura roadmap, ek nazar mein.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {syllabus.flatMap((phase) => phase.topics).map((topic, i) => (
                            <span
                                key={i}
                                className="font-data text-xs sm:text-sm text-slate-200 bg-white/[0.04] border border-white/10 px-4 py-2.5 rounded-lg hover:border-[#E9A23B]/50 hover:text-[#E9A23B] transition-colors"
                            >
                                {topic}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SYLLABUS AS SPREADSHEET TABS --- */}
            <section className="py-24 bg-white px-6 border-t border-[#E2DCC8]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-display text-4xl font-bold text-center text-[#0F1720] mb-16">Detailed Syllabus.</h2>
                    <div className="space-y-3">
                        {syllabus.map((item, index) => (
                            <div key={index} className="bg-[#FAF7F0] rounded-xl border border-[#E2DCC8] overflow-hidden">
                                <button
                                    onClick={() => setOpenMonth(openMonth === index ? -1 : index)}
                                    className="w-full p-5 flex items-center justify-between hover:bg-white transition-all text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="font-data text-[10px] font-bold text-[#E9A23B] bg-[#0F1720] px-2 py-1 rounded">{item.tab}</span>
                                        <div className="p-2.5 bg-white rounded-lg border border-[#E2DCC8]">{item.icon}</div>
                                        <span className="font-bold text-[#0F1720]">{item.month}</span>
                                    </div>
                                    {openMonth === index ? <FaChevronUp className="text-slate-400" /> : <FaChevronDown className="text-slate-400" />}
                                </button>
                                <AnimatePresence>
                                    {openMonth === index && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                                            <div className="px-9 pb-7">
                                                <ul className="grid md:grid-cols-2 gap-3">
                                                    {item.topics.map((topic, i) => (
                                                        <li key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                                                            <span className="font-data text-[#E9A23B] text-xs">›</span> {topic}
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