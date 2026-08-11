"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Users,
  BookOpen,
  UserCheck,
  Clock,
  Trophy,
  Briefcase,
  ArrowUpRight,
  Eye,
  X,
  Mail,
  Phone,
  GraduationCap,
  MapPin,
  CalendarDays,
  Building2,
  LogOut,
} from "lucide-react";
// Same shared axios instance used on the Enrollments page — baseURL
// already includes "/api", and its interceptor already attaches the
// JWT token from localStorage.
import api from "@/lib/api";
import { getCourses } from "@/services/courseService";
import { getPlacements } from "@/services/placementsService";

export default function Dashboard() {
  const router = useRouter();

  const [selectedEnrollment, setSelectedEnrollment] = useState(null);

  // ---- AUTH: tracks whether we've finished checking the token ----
  const [checkingAuth, setCheckingAuth] = useState(true);

  // ---- ENROLLMENTS: live data from backend ----
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Courses: live count from backend
  const [totalCourses, setTotalCourses] = useState(0);

  // Placements: live count from backend (also used for Success Stories)
  const [totalPlacements, setTotalPlacements] = useState(0);

  // ---- AUTH: on mount, verify a JWT exists in localStorage ----
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // No token -> not logged in, send them to login page
      router.push("/admin-login");
    } else {
      // Token exists -> allow dashboard to render
      setCheckingAuth(false);
    }
  }, [router]);

  // ---- ENROLLMENTS: fetch once auth check has passed ----
  useEffect(() => {
    if (checkingAuth) return;

    const fetchEnrollments = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await api.get("/enrollments");

        // Same response-shape handling as the Enrollments page.
        const data =
          res.data?.enrollments ?? res.data?.data ?? res.data ?? [];

        const rawList = Array.isArray(data) ? data : [];

        // Normalize _id -> id, same as the Enrollments page, so the
        // modal's key usage stays consistent across the app.
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
    };

    fetchEnrollments();
  }, [checkingAuth]);

  // ---- COURSES & PLACEMENTS: fetch once auth check has passed ----
  useEffect(() => {
    if (checkingAuth) return;

    const fetchCourses = async () => {
      try {
        const res = await getCourses();
        const data = res.data?.courses ?? res.data?.data ?? res.data ?? [];
        setTotalCourses(Array.isArray(data) ? data.length : 0);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
      }
    };

    const fetchPlacements = async () => {
      try {
        const res = await getPlacements();
        const data =
          res.data?.placements ?? res.data?.data ?? res.data ?? [];
        setTotalPlacements(Array.isArray(data) ? data.length : 0);
      } catch (err) {
        console.error("Failed to fetch placements:", err);
      }
    };

    fetchCourses();
    fetchPlacements();
  }, [checkingAuth]);

  // ---- AUTH: clears session and redirects to login ----
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    router.push("/admin-login");
  };

  // ---- AUTH: block dashboard render until the check above finishes ----
  // (prevents a flash of the dashboard before redirect kicks in)
  if (checkingAuth) {
    return null;
  }

  // ---- ENROLLMENTS: derived stats from live data ----
  const totalEnrollments = enrollments.length;
  const pendingEnrollments = enrollments.filter(
    (e) => e.status === "Pending"
  ).length;

  // ---- ENROLLMENTS: latest 5 by createdAt, newest first ----
  const recentEnrollments = [...enrollments]
    .sort(
      (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
    )
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-[#f5f6f8]">

      <main className="p-8">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold text-[#14213d]">
              Dashboard
            </h1>

            <p className="mt-1 text-gray-500">
              Welcome back! Here's what's happening with PNINFOSYS.
            </p>
          </div>

          {/* AUTH: Logout button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-red-600 transition shadow-sm"
          >
            <LogOut size={17} />
            logout
          </button>

        </div>

        {/* ================================================= */}
        {/* STAT CARDS */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-7">

          <StatCard
            title="Total Enrollments"
            value={loading ? "..." : totalEnrollments}
            change="+12.5%"
            icon={<Users size={23} />}
            iconBg="bg-blue-100"
            iconColor="text-blue-600"
          />

          <StatCard
            title="Pending Enrollments"
            value={loading ? "..." : pendingEnrollments}
            change="+4.2%"
            icon={<Clock size={23} />}
            iconBg="bg-yellow-100"
            iconColor="text-yellow-600"
          />

          <StatCard
            title="Total Courses"
            value={totalCourses}
            change="+2"
            icon={<BookOpen size={23} />}
            iconBg="bg-purple-100"
            iconColor="text-purple-600"
          />

          <StatCard
            title="Total Mentors"
            value="18"
            change="+3"
            icon={<UserCheck size={23} />}
            iconBg="bg-green-100"
            iconColor="text-green-600"
          />

        </div>

        {/* ================================================= */}
        {/* SECONDARY STATS */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-7">

          {/* Success Stories */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Success Stories
                </p>

                <h2 className="text-3xl font-bold text-[#14213d] mt-2">
                  {totalPlacements}
                </h2>

                <p className="text-sm text-green-600 mt-2 font-medium">
                  +8 this month
                </p>
              </div>

              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <Trophy size={23} />
              </div>

            </div>

          </div>

          {/* Placements */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Total Placements
                </p>

                <h2 className="text-3xl font-bold text-[#14213d] mt-2">
                  {totalPlacements}
                </h2>

                <p className="text-sm text-green-600 mt-2 font-medium">
                  +6 this month
                </p>
              </div>

              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <Briefcase size={23} />
              </div>

            </div>

          </div>

        </div>

        {/* ================================================= */}
        {/* RECENT ENROLLMENTS */}
        {/* ================================================= */}

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

          {/* Table Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">

            <div>
              <h2 className="text-lg font-bold text-[#14213d]">
                Recent Enrollments
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Latest course enrollment requests
              </p>
            </div>

            <a
              href="/admin/enrollments"
              className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View All
              <ArrowUpRight size={16} />
            </a>

          </div>

          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full min-w-200">

              <thead className="bg-[#f8f9fb] border-b border-gray-200">

                <tr className="text-left">

                  <th className="px-6 py-4 text-sm font-bold text-gray-700">
                    Student
                  </th>

                  <th className="px-6 py-4 text-sm font-bold text-gray-700">
                    Course
                  </th>

                  <th className="px-6 py-4 text-sm font-bold text-gray-700">
                    Date
                  </th>

                  <th className="px-6 py-4 text-sm font-bold text-gray-700">
                    Status
                  </th>

                  <th className="px-6 py-4 text-sm font-bold text-gray-700 text-center">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {/* Loading state — mirrors the Enrollments page pattern */}
                {loading && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-10 text-center text-sm text-gray-500"
                    >
                      Loading enrollments...
                    </td>
                  </tr>
                )}

                {/* Error state */}
                {!loading && error && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-10 text-center text-sm text-red-600"
                    >
                      {error}
                    </td>
                  </tr>
                )}

                {/* Empty state */}
                {!loading && !error && recentEnrollments.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-10 text-center text-sm text-gray-500"
                    >
                      No enrollments found.
                    </td>
                  </tr>
                )}

                {!loading &&
                  !error &&
                  recentEnrollments.map((item) => (

                  <tr
                    key={item.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                  >

                    {/* Student */}
                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                          {item.fullName?.charAt(0)}
                        </div>

                        <div>

                          <p className="font-semibold text-gray-900">
                            {item.fullName}
                          </p>

                          <p className="text-sm text-gray-500">
                            {item.email}
                          </p>

                        </div>

                      </div>

                    </td>

                    {/* Course */}
                    <td className="px-6 py-5 text-sm font-medium text-gray-700">
                      {item.course}
                    </td>

                    {/* Date */}
                    <td className="px-6 py-5 text-sm text-gray-500">
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleDateString(
                            "en-GB",
                            { day: "2-digit", month: "short", year: "numeric" }
                          )
                        : "-"}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">

                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${item.status === "Approved"
                            ? "bg-green-100 text-green-600"
                            : item.status === "Rejected"
                              ? "bg-red-100 text-red-600"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                      >
                        {item.status}
                      </span>

                    </td>

                    {/* View */}
                    <td className="px-6 py-5">

                      <div className="flex justify-center">

                        <button
                          onClick={() =>
                            setSelectedEnrollment(item)
                          }
                          title="View Enrollment"
                          className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                        >
                          <Eye size={17} />
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

      {/* ================================================= */}
      {/* VIEW ENROLLMENT MODAL */}
      {/* ================================================= */}

      {selectedEnrollment && (

        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedEnrollment(null)}
        >

          <div
            className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 sticky top-0 bg-white">

              <div>
                <h2 className="text-xl font-bold text-[#14213d]">
                  Enrollment Details
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Complete student enrollment information
                </p>
              </div>

              <button
                onClick={() =>
                  setSelectedEnrollment(null)
                }
                className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition"
              >
                <X size={20} />
              </button>

            </div>

            {/* Modal Body */}
            <div className="p-6">

              {/* Student Profile */}
              <div className="flex items-center gap-4 pb-6 border-b border-gray-200">

                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold">
                  {selectedEnrollment.fullName?.charAt(0)}
                </div>

                <div className="flex-1">

                  <h3 className="text-xl font-bold text-gray-900">
                    {selectedEnrollment.fullName}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {selectedEnrollment.email}
                  </p>

                </div>

                <span
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold ${selectedEnrollment.status === "Approved"
                      ? "bg-green-100 text-green-600"
                      : selectedEnrollment.status === "Rejected"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                >
                  {selectedEnrollment.status}
                </span>

              </div>

              {/* Course Information */}
              <div className="mt-6">

                <h3 className="text-base font-bold text-[#14213d] mb-4">
                  Course Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <DetailCard
                    icon={<BookOpen size={18} />}
                    label="Course"
                    value={selectedEnrollment.course}
                  />

                  <DetailCard
                    icon={<CalendarDays size={18} />}
                    label="Enrollment Date"
                    value={
                      selectedEnrollment.createdAt
                        ? new Date(
                            selectedEnrollment.createdAt
                          ).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : "-"
                    }
                  />

                </div>

              </div>

              {/* Personal Information */}
              <div className="mt-7">

                <h3 className="text-base font-bold text-[#14213d] mb-4">
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <DetailCard
                    icon={<UserCheck size={18} />}
                    label="Full Name"
                    value={selectedEnrollment.fullName}
                  />

                  <DetailCard
                    icon={<Mail size={18} />}
                    label="Email"
                    value={selectedEnrollment.email}
                  />

                  <DetailCard
                    icon={<Phone size={18} />}
                    label="Phone"
                    value={selectedEnrollment.phone}
                  />

                  <DetailCard
                    icon={<UserCheck size={18} />}
                    label="Gender"
                    value={selectedEnrollment.gender}
                  />

                  <DetailCard
                    icon={<GraduationCap size={18} />}
                    label="Qualification"
                    value={selectedEnrollment.qualification}
                  />

                  <DetailCard
                    icon={<Building2 size={18} />}
                    label="College"
                    value={selectedEnrollment.college}
                  />

                  <DetailCard
                    icon={<GraduationCap size={18} />}
                    label="Branch"
                    value={selectedEnrollment.branch}
                  />

                  <DetailCard
                    icon={<BookOpen size={18} />}
                    label="Semester"
                    value={selectedEnrollment.semester}
                  />

                </div>

              </div>

              {/* Address */}
              <div className="mt-7">

                <h3 className="text-base font-bold text-[#14213d] mb-4">
                  Address
                </h3>

                <div className="flex items-start gap-3 p-4 bg-[#f8f9fb] rounded-xl border border-gray-200">

                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>

                  <div>

                    <p className="text-xs font-semibold uppercase text-gray-400 mb-1">
                      Address
                    </p>

                    <p className="text-sm font-medium text-gray-800">
                      {selectedEnrollment.address}
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Modal Footer */}
            <div className="flex justify-end px-6 py-4 border-t border-gray-200 bg-gray-50">

              <button
                onClick={() =>
                  setSelectedEnrollment(null)
                }
                className="px-5 py-2.5 bg-[#14213d] text-white rounded-lg hover:bg-[#1c2d50] transition"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

/* ================================================= */
/* STAT CARD COMPONENT */
/* ================================================= */

function StatCard({
  title,
  value,
  change,
  icon,
  iconBg,
  iconColor,
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-[#14213d] mt-2">
            {value}
          </h2>

          <p className="text-sm text-green-600 mt-2 font-medium">
            {change} this month
          </p>

        </div>

        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg} ${iconColor}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}

/* ================================================= */
/* DETAIL CARD COMPONENT */
/* ================================================= */

function DetailCard({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-[#f8f9fb] rounded-xl border border-gray-200">

      <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-xs font-semibold uppercase text-gray-400 mb-1">
          {label}
        </p>

        <p className="text-sm font-semibold text-gray-800 truncate">
          {value}
        </p>

      </div>

    </div>
  );
}
