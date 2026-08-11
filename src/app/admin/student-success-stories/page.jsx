"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getPlacements } from "@/services/placementsService";

import {
  Plus,
  Search,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

export default function PlacementPage() {
  const router = useRouter();

  // ---- AUTH: tracks whether we've finished checking the token ----
  const [checkingAuth, setCheckingAuth] = useState(true);

  const [search, setSearch] = useState("");
  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(true);

  // ---- AUTH: on mount, verify a JWT exists in localStorage ----
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // No token -> not logged in, send them to login page
      router.push("/admin-login");
    } else {
      // Token exists -> allow page to render
      setCheckingAuth(false);
    }
  }, [router]);

  const fetchPlacements = async () => {
    try {
      const response = await getPlacements();
      setPlacements(response.data.placements); // adjust key based on your API response shape
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Load placements once auth has been verified.
  useEffect(() => {
    if (checkingAuth) return;
    fetchPlacements();
  }, [checkingAuth]);

  const filteredStudents = placements.filter((student) =>
    student.studentName.toLowerCase().includes(search.toLowerCase())
  );

  // ---- AUTH: block page render until the check above finishes ----
  // (prevents a flash of the table before redirect kicks in)
  if (checkingAuth) {
    return null;
  }

  return (
    <section className="p-6">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Placement Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all placement students.
          </p>
        </div>

        <Link
          href="/admin/student-success-stories/add"
          className="mt-4 md:mt-0 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl shadow"
        >
          <Plus size={18} />
          Add Student
        </Link>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow border p-5 mb-6">

        <div className="relative max-w-sm">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search Student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow border overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="px-6 py-4 text-left">#</th>

                <th className="px-6 py-4 text-left">
                  Photo
                </th>

                <th className="px-6 py-4 text-left">
                  Student Name
                </th>

                <th className="px-6 py-4 text-left">
                  Company
                </th>

                <th className="px-6 py-4 text-left">
                  Course
                </th>

                <th className="px-6 py-4 text-left">
                  Package
                </th>

                <th className="px-6 py-4 text-left">
                  Year
                </th>

                <th className="px-6 py-4 text-left">
                  Status
                </th>

                <th className="px-6 py-4 text-center">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredStudents.map((student, index) => (

                <tr
                  key={student._id}
                  className="border-t hover:bg-gray-50"
                >

                  <td className="px-6 py-4">
                    {index + 1}
                  </td>

                  <td className="px-6 py-4">

                    <img
                      src={student.studentPhoto}
                      alt=""
                      className="w-14 h-14 rounded-full border object-cover"
                    />

                  </td>

                  <td className="px-6 py-4 font-semibold">
                    {student.studentName}
                  </td>

                  <td className="px-6 py-4">
                    {student.company}
                  </td>

                  <td className="px-6 py-4">
                    {student.course}
                  </td>

                  <td className="px-6 py-4 font-semibold text-green-600">
                    {student.package}
                  </td>

                  <td className="px-6 py-4">
                    {student.year}
                  </td>

                  <td className="px-6 py-4">

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {student.status}
                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <div className="flex justify-center gap-3">

                      <Link
                        href={`/admin/student-success-stories/view/${student._id}`}
                        className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                      >
                        <Eye size={18} />
                      </Link>

                      <Link
                        href={`/admin/student-success-stories/edit/${student._id}`}
                        className="p-2 rounded-lg bg-yellow-100 text-yellow-700 hover:bg-yellow-500 hover:text-white transition"
                      >
                        <Pencil size={18} />
                      </Link>

                      <Link
                        href={`/admin/student-success-stories/delete/${student._id}`}
                        className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition"
                      >
                        <Trash2 size={18} />
                      </Link>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}
