"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getCourse } from "@/services/courseService";

export default function ViewService() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCourse = async () => {
    try {
      const res = await getCourse(id);
      setCourse(res.data.course);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchCourse();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="p-6 text-center">
        Loading...
      </div>
    );
  }

  if (!course) {
    return (
      <div className="p-6 text-center text-red-500">
        Course not found.
      </div>
    );
  }

  return (
    <section className="p-6">

      <Link
        href="/admin/services"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft size={18} />
        Back to Services
      </Link>

      <div className="bg-white rounded-2xl shadow border p-8">

        <div className="grid md:grid-cols-2 gap-8">

          <div>
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-80 object-cover rounded-xl border"
            />
          </div>

          <div>

            <h1 className="text-3xl font-bold mb-4">
              {course.title}
            </h1>

            <p className="text-gray-600 leading-7 mb-6">
              {course.description}
            </p>

            <div className="space-y-4">

              <div>
                <span className="font-semibold">
                  Duration:
                </span>{" "}
                {course.duration}
              </div>

              <div>
                <span className="font-semibold">
                  Status:
                </span>{" "}

                <span
                  className={`ml-2 px-3 py-1 rounded-full text-sm ${
                    course.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {course.status}
                </span>
              </div>

              <div>
                <span className="font-semibold">
                  Created:
                </span>{" "}
                {new Date(course.createdAt).toLocaleDateString()}
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}