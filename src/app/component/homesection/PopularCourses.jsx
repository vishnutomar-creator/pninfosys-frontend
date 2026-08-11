"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCourses } from "@/services/courseService";

function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function PopularCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        const allCourses =
          data?.courses ||
          data?.data?.courses ||
          data?.data ||
          (Array.isArray(data) ? data : []);

        const activeCourses = allCourses.filter(
          (course) => course.status === "Active"
        );
        setCourses(activeCourses);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section id="popular-courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-[#0096FF] px-5 py-2 rounded-full text-sm font-semibold">
            Training Programs
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-slate-900">
            Build Skills For
            <span className="text-[#0096FF]"> Real Careers</span>
          </h2>

          <p className="mt-5 text-slate-600 max-w-3xl mx-auto text-lg">
            Industry-oriented programs designed with live projects,
            internship opportunities, mentorship and placement support.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center text-slate-500 text-lg py-20">
            Loading courses...
          </div>
        ) : (
          /* Cards */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Course Image */}
                <div className="overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {course.title}
                  </h3>

                  <p className="text-slate-600 mb-5 leading-relaxed text-sm">
                    {course.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-green-600 font-medium">
                      ✓ Live Projects
                    </p>

                    <p className="text-sm text-blue-600 font-medium">
                      ✓ Internship Certificate
                    </p>

                    <p className="text-sm text-purple-600 font-medium">
                      ✓ Placement Assistance
                    </p>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-sm font-medium">
                      ⏳ {course.duration}
                    </span>

                    <span className="text-[#0096FF] font-semibold text-sm">
                      Career Focused
                    </span>
                  </div>

                  <Link href={`/Courses/${slugify(course.title)}`}>
                    <button className="w-full bg-[#0096FF] hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 transition">
                      Learn More
                      <ArrowRight size={18} />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default PopularCourses;
