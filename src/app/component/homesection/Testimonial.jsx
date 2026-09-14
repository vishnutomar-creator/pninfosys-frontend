"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getTestimonials } from "@/services/testimonialService";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);

  // Fetch testimonials on mount
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await getTestimonials();

        const data =
          res.data?.testimonials ?? res.data?.data ?? res.data ?? [];

        const rawList = Array.isArray(data) ? data : [];

        const normalized = rawList.map((item) => ({
          ...item,
          id: item.id ?? (item._id ? String(item._id) : undefined),
        }));

        setTestimonials(normalized);
      } catch (err) {
        console.error("Failed to fetch testimonials:", err);
        setError("Failed to load testimonials.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Auto slider — only runs once testimonials are loaded
  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials]);

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

        {/* Loading */}
        {loading && (
          <p className="text-gray-500">Loading testimonials...</p>
        )}

        {/* Error */}
        {!loading && error && (
          <p className="text-red-500">{error}</p>
        )}

        {/* Empty */}
        {!loading && !error && testimonials.length === 0 && (
          <p className="text-gray-500">No testimonials yet.</p>
        )}

        {/* Slider Card */}
        {!loading && !error && current && (
          <>
            <div className="relative bg-gray-50 p-10 rounded-2xl shadow-lg min-h-[220px]">

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id ?? index}
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
                    “{current.message}”
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
          </>
        )}

      </div>
    </section>
  );
}

export default Testimonials;