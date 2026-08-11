"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Trash2, AlertTriangle } from "lucide-react";
import { getPlacement, deletePlacement } from "@/services/placementsService";

export default function DeletePlacementPage() {
  const { id } = useParams();
  const router = useRouter();

  const [placement, setPlacement] = useState(null);
  const [fetching, setFetching] = useState(true);
  const [deleting, setDeleting] = useState(false);
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
        setFetching(false);
      }
    };

    if (id) fetchPlacement();
  }, [id]);

  const handleDelete = async () => {
    setError("");

    try {
      setDeleting(true);
      await deletePlacement(id);
      router.push("/admin/student-success-stories");
    } catch (err) {
      console.error("Delete Placement Error:", err);
      setError(
        err.response?.data?.message || "Failed to delete. Please try again."
      );
      setDeleting(false);
    }
  };

  if (fetching) {
    return (
      <section className="p-6">
        <p className="text-gray-500">Loading placement details...</p>
      </section>
    );
  }

  if (!placement) {
    return (
      <section className="p-6">
        <p className="text-red-600">{error || "Placement not found."}</p>
      </section>
    );
  }

  return (
    <section className="p-6">

      {/* Header */}

      <div className="mb-8">

        <Link
          href="/admin/student-success-stories"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-3"
        >
          <ArrowLeft size={18} />
          Back to Placements
        </Link>

        <h1 className="text-3xl font-bold text-slate-800">
          Delete Placement
        </h1>

        <p className="text-gray-500 mt-1">
          This action is permanent and cannot be undone.
        </p>

      </div>

      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded-2xl shadow border border-red-200 overflow-hidden">

          {/* Warning Header */}

          <div className="bg-red-50 p-8 flex flex-col items-center">

            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
              <AlertTriangle size={42} className="text-red-600" />
            </div>

            <h2 className="text-2xl font-bold text-red-700 mt-5">
              Delete Placement Record
            </h2>

            <p className="text-gray-600 mt-3 text-center max-w-lg">
              Are you sure you want to permanently delete this placement
              record? This action cannot be reversed.
            </p>

          </div>

          {/* Student Card */}

          <div className="p-8">

            {error && (
              <div className="mb-6 bg-red-100 text-red-700 px-4 py-3 rounded-xl">
                {error}
              </div>
            )}

            <div className="flex flex-col md:flex-row gap-6 items-center border rounded-xl p-6">

              <img
                src={placement.studentPhoto}
                alt={placement.studentName}
                className="w-28 h-28 rounded-full border object-cover"
              />

              <div className="flex-1">

                <h3 className="text-2xl font-bold">
                  {placement.studentName}
                </h3>

                <p className="font-medium mt-2">
                  {placement.company}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">

                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {placement.course}
                  </span>

                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    {placement.package}
                  </span>

                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                    {placement.year}
                  </span>

                </div>

              </div>

            </div>

            {/* Warning Box */}

            <div className="mt-8 rounded-xl border border-yellow-300 bg-yellow-50 p-5">

              <h4 className="font-semibold text-yellow-700 mb-3">
                Before deleting
              </h4>

              <ul className="list-disc ml-5 text-gray-600 space-y-2">
                <li>This student record will be permanently deleted.</li>
                <li>The placement will no longer appear on the website.</li>
                <li>You will need to create a new record if deleted.</li>
              </ul>

            </div>

            {/* Buttons */}

            <div className="mt-8 flex justify-end gap-4">

              <Link
                href="/admin/student-success-stories"
                className="px-6 py-3 border rounded-xl hover:bg-gray-100 transition"
              >
                Cancel
              </Link>

              <button
                onClick={handleDelete}
                disabled={deleting}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white px-6 py-3 rounded-xl shadow"
              >
                <Trash2 size={18} />
                {deleting ? "Deleting..." : "Delete Placement"}
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}