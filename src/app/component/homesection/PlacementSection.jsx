"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import { getPlacements } from "@/services/placementsService";

function PlacementSection() {
  const [alumni, setAlumni] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const response = await getPlacements();
        setAlumni(response.data.placements || []);
      } catch (error) {
        console.error("Fetch Placements Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlacements();
  }, []);

  if (loading || alumni.length === 0) {
    return null;
  }

  const doubleAlumni = [...alumni, ...alumni];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-slate-50">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {" "}
          <span className="bg-blue-100 text-[#0096FF] px-5 py-2 rounded-full text-sm font-semibold">
            Placement Success
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-black text-slate-900">
            Student
            <span className="text-[#0096FF]"> Success Stories</span>
          </h2>
          <p className="mt-5 text-slate-600 text-lg max-w-3xl mx-auto">
            Meet our students who transformed their skills through training,
            internships and live projects at PNINFOSYS and secured opportunities
            at leading companies across India.
          </p>
        </div>
        {/* Stats */}

        {/* Slider */}
        <div className="relative overflow-hidden py-6">
          <div className="flex animate-placement-scroll gap-8 whitespace-nowrap hover:[animation-play-state:paused]">
            {doubleAlumni.map((student, idx) => (
              <motion.div
                key={`${student._id}-${idx}`}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="min-w-[320px] bg-white rounded-3xl p-8 text-center border border-slate-100 shadow-lg"
              >
                <div className="w-28 h-28 mx-auto mb-6 overflow-hidden rounded-3xl border-4 border-white shadow-lg">
                  <img
                    src={student.studentPhoto}
                    alt={student.studentName}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="text-xl font-black text-slate-900 mb-3">
                  {student.studentName}
                </h4>

                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl px-4 py-3 text-sm font-semibold">
                  Successfully Placed At
                  <div className="mt-1 font-normal">{student.company}</div>
                </div>

                <p className="mt-4 text-xs uppercase tracking-wider text-slate-500">
                  Internship + Industrial Training Program
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/placement/placement-gallary")}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Placement Students
            <ArrowRight size={20} />
          </motion.button>

          <p className="mt-3 text-sm text-slate-500">
            Explore all success stories and placement achievements of PNINFOSYS
            students.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes placement-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-placement-scroll {
          display: flex;
          animation: placement-scroll 35s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default PlacementSection;