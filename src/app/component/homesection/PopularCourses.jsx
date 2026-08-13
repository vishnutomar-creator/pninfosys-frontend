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

// Match course titles with your actual folder names or dynamic routes
function getCourseRoute(courseOrTitle) {
  if (!courseOrTitle) return "";

  const title =
    typeof courseOrTitle === "object"
      ? courseOrTitle.title || courseOrTitle.name || ""
      : courseOrTitle;
  const slug =
    typeof courseOrTitle === "object" ? courseOrTitle.slug || "" : "";

  const trimmedTitle = title.trim();
  const lowerTitle = trimmedTitle.toLowerCase();
  const lowerSlug = slug.trim().toLowerCase();

  // 1. Direct exact mapping for known titles
  const exactRoutes = {
    "Machine Learning With AI": "machine-learning-and-ai",
    "Data Analytics With AI": "data-analytics",
    "Full Stack Development With AI": "full-stack-development-with-ai",
    "Full Stack (MERN STACK ) With AI": "full-stack-development-with-ai",
    "Full Stack (MERN STACK) With AI": "full-stack-development-with-ai",
    "Full Stack (MERN) With AI": "full-stack-development-with-ai",
    "MERN Stack With AI": "mern-stack-with-ai",
    "Web Designing With AI": "web-designing-with-ai",
    "Python With AI": "python-with-ai",
    "Python with AI": "python-with-ai",
    "Python & AI": "python-with-ai",
    "Python Development": "python-with-ai",
    "Full Stack Development": "full-stack-development-with-ai",
    "Full Stack Web Development": "full-stack-development-with-ai",
    "MERN Stack Development": "mern-stack-with-ai",
    "MERN Stack": "mern-stack-with-ai",
    "Web Development": "full-stack-development-with-ai",
  };

  if (exactRoutes[trimmedTitle]) {
    return exactRoutes[trimmedTitle];
  }

  // 2. Direct check if slug matches an existing folder slug
  const validFolderSlugs = [
    "full-stack-development-with-ai",
    "mern-stack-with-ai",
    "data-analytics",
    "machine-learning-and-ai",
    "web-designing-with-ai",
    "python-with-ai",
  ];
  if (validFolderSlugs.includes(lowerSlug)) {
    return lowerSlug;
  }

  // 3. Smart Keyword Matching (Full Stack takes precedence over standalone MERN for Full Stack course titles)
  if (
    (lowerTitle.includes("python") && lowerTitle.includes("ai")) ||
    lowerSlug.includes("python-with-ai")
  ) {
    return "python-with-ai";
  }
  if (
    lowerTitle.includes("full stack") ||
    lowerTitle.includes("fullstack") ||
    lowerSlug.includes("full-stack") ||
    lowerSlug.includes("fullstack")
  ) {
    return "full-stack-development-with-ai";
  }
  if (lowerTitle.includes("mern") || lowerSlug.includes("mern")) {
    return "mern-stack-with-ai";
  }
  if (
    lowerTitle.includes("data analytics") ||
    lowerSlug.includes("analytics")
  ) {
    return "data-analytics";
  }
  if (
    lowerTitle.includes("machine learning") ||
    lowerSlug.includes("machine-learning")
  ) {
    return "machine-learning-and-ai";
  }
  if (
    lowerTitle.includes("web design") ||
    lowerSlug.includes("web-design")
  ) {
    return "web-designing-with-ai";
  }
  if (lowerTitle.includes("python") || lowerSlug.includes("python")) {
    return "python-with-ai";
  }

  // 4. Fallback to course slug or slugified title
  return lowerSlug || slugify(trimmedTitle);
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

                  {/* Learn More */}
                  <Link
                    href={`/Courses/${getCourseRoute(course)}`}
                    className="w-full bg-[#0096FF] hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 transition"
                  >
                    Learn More
                    <ArrowRight size={18} />
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