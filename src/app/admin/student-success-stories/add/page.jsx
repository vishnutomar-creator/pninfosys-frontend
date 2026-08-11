"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Upload, Save } from "lucide-react";
import { createPlacement } from "@/services/placementsService";

export default function AddPlacementPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    studentName: "",
    company: "",
    course: "",
    package: "",
    year: "",
    status: "Placed",
  });

  const [photo, setPhoto] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPhoto(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.studentName ||
      !photo ||
      !formData.company ||
      !formData.course ||
      !formData.package ||
      !formData.year
    ) {
      setError("Please fill all required fields and upload a photo.");
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();
      data.append("studentName", formData.studentName);
      data.append("company", formData.company);
      data.append("course", formData.course);
      data.append("package", formData.package);
      data.append("year", formData.year);
      data.append("status", formData.status);
      data.append("studentPhoto", photo);

      await createPlacement(data);

      router.push("/admin/student-success-stories");
    } catch (err) {
      console.error("Create Placement Error:", err);
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link
            href="/admin/placements"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-3"
          >
            <ArrowLeft size={18} />
            Back to Placements
          </Link>

          <h1 className="text-3xl font-bold text-slate-800">
            Add Placement Student
          </h1>

          <p className="text-gray-500 mt-1">
            Add a new placement record.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>

        {error && (
          <div className="mb-6 bg-red-100 text-red-700 px-4 py-3 rounded-xl">
            {error}
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Left Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow border border-gray-200 p-6">

            <div className="space-y-6">

              <div>
                <label className="block font-semibold mb-2">
                  Student Name
                </label>

                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="Enter student name"
                  className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block font-semibold mb-2">
                    Company Name
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Infosys"
                    className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Course
                  </label>

                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                  >
                    <option value="">Select Course</option>
                    <option value="MERN Stack">MERN Stack</option>
                    <option value="Web Designing">Web Designing</option>
                    <option value="Python">Python</option>
                    <option value="Data Analytics">Data Analytics</option>
                  </select>
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block font-semibold mb-2">
                    Package (LPA)
                  </label>

                  <input
                    type="text"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    placeholder="8 LPA"
                    className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Placement Year
                  </label>

                  <input
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    placeholder="2026"
                    className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Status
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full md:w-1/2 border rounded-xl px-4 py-3"
                >
                  <option value="Placed">Placed</option>
                  <option value="Training">Training</option>
                </select>
              </div>

              <div className="flex gap-4 pt-4">

                <Link
                  href="/admin/placements"
                  className="px-6 py-3 border rounded-xl hover:bg-gray-100"
                >
                  Cancel
                </Link>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white px-6 py-3 rounded-xl"
                >
                  <Save size={18} />
                  {loading ? "Saving..." : "Save Placement"}
                </button>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="space-y-6">

            {/* Upload */}

            <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">

              <h2 className="font-semibold mb-4">
                Student Photo
              </h2>

              <label className="border-2 border-dashed border-gray-300 rounded-xl h-72 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition overflow-hidden">

                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <Upload size={42} className="text-gray-400 mb-4" />

                    <p className="font-medium">
                      Upload Student Photo
                    </p>

                    <p className="text-sm text-gray-400 mt-1">
                      PNG, JPG, WEBP
                    </p>
                  </>
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />

              </label>

            </div>

            {/* Preview */}

            <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">

              <h2 className="font-semibold mb-4">
                Live Preview
              </h2>

              <div className="border rounded-xl overflow-hidden">

                <div className="h-56 bg-gray-100 flex items-center justify-center text-gray-400 overflow-hidden">
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    "Student Photo"
                  )}
                </div>

                <div className="p-5">

                  <h3 className="text-xl font-bold">
                    {formData.studentName || "Student Name"}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {formData.company || "Company"}
                  </p>

                  <span className="inline-block mt-4 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                    {formData.package || "Package"}
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </form>
    </section>
  );
}