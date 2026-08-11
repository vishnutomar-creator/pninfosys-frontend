"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getCourses } from "@/services/courseService";

import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Eye,
} from "lucide-react";

export default function ServicesPage() {
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    try {
      const res = await getCourses();
      setCourses(res.data.courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const filtered = courses.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading courses...
      </div>
    );
  }

  return (
    <section className="p-6">

      {/* Heading */}
      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Service Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all website services.
          </p>
        </div>

        <Link
          href="/admin/services/add"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-3 rounded-xl shadow"
        >
          <Plus size={18} />
          Add Service
        </Link>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow border border-gray-200 p-5 mb-6">

        <div className="relative max-w-sm">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search Service..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr className="text-left">

                <th className="px-6 py-4">#</th>

                <th className="px-6 py-4">Image</th>

                <th className="px-6 py-4">Service Name</th>

                <th className="px-6 py-4">Description</th>

                <th className="px-6 py-4">Duration</th>

                <th className="px-6 py-4">Status</th>

                <th className="px-6 py-4 text-center">Actions</th>

              </tr>

            </thead>

            <tbody>

              {filtered.length > 0 ? (
                filtered.map((item, index) => (

                  <tr
                    key={item._id}
                    className="border-t hover:bg-gray-50 transition"
                  >

                    <td className="px-6 py-4">
                      {index + 1}
                    </td>

                    <td className="px-6 py-4">

                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-14 rounded-lg object-cover border"
                      />

                    </td>

                    <td className="px-6 py-4 font-semibold">
                      {item.title}
                    </td>

                    <td className="px-6 py-4 text-gray-500">
                      {item.description}
                    </td>

                    <td className="px-6 py-4">
                      {item.duration}
                    </td>

                    <td className="px-6 py-4">

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.status}
                      </span>

                    </td>

                    <td className="px-6 py-4">

                      <div className="flex items-center justify-center gap-3">

                        {/* View */}
                        <Link
                          href={`/admin/services/view/${item._id}`}
                          className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                        >
                          <Eye size={18} />
                        </Link>

                        {/* Edit */}
                        <Link
                          href={`/admin/services/edit/${item._id}`}
                          className="p-2 rounded-lg bg-yellow-100 text-yellow-700 hover:bg-yellow-500 hover:text-white transition"
                        >
                          <Pencil size={18} />
                        </Link>

                        {/* Delete */}
                        <Link
                          href={`/admin/services/delete/${item._id}`}
                          className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition"
                        >
                          <Trash2 size={18} />
                        </Link>

                      </div>

                    </td>

                  </tr>

                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-10 text-gray-500"
                  >
                    No services found.
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}