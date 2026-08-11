"use client";
import React from "react";
import { motion } from "framer-motion";

function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#009df2] to-indigo-700 text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent)]"></div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Start Your Journey with PNINFOSYS Today
        </motion.h2>

        {/* Sub text */}
        <p className="text-white/80 mt-4 text-lg">
          Join our IT training & software development programs and build a successful career in tech
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm">
          <span className="bg-white/20 px-4 py-2 rounded-full">🎁 Free Demo Class</span>
          <span className="bg-white/20 px-4 py-2 rounded-full">👨‍🏫 Expert Mentors</span>
          <span className="bg-white/20 px-4 py-2 rounded-full">💼 Placement Support</span>
          <span className="bg-white/20 px-4 py-2 rounded-full">📜 Certificate</span>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <button className="bg-white text-[#009df2] font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition">
            🚀 Join Now
          </button>

          <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-700 transition">
            🎯 Free Demo Class
          </button>

        </div>

        {/* Contact */}
        <p className="mt-8 text-white/70 text-sm">
          📞 Call: 7000846823 | 🌐 pninfosys.com
        </p>

      </div>
    </section>
  );
}

export default FinalCTA;