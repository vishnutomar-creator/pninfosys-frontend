'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  Briefcase,
  Award,
  ArrowRight,
} from "lucide-react";

export default function AboutPNINFOSYS() {
const highlights = [
  {
    icon: <GraduationCap size={28} />,
    title: "Industry-Oriented Training",
    desc: "Learn in-demand technologies through practical sessions, assignments and hands-on learning.",
  },
  {
    icon: <Building2 size={28} />,
    title: "Software Development",
    desc: "Delivering websites, web applications and custom software solutions for businesses.",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Live Projects & Internships",
    desc: "Gain real-world experience by working on live projects and internship programs.",
  },
  {
    icon: <Award size={28} />,
    title: "Placement Assistance",
    desc: "Resume preparation, interview guidance and career support to help students succeed.",
  },
];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="bg-blue-100 text-[#0096FF] px-5 py-2 rounded-full text-sm font-semibold">
            About PNINFOSYS
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Where Learning Meets
            <span className="text-[#0096FF]"> Real Industry Experience</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            From software development and live client projects to internships,
            industrial training and placement support, PNINFOSYS provides the
            practical experience and industry exposure needed to succeed in
            today's technology-driven world.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-linear-to-br from-[#0096FF] to-blue-700 rounded-4xl p-10 text-white shadow-2xl">
              <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                Our Story
              </span>

              <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                Bridging Education & Industry
              </h3>

              <p className="text-blue-100 leading-relaxed mb-5">
                PNINFOSYS was founded with a vision to bridge the gap between
                academic learning and real industry requirements by combining
                professional IT training with software development services.
              </p>

              <p className="text-blue-100 leading-relaxed mb-5">
                Through live projects, internships, workshops and practical
                training, students gain hands-on experience while businesses
                receive innovative technology solutions tailored to their needs.
              </p>

              <p className="text-blue-100 leading-relaxed">
                Today, PNINFOSYS continues to empower aspiring professionals,
                helping them build successful careers while supporting
                organizations in their digital transformation journey.
              </p>
            </div>
          </motion.div>

          {/* Right Side */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-[#0096FF]/30 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#0096FF] flex items-center justify-center mb-4">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#0096FF] hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold inline-flex items-center gap-2 transition">
            Explore More
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
