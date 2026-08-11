"use client";
import React from "react";
import { Users, Briefcase, Award, Trophy } from "lucide-react";

function PlacementDesk() {
  const stats = [
    {
      label: "Students Trained",
      value: "5000+",
      icon: <Users className="text-[#0096FF]" size={32} />,
    },
    {
      label: "Placement Offers",
      value: "500+",
      icon: <Briefcase className="text-[#0096FF]" size={32} />,
    },
    {
      label: "Hiring Companies",
      value: "150+",
      icon: <Award className="text-[#0096FF]" size={32} />,
    },
    {
      label: "Live Projects",
      value: "100+",
      icon: <Trophy className="text-[#0096FF]" size={32} />,
    },
  ];

  return (
    <div className="pt-24 bg-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 text-center pb-20">
        <span className="bg-blue-100 text-[#0096FF] px-5 py-2 rounded-full text-sm font-semibold">
          Career & Placement Cell
        </span>

        <h1 className="mt-6 text-5xl md:text-7xl font-black text-slate-900">
          Placement
          <span className="text-[#0096FF]"> Desk</span>
        </h1>

        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We help students transform their skills into successful careers
          through industry-oriented training, internships, live projects,
          interview preparation and placement assistance.
        </p>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-8 text-center hover:shadow-xl transition-all"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-3xl font-black text-slate-900">
                {item.value}
              </h3>

              <p className="text-slate-500 mt-2 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Placement Process */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-slate-50 rounded-[32px] p-10 md:p-14">
          <h2 className="text-3xl md:text-5xl font-black text-center text-slate-900 mb-12">
            Our Placement Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl text-center">
              <h3 className="font-black text-[#0096FF] text-xl mb-3">01</h3>
              <h4 className="font-bold mb-2">Training</h4>
              <p className="text-slate-600 text-sm">
                Industry-oriented practical training.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl text-center">
              <h3 className="font-black text-[#0096FF] text-xl mb-3">02</h3>
              <h4 className="font-bold mb-2">Live Projects</h4>
              <p className="text-slate-600 text-sm">
                Real client project experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl text-center">
              <h3 className="font-black text-[#0096FF] text-xl mb-3">03</h3>
              <h4 className="font-bold mb-2">Interview Prep</h4>
              <p className="text-slate-600 text-sm">
                Resume building and mock interviews.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl text-center">
              <h3 className="font-black text-[#0096FF] text-xl mb-3">04</h3>
              <h4 className="font-bold mb-2">Placement</h4>
              <p className="text-slate-600 text-sm">
                Opportunities with hiring partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-[#0096FF] to-blue-700 rounded-[32px] p-12 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Start Your Career Journey
          </h2>

          <p className="max-w-2xl mx-auto text-blue-100">
            Join PNINFOSYS and gain practical skills, internship experience
            and placement support to build a successful IT career.
          </p>

          <button className="mt-8 bg-white text-[#0096FF] px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all">
            Start Free Demo
          </button>
        </div>
      </section>

    </div>
  );
}

export default PlacementDesk;