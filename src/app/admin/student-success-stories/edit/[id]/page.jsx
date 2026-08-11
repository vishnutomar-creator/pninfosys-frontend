"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Upload, Save } from "lucide-react";
import { getPlacement, updatePlacement } from "@/services/placementsService";

export default function EditPlacementPage() {
  const { id } = useParams();
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
  const [existingPhoto, setExistingPhoto] = useState("");

  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlacement = async () => {
      try {
        const response = await getPlacement(id);
        const placement = response.data.placement;

        setFormData({
          studentName: placement.studentName || "",
          company: placement.company || "",
          course: placement.course || "",
          package: placement.package || "",
          year: placement.year || "",
          status: placement.status || "Placed",
        });

        setExistingPhoto(placement.studentPhoto || "");
      } catch (err) {
        console.error("Get Placement Error:", err);
        setError("Failed to load placement details.");
      } finally {
        setFetching(false);
      }
    };

    if (id) fetchPlacement();
  }, [id]);

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
      !formData.company ||
      !formData.course ||
      !formData.package ||
      !formData.year
    ) {
      setError("Please fill all required fields.");
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

      if (photo) {
        data.append("studentPhoto", photo);
      }

      await updatePlacement(id, data);

      router.push("/admin/student-success-stories");
    } catch (err) {
      console.error("Update Placement Error:", err);
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <section className="p-6">
        <p className="text-gray-500">Loading placement details...</p>
      </section>
    );
  }

  return (
    <section className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link
            href="/admin/student-success-stories"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-3"
          >
            <ArrowLeft size={18} />
            Back to Placements
          </Link>

          <h1 className="text-3xl font-bold text-slate-800">
            Edit Placement
          </h1>

          <p className="text-gray-500 mt-1">
            Update placement student information.
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
          <div className="lg:col-span-2 bg-white rounded-2xl shadow border p-6">
            <div className="space-y-6">

              <div>
                <label className="block font-semibold mb-2">
                  Student Name
                </label>

                <input
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block font-semibold mb-2">
                    Company
                  </label>

                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
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
                    Package
                  </label>

                  <input
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Placement Year
                  </label>

                  <input
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
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

              <div className="flex gap-4">

                <Link
                  href="/admin/student-success-stories"
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
                  {loading ? "Updating..." : "Update Placement"}
                </button>

              </div>

            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">

            {/* Image */}

            <div className="bg-white rounded-2xl shadow border p-6">

              <h2 className="font-semibold mb-4">
                Student Photo
              </h2>

              <img
                src={previewUrl || existingPhoto}
                className="rounded-xl mb-4 w-full h-56 object-cover"
                alt=""
              />

              <label className="w-full flex justify-center items-center gap-2 border rounded-xl py-3 hover:bg-gray-100 cursor-pointer">
                <Upload size={18} />
                Change Photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
              </label>

            </div>

            {/* Preview */}

            <div className="bg-white rounded-2xl shadow border p-6">

              <h2 className="font-semibold mb-4">
                Preview
              </h2>

              <div className="border rounded-xl overflow-hidden">

                <img
                  src={previewUrl || existingPhoto}
                  alt=""
                  className="w-full h-40 object-cover"
                />

                <div className="p-5">

                  <h3 className="text-xl font-bold">
                    {formData.studentName}
                  </h3>

                  <p className="text-gray-500">
                    {formData.company}
                  </p>

                  <span className="inline-block mt-4 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    {formData.package}
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