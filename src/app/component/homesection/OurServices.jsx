"use client";

import React from "react";
import {
  FaGlobe,
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaServer,
  FaCode,
} from "react-icons/fa";

function OurServices() {
  const services = [
    {
      title: "Website Development",
      desc: "Modern, responsive, SEO-friendly business websites using latest technologies.",
      icon: <FaGlobe />,
    },
    {
      title: "Web Applications (MERN / PHP)",
      desc: "Custom web applications using MERN stack and PHP for scalable business solutions.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Mobile App Development",
      desc: "Android and cross-platform mobile apps for startups and businesses.",
      icon: <FaMobileAlt />,
    },
    {
      title: "UI/UX Design",
      desc: "Clean, user-friendly and modern interface designs for web and mobile apps.",
      icon: <FaPaintBrush />,
    },
    {
      title: "ERP / CRM Systems",
      desc: "Custom ERP and CRM solutions to manage business operations efficiently.",
      icon: <FaServer />,
    },
    {
      title: "API Development",
      desc: "Secure and scalable REST APIs for web and mobile applications.",
      icon: <FaCode />,
    },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Our <span className="text-[#0096FF]">Services</span> 
          </h2>
          <p className="text-gray-500 mt-2">
            Software Development & IT Solutions
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-3xl text-[#0096FF] mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#0096FF]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* underline effect */}
              <div className="mt-4 h-0.5 w-0 bg-[#0096FF] group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OurServices;
