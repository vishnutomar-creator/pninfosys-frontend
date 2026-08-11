'use client';

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🚀",
    title: "Industry-Level Training",
    desc: "Learn the latest technologies through practical and career-focused training programs.",
  },
  {
    icon: "💻",
    title: "Live Client Projects",
    desc: "Work on real business projects and gain hands-on development experience.",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Mentorship",
    desc: "Get guidance from experienced developers and industry professionals.",
  },
  {
    icon: "🏢",
    title: "Software Company Exposure",
    desc: "Experience a professional software development environment and workflow.",
  },
  {
    icon: "🤖",
    title: "Modern Technologies",
    desc: "Learn AI, Data Analytics, MERN Stack, Python and other in-demand technologies.",
  },
  {
    icon: "🎯",
    title: "Career Growth Support",
    desc: "Interview preparation, portfolio building and career guidance for students.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function WhyChoosePNINFOSYS() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Why Students & Businesses
            <span className="text-[#009df2]"> Choose PNINFOSYS</span>
          </h2>

          <p className="text-gray-500 mt-3 text-lg">
            Practical learning, real projects and professional software
            development under one roof.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-2xl mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
