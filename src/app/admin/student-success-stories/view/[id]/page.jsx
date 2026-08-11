"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft, Pencil } from "lucide-react";
import { getPlacement } from "@/services/placementsService";

export default function ViewPlacementPage() {
  const { id } = useParams();

  const [placement, setPlacement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlacement = async () => {
      try {
        const response = await getPlacement(id);
        setPlacement(response.data.placement);
      } catch (err) {
        console.error("Get Placement Error:", err);
        setError("Failed to load placement details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPlacement();
  }, [id]);

  if (loading) {
    return (
      <section className="p-6">
        <p className="text-gray-500">Loading placement details...</p>
      </section>
    );
  }

  if (error || !placement) {
    return (
      <section className="p-6">
        <p className="text-red-600">{error || "Placement not found."}</p>
      </section>
    );
  }

  return (
    <section className="p-6">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <Link
            href="/admin/student-success-stories"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-3"
          >
            <ArrowLeft size={18} />
            Back to Placements
          </Link>

          <h1 className="text-3xl font-bold text-slate-800">
            View Placement
          </h1>

          <p className="text-gray-500 mt-1">
            View placement student details.
          </p>

        </div>

        <Link
          href={`/admin/student-success-stories/edit/${placement._id}`}
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-3 rounded-xl shadow"
        >
          <Pencil size={18} />
          Edit Placement
        </Link>

      </div>

      {/* Card */}

      <div className="bg-white rounded-2xl shadow border overflow-hidden">

        {/* Cover */}

        <div className="h-72 bg-gray-100 flex justify-center items-center">

          <img
            src={placement.studentPhoto}
            alt={placement.studentName}
            className="w-48 h-48 rounded-full border-4 border-white shadow-lg object-cover"
          />

        </div>

        {/* Details */}

        <div className="p-8">

          <div className="grid md:grid-cols-2 gap-8">

            <div>

              <label className="text-gray-500 text-sm">
                Student Name
              </label>

              <h2 className="text-2xl font-bold mt-1">
                {placement.studentName}
              </h2>

            </div>

            <div>

              <label className="text-gray-500 text-sm">
                Company
              </label>

              <h2 className="text-xl font-semibold mt-1">
                {placement.company}
              </h2>

            </div>

            <div>

              <label className="text-gray-500 text-sm">
                Course
              </label>

              <h2 className="text-lg font-medium mt-1">
                {placement.course}
              </h2>

            </div>

            <div>

              <label className="text-gray-500 text-sm">
                Package
              </label>

              <h2 className="text-lg font-semibold text-green-600 mt-1">
                {placement.package}
              </h2>

            </div>

            <div>

              <label className="text-gray-500 text-sm">
                Placement Year
              </label>

              <h2 className="text-lg font-medium mt-1">
                {placement.year}
              </h2>

            </div>

            <div>

              <label className="text-gray-500 text-sm">
                Status
              </label>

              <div className="mt-2">

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  {placement.status}
                </span>

              </div>

            </div>

          </div>

          {/* Buttons */}

          <div className="flex gap-4 mt-10">

            <Link
              href="/admin/student-success-stories"
              className="px-6 py-3 border rounded-xl hover:bg-gray-100"
            >
              Back
            </Link>

            <Link
              href={`/admin/student-success-stories/edit/${placement._id}`}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
            >
              Edit Placement
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}