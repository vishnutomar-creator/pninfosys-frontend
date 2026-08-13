"use client";
import React, { useState } from "react";
import EnrollModal from "../../../component/website/EnrollModel";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPython,
  FaBrain,
  FaRobot,
  FaCode,
  FaCheckCircle,
  FaPlay,
  FaGraduationCap,
  FaUserCheck,
  FaBriefcase,
  FaClock,
  FaChevronDown,
  FaChevronUp,
  FaTools,
  FaRocket,
  FaFileAlt,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiJupyter,
  SiGithub,
} from "react-icons/si";

const PythonWithAiClient = () => {
  const [openMonth, setOpenMonth] = useState(0);
  const [showEnroll, setShowEnroll] = useState(false);

  const highlights = [
    {
      title: "6 Months Program",
      icon: <FaClock className="text-blue-500" size={28} />,
      desc: "Complete Industrial Roadmap",
    },
    {
      title: "1 Month Free Demo",
      icon: <FaLaptopCode className="text-green-500" size={28} />,
      desc: "Try before you join",
    },
    {
      title: "AI & ML Projects",
      icon: <FaRocket className="text-orange-500" size={28} />,
      desc: "Real-world Intelligent Apps",
    },
    {
      title: "Certification",
      icon: <FaFileAlt className="text-purple-500" size={28} />,
      desc: "Internship Certificate",
    },
  ];

  const roadmap = [
    {
      title: "Python Core",
      desc: "OOPs, Data Structures, & Advanced Logic",
      status: "Month 1",
    },
    {
      title: "Data Science & Math",
      desc: "NumPy, Pandas, Statistics & EDA",
      status: "Month 2",
    },
    {
      title: "Machine Learning",
      desc: "Scikit-Learn, Regression & Classification",
      status: "Month 3-4",
    },
    {
      title: "Deep Learning & Generative AI",
      desc: "TensorFlow, PyTorch, OpenAI API & LLMs",
      status: "Month 5-6",
    },
  ];

  const tools = [
    {
      name: "Python 3",
      icon: <FaPython className="text-blue-500" size={32} />,
      desc: "Core Language",
    },
    {
      name: "TensorFlow",
      icon: <SiTensorflow className="text-orange-500" size={32} />,
      desc: "Deep Learning",
    },
    {
      name: "PyTorch",
      icon: <SiPytorch className="text-red-500" size={32} />,
      desc: "Neural Networks",
    },
    {
      name: "OpenAI API",
      icon: <FaRobot className="text-green-600" size={32} />,
      desc: "Generative AI & LLMs",
    },
    {
      name: "Scikit-Learn",
      icon: <SiScikitlearn className="text-blue-600" size={32} />,
      desc: "ML Algorithms",
    },
    {
      name: "Jupyter",
      icon: <SiJupyter className="text-orange-600" size={32} />,
      desc: "Interactive Notebooks",
    },
  ];

  const syllabus = [
    {
      month: "Month 1: Python Fundamentals & Advanced Concepts",
      topics: [
        "Python Syntax, Control Flow, and Functions",
        "Object-Oriented Programming (OOPs) in Python",
        "File I/O, Exception Handling, & Modules",
        "Data Structures: Lists, Tuples, Dictionaries, Sets",
      ],
      icon: <FaPython className="text-blue-500" />,
    },
    {
      month: "Month 2: Data Science & Analytics Foundations",
      topics: [
        "NumPy for High-Performance Scientific Computing",
        "Pandas Data Frames, Cleaning, & Manipulation",
        "Exploratory Data Analysis (EDA) & Data Wrangling",
        "Data Visualization with Matplotlib & Seaborn",
      ],
      icon: <SiPandas className="text-indigo-600" />,
    },
    {
      month: "Month 3-4: Machine Learning Core",
      topics: [
        "Supervised Learning: Linear & Logistic Regression, Decision Trees",
        "Unsupervised Learning: K-Means Clustering, PCA",
        "Model Evaluation, Cross-Validation & Hyperparameter Tuning",
        "Scikit-Learn Pipelines & Feature Engineering",
      ],
      icon: <SiScikitlearn className="text-[#F7931E]" />,
    },
    {
      month: "Month 5-6: Deep Learning, Neural Networks & Generative AI",
      topics: [
        "Artificial Neural Networks (ANN) & Convolutional Neural Networks (CNN)",
        "Deep Learning Frameworks: PyTorch & TensorFlow",
        "Natural Language Processing (NLP) & Computer Vision Basics",
        "Generative AI, OpenAI APIs, Prompt Engineering & LLM Integration",
        "Deployment of AI Models & Live Capstone Project",
      ],
      icon: <FaBrain className="text-[#0096FF]" />,
    },
  ];

  return (
    <div className="pt-20 bg-white font-sans overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-900 py-24 px-6 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-[#0096FF] text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">
              Industrial Training Program 2026
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Python Development <br />
              <span className="text-[#0096FF]">With AI Integration.</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-medium mb-10 max-w-xl leading-relaxed">
              Master Python programming, Data Science, Machine Learning models, and Generative AI tools with 100% practical, live client project experience at PNINFOSYS Gwalior.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setShowEnroll(true)}
                className="bg-[#0096FF] hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-sm tracking-wide transition-all shadow-xl shadow-blue-500/25 active:scale-95"
              >
                Start 1-Month Free Demo
              </button>
              <a
                href="#syllabus"
                className="border border-slate-700 hover:border-slate-500 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all"
              >
                Explore Syllabus
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-2xl relative"
          >
            <div className="absolute -top-3 -right-3 bg-green-500 text-white px-4 py-1 rounded-full font-bold text-xs">
              Live Projects Included
            </div>
            <h3 className="text-slate-900 text-2xl font-bold mb-6">
              Python with AI Program Overview
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                <FaCheckCircle className="text-green-500 text-lg shrink-0" />
                6 Months Industrial Training Roadmap
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                <FaCheckCircle className="text-green-500 text-lg shrink-0" />
                Python + Machine Learning + Deep Learning + LLMs
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                <FaCheckCircle className="text-green-500 text-lg shrink-0" />
                Generative AI & OpenAI API Integration
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                <FaCheckCircle className="text-green-500 text-lg shrink-0" />
                Company Internship Certificate & Placement Support
              </div>
            </div>
            <div className="border-t border-slate-100 pt-6 flex items-center justify-between">
              <div>
                <span className="text-slate-500 text-xs font-semibold uppercase block">
                  Batch Mode
                </span>
                <span className="text-slate-900 font-bold text-base">
                  Offline & Online (Gwalior)
                </span>
              </div>
              <button
                onClick={() => setShowEnroll(true)}
                className="bg-[#0096FF] hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
              >
                Enroll Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- HIGHLIGHTS SECTION --- */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4"
            >
              <div className="p-3 bg-blue-50 rounded-xl">{h.icon}</div>
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">
                  {h.title}
                </h4>
                <p className="text-xs text-slate-500 font-medium">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- ROADMAP SECTION --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#0096FF] font-bold text-xs uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">
              Structured Roadmap
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4">
              How You Will Master <span className="text-[#0096FF]">Python & AI</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {roadmap.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-3xl border border-slate-200 relative overflow-hidden"
              >
                <span className="text-xs font-bold text-[#0096FF] bg-blue-100 px-3 py-1 rounded-full inline-block mb-4">
                  {step.status}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TOOLS & TECHNOLOGIES --- */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-widest bg-blue-900/50 px-4 py-1.5 rounded-full border border-blue-800">
              Tech Stack Covered
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-4">
              Tools & Frameworks You Learn
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tools.map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 flex items-center gap-4 hover:border-[#0096FF] transition-all"
              >
                <div>{t.icon}</div>
                <div>
                  <h4 className="font-bold text-white text-lg">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SYLLABUS ACCORDION --- */}
      <section id="syllabus" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#0096FF] font-bold text-xs uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">
              Detailed Curriculum
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4">
              Course Syllabus
            </h2>
          </div>

          <div className="space-y-4">
            {syllabus.map((s, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenMonth(openMonth === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl text-xl">
                      {s.icon}
                    </div>
                    <span className="font-bold text-slate-900 text-lg">
                      {s.month}
                    </span>
                  </div>
                  {openMonth === idx ? (
                    <FaChevronUp className="text-slate-400" />
                  ) : (
                    <FaChevronDown className="text-slate-400" />
                  )}
                </button>

                <AnimatePresence>
                  {openMonth === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-2 border-t border-slate-100"
                    >
                      <ul className="space-y-2.5">
                        {s.topics.map((t, tIdx) => (
                          <li
                            key={tIdx}
                            className="flex items-center gap-3 text-slate-700 text-sm font-medium"
                          >
                            <FaCheckCircle className="text-[#0096FF] text-xs shrink-0" />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BOTTOM --- */}
      <section className="py-20 bg-slate-900 text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready to Build Next-Gen AI Applications?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Join PNINFOSYS's 1-Month Free Demo session and start learning Python with Artificial Intelligence from industry experts in Gwalior.
          </p>
          <button
            onClick={() => setShowEnroll(true)}
            className="bg-[#0096FF] hover:bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all shadow-xl shadow-blue-500/30"
          >
            Join Free 1-Month Demo
          </button>
        </div>
      </section>

      {/* Modal */}
      {showEnroll && (
        <EnrollModal
          isOpen={showEnroll}
          onClose={() => setShowEnroll(false)}
          courseTitle="Python with AI"
          courseName="Python with AI"
        />
      )}
    </div>
  );
};

export default PythonWithAiClient;
