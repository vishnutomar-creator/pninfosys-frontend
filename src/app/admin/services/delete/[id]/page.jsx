"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Trash2, AlertTriangle } from "lucide-react";
import { getCourse, deleteCourse } from "@/services/courseService";

export default function DeleteServicePage() {
  const router = useRouter();
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [fetching, setFetching] = useState(true);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourse(id);
        const found = data?.course || data?.data || data;
        setCourse(found);
      } catch (error) {
        console.error(error);
      } finally {
        setFetching(false);
      }
    };

    if (id) {
      fetchCourse();
    }
  }, [id]);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await deleteCourse(id);
      alert("Course Deleted Successfully");
      router.push("/admin/services");
    } catch (error) {
      console.error(error);
      setDeleting(false);
    }
  };

  return (
    <section className="p-6">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/admin/services"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-3"
        >
          <ArrowLeft size={18} />
          Back to Services
        </Link>

        <h1 className="text-3xl font-bold text-slate-800">
          Delete Service
        </h1>

        <p className="text-gray-500 mt-1">
          This action cannot be undone.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded-2xl shadow border border-red-200 overflow-hidden">

          {/* Top */}
          <div className="bg-red-50 p-8 flex flex-col items-center">

            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
              <AlertTriangle size={42} className="text-red-600" />
            </div>

            <h2 className="text-2xl font-bold text-red-700 mt-5">
              Delete Service
            </h2>

            <p className="text-gray-600 mt-2 text-center max-w-lg">
              Are you sure you want to permanently delete this
              service? Once deleted, it cannot be recovered.
            </p>

          </div>

          {/* Service Preview */}

          <div className="p-8">

            {fetching ? (
              <div className="border rounded-xl p-5 text-center text-gray-500">
                Loading service details...
              </div>
            ) : course ? (
              <div className="flex gap-5 items-center border rounded-xl p-5">

                <img
                  src={
                    course.image ||
                    course.imageUrl ||
                    "https://placehold.co/140x90/e5e7eb/6b7280?text=Service"
                  }
                  alt=""
                  className="rounded-lg w-36 h-24 object-cover"
                />

                <div>

                  <h3 className="text-xl font-bold">
                    {course.title}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {course.description}
                  </p>

                  <div className="flex gap-3 mt-3">
                    <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {course.duration}
                    </span>

                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm ${
                        course.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {course.status}
                    </span>
                  </div>

                </div>

              </div>
            ) : (
              <div className="border rounded-xl p-5 text-center text-gray-500">
                Service not found.
              </div>
            )}

            {/* Warning */}

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-5">

              <h4 className="font-semibold text-yellow-700 mb-2">
                Warning
              </h4>

              <ul className="list-disc ml-5 text-gray-600 space-y-2">
                <li>This service will be permanently removed.</li>
                <li>You cannot restore it later.</li>
                <li>Users will no longer see this service.</li>
              </ul>

            </div>

            {/* Buttons */}

            <div className="mt-8 flex justify-end gap-4">

              <button
                onClick={() => router.push("/admin/services")}
                className="px-6 py-3 border rounded-xl hover:bg-gray-100"
                disabled={deleting}
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                disabled={deleting || fetching || !course}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl shadow disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Trash2 size={18} />
                {deleting ? "Deleting..." : "Delete Service"}
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
