"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Trash2,
  AlertTriangle,
} from "lucide-react";

import {
  getMentor,
  deleteMentor,
} from "@/services/mentorService";

export default function DeleteMentorPage() {
  const params = useParams();
  const router = useRouter();

  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");

  // Fetch mentor
  useEffect(() => {
    const fetchMentor = async () => {
      try {
        setLoading(true);

        const response = await getMentor(params.id);

        setMentor(response.data.mentor);
      } catch (error) {
        console.error("Failed to fetch mentor:", error);

        setError(
          error?.response?.data?.message ||
            "Failed to load mentor."
        );
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchMentor();
    }
  }, [params.id]);

  // Delete mentor
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to permanently delete this mentor?"
    );

    if (!confirmDelete) return;

    try {
      setDeleting(true);
      setError("");

      await deleteMentor(params.id);

      alert("Mentor deleted successfully!");

      router.push("/admin/mentors");
    } catch (error) {
      console.error("Failed to delete mentor:", error);

      setError(
        error?.response?.data?.message ||
          "Failed to delete mentor. Please try again."
      );

      setDeleting(false);
    }
  };

  // Loading
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-500">
          Loading mentor...
        </p>
      </div>
    );
  }

  // Mentor not found
  if (!mentor) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-slate-800">
          Mentor not found
        </h2>

        <Link
          href="/admin/mentors"
          className="inline-flex items-center gap-2 mt-5 text-blue-600"
        >
          <ArrowLeft size={18} />
          Back to Mentors
        </Link>
      </div>
    );
  }

  return (
    <section>
      {/* Header */}

      <div className="mb-8">
        <Link
          href="/admin/mentors"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-3"
        >
          <ArrowLeft size={18} />
          Back to Mentors
        </Link>

        <h1 className="text-3xl font-bold text-slate-800">
          Delete Mentor
        </h1>

        <p className="text-gray-500 mt-1">
          This action cannot be undone.
        </p>
      </div>

      {/* Error */}

      {error && (
        <div className="max-w-3xl mx-auto mb-6 bg-red-100 border border-red-200 text-red-700 px-5 py-3 rounded-xl">
          {error}
        </div>
      )}

      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow border border-red-200 overflow-hidden">

          {/* Top */}

          <div className="bg-red-50 p-8 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
              <AlertTriangle
                size={42}
                className="text-red-600"
              />
            </div>

            <h2 className="text-2xl font-bold text-red-700 mt-5">
              Delete Mentor
            </h2>

            <p className="text-gray-600 mt-3 text-center max-w-lg">
              Are you sure you want to permanently delete
              this mentor? This action cannot be reversed.
            </p>
          </div>

          {/* Mentor Preview */}

          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-6 items-center border rounded-xl p-6">

              <img
                src={
                  mentor.photo ||
                  "https://placehold.co/120x120"
                }
                alt={mentor.name}
                className="w-28 h-28 rounded-full object-cover border"
              />

              <div className="flex-1">
                <h3 className="text-2xl font-bold">
                  {mentor.name}
                </h3>

                <p className="text-blue-600 font-medium mt-2">
                  {mentor.designation}
                </p>

                <p className="text-gray-500 mt-3 leading-7">
                  {mentor.description ||
                    "No description available."}
                </p>

                <span
                  className={`inline-block mt-4 px-4 py-2 rounded-full text-sm ${
                    mentor.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {mentor.status}
                </span>
              </div>
            </div>

            {/* Warning */}

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <h4 className="font-semibold text-yellow-700 mb-3">
                Warning
              </h4>

              <ul className="list-disc ml-5 text-gray-600 space-y-2">
                <li>
                  This mentor profile will be permanently
                  deleted.
                </li>

                <li>
                  It will no longer appear on the website.
                </li>

                <li>
                  You will need to create a new mentor
                  profile again.
                </li>
              </ul>
            </div>

            {/* Buttons */}

            <div className="mt-8 flex justify-end gap-4">
              <Link
                href="/admin/mentors"
                className="px-6 py-3 border rounded-xl hover:bg-gray-100 transition"
              >
                Cancel
              </Link>

              <button
                onClick={handleDelete}
                disabled={deleting}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-6 py-3 rounded-xl shadow"
              >
                <Trash2 size={18} />

                {deleting
                  ? "Deleting..."
                  : "Delete Mentor"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}