"use client";

import api from "@/lib/api"; // ⚠️ adjust path to match your actual axios instance file
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  college: "",
  address: "",
  qualification: "",
  gender: "",
  branch: "",
  semester: "",
};

const fieldClasses =
  "w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 " +
  "focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-colors";

const EnrollModal = ({ courseTitle, courseName, isOpen, onClose }) => {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  const selectedCourse = courseTitle || courseName || "Training Program";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Lock pinch/browser zoom while the modal is open so the card
    // stays visually static no matter how much the user tries to zoom.
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    const createdMeta = !viewportMeta;

    if (!viewportMeta) {
      viewportMeta = document.createElement("meta");
      viewportMeta.name = "viewport";
      document.head.appendChild(viewportMeta);
    }

    const originalContent = viewportMeta.getAttribute("content") || "";
    viewportMeta.setAttribute(
      "content",
      "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
    );

    return () => {
      document.body.style.overflow = originalOverflow;

      if (createdMeta) {
        viewportMeta.remove();
      } else {
        viewportMeta.setAttribute("content", originalContent);
      }
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      const response = await api.post("/enrollments", {
        ...form,
        course: selectedCourse,
      });

      toast.success(response.data.message || "Enrollment submitted successfully!");

      setForm(initialState);

      onClose();
    } catch (error) {
      console.error("Axios Error:", error);

      if (error.response) {
        console.log("Backend Response:", error.response.data);
      }

      toast.error(error.response?.data?.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 flex items-end sm:items-center justify-center
                 overflow-y-auto bg-black/60 sm:p-4 touch-pan-y"
      style={{ touchAction: "pan-y", zIndex: 2147483647 }}
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-lg sm:my-8 max-h-[85vh] sm:max-h-[75vh]
                   overflow-y-auto bg-white p-4 sm:p-6 shadow-2xl
                   rounded-t-2xl sm:rounded-2xl
                   pb-[max(1rem,env(safe-area-inset-bottom))] sm:pb-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-gray-200 sm:hidden" />

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 sm:right-5 sm:top-5 text-gray-400 hover:text-gray-600"
        >
          <FaTimes size={20} />
        </button>

        <div className="mb-4 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Enroll in - {selectedCourse}
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Fill in your details below to reserve your spot
          </p>
          <div className="mt-4 border-t border-gray-100" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              className={fieldClasses}
              placeholder="Full Name *"
              required
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
            />
            <input
              type="email"
              className={fieldClasses}
              placeholder="Email *"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="tel"
              className={fieldClasses}
              placeholder="Phone *"
              required
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
            <input
              className={fieldClasses}
              placeholder="College *"
              required
              value={form.college}
              onChange={(e) => update("college", e.target.value)}
            />
          </div>

          <textarea
            rows={3}
            className={`${fieldClasses} resize-none`}
            placeholder="Address *"
            required
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold text-gray-800">
                Qualification
              </p>
              <select
                className={`${fieldClasses} bg-white`}
                value={form.qualification}
                onChange={(e) => update("qualification", e.target.value)}
              >
                <option value="">Select Qualification</option>
                <option value="10th">10th</option>
                <option value="12th">12th</option>
                <option value="diploma">Diploma</option>
                <option value="polytechnic">Polytechnic</option>
                <option value="bsc">B.Sc</option>
                <option value="bca">BCA</option>
                <option value="bba">BBA</option>
                <option value="btech">B.Tech</option>
                <option value="be">B.E</option>
                <option value="msc">M.Sc</option>
                <option value="mca">MCA</option>
                <option value="mba">MBA</option>
                <option value="mtech">M.Tech</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold text-gray-800">Gender</p>
              <div className="flex h-[46px] items-center gap-6">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="radio"
                    name="gender"
                    checked={form.gender === "male"}
                    onChange={() => update("gender", "male")}
                    className="h-4 w-4 accent-sky-500"
                  />
                  Male
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="radio"
                    name="gender"
                    checked={form.gender === "female"}
                    onChange={() => update("gender", "female")}
                    className="h-4 w-4 accent-sky-500"
                  />
                  Female
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold text-gray-800">Branch</p>
              <select
                className={`${fieldClasses} bg-white`}
                value={form.branch}
                onChange={(e) => update("branch", e.target.value)}
              >
                <option value="">Select Branch</option>
                <option value="cse">Computer Science (CSE)</option>
                <option value="cse-ai">CSE - AI & ML</option>
                <option value="cse-ds">CSE - Data Science</option>
                <option value="it">Information Technology</option>
                <option value="ece">Electronics & Communication</option>
                <option value="eee">Electrical & Electronics</option>
                <option value="electrical">Electrical Engineering</option>
                <option value="mech">Mechanical</option>
                <option value="civil">Civil</option>
                <option value="chemical">Chemical</option>
                <option value="biotech">Biotechnology</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold text-gray-800">
                Semester
              </p>
              <select
                className={`${fieldClasses} bg-white`}
                value={form.semester}
                onChange={(e) => update("semester", e.target.value)}
              >
                <option value="">Select Semester</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                  <option key={s} value={s}>
                    Semester {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-gradient-to-r from-sky-400 to-indigo-600 py-3
                       text-sm font-bold uppercase tracking-wide text-white shadow-md
                       transition-transform hover:scale-[1.01] active:scale-[0.99]
                       disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Click to Register"}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default EnrollModal;
