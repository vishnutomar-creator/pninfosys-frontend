"use client";

import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  Code2,
  Database,
  BrainCircuit,
  GraduationCap,
  Briefcase,
  Cpu,
  CheckCircle2,
} from "lucide-react";

export default function HeroSection() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello Sir, I want to join PNINFOSYS. Please guide me.",
    );

    window.open(`https://wa.me/917000846823?text=${msg}`, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-white min-h-screen flex items-center pt-28 pb-5">
      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-100 rounded-full blur-[140px] opacity-50"></div>

      <div className="absolute bottom-0 left-0 w-75 h-75 bg-sky-100 rounded-full blur-[120px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-5 py-2 rounded-full text-sm font-bold mb-6 mt-3">
              <Sparkles size={16} />
              Software Development Company & IT Training Academy
            </div>

            {/* SEO H1 */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-slate-900">
              Software Development
              <br />
              <span className="text-[#009df2]">& IT Training</span>
              <br />
              <span className="text-slate-400">in Gwalior</span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl text-justify">
              PNINFOSYS is a Software Development Company and IT Training
              Academy committed to empowering students and businesses through
              technology. We deliver innovative software solutions, live client
              projects, industry-oriented training, internship programs and
              placement support, helping learners gain practical experience
              while enabling businesses to achieve digital growth.
            </p>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              <div>
                <h3 className="text-4xl font-black text-slate-900">
                  5000+
                </h3>
                <p className="text-slate-500 font-medium">
                  Students Trained
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-slate-900">
                  500+
                </h3>
                <p className="text-slate-500 font-medium">
                  Career Placements
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-slate-900">
                  150+
                </h3>
                <p className="text-slate-500 font-medium">
                  Client Projects Delivered
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-slate-900">
                  12+
                </h3>
                <p className="text-slate-500 font-medium">
                  Years of Excellence
                </p>
              </div>
            </div> */}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button
                onClick={handleWhatsApp}
                className="group bg-[#0096FF] hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl transition-all duration-300"
              >
                Join Free Demo Class
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition"
                />
              </button>

              <Link
                href="#popular-courses"
                className="border-2 border-slate-300 hover:border-[#0096FF] hover:text-[#0096FF] px-8 py-4 rounded-2xl font-bold transition-all duration-300"
              >
                Explore Programs
              </Link>
            </div>

            {/* Highlights */}
            {/* <div className="flex flex-wrap gap-3 mt-8">
              <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold border border-green-100">
                ✓ Placement Assistance
              </span>

              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-100">
                ✓ Company Internship Certificate
              </span>

              <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold border border-purple-100">
                ✓ Live Client Projects
              </span>

              <span className="bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold border border-orange-100">
                ✓ Software Development Exposure
              </span>

              <span className="bg-pink-50 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold border border-pink-100">
                ✓ Industry Mentorship
              </span>

              <span className="bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-100">
                ✓ Online & Offline Learning
              </span>
            </div> */}
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row gap-5 justify-center"
          >
            {/* Course Cards */}
            <div className="space-y-4">
              {/* Web Development */}
              <Link href="/Courses/web-designing-with-ai" className="block">
                <CourseCard
                  icon={<Code2 size={18} />}
                  title="Web Development"
                  sub="HTML • CSS • JavaScript • React"
                  color="text-orange-600"
                  bg="bg-orange-50"
                />
              </Link>

              {/* MERN Stack */}
              <Link href="/Courses/mern-stack-with-ai" className="block">
                <CourseCard
                  icon={<Briefcase size={18} />}
                  title="MERN Stack Development"
                  sub="MongoDB • Express • React • Node"
                  color="text-blue-600"
                  bg="bg-blue-50"
                />
              </Link>

              {/* Data Analytics */}
              <Link href="/Courses/data-analytics" className="block">
                <CourseCard
                  icon={<GraduationCap size={18} />}
                  title="Python & Data Analytics"
                  sub="Python • Pandas • Power BI"
                  color="text-green-600"
                  bg="bg-green-50"
                />
              </Link>

              {/* Machine Learning */}
              <Link href="/Courses/machine-learning-and-ai" className="block">
                <CourseCard
                  icon={<Cpu size={18} />}
                  title="Machine Learning & AI"
                  sub="ML Models • Gen AI • LLMs"
                  color="text-purple-600"
                  bg="bg-purple-50"
                />
              </Link>

              {/* Software Development */}
              <Link href="/services" className="block">
                <CourseCard
                  icon={<Database size={18} />}
                  title="Software Development"
                  sub="Web Apps • ERP • CRM • SaaS"
                  color="text-cyan-600"
                  bg="bg-cyan-50"
                />
              </Link>

              {/* Software Company + Academy */}
              <div className="bg-linear-to-r from-[#0096FF] to-blue-700 text-white p-5 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <BrainCircuit size={24} />

                  <h2 className="font-bold text-xl">
                    Software Company + Academy
                  </h2>
                </div>

                <p className="text-blue-100 text-sm leading-relaxed">
                  Learn • Build • Deliver Real-World Solutions
                </p>
              </div>
            </div>

            {/* Benefits Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="bg-linear-to-br from-slate-900 to-blue-950 text-white p-8 rounded-3xl shadow-2xl w-full lg:w-80"
            >
              <h2 className="text-2xl font-black mb-2">Why PNINFOSYS?</h2>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Learn from industry experts, work on live client projects, gain
                software development experience and earn a company internship
                certificate while building a successful career in technology.
              </p>

              <div className="space-y-4">
                <Benefit text="Live Industry Training" />
                <Benefit text="Company Internship Certificate" />
                <Benefit text="Real Client Projects" />
                <Benefit text="Software Development Experience" />
                <Benefit text="Placement Assistance" />
                <Benefit text="Mock Interviews" />
                <Benefit text="Resume & LinkedIn Optimization" />
                <Benefit text="Career Guidance & Mentorship" />
                <Benefit text="Online & Offline Classes" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const CourseCard = ({ icon, title, sub, color, bg }) => (
  <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-4">
    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center ${bg} ${color}`}
    >
      {icon}
    </div>

    <div>
      <h3 className="font-bold text-slate-900">{title}</h3>

      <p className="text-xs uppercase tracking-wider text-slate-400">{sub}</p>
    </div>
  </div>
);

const Benefit = ({ text }) => (
  <div className="flex items-center gap-3">
    <CheckCircle2 size={20} className="text-green-400 shrink-0" />

    <span className="text-slate-200">{text}</span>
  </div>
);
