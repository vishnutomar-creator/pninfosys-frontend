"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Plus,
  Search,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import {
  getMentors,
  deleteMentor,
} from "@/services/mentorService";

export default function MentorPage() {
  const router = useRouter();

  // Auth
  const [checkingAuth, setCheckingAuth] = useState(true);

  // Mentors
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search
  const [search, setSearch] = useState("");

  // Fetch mentors
  const fetchMentors = async () => {
    try {
      setLoading(true);

      const response = await getMentors();

      setMentors(response.data.mentors || []);
    } catch (error) {
      console.error("Failed to fetch mentors:", error);
    } finally {
      setLoading(false);
    }
  };

  // Auth check
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/admin-login");
    } else {
      setCheckingAuth(false);
      fetchMentors();
    }
  }, [router]);

  // Delete mentor
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this mentor?"
    );

    if (!confirmDelete) return;

    try {
      await deleteMentor(id);

      // Remove deleted mentor from UI
      setMentors((prevMentors) =>
        prevMentors.filter((mentor) => mentor._id !== id)
      );

      alert("Mentor deleted successfully");
    } catch (error) {
      console.error("Failed to delete mentor:", error);
      alert("Failed to delete mentor");
    }
  };

  // Search mentors
  const filtered = mentors.filter((mentor) =>
    mentor.name?.toLowerCase().includes(search.toLowerCase())
  );

  // Prevent page flash before auth check
  if (checkingAuth) {
    return null;
  }

  return (
    <section>
      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Mentor Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all industry mentors.
          </p>
        </div>

        <Link
          href="/admin/mentors/add"
          className="mt-4 md:mt-0 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl shadow"
        >
          <Plus size={18} />
          Add Mentor
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
            placeholder="Search Mentor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4">#</th>

                <th className="px-6 py-4 text-left">
                  Photo
                </th>

                <th className="px-6 py-4 text-left">
                  Mentor Name
                </th>

                <th className="px-6 py-4 text-left">
                  Designation
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
              {/* Loading */}

              {loading && (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-10 text-center text-gray-500"
                  >
                    Loading mentors...
                  </td>
                </tr>
              )}

              {/* No mentors */}

              {!loading && filtered.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-10 text-center text-gray-500"
                  >
                    No mentors found.
                  </td>
                </tr>
              )}

              {/* Mentors */}

              {!loading &&
                filtered.map((mentor, index) => (
                  <tr
                    key={mentor._id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      {index + 1}
                    </td>

                    <td className="px-6 py-4">
                      <img
                        src={mentor.photo || "https://placehold.co/80x80"}
                        className="w-14 h-14 rounded-full object-cover border"
                        alt={mentor.name}
                      />
                    </td>

                    <td className="px-6 py-4 font-semibold">
                      {mentor.name}
                    </td>

                    <td className="px-6 py-4">
                      {mentor.designation}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          mentor.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {mentor.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-3">

                        {/* View */}

                        <Link
                          href={`/admin/mentors/view/${mentor._id}`}
                          className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                        >
                          <Eye size={18} />
                        </Link>

                        {/* Edit */}

                        <Link
                          href={`/admin/mentors/edit/${mentor._id}`}
                          className="p-2 rounded-lg bg-yellow-100 text-yellow-700 hover:bg-yellow-500 hover:text-white transition"
                        >
                          <Pencil size={18} />
                        </Link>

                        {/* Delete */}

                        <button
                          onClick={() =>
                            handleDelete(mentor._id)
                          }
                          className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition"
                        >
                          <Trash2 size={18} />
                        </button>

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