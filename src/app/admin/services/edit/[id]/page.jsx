"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Upload, Save } from "lucide-react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { getCourse, updateCourse } from "@/services/courseService";

export default function EditService() {
  const router = useRouter();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // Keep the originally fetched values so we can diff against them
  // and only send fields that actually changed.
  const originalRef = useRef({
    title: "",
    description: "",
    duration: "",
    status: "Active",
  });

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourse(id);
        const course = data?.course || data?.data || data;

        const fetchedTitle = course.title || "";
        const fetchedDescription = course.description || "";
        const fetchedDuration = course.duration || "";
        const fetchedStatus = course.status || "Active";

        setTitle(fetchedTitle);
        setDescription(fetchedDescription);
        setDuration(fetchedDuration);
        setStatus(fetchedStatus);
        setPreview(course.image || course.imageUrl || null);

        originalRef.current = {
          title: fetchedTitle,
          description: fetchedDescription,
          duration: fetchedDuration,
          status: fetchedStatus,
        };
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchCourse();
    }
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      const original = originalRef.current;

      if (title !== original.title) {
        formData.append("title", title);
      }
      if (description !== original.description) {
        formData.append("description", description);
      }
      if (duration !== original.duration) {
        formData.append("duration", duration);
      }
      if (status !== original.status) {
        formData.append("status", status);
      }
      if (image) {
        formData.append("image", image);
      }

      // Nothing changed at all — no need to hit the API.
      let hasChanges = false;
      for (const _ of formData.keys()) {
        hasChanges = true;
        break;
      }
      if (!hasChanges) {
        setLoading(false);
        router.push("/admin/services");
        return;
      }

      await updateCourse(id, formData);

      alert("Course Updated Successfully");
      router.push("/admin/services");
    } catch (error) {
      console.error(error);
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
            href="/admin/services"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-3"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>

          <h1 className="text-3xl font-bold text-slate-800">
            Edit Service
          </h1>

          <p className="text-gray-500 mt-1">
            Fill the details below to Edit service.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow border border-gray-200 p-6">
          <div className="space-y-6">
            {/* Service Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Service Name
              </label>

              <input
                type="text"
                placeholder="Enter service name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Description
              </label>

              <textarea
                rows={5}
                placeholder="Write service description..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Duration
              </label>

              <select
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option value="">Select Duration</option>
                <option value="1 Month">1 Month</option>
                <option value="2 Months">2 Months</option>
                <option value="3 Months">3 Months</option>
                <option value="6 Months">6 Months</option>
                <option value="12 Months">12 Months</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Status
              </label>

              <select
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100"
                onClick={() => router.push("/admin/services")}
              >
                Cancel
              </button>

              <button
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                onClick={handleUpdate}
                disabled={loading}
              >
                <Save size={18} />
                {loading ? "Updating..." : "Save Service"}
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {/* Upload */}
          <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">
            <h2 className="font-semibold mb-4">Service Image</h2>

            <label className="border-2 border-dashed border-gray-300 rounded-xl h-60 flex flex-col justify-center items-center cursor-pointer hover:border-blue-500 transition">
              <Upload size={40} className="text-gray-400 mb-3" />

              <p className="font-medium text-gray-700">
                Click to upload image
              </p>

              <p className="text-sm text-gray-400 mt-1">
                PNG, JPG or WEBP
              </p>

              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* Preview */}
          <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">
            <h2 className="font-semibold mb-4">Preview</h2>

            <div className="rounded-xl border overflow-hidden">
              <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  "Image Preview"
                )}
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg">
                  {title || "Service Name"}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {description || "Your description will appear here..."}
                </p>

                <span className="inline-block mt-4 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {duration || "Duration"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
