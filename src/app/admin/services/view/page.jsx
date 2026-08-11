"use client";

import Link from "next/link";
import { ArrowLeft, Pencil } from "lucide-react";

export default function ViewServicePage() {
  const service = {
    name: "MERN Stack Development",
    description:
      "Learn MongoDB, Express.js, React.js, Node.js along with real-world projects and deployment. This course is designed for beginners to advanced learners.",
    duration: "6 Months",
    status: "Active",
    image: "https://placehold.co/900x500/e5e7eb/6b7280?text=Service+Image",
  };

  return (
    <section className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link
            href="/admin/services"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-3"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>

          <h1 className="text-3xl font-bold text-slate-800">
            View Service
          </h1>

          <p className="text-gray-500 mt-1">
            View complete details of the selected service.
          </p>
        </div>

        <Link
          href="/admin/services/edit"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-3 rounded-xl shadow"
        >
          <Pencil size={18} />
          Edit Service
        </Link>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow border border-gray-200 overflow-hidden">

        {/* Image */}
        <div className="h-[350px] overflow-hidden">
          <img
            src={service.image}
            alt="service"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8">

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="text-sm text-gray-500">
                Service Name
              </label>

              <h2 className="text-2xl font-bold mt-1">
                {service.name}
              </h2>
            </div>

            <div>
              <label className="text-sm text-gray-500">
                Duration
              </label>

              <h2 className="text-xl font-semibold mt-1">
                {service.duration}
              </h2>
            </div>

            <div>
              <label className="text-sm text-gray-500">
                Status
              </label>

              <div className="mt-2">
                <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">
                  {service.status}
                </span>
              </div>
            </div>

          </div>

          {/* Description */}

          <div className="mt-10">

            <h3 className="text-lg font-semibold mb-3">
              Description
            </h3>

            <div className="bg-gray-50 border rounded-xl p-5 leading-8 text-gray-600">
              {service.description}
            </div>

          </div>

          {/* Buttons */}

          <div className="mt-10 flex gap-4">

            <Link
              href="/admin/services"
              className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100"
            >
              Back
            </Link>

            <Link
              href="/admin/services/edit"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white"
            >
              Edit Service
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}