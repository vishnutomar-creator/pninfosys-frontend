"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Eye, Pencil, Trash2, Plus } from "lucide-react";
import { getProjects, deleteProject } from "@/services/projectService";

export default function ProjectsPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [checkingAuth, setCheckingAuth] = useState(true);

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [actionLoadingId, setActionLoadingId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin-login");
    } else {
      setCheckingAuth(false);
    }
  }, [router]);

  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await getProjects();

      const data =
        res.data?.projects ?? res.data?.data ?? res.data ?? [];

      const rawList = Array.isArray(data) ? data : [];

      const normalized = rawList.map((item) => ({
        ...item,
        id: item.id ?? (item._id ? String(item._id) : undefined),
      }));

      setProjects(normalized);
    } catch (err) {
      console.error("Failed to fetch projects:", err);
      setError(
        err.response?.data?.message ||
          "Failed to load projects. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (checkingAuth) return;
    fetchProjects();
  }, [checkingAuth, fetchProjects]);

  const filteredData = projects.filter((item) => {
    const searchValue = search.toLowerCase();
    return (
      (item.title || "").toLowerCase().includes(searchValue) ||
      (item.category || "").toLowerCase().includes(searchValue)
    );
  });

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      setActionLoadingId(id);
      await deleteProject(id);
      await fetchProjects();
    } catch (err) {
      console.error("Failed to delete project:", err);
      setError(
        err.response?.data?.message || "Failed to delete project."
      );
    } finally {
      setActionLoadingId(null);
    }
  };

  if (checkingAuth) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f5f6f8]">
      <main className="p-8">

        {/* Heading */}
        <div className="mb-7 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#14213d]">
              Project Management
            </h1>
            <p className="mt-1 text-gray-500">
              Manage all showcased client projects.
            </p>
          </div>

          <Link
            href="/admin/projects/add"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            <Plus size={18} />
            Add Project
          </Link>
        </div>

        {/* Search */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6 shadow-sm">
          <div className="relative">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search project title or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 pl-11 pr-4 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-225">
              <thead className="bg-[#f8f9fb] border-b border-gray-200">
                <tr className="text-left">
                  <th className="px-6 py-4 text-sm font-bold text-gray-700">#</th>
                  <th className="px-6 py-4 text-sm font-bold text-gray-700">Image</th>
                  <th className="px-6 py-4 text-sm font-bold text-gray-700">Title</th>
                  <th className="px-6 py-4 text-sm font-bold text-gray-700">Category</th>
                  <th className="px-6 py-4 text-sm font-bold text-gray-700">Description</th>
                  <th className="px-6 py-4 text-sm font-bold text-gray-700">Status</th>
                  <th className="px-6 py-4 text-sm font-bold text-gray-700 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {loading && (
                  <tr>
                    <td colSpan={7} className="px-6 py-10 text-center text-sm text-gray-500">
                      Loading projects...
                    </td>
                  </tr>
                )}

                {!loading && !error && filteredData.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-6 py-10 text-center text-sm text-gray-500">
                      No projects found.
                    </td>
                  </tr>
                )}

                {!loading &&
                  filteredData.map((item, index) => (
                    <tr
                      key={item.id ?? index}
                      className="border-b border-gray-200 hover:bg-gray-50 transition"
                    >
                      <td className="px-6 py-5 text-sm">{index + 1}</td>

                      <td className="px-6 py-5">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-14 h-14 rounded-lg object-cover border border-gray-200"
                        />
                      </td>

                      <td className="px-6 py-5">
                        <p className="font-semibold text-gray-900">{item.title}</p>
                      </td>

                      <td className="px-6 py-5">
                        <span className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">
                          {item.category}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-600 max-w-80 truncate">
                        {item.description}
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                            item.status === "Active"
                              ? "bg-green-100 text-green-600"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex items-center justify-center gap-2">
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                              title="View Live"
                              className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
                            >
                              <Eye size={17} />
                            </a>
                          )}

                          <Link
                            href={`/admin/projects/edit/${item.id}`}
                            title="Edit"
                            className="w-9 h-9 flex items-center justify-center rounded-lg bg-yellow-50 text-yellow-600 hover:bg-yellow-100"
                          >
                            <Pencil size={17} />
                          </Link>

                          <button
                            onClick={() => handleDelete(item.id)}
                            disabled={actionLoadingId === item.id}
                            title="Delete"
                            className="w-9 h-9 flex items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100 disabled:opacity-50"
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}