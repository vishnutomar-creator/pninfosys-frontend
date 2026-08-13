import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, Award, CheckCircle } from "lucide-react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const readableTitle = slug
    ? slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Course";

  return {
    title: `${readableTitle} | PNINFOSYS Training`,
    description: `Explore ${readableTitle} training program at PNINFOSYS Gwalior. Live client projects, internship certification, and placement support.`,
  };
}

export default async function DynamicCoursePage({ params }) {
  const { slug } = await params;
  const readableTitle = slug
    ? slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Course";

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/#popular-courses"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0096FF] hover:text-blue-700 mb-8 transition"
        >
          <ArrowLeft size={16} /> Back to Courses
        </Link>

        {/* Course Header Banner */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-xl mb-10 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <span className="bg-[#0096FF]/20 text-blue-300 border border-[#0096FF]/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            Industrial Training Program
          </span>
          <h1 className="text-3xl md:text-5xl font-black mt-4 mb-4">
            {readableTitle}
          </h1>
          <p className="text-slate-300 max-w-2xl text-base md:text-lg">
            Master {readableTitle} with hands-on live project training, 1-on-1 mentorship, internship certification, and job placement assistance at PNINFOSYS.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-slate-800 text-sm">
            <div className="flex items-center gap-2 text-slate-300">
              <Clock size={18} className="text-[#0096FF]" />
              <span>Duration: 3 - 6 Months</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Award size={18} className="text-green-400" />
              <span>Internship Certificate Included</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <BookOpen size={18} className="text-purple-400" />
              <span>Live Client Projects</span>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Highlights */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                What You Will Learn
              </h2>
              <div className="space-y-3">
                {[
                  "Hands-on practical training from active software developers",
                  "Real-world application building and architecture best practices",
                  "Version control using Git & GitHub workflows",
                  "Database design, API integration, and cloud deployment",
                  "Resume building, mock interviews, and placement guidance",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="text-[#0096FF] shrink-0 mt-0.5" size={18} />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm h-fit space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Join Free Demo Class
              </h3>
              <p className="text-xs text-slate-600">
                Experience our interactive training methodology with a 1-Month Free Demo session.
              </p>
            </div>

            <a
              href="https://wa.me/917000846823?text=Hello%20PNINFOSYS,%20I'm%20interested%20in%20the%20training%20program."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#0096FF] hover:bg-blue-700 text-white font-semibold py-3.5 px-4 rounded-2xl flex items-center justify-center text-sm transition shadow-lg shadow-blue-200"
            >
              Enroll / Inquire Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
