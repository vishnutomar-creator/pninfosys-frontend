"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, Eye, Trash2, Mail, ChevronDown } from "lucide-react";
import api from "@/lib/api";

export default function ContactPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [selectedContact, setSelectedContact] = useState(null);

  const [checkingAuth, setCheckingAuth] = useState(true);
  const [contacts, setContacts] = useState([]);
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

  const fetchContacts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await api.get("/contacts");

      const data =
        res.data?.contacts ??
        res.data?.data ??
        res.data ??
        [];

      const rawList = Array.isArray(data) ? data : [];

      const normalized = rawList.map((item) => ({
        ...item,
        id: item.id ?? (item._id ? String(item._id) : undefined),
      }));

      setContacts(normalized);
    } catch (err) {
      console.error("Failed to fetch contacts:", err);
      setError(
        err.response?.data?.message ||
          "Failed to load messages. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (checkingAuth) return;
    fetchContacts();
  }, [checkingAuth, fetchContacts]);

  const filteredData = contacts.filter((item) => {
    const searchValue = search.toLowerCase();

    const matchesSearch =
      (item.fullName || "").toLowerCase().includes(searchValue) ||
      (item.email || "").toLowerCase().includes(searchValue) ||
      (item.phone || "").includes(searchValue) ||
      (item.course || "").toLowerCase().includes(searchValue);

    const matchesStatus = status === "All" || item.status === status;

    return matchesSearch && matchesStatus;
  });

  const viewContact = async (item) => {
    setSelectedContact(item);

    // Mark as read when opened, if it's currently "New"
    if (item.status === "New") {
      try {
        setActionLoadingId(item.id);
        await api.put(`/contacts/${item.id}/read`);
        await fetchContacts();
        setSelectedContact((prev) =>
          prev && prev.id === item.id ? { ...prev, status: "Read" } : prev
        );
      } catch (err) {
        console.error("Failed to mark as read:", err);
      } finally {
        setActionLoadingId(null);
      }
    }
  };

  const deleteContact = async (id) => {
    try {
      setActionLoadingId(id);
      await api.delete(`/contacts/${id}`);
      await fetchContacts();

      setSelectedContact((prev) =>
        prev && prev.id === id ? null : prev
      );
    } catch (err) {
      console.error("Failed to delete message:", err);
      setError(
        err.response?.data?.message || "Failed to delete message."
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
        <div className="mb-7">
          <h1 className="text-3xl font-bold text-[#14213d]">
            Contact Messages
          </h1>

          <p className="mt-1 text-gray-500">
            View and manage all incoming contact form submissions.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6 shadow-sm">
          <div className="flex flex-wrap gap-4">

            <div className="relative flex-1 min-w-70">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search name, email, phone or course..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-12 pl-11 pr-4 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
              />
            </div>

            <div className="relative">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="h-12 min-w-40 appearance-none border border-gray-300 rounded-lg px-4 pr-10 bg-white outline-none focus:border-blue-500"
              >
                <option value="All">All Status</option>
                <option value="New">New</option>
                <option value="Read">Read</option>
                <option value="Replied">Replied</option>
              </select>
              <ChevronDown
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              />
            </div>

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
                  <th className="px-6 py-4 text-sm font-bold text-gray-700">Sender</th>
                  <th className="px-6 py-4 text-sm font-bold text-gray-700">Phone</th>
                  <th className="px-6 py-4 text-sm font-bold text-gray-700">Course</th>
                  <th className="px-6 py-4 text-sm font-bold text-gray-700">Message</th>
                  <th className="px-6 py-4 text-sm font-bold text-gray-700">Status</th>
                  <th className="px-6 py-4 text-sm font-bold text-gray-700 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {loading && (
                  <tr>
                    <td colSpan={7} className="px-6 py-10 text-center text-sm text-gray-500">
                      Loading messages...
                    </td>
                  </tr>
                )}

                {!loading && !error && filteredData.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-6 py-10 text-center text-sm text-gray-500">
                      No messages found.
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
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                            {item.fullName?.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{item.fullName}</p>
                            <p className="text-sm text-gray-500">{item.email}</p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-600">{item.phone}</td>

                      <td className="px-6 py-5 text-sm text-gray-600">
                        {item.course || "—"}
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-600 max-w-70 truncate">
                        {item.message}
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold
                          ${
                            item.status === "Replied"
                              ? "bg-green-100 text-green-600"
                              : item.status === "Read"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => viewContact(item)}
                            title="View Message"
                            className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
                          >
                            <Eye size={17} />
                          </button>

                          <button
                            onClick={() => deleteContact(item.id)}
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

      {/* View Contact Modal */}
      {selectedContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-xl">

            <div className="flex items-center justify-between px-6 py-5 border-b">
              <div>
                <h2 className="text-xl font-bold text-[#14213d]">
                  Message Details
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Complete contact form submission
                </p>
              </div>

              <button
                onClick={() => setSelectedContact(null)}
                className="text-gray-500 hover:text-black text-2xl"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold">
                  {selectedContact.fullName?.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{selectedContact.fullName}</h3>
                  <p className="text-gray-500">{selectedContact.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase text-gray-400 mb-1">
                    Phone
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    {selectedContact.phone}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-gray-400 mb-1">
                    Course
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    {selectedContact.course || "—"}
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase text-gray-400 mb-1">
                  Message
                </p>
                <p className="text-sm font-medium text-gray-800 whitespace-pre-wrap">
                  {selectedContact.message}
                </p>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-500 mb-2">
                  Status
                </p>
                <span
                  className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold
                  ${
                    selectedContact.status === "Replied"
                      ? "bg-green-100 text-green-600"
                      : selectedContact.status === "Read"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {selectedContact.status}
                </span>
              </div>
            </div>

            <div className="flex justify-end gap-3 px-6 py-4 border-t">
              <button
                onClick={() => setSelectedContact(null)}
                className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Close
              </button>

              <a
                href={`mailto:${selectedContact.email}`}
                className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
              >
                <Mail size={16} />
                Reply via Email
              </a>

              {selectedContact.status !== "Replied" && (
                <button
                  onClick={async () => {
                    await api.put(`/contacts/${selectedContact.id}/replied`);
                    await fetchContacts();
                    setSelectedContact(null);
                  }}
                  className="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Mark as Replied
                </button>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}