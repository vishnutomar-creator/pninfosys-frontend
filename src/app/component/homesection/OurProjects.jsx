"use client";
import React from "react";

function OurProjects() {
  const projects = [
    {
      title: "E-Commerce Website",
      category: "Web Development",
      desc: "Full-featured online store with cart, payment integration and admin panel.",
      tech: "React, Node.js, MongoDB",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      title: "School Management System",
      category: "ERP Solution",
      desc: "Complete ERP system for managing students, attendance, fees and exams.",
      tech: "PHP, MySQL",
      img: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    },
    {
      title: "Food Delivery App",
      category: "Mobile App",
      desc: "Cross-platform mobile app for ordering food with live tracking.",
      tech: "React Native",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Our <span className="text-[#009df2]">Projects</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Real client work & live project experience
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs px-3 py-1 bg-blue-50 text-[#009df2] rounded-full">
                  {item.category}
                </span>

                <h3 className="text-xl font-semibold text-gray-800 mt-3 group-hover:text-[#009df2]">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>

                <p className="text-xs text-gray-500 mt-3">⚙️ {item.tech}</p>

                <button className="mt-5 text-sm text-[#009df2] font-medium hover:underline">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 VIEW MORE BUTTON */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-[#009df2] text-white rounded-full font-medium shadow-md hover:bg-[#009df2] transition">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default OurProjects;
