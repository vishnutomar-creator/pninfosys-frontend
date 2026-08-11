"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Aman Sharma",
    role: "B.Tech Student",
    text: "PNINFOSYS ke workshops practical aur industry level hote hain.",
    rating: 5,
  },
  {
    name: "Priya Verma",
    role: "MCA Student",
    text: "React aur Node.js real projects ke sath sikhne ko mila.",
    rating: 5,
  },
  {
    name: "Rahul Gupta",
    role: "Engineering Student",
    text: "Best coding institute. Workshop experience amazing tha.",
    rating: 4,
  },
  {
    name: "Sneha Patel",
    role: "CS Student",
    text: "Projects based learning se confidence build hua.",
    rating: 5,
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          Student <span className="text-[#009df2]">Testimonials</span>
        </h2>
        <p className="text-gray-500 mt-3 mb-10">
          Real feedback from our students
        </p>

        {/* Slider Card */}
        <div className="relative bg-gray-50 p-10 rounded-2xl shadow-lg min-h-[220px]">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >

              {/* Stars */}
              <div className="text-yellow-400 text-xl mb-3">
                {"⭐".repeat(current.rating)}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-lg mb-5">
                “{current.text}”
              </p>

              {/* Name */}
              <h4 className="font-bold text-gray-800">{current.name}</h4>
              <p className="text-sm text-gray-500">{current.role}</p>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-[#009df2]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;