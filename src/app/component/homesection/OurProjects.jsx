"use client";
import React, { useState, useEffect } from "react";
import { getProjects } from "@/services/projectService";

function OurProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await getProjects();

        const data =
          res.data?.projects ?? res.data?.data ?? res.data ?? [];

        const rawList = Array.isArray(data) ? data : [];

        const normalized = rawList.map((item) => ({
          ...item,
          id: item.id ?? (item._id ? String(item._id) : undefined),
        }));

        setProjects(normalized);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500">Loading projects...</p>
        )}

        {/* Error */}
        {!loading && error && (
          <p className="text-center text-red-500">{error}</p>
        )}

        {/* Empty */}
        {!loading && !error && projects.length === 0 && (
          <p className="text-center text-gray-500">No projects found.</p>
        )}

        {/* Grid */}
        {!loading && !error && projects.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
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

                  <p className="text-gray-600 text-sm mt-2">
                    {item.description}
                  </p>

                  <p className="text-xs text-gray-500 mt-3">
                    ⚙️ {Array.isArray(item.techStack) ? item.techStack.join(", ") : item.techStack}
                  </p>

                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-block text-sm text-[#009df2] font-medium hover:underline"
                    >
                      View Details →
                    </a>
                  ) : (
                    <button className="mt-5 text-sm text-[#009df2] font-medium hover:underline">
                      View Details →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View More Button */}
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