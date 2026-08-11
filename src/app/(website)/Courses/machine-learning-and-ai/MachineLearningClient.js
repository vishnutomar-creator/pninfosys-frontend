"use client";
import React, { useState } from 'react';
import EnrollModal from "../../../component/website/EnrollModel";
import { motion, AnimatePresence } from 'framer-motion';
// Stable Icons
import {
    FaBrain, FaRobot, FaMicrochip, FaDatabase, FaCheckCircle,
    FaPlay, FaGraduationCap, FaUserCheck,
    FaBriefcase, FaClock, FaChevronDown, FaChevronUp, FaTools, FaRocket
} from 'react-icons/fa';
// Tech Stack Icons
import { SiScikitlearn, SiTensorflow, SiPytorch, SiKeras, SiJupyter, SiPython } from 'react-icons/si';

const MachineLearning = () => {
    const [openMonth, setOpenMonth] = useState(0);
    const [showEnroll, setShowEnroll] = useState(false);

    const roadmap = [
        { title: "Maths & Python", desc: "Linear Algebra, Statistics & Advanced Python", status: "Month 1" },
        { title: "Supervised Learning", desc: "Regression, Classification & Decision Trees", status: "Month 2-3" },
        { title: "Unsupervised & NLP", desc: "Clustering & Natural Language Processing", status: "Month 4-5" },
        { title: "Deep Learning", desc: "Neural Networks & AI Model Deployment", status: "Month 6" },
    ];

    const syllabus = [
        {
            month: "Phase 1: Essentials for ML",
            topics: ["Advanced Python for AI", "NumPy & Pandas Mastery", "Matplotlib Visualization", "Statistics & Probability"],
            icon: <SiPython className="text-blue-400" />
        },
        {
            month: "Phase 2: Supervised Learning",
            topics: ["Linear & Logistic Regression", "Support Vector Machines (SVM)", "Random Forest & XGBoost", "Model Evaluation Metrics"],
            icon: <FaBrain className="text-purple-500" />
        },
        {
            month: "Phase 3: NLP & Computer Vision",
            topics: ["Text Preprocessing (NLTK)", "Sentiment Analysis", "Image Processing Basics", "Feature Engineering"],
            icon: <FaRobot className="text-green-400" />
        },
        {
            month: "Phase 4: Deep Learning & Deployment",
            topics: ["Neural Networks (ANN)", "TensorFlow & Keras Basics", "Model API with Flask/FastAPI", "Cloud Deployment (AWS/Heroku)"],
            icon: <FaRocket className="text-red-500" />
        }
    ];

    const tools = [
        { name: "Scikit-Learn", icon: <SiScikitlearn className="text-orange-500" />, desc: "ML Algorithms" },
        { name: "TensorFlow", icon: <SiTensorflow className="text-orange-600" />, desc: "Deep Learning" },
        { name: "Jupyter", icon: <SiJupyter className="text-orange-400" />, desc: "Research Lab" },
        { name: "PyTorch", icon: <SiPytorch className="text-red-600" />, desc: "AI Framework" },
    ];

    return (
        <div className="pt-20 bg-white font-sans overflow-hidden">

            {/* --- HERO SECTION --- */}
            <section className="relative bg-slate-900 py-24 px-6 overflow-hidden">
                {/* Background Glow for AI Look */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>

                <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                                Next Batch: March 10th
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
                                Machine <br /> <span className="text-purple-500">Learning with AI.</span>
                            </h1>
                            <p className="text-slate-400 text-lg md:text-xl font-medium mb-10 max-w-xl leading-relaxed">
                                Master the future of technology. Gwalior's most advanced ML course—from data cleaning to building your own AI models.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <button
                                    onClick={() => setShowEnroll(true)}
                                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-purple-500/20"
                                >
                                    Enroll for ₹7000
                                </button>
                                <button
                                    onClick={() => setShowEnroll(true)}
                                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all"
                                >
                                    Book Free Demo
                                </button>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-[3rem] p-10 shadow-2xl relative">
                            <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-6 py-2 rounded-full font-black text-xs rotate-12">
                                Trending!
                            </div>
                            <h3 className="text-slate-900 text-3xl font-black mb-6 tracking-tighter">AI Roadmap</h3>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-slate-700 font-bold"><FaCheckCircle className="text-green-500" /> 6 Months Offline Training</div>
                                <div className="flex items-center gap-3 text-slate-700 font-bold"><FaCheckCircle className="text-green-500" /> Scikit-learn + TensorFlow + NLP</div>
                                <div className="flex items-center gap-3 text-slate-700 font-bold"><FaCheckCircle className="text-green-500" /> 4 Live AI Projects</div>
                                <div className="flex items-center gap-3 text-slate-700 font-bold"><FaCheckCircle className="text-green-500" /> Industry Internship Certificate</div>
                            </div>
                            <div className="border-t border-slate-100 pt-6">
                                <div className="text-4xl font-black text-slate-900 mb-1">₹7000</div>
                                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest leading-none">Standard Batch Fee</p>
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

            {/* --- SUCCESS STORIES VIDEO --- */}
            <section className="bg-slate-900 py-24 px-6 text-white border-t border-white/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-black mb-8 leading-tight">Student AI Showcases</h2>
                        <div className="space-y-6">
                            {[
                                { title: "Research Oriented", desc: "Build models that solve real-world problems.", icon: <FaMicrochip /> },
                                { title: "Hands-on Projects", desc: "Face Recognition, Spam Detection & Chatbots.", icon: <FaRobot /> }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start bg-white/5 p-6 rounded-3xl border border-white/10">
                                    <div className="p-3 bg-purple-600 rounded-2xl text-xl">{item.icon}</div>
                                    <div>
                                        <h4 className="font-black text-lg">{item.title}</h4>
                                        <p className="text-slate-400 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="aspect-video bg-slate-800 rounded-[3rem] border-4 border-white/10 overflow-hidden shadow-2xl relative">
                            <iframe
                                className="w-full h-full object-cover"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="Machine Learning Success"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white text-slate-900 p-6 rounded-[2rem] shadow-xl">
                            <p className="font-black text-2xl text-purple-600">PNINFOSYS</p>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">Gwalior Training</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ROADMAP SECTION --- */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-slate-900 tracking-tight">6-Month ML Roadmap</h2>
                </div>
                <div className="grid md:grid-cols-4 gap-6 relative">
                    {roadmap.map((step, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="p-8 bg-slate-50 rounded-[2.5rem] border-l-4 border-purple-600 relative"
                        >
                            <span className="text-5xl font-black text-slate-200 absolute top-4 right-6">{i + 1}</span>
                            <div className="bg-purple-100 text-purple-700 text-[10px] font-black px-3 py-1 rounded-full inline-block mb-4">
                                {step.status}
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-2">{step.title}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
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
                                                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> {topic}
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
                    <FaTools size={40} className="mx-auto text-purple-600 mb-4" />
                    <h2 className="text-3xl font-black tracking-tight mb-2">Modern ML Toolbox</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {tools.map((tool, i) => (
                        <div key={i} className="p-8 rounded-[3rem] border border-slate-100 hover:border-purple-200 transition-all group">
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
                courseTitle="Machine Learning"
            />

        </div>
    );
};

export default MachineLearning;
