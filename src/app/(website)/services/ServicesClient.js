"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  BarChart3,
  Code,
  Search,
  ArrowRight,
} from "lucide-react";

function Services() {
  const services = [
    {
      title: "Website Development",
      description:
        "Modern, responsive and SEO-friendly websites built with the latest technologies to help businesses grow online.",
      icon: <Globe size={32} />,
    },
    {
      title: "Mobile App Development",
      description:
        "Custom Android and iOS applications designed for performance, scalability and seamless user experience.",
      icon: <Smartphone size={32} />,
    },
    {
      title: "Custom Software Solutions",
      description:
        "Business software, ERP, CRM, management systems and tailored solutions to automate operations.",
      icon: <Code size={32} />,
    },
    {
      title: "Digital Marketing",
      description:
        "Increase your online presence with strategic SEO, social media marketing and lead generation campaigns.",
      icon: <BarChart3 size={32} />,
    },
    {
      title: "SEO Optimization",
      description:
        "Improve search engine rankings and drive organic traffic with proven SEO strategies.",
      icon: <Search size={32} />,
    },
    {
      title: "Data Analytics & AI Solutions",
      description:
        "Transform data into insights using Python, Power BI, Machine Learning and AI-powered solutions.",
      icon: <BarChart3 size={32} />,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="text-center max-w-6xl mx-auto px-4 mt-9">
        <span className="bg-blue-100 text-[#009df2] px-4 py-2 rounded-full text-sm font-semibold">
          Our Services
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold text-slate-900">
          Digital Solutions For
          <span className="text-[#009df2]"> Modern Businesses</span>
        </h1>

        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
          PNINFOSYS provides innovative technology solutions including
          website development, software development, mobile applications,
          digital marketing and AI-powered services.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 mt-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:border-[#009df2] transition-all"
            >
              <div className="w-16 h-16 bg-blue-50 text-[#009df2] rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>

              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <button className="flex items-center gap-2 text-[#009df2] font-semibold">
                Learn More
                <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 mt-24">
        <div className="bg-gradient-to-r from-[#009df2] to-blue-700 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready To Start Your Project?
          </h2>

          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Let's discuss your requirements and build a powerful digital
            solution for your business.
          </p>

          <button
            onClick={() =>
              window.open("https://wa.me/917000846823", "_blank")
            }
            className="bg-white text-[#009df2] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}

export default Services;