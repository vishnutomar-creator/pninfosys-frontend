"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Building2,
  ArrowLeft,
  Users,
  Briefcase,
  Award,
  Calendar,
} from "lucide-react";
import { getPlacements } from "@/services/placementsService";

function PlacementGallery() {
  const router = useRouter();

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const response = await getPlacements();
        setStudents(response.data.placements || []);
      } catch (error) {
        console.error("Fetch Placements Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlacements();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-flex px-5 py-2 rounded-full bg-blue-50 text-[#0096FF] text-sm font-semibold">
            🎓 PNINFOSYS Placement Records
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black text-slate-900 leading-tight">
            Turning Students Into
            <br />
            <span className="text-[#0096FF]">IT Professionals</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-slate-600 leading-relaxed">
            Our students have successfully started their careers in leading IT
            companies through practical training, internship programs, live
            projects and placement assistance provided by PNINFOSYS.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 mb-10 px-5 py-3 bg-white rounded-xl shadow hover:bg-gray-100 transition"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          <div className="bg-white rounded-3xl p-6 text-center shadow-md">
            <Users className="mx-auto text-blue-600 mb-3" size={30} />
            <h3 className="text-3xl font-bold text-slate-900">5000+</h3>
            <p className="text-slate-500">Students Trained</p>
          </div>

          <div className="bg-white rounded-3xl p-6 text-center shadow-md">
            <Briefcase className="mx-auto text-green-600 mb-3" size={30} />
            <h3 className="text-3xl font-bold text-slate-900">500+</h3>
            <p className="text-slate-500">Placements</p>
          </div>

          <div className="bg-white rounded-3xl p-6 text-center shadow-md">
            <Award className="mx-auto text-purple-600 mb-3" size={30} />
            <h3 className="text-3xl font-bold text-slate-900">150+</h3>
            <p className="text-slate-500">Live Projects</p>
          </div>

          <div className="bg-white rounded-3xl p-6 text-center shadow-md">
            <Calendar className="mx-auto text-orange-600 mb-3" size={30} />
            <h3 className="text-3xl font-bold text-slate-900">12+</h3>
            <p className="text-slate-500">Years Experience</p>
          </div>
        </div>

        {/* Loading / Empty States */}
        {loading && (
          <p className="text-center text-slate-500">Loading placement students...</p>
        )}

        {!loading && students.length === 0 && (
          <p className="text-center text-slate-500">
            No placement records available yet.
          </p>
        )}

        {/* Students Grid */}
        {!loading && students.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {students.map((student) => (
              <motion.div
                key={student._id}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100"
              >
                <div className="relative h-80">
                  <Image
                    src={student.studentPhoto}
                    alt={student.studentName}
                    fill
                    className="object-cover hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    {student.studentName}
                  </h3>

                  <div className="flex items-start gap-2 mt-3 text-blue-600">
                    <Building2 size={18} />
                    <span className="text-sm font-medium">
                      {student.company}
                    </span>
                  </div>

                  <div className="mt-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl py-3 text-center font-semibold">
                    Successfully Placed
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PlacementGallery;