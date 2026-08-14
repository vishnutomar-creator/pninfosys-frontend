"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Target,
  Award,
  Users,
  Rocket,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { getMentors } from "@/services/mentorService"; // ADDED — update this path to match where mentorService.js actually lives in your project
// import vikas from "../../assets/team/vikas.webp";
// import harsh from "../../assets/team/harsh.webp";
// import rishi from "../../assets/team/rishi.webp";
// import arpit from "../../assets/team/arpit.webp";
// import neha from "../../assets/team/neha.webp";
// import abhi from "../../assets/team/Abhishek.webp";
// import vaibhav from "../../assets/team/vaibhavsir.webp";
// import niket from "../../assets/team/niketsir.webp";
// import about from "../../assets/about.png";

const About = () => {
  

  // ADDED — dynamic mentor state
  const [mentors, setMentors] = useState([]);
  const [loadingMentors, setLoadingMentors] = useState(true);
  const [mentorError, setMentorError] = useState("");

  // ADDED — fetch mentors from the existing Mentor API on every page load
  useEffect(() => {
    const fetchMentors = async () => {
      try {
        setLoadingMentors(true);
        setMentorError("");

        const res = await getMentors();
        const allMentors = res.data.mentors || [];

        const activeMentors = allMentors
          .filter((mentor) => mentor.status === "Active")
          .sort((a, b) => {
            const orderA = a.order ?? Number.MAX_SAFE_INTEGER;
            const orderB = b.order ?? Number.MAX_SAFE_INTEGER;
            return orderA - orderB;
          });

        setMentors(activeMentors);
      } catch (error) {
        setMentorError("Unable to load mentors.");
      } finally {
        setLoadingMentors(false);
      }
    };

    fetchMentors();
  }, []);

  const stats = [
    {
      label: "Students Trained",
      value: "5000+",
      icon: <Users className="text-[#0096FF]" size={28} />,
    },
    {
      label: "Placements",
      value: "500+",
      icon: <Award className="text-orange-500" size={28} />,
    },
    {
      label: "Live Projects",
      value: "150+",
      icon: <Target className="text-green-500" size={28} />,
    },
    {
      label: "Years Experience",
      value: "12+",
      icon: <Rocket className="text-red-500" size={28} />,
    },
  ];

  return (
    <div className="bg-white font-sans overflow-hidden pt-20">
      {/* --- HERO SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-60"></div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-[#0096FF]/10 text-[#0096FF] px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 inline-block">
              Software Development Company & IT Training Academy
            </span>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] tracking-tight mb-8">
              Learn.
              <br />
              <span className="text-[#0096FF]">Build.</span>
              <br />
              Grow.
            </h1>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl text-justify">
              Since 2018, PNINFOSYS has been dedicated to transforming careers and empowering businesses through technology. Our expertise spans software development, industrial training, internships, live projects and career development programs. By combining practical learning with real industry exposure, we help students build successful careers while delivering high-quality technology solutions for businesses.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm bg-slate-50 px-4 py-3 rounded-xl border">
                <CheckCircle2 size={18} className="text-[#0096FF]" />
                Industrial Training
              </div>

              <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm bg-slate-50 px-4 py-3 rounded-xl border">
                <CheckCircle2 size={18} className="text-[#0096FF]" />
                Live Projects
              </div>

              <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm bg-slate-50 px-4 py-3 rounded-xl border">
                <CheckCircle2 size={18} className="text-[#0096FF]" />
                Internship Programs
              </div>

              <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm bg-slate-50 px-4 py-3 rounded-xl border">
                <CheckCircle2 size={18} className="text-[#0096FF]" />
                Placement Assistance
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={"/about.png"}
              alt="PNINFOSYS Students"
              className="w-full rounded-[3rem] shadow-2xl object-cover"
            />

            {/* Stats Card */}
            {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-3xl shadow-xl px-8 py-6 w-[90%]">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <h3 className="text-3xl font-bold text-[#0096FF]">2018</h3>
                  <p className="text-sm text-gray-500">Founded</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-[#0096FF]">5000+</h3>
                  <p className="text-sm text-gray-500">Students Trained</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-[#0096FF]">500+</h3>
                  <p className="text-sm text-gray-500">Placements</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-[#0096FF]">150+</h3>
                  <p className="text-sm text-gray-500">Projects</p>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="bg-[#0B1120] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-center mb-6 bg-white/5 w-16 h-16 items-center rounded-2xl mx-auto border border-white/10 transition-all">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">
                {stat.value}
              </h3>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-[#0096FF] font-black uppercase tracking-[0.3em] text-xs">
              Why Choose PNINFOSYS
            </span>

            <h2 className="text-4xl md:text-6xl font-black mt-4 text-slate-900">
              What Makes
              <span className="text-[#0096FF]"> PNINFOSYS Different?</span>
            </h2>

            <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg">
              We combine industry-focused training, real-world projects,
              internships and career support to help students become job-ready
              professionals and successful developers.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <ShieldCheck className="text-[#0096FF] mb-4" size={42} />

              <h3 className="font-bold text-xl mb-3 text-slate-900">
                Live Project Experience
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Gain hands-on experience by working on real client projects and
                industry-level applications during your training.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <Users className="text-[#0096FF] mb-4" size={42} />

              <h3 className="font-bold text-xl mb-3 text-slate-900">
                Industry Expert Mentors
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Learn directly from experienced developers, trainers and
                technology professionals with real industry exposure.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <Award className="text-[#0096FF] mb-4" size={42} />

              <h3 className="font-bold text-xl mb-3 text-slate-900">
                Internship & Placement Support
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Build your resume, prepare for interviews and receive complete
                career guidance with placement assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100">
            <div className="w-12 h-12 bg-[#0096FF]/10 rounded-xl flex items-center justify-center text-[#0096FF] mb-6">
              <Target size={24} />
            </div>

            <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">
              Our Mission
            </h3>

            <p className="text-slate-500 font-medium leading-relaxed text-justify">
              To empower students and professionals with industry-relevant
              technology skills while delivering innovative software solutions
              that help businesses grow and succeed in the digital world.
            </p>
          </div>

          {/* Vision */}
          <div className="p-12 bg-[#0B1120] rounded-[3rem] text-white">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#0096FF] mb-6">
              <Globe size={24} />
            </div>

            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">
              Our Vision
            </h3>

            <p className="text-slate-400 font-medium leading-relaxed text-justify">
              To become a trusted global technology partner and a leading IT
              training academy, creating skilled professionals, innovative
              solutions, and lasting impact through technology and education.
            </p>
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h4 className="text-[#0096FF] font-black uppercase tracking-[0.3em] text-[10px] mb-4 text-center">
              Executive Team
            </h4>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6 text-center uppercase leading-[0.9]">
              Industry Mentors.
            </h2>
          </div>

          {/* ADDED — loading / error / empty / data states for dynamic mentors */}
          {loadingMentors ? (
            <div className="text-center text-slate-500 font-medium py-16">
              Loading mentors...
            </div>
          ) : mentorError ? (
            <div className="text-center text-slate-500 font-medium py-16">
              {mentorError}
            </div>
          ) : mentors.length === 0 ? (
            <div className="text-center text-slate-500 font-medium py-16">
              No mentors available.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {mentors.map((mentor, index) => (
                <motion.div
                  key={mentor._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group p-8 bg-white rounded-[3rem] border border-slate-100 hover:bg-[#0B1120] hover:text-white transition-all duration-500 shadow-xl hover:shadow-2xl flex flex-col items-center text-center"
                >
                  <div className="w-36 h-36 rounded-full p-1 bg-gradient-to-br from-blue-400 to-[#0096FF] group-hover:from-white/20 group-hover:to-white/40 mb-8 overflow-hidden shadow-xl transform group-hover:scale-105 transition-all">
                    <img
                      src={mentor.photo || "/placeholder.png"}
                      alt={mentor.name}
                      className="w-full h-full object-cover rounded-full bg-slate-200"
                    />
                  </div>
                  <h4 className="text-xl font-black mb-1 tracking-tight uppercase">
                    {mentor.name}
                  </h4>
                  <p className="text-[#0096FF] group-hover:text-blue-400 text-[9px] font-black uppercase tracking-widest mb-4">
                    {mentor.designation}
                  </p>
                  <p className="text-slate-500 group-hover:text-slate-400 text-xs font-medium mb-8 leading-relaxed line-clamp-2">
                    {mentor.description}
                  </p>

                  <div className="flex gap-6 pt-6 border-t border-slate-100 group-hover:border-white/10 w-full justify-center mt-auto">
                    {mentor.linkedin && (
                      <a
                        href={mentor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 group-hover:text-white/40 hover:text-white transition-colors"
                      >
                        <FaLinkedinIn size={18} />
                      </a>
                    )}
                    {mentor.github && (
                      <a
                        href={mentor.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 group-hover:text-white/40 hover:text-white transition-colors"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                    {mentor.whatsapp && (
                      <a
                        href={`https://wa.me/${mentor.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 group-hover:text-white/40 hover:text-green-500 transition-colors"
                      >
                        <FaWhatsapp size={18} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#0096FF] to-blue-800 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full"></div>

          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-[0.9]">
            Ready to Build Your
            <br />
            <span className="text-blue-100">Future in Technology?</span>
          </h2>

          <p className="text-blue-100 mb-12 text-lg font-medium max-w-2xl mx-auto">
            Join PNINFOSYS and gain industry-ready skills through practical
            training, live projects, internships and career-focused learning
            programs.
          </p>

          <button className="bg-white text-[#0096FF] px-12 py-5 rounded-2xl font-bold flex items-center gap-3 mx-auto shadow-xl hover:bg-slate-50 transition-all">
            Enroll Now
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
