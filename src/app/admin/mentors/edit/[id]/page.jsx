"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Save, Upload } from "lucide-react";

import {
  getMentor,
  updateMentor,
} from "@/services/mentorService";

export default function EditMentorPage() {
  const params = useParams();
  const router = useRouter();

  const [mentor, setMentor] = useState(null);

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

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Fetch Mentor
  useEffect(() => {
    const fetchMentor = async () => {
      try {
        setLoading(true);

        const response = await getMentor(params.id);

        const data = response.data.mentor;

        setMentor(data);

        setFormData({
          name: data.name || "",
          designation: data.designation || "",
          description: data.description || "",
          linkedin: data.linkedin || "",
          github: data.github || "",
          whatsapp: data.whatsapp || "",
          status: data.status || "Active",
          order: data.order || 1,
        });

        setPreview(data.photo || "");
      } catch (error) {
        console.error("Failed to fetch mentor:", error);

        setError(
          error?.response?.data?.message ||
            "Failed to load mentor."
        );
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchMentor();
    }
  }, [params.id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle photo change
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setPhoto(file);

    const imageUrl = URL.createObjectURL(file);

    setPreview(imageUrl);
  };

  // Update Mentor
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

    try {
      setSaving(true);

      const data = new FormData();

      data.append("name", formData.name);
      data.append("designation", formData.designation);
      data.append("description", formData.description);
      data.append("linkedin", formData.linkedin);
      data.append("github", formData.github);
      data.append("whatsapp", formData.whatsapp);
      data.append("status", formData.status);
      data.append("order", formData.order);

      // Only send photo if user selected a new one
      if (photo) {
        data.append("photo", photo);
      }

      await updateMentor(params.id, data);

      alert("Mentor updated successfully!");

      router.push("/admin/mentors");
    } catch (error) {
      console.error("Failed to update mentor:", error);

      setError(
        error?.response?.data?.message ||
          "Failed to update mentor. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  // Loading
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-500">
          Loading mentor...
        </p>
      </div>
    );
  }

  // Mentor not found
  if (!mentor) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-slate-800">
          Mentor not found
        </h2>

        <Link
          href="/admin/mentors"
          className="inline-flex items-center gap-2 mt-5 text-blue-600"
        >
          <ArrowLeft size={18} />
          Back to Mentors
        </Link>
      </div>
    );
  }

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
            Edit Mentor
          </h1>

          <p className="text-gray-500 mt-1">
            Update mentor information.
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

          {/* Left Form */}

          <div className="lg:col-span-2 bg-white rounded-2xl shadow border border-gray-200 p-6">
            <div className="space-y-6">

              {/* Mentor Name */}

              <div>
                <label className="block mb-2 font-semibold">
                  Mentor Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Designation */}

              <div>
                <label className="block mb-2 font-semibold">
                  Designation
                </label>

                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Description */}

              <div>
                <label className="block mb-2 font-semibold">
                  Description
                </label>

                <textarea
                  rows={6}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* LinkedIn + GitHub */}

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block mb-2 font-semibold">
                    LinkedIn URL
                  </label>

                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold">
                    GitHub URL
                  </label>

                  <input
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                  />
                </div>

              </div>

              {/* WhatsApp + Status */}

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block mb-2 font-semibold">
                    WhatsApp Number
                  </label>

                  <input
                    type="text"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold">
                    Status
                  </label>

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                  >
                    <option value="Active">
                      Active
                    </option>

                    <option value="Inactive">
                      Inactive
                    </option>
                  </select>
                </div>

              </div>

              {/* Display Order */}

              <div>
                <label className="block mb-2 font-semibold">
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

              <div className="flex gap-4 pt-3">

                <Link
                  href="/admin/mentors"
                  className="px-6 py-3 border rounded-xl hover:bg-gray-100"
                >
                  Cancel
                </Link>

                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-xl"
                >
                  <Save size={18} />

                  {saving
                    ? "Updating..."
                    : "Update Mentor"}
                </button>

              </div>

            </div>
          </div>

          {/* Right Side */}

          <div className="space-y-6">

            {/* Image */}

            <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">

              <h2 className="font-semibold mb-4">
                Mentor Photo
              </h2>

              <img
                src={
                  preview ||
                  "https://placehold.co/500x500"
                }
                alt={mentor.name}
                className="rounded-xl mb-5 w-full aspect-square object-cover"
              />

              <label className="w-full flex items-center justify-center gap-2 border rounded-xl py-3 hover:bg-gray-100 cursor-pointer">
                <Upload size={18} />
                Change Photo

                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
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

                <div className="bg-gray-100 h-56 flex items-center justify-center">

                  {preview ? (
                    <img
                      src={preview}
                      alt="preview"
                      className="w-36 h-36 rounded-full border object-cover"
                    />
                  ) : (
                    <div className="w-36 h-36 rounded-full bg-gray-300 flex items-center justify-center">
                      Photo
                    </div>
                  )}

                </div>

                <div className="p-6 text-center">

                  <h3 className="text-2xl font-bold">
                    {formData.name ||
                      "Mentor Name"}
                  </h3>

                  <p className="text-blue-600 font-semibold mt-2">
                    {formData.designation ||
                      "Designation"}
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