"use client";

import Link from "next/link";
import { ArrowLeft, Save, Upload } from "lucide-react";

export default function EditServicePage() {
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
            Edit Service
          </h1>

          <p className="text-gray-500 mt-1">
            Update service information.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Left Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow border border-gray-200 p-6">

          <div className="space-y-6">

            <div>
              <label className="block font-semibold mb-2">
                Service Name
              </label>

              <input
                type="text"
                defaultValue="MERN Stack Development"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Description
              </label>

              <textarea
                rows={6}
                defaultValue="Learn MongoDB, Express.js, React.js and Node.js with real-world projects."
                className="w-full border rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="block font-semibold mb-2">
                  Duration
                </label>

                <select className="w-full border rounded-xl px-4 py-3">
                  <option>6 Months</option>
                  <option>3 Months</option>
                  <option>1 Year</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Status
                </label>

                <select className="w-full border rounded-xl px-4 py-3">
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

            </div>

            <div className="flex gap-4 pt-3">

              <Link
                href="/admin/services"
                className="px-6 py-3 border rounded-xl hover:bg-gray-100"
              >
                Cancel
              </Link>

              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
                <Save size={18} />
                Update Service
              </button>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="space-y-6">

          {/* Upload */}

          <div className="bg-white rounded-2xl shadow border p-6">

            <h2 className="font-semibold mb-4">
              Service Image
            </h2>

            <div className="border-2 border-dashed rounded-xl p-4">

              <img
                src="https://placehold.co/500x300/e5e7eb/6b7280?text=Service+Image"
                alt=""
                className="rounded-lg mb-4"
              />

              <button className="w-full flex items-center justify-center gap-2 border rounded-xl py-3 hover:bg-gray-100">
                <Upload size={18} />
                Change Image
              </button>

            </div>

          </div>

          {/* Preview */}

          <div className="bg-white rounded-2xl shadow border p-6">

            <h2 className="font-semibold mb-4">
              Preview
            </h2>

            <div className="rounded-xl overflow-hidden border">

              <img
                src="https://placehold.co/500x250/e5e7eb/6b7280?text=Preview"
                alt=""
              />

              <div className="p-4">

                <h3 className="font-bold text-lg">
                  MERN Stack Development
                </h3>

                <p className="text-gray-500 mt-2 text-sm">
                  Learn Full Stack Development with
                  React, Node, Express & MongoDB.
                </p>

                <span className="inline-block mt-4 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                  6 Months
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}