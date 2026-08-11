"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Eye,
  Check,
  X,
  Trash2,
  ChevronDown,
} from "lucide-react";
// Shared axios instance from lib/api.js — its baseURL already
// includes "/api" and its interceptor already attaches the JWT
// token from localStorage, so every call below is written relative
// to that (e.g. "/enrollments", not "/api/enrollments").
import api from "@/lib/api";

export default function EnrollmentPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [course, setCourse] = useState("All");
  const [selectedEnrollment, setSelectedEnrollment] = useState(null);

  // ---- AUTH: tracks whether we've finished checking the token ----
  const [checkingAuth, setCheckingAuth] = useState(true);

  // Real data now lives here instead of the dummy `enrollmentData` array.
  const [enrollments, setEnrollments] = useState([]);

  // Loading / error state for the initial fetch (and refetches).
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Track per-row action loading (approve/reject/delete) so we can
  // disable buttons while a request is in flight, without touching
  // any Tailwind classes (we just add the `disabled` attribute).
  const [actionLoadingId, setActionLoadingId] = useState(null);

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

  // ----------------------------------------------------------------
  // FETCH ALL ENROLLMENTS
  // ----------------------------------------------------------------
  // Wrapped in useCallback so we can safely call it again after
  // approve/reject/delete without re-creating the function every render.
  const fetchEnrollments = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await api.get("/enrollments");

      // Backend might return either `res.data` (array) directly,
      // or `res.data.data` / `res.data.enrollments` depending on your
      // API's response shape. This handles the common shapes safely.
      const data =
        res.data?.enrollments ??
        res.data?.data ??
        res.data ??
        [];

      const rawList = Array.isArray(data) ? data : [];

      // Normalize the id field: MongoDB documents come back with
      // `_id` (an object/string), not `id`. Every existing handler in
      // this file (row key, approve/reject/delete, modal) reads
      // `item.id`, so we map `_id` onto `id` once here instead of
      // touching every usage below. `String(...)` guards against
      // ObjectId-like values that aren't plain strings.
      const normalized = rawList.map((item) => ({
        ...item,
        id: item.id ?? (item._id ? String(item._id) : undefined),
      }));

      setEnrollments(normalized);
    } catch (err) {
      console.error("Failed to fetch enrollments:", err);
      setError(
        err.response?.data?.message ||
          "Failed to load enrollments. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // Load enrollments once auth has been verified.
  useEffect(() => {
    if (checkingAuth) return;
    fetchEnrollments();
  }, [checkingAuth, fetchEnrollments]);

  // ----------------------------------------------------------------
  // FILTERING (now runs against real API data instead of dummy data)
  // ----------------------------------------------------------------
  const filteredData = enrollments.filter((item) => {
    const searchValue = search.toLowerCase();

    // Defensive `?.` + fallback empty string in case any field is
    // missing from a given API record.
    const matchesSearch =
      (item.name || "").toLowerCase().includes(searchValue) ||
      (item.email || "").toLowerCase().includes(searchValue) ||
      (item.phone || "").includes(searchValue) ||
      (item.college || "").toLowerCase().includes(searchValue);

    const matchesStatus = status === "All" || item.status === status;

    const matchesCourse = course === "All" || item.course === course;

    return matchesSearch && matchesStatus && matchesCourse;
  });

  // ----------------------------------------------------------------
  // APPROVE
  // ----------------------------------------------------------------
  const approveEnrollment = async (id) => {
    try {
      setActionLoadingId(id);
      await api.put(`/enrollments/${id}/approve`);
      // Refresh the list from the server so we always show the
      // authoritative state (rather than just patching local state).
      await fetchEnrollments();
    } catch (err) {
      console.error("Failed to approve enrollment:", err);
      setError(
        err.response?.data?.message || "Failed to approve enrollment."
      );
    } finally {
      setActionLoadingId(null);
    }
  };

  // ----------------------------------------------------------------
  // REJECT
  // ----------------------------------------------------------------
  const rejectEnrollment = async (id) => {
    try {
      setActionLoadingId(id);
      await api.put(`/enrollments/${id}/reject`);
      await fetchEnrollments();
    } catch (err) {
      console.error("Failed to reject enrollment:", err);
      setError(
        err.response?.data?.message || "Failed to reject enrollment."
      );
    } finally {
      setActionLoadingId(null);
    }
  };

  // ----------------------------------------------------------------
  // DELETE
  // ----------------------------------------------------------------
  const deleteEnrollment = async (id) => {
    try {
      setActionLoadingId(id);
      await api.delete(`/enrollments/${id}`);
      await fetchEnrollments();

      // If the deleted enrollment was open in the modal, close it.
      setSelectedEnrollment((prev) =>
        prev && prev.id === id ? null : prev
      );
    } catch (err) {
      console.error("Failed to delete enrollment:", err);
      setError(
        err.response?.data?.message || "Failed to delete enrollment."
      );
    } finally {
      setActionLoadingId(null);
    }
  };

  // ----------------------------------------------------------------
  // VIEW DETAILS
  // ----------------------------------------------------------------
  // Fetches the single-enrollment endpoint so the modal always shows
  // the freshest data, but falls back to the row data we already have
  // (so the UI still opens instantly) and swaps in the fresh data
  // once it arrives.
  const viewEnrollment = async (item) => {
    setSelectedEnrollment(item);

    try {
      const res = await api.get(`/enrollments/${item.id}`);
      const data = res.data?.enrollment ?? res.data?.data ?? res.data;
      if (data) {
        // Same _id -> id normalization as the list fetch above.
        setSelectedEnrollment({
          ...data,
          id: data.id ?? (data._id ? String(data._id) : item.id),
        });
      }
    } catch (err) {
      // Non-fatal: we already have the row's data shown in the modal,
      // so just log it rather than blocking the UI.
      console.error("Failed to fetch enrollment details:", err);
    }
  };

  // ---- AUTH: block page render until the check above finishes ----
  // (prevents a flash of the table before redirect kicks in)
  if (checkingAuth) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f5f6f8]">

      {/* Page Content */}
      <main className="p-8">

        {/* Heading */}
        <div className="mb-7">
          <h1 className="text-3xl font-bold text-[#14213d]">
            Enrollment Management
          </h1>

          <p className="mt-1 text-gray-500">
            Manage all course enrollment requests.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6 shadow-sm">

          <div className="flex flex-wrap gap-4">

            {/* Search */}
            <div className="relative flex-1 min-w-70">

              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search student, email, phone or college..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-12 pl-11 pr-4 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
              />

            </div>

            {/* Course */}
            <div className="relative">

              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="h-12 min-w-47.5 appearance-none border border-gray-300 rounded-lg px-4 pr-10 bg-white outline-none focus:border-blue-500"
              >
                <option value="All">All Courses</option>
                <option value="MERN Stack">MERN Stack</option>
                <option value="Web Designing">
                  Web Designing
                </option>
                <option value="Python">Python</option>
                <option value="Data Analytics">
                  Data Analytics
                </option>
              </select>

              <ChevronDown
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              />

            </div>

            {/* Status */}
            <div className="relative">

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="h-12 min-w-40 appearance-none border border-gray-300 rounded-lg px-4 pr-10 bg-white outline-none focus:border-blue-500"
              >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>

              <ChevronDown
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              />

            </div>

          </div>

        </div>

        {/* Error banner (only rendered when an API call fails).
            Uses plain, minimal markup so it doesn't disturb the
            existing layout/design system. */}
        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Enrollment Table */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">

          <div className="overflow-x-auto">

            <table className="w-full min-w-275">

              <thead className="bg-[#f8f9fb] border-b border-gray-200">

                <tr className="text-left">

                  <th className="px-6 py-4 text-sm font-bold text-gray-700">
                    #
                  </th>

                  <th className="px-6 py-4 text-sm font-bold text-gray-700">
                    Student
                  </th>

                  <th className="px-6 py-4 text-sm font-bold text-gray-700">
                    Phone
                  </th>

                  <th className="px-6 py-4 text-sm font-bold text-gray-700">
                    Course
                  </th>

                  <th className="px-6 py-4 text-sm font-bold text-gray-700">
                    College
                  </th>

                  <th className="px-6 py-4 text-sm font-bold text-gray-700">
                    Branch
                  </th>

                  <th className="px-6 py-4 text-sm font-bold text-gray-700">
                    Semester
                  </th>

                  <th className="px-6 py-4 text-sm font-bold text-gray-700">
                    Status
                  </th>

                  <th className="px-6 py-4 text-sm font-bold text-gray-700 text-center">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {/* Loading state: show a single-row placeholder instead
                    of the table body, without altering table styling. */}
                {loading && (
                  <tr>
                    <td
                      colSpan={9}
                      className="px-6 py-10 text-center text-sm text-gray-500"
                    >
                      Loading enrollments...
                    </td>
                  </tr>
                )}

                {/* Empty state: fetch succeeded but nothing matches / exists. */}
                {!loading && !error && filteredData.length === 0 && (
                  <tr>
                    <td
                      colSpan={9}
                      className="px-6 py-10 text-center text-sm text-gray-500"
                    >
                      No enrollments found.
                    </td>
                  </tr>
                )}

                {!loading &&
                  filteredData.map((item, index) => (

                  <tr
                    key={item.id ?? index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition"
                  >

                    {/* Number */}
                    <td className="px-6 py-5 text-sm">
                      {index + 1}
                    </td>

                    {/* Student */}
                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                          {item.name?.charAt(0)}
                        </div>

                        <div>
                          <p className="font-semibold text-gray-900">
                            {item.name}
                          </p>

                          <p className="text-sm text-gray-500">
                            {item.email}
                          </p>
                        </div>

                      </div>

                    </td>

                    {/* Phone */}
                    <td className="px-6 py-5 text-sm text-gray-600">
                      {item.phone}
                    </td>

                    {/* Course */}
                    <td className="px-6 py-5">
                      <span className="font-medium text-gray-800">
                        {item.course}
                      </span>
                    </td>

                    {/* College */}
                    <td className="px-6 py-5 text-sm text-gray-600">
                      {item.college}
                    </td>

                    {/* Branch */}
                    <td className="px-6 py-5 text-sm text-gray-600">
                      {item.branch}
                    </td>

                    {/* Semester */}
                    <td className="px-6 py-5 text-sm text-gray-600">
                      {item.semester}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">

                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold
                        ${
                          item.status === "Approved"
                            ? "bg-green-100 text-green-600"
                            : item.status === "Rejected"
                            ? "bg-red-100 text-red-600"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.status}
                      </span>

                    </td>

                    {/* Actions */}
                    <td className="px-6 py-5">

                      <div className="flex items-center justify-center gap-2">

                        {/* View — now calls viewEnrollment() to fetch
                            single-enrollment details from the API. */}
                        <button
                          onClick={() => viewEnrollment(item)}
                          title="View Details"
                          className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
                        >
                          <Eye size={17} />
                        </button>

                        {/* Approve — calls the approve API endpoint. */}
                        {item.status !== "Approved" && (
                          <button
                            onClick={() => approveEnrollment(item.id)}
                            disabled={actionLoadingId === item.id}
                            title="Approve"
                            className="w-9 h-9 flex items-center justify-center rounded-lg bg-green-50 text-green-600 hover:bg-green-100 disabled:opacity-50"
                          >
                            <Check size={17} />
                          </button>
                        )}

                        {/* Reject — calls the reject API endpoint. */}
                        {item.status !== "Rejected" && (
                          <button
                            onClick={() => rejectEnrollment(item.id)}
                            disabled={actionLoadingId === item.id}
                            title="Reject"
                            className="w-9 h-9 flex items-center justify-center rounded-lg bg-orange-50 text-orange-500 hover:bg-orange-100 disabled:opacity-50"
                          >
                            <X size={17} />
                          </button>
                        )}

                        {/* Delete — calls the delete API endpoint. */}
                        <button
                          onClick={() => deleteEnrollment(item.id)}
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

      {/* View Enrollment Modal */}
      {selectedEnrollment && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

          <div className="bg-white w-full max-w-2xl rounded-xl shadow-xl">

            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b">

              <div>
                <h2 className="text-xl font-bold text-[#14213d]">
                  Enrollment Details
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Complete student enrollment information
                </p>
              </div>

              <button
                onClick={() => setSelectedEnrollment(null)}
                className="text-gray-500 hover:text-black text-2xl"
              >
                ×
              </button>

            </div>

            {/* Modal Body */}
            <div className="p-6">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold">
                  {selectedEnrollment.name?.charAt(0)}
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    {selectedEnrollment.name}
                  </h3>

                  <p className="text-gray-500">
                    {selectedEnrollment.email}
                  </p>
                </div>

              </div>

              <div className="grid grid-cols-2 gap-5">

                <Detail
                  label="Phone"
                  value={selectedEnrollment.phone}
                />

                <Detail
                  label="Course"
                  value={selectedEnrollment.course}
                />

                <Detail
                  label="College"
                  value={selectedEnrollment.college}
                />

                <Detail
                  label="Qualification"
                  value={selectedEnrollment.qualification}
                />

                <Detail
                  label="Gender"
                  value={selectedEnrollment.gender}
                />

                <Detail
                  label="Branch"
                  value={selectedEnrollment.branch}
                />

                <Detail
                  label="Semester"
                  value={selectedEnrollment.semester}
                />

                <Detail
                  label="Enrollment Date"
                  value={selectedEnrollment.date}
                />

                <div className="col-span-2">
                  <Detail
                    label="Address"
                    value={selectedEnrollment.address}
                  />
                </div>

              </div>

              {/* Status */}
              <div className="mt-6">

                <p className="text-sm font-semibold text-gray-500 mb-2">
                  Status
                </p>

                <span
                  className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold
                  ${
                    selectedEnrollment.status === "Approved"
                      ? "bg-green-100 text-green-600"
                      : selectedEnrollment.status === "Rejected"
                      ? "bg-red-100 text-red-600"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {selectedEnrollment.status}
                </span>

              </div>

            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 px-6 py-4 border-t">

              <button
                onClick={() => setSelectedEnrollment(null)}
                className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Close
              </button>

              {selectedEnrollment.status !== "Approved" && (
                <button
                  onClick={async () => {
                    // Approve from the modal, then close it once done.
                    await approveEnrollment(selectedEnrollment.id);
                    setSelectedEnrollment(null);
                  }}
                  className="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Approve
                </button>
              )}

              {selectedEnrollment.status !== "Rejected" && (
                <button
                  onClick={async () => {
                    // Reject from the modal, then close it once done.
                    await rejectEnrollment(selectedEnrollment.id);
                    setSelectedEnrollment(null);
                  }}
                  className="px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Reject
                </button>
              )}

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase text-gray-400 mb-1">
        {label}
      </p>

      <p className="text-sm font-medium text-gray-800">
        {value}
      </p>
    </div>
  );
}
