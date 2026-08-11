"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Upload, Save } from "lucide-react";

import { createMentor } from "@/services/mentorService";

export default function AddMentorPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    description: "",
    linkedin: "",
    github: "",
    whatsapp: "",
    status: "Active",
    order: 1,
  });

  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle photo
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setPhoto(file);

    // Create local preview
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  // Submit mentor
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!formData.name.trim()) {
      setError("Mentor name is required.");
      return;
    }

    if (!formData.designation.trim()) {
      setError("Designation is required.");
      return;
    }

    if (!photo) {
      setError("Mentor photo is required.");
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();

      data.append("name", formData.name);
      data.append("designation", formData.designation);
      data.append("description", formData.description);
      data.append("linkedin", formData.linkedin);
      data.append("github", formData.github);
      data.append("whatsapp", formData.whatsapp);
      data.append("status", formData.status);
      data.append("order", formData.order);

      // Important: field name must match upload.single("photo")
      data.append("photo", photo);

      await createMentor(data);

      alert("Mentor created successfully!");

      router.push("/admin/mentors");
    } catch (error) {
      console.error("Failed to create mentor:", error);

      setError(
        error?.response?.data?.message ||
          "Failed to create mentor. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      {/* Header */}

      <div className="flex items-center justify-between mb-8">
        <div>
          <Link
            href="/admin/mentors"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-3"
          >
            <ArrowLeft size={18} />
            Back to Mentors
          </Link>

          <h1 className="text-3xl font-bold text-slate-800">
            Add Mentor
          </h1>

          <p className="text-gray-500 mt-1">
            Add a new industry mentor.
          </p>
        </div>
      </div>

      {/* Error */}

      {error && (
        <div className="mb-6 bg-red-100 border border-red-200 text-red-700 px-5 py-3 rounded-xl">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Form */}

          <div className="lg:col-span-2 bg-white rounded-2xl shadow border p-6">
            <div className="space-y-6">

              {/* Mentor Name */}

              <div>
                <label className="block font-semibold mb-2">
                  Mentor Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter mentor name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Designation */}

              <div>
                <label className="block font-semibold mb-2">
                  Designation
                </label>

                <input
                  type="text"
                  name="designation"
                  placeholder="Founder & Director"
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Description */}

              <div>
                <label className="block font-semibold mb-2">
                  Short Description
                </label>

                <textarea
                  rows={5}
                  name="description"
                  placeholder="Write mentor description..."
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* LinkedIn + GitHub */}

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block font-semibold mb-2">
                    LinkedIn URL
                  </label>

                  <input
                    type="url"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/..."
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    GitHub URL
                  </label>

                  <input
                    type="url"
                    name="github"
                    placeholder="https://github.com/..."
                    value={formData.github}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                  />
                </div>

              </div>

              {/* WhatsApp + Status */}

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block font-semibold mb-2">
                    WhatsApp Number
                  </label>

                  <input
                    type="text"
                    name="whatsapp"
                    placeholder="+91 9876543210"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Status
                  </label>

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

              </div>

              {/* Display Order */}

              <div>
                <label className="block font-semibold mb-2">
                  Display Order
                </label>

                <input
                  type="number"
                  name="order"
                  min="0"
                  value={formData.order}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3"
                />
              </div>

              {/* Buttons */}

              <div className="flex gap-4">

                <Link
                  href="/admin/mentors"
                  className="px-6 py-3 border rounded-xl hover:bg-gray-100"
                >
                  Cancel
                </Link>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-xl"
                >
                  <Save size={18} />

                  {loading ? "Saving..." : "Save Mentor"}
                </button>

              </div>

            </div>
          </div>

          {/* Right Side */}

          <div className="space-y-6">

            {/* Upload */}

            <div className="bg-white rounded-2xl shadow border p-6">

              <h2 className="font-semibold mb-4">
                Mentor Photo
              </h2>

              <label className="border-2 border-dashed rounded-xl h-72 flex flex-col justify-center items-center cursor-pointer hover:border-blue-500 transition overflow-hidden">

                {preview ? (
                  <img
                    src={preview}
                    alt="Mentor preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <Upload
                      size={40}
                      className="text-gray-400 mb-4"
                    />

                    <p className="font-medium">
                      Upload Mentor Photo
                    </p>

                    <p className="text-sm text-gray-400 mt-2">
                      PNG, JPG, WEBP
                    </p>
                  </>
                )}

                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
              </label>

            </div>

            {/* Live Preview */}

            <div className="bg-white rounded-2xl shadow border p-6">

              <h2 className="font-semibold mb-4">
                Live Preview
              </h2>

              <div className="border rounded-2xl overflow-hidden">

                <div className="h-64 bg-gray-100 flex justify-center items-center">

                  {preview ? (
                    <img
                      src={preview}
                      alt="Mentor"
                      className="w-36 h-36 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-36 h-36 rounded-full bg-gray-300 flex items-center justify-center">
                      Photo
                    </div>
                  )}

                </div>

                <div className="p-6 text-center">

                  <h3 className="text-2xl font-bold">
                    {formData.name || "Mentor Name"}
                  </h3>

                  <p className="text-blue-600 font-semibold mt-2">
                    {formData.designation || "Designation"}
                  </p>

                  <p className="text-gray-500 mt-4 text-sm leading-7">
                    {formData.description ||
                      "Mentor description will appear here..."}
                  </p>

                </div>

              </div>

            </div>

          </div>
        </div>
      </form>
    </section>
  );
}