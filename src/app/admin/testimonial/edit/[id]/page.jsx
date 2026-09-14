"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Upload, Save, Star } from "lucide-react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { getTestimonial, updateTestimonial } from "@/services/testimonialService";

export default function EditTestimonial() {
  const router = useRouter();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const originalRef = useRef({
    name: "",
    role: "",
    message: "",
    rating: 5,
    status: "Active",
  });

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const res = await getTestimonial(id);
        const data = res?.data?.testimonial || res?.data?.data || res?.data;

        const fetchedName = data.name || "";
        const fetchedRole = data.role || "";
        const fetchedMessage = data.message || "";
        const fetchedRating = data.rating || 5;
        const fetchedStatus = data.status || "Active";

        setName(fetchedName);
        setRole(fetchedRole);
        setMessage(fetchedMessage);
        setRating(fetchedRating);
        setStatus(fetchedStatus);
        setPreview(data.image || null);

        originalRef.current = {
          name: fetchedName,
          role: fetchedRole,
          message: fetchedMessage,
          rating: fetchedRating,
          status: fetchedStatus,
        };
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchTestimonial();
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

      if (name !== original.name) formData.append("name", name);
      if (role !== original.role) formData.append("role", role);
      if (message !== original.message) formData.append("message", message);
      if (rating !== original.rating) formData.append("rating", rating);
      if (status !== original.status) formData.append("status", status);
      if (image) formData.append("image", image);

      let hasChanges = false;
      for (const _ of formData.keys()) {
        hasChanges = true;
        break;
      }
      if (!hasChanges) {
        setLoading(false);
        router.push("/admin/testimonial");
        return;
      }

      await updateTestimonial(id, formData);

      alert("Testimonial Updated Successfully");
      router.push("/admin/testimonial");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Failed to update testimonial.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link
            href="/admin/testimonial"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-3"
          >
            <ArrowLeft size={18} />
            Back to Testimonials
          </Link>

          <h1 className="text-3xl font-bold text-slate-800">Edit Testimonial</h1>
          <p className="text-gray-500 mt-1">Fill the details below to edit testimonial.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow border border-gray-200 p-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Student Name</label>
              <input
                type="text"
                placeholder="Enter student name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Role</label>
              <input
                type="text"
                placeholder="e.g. B.Tech Student, MCA Student"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Write testimonial message..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Rating</label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="focus:outline-none"
                  >
                    <Star
                      size={28}
                      className={
                        star <= rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Status</label>
              <select
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100"
                onClick={() => router.push("/admin/testimonial")}
              >
                Cancel
              </button>

              <button
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                onClick={handleUpdate}
                disabled={loading}
              >
                <Save size={18} />
                {loading ? "Updating..." : "Save Testimonial"}
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">
            <h2 className="font-semibold mb-4">Student Photo (Optional)</h2>

            <label className="border-2 border-dashed border-gray-300 rounded-xl h-60 flex flex-col justify-center items-center cursor-pointer hover:border-blue-500 transition">
              <Upload size={40} className="text-gray-400 mb-3" />
              <p className="font-medium text-gray-700">Click to upload image</p>
              <p className="text-sm text-gray-400 mt-1">PNG, JPG or WEBP</p>

              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">
            <h2 className="font-semibold mb-4">Preview</h2>

            <div className="rounded-xl border p-5 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold mx-auto overflow-hidden">
                {preview ? (
                  <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  name?.charAt(0) || "?"
                )}
              </div>

              <div className="flex justify-center gap-1 text-yellow-400 mt-3">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              <p className="text-gray-600 text-sm mt-3">
                “{message || "Testimonial message will appear here..."}”
              </p>

              <h3 className="font-bold text-gray-800 mt-3">
                {name || "Student Name"}
              </h3>
              <p className="text-sm text-gray-500">{role || "Role"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}