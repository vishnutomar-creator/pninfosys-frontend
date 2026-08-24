"use client";

import { useState, useEffect } from "react";
import { Megaphone, Save } from "lucide-react";
import {
  getAnnouncement,
  createAnnouncement,
  updateAnnouncement,
} from "@/services/announcementService";

export default function AnnouncementPage() {
  const [announcement, setAnnouncement] = useState(null);
  const [text, setText] = useState("");

  const [fetching, setFetching] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await getAnnouncement();
        const data = response.data.announcement;

        if (data) {
          setAnnouncement(data);
          setText(data.text);
        }
      } catch (err) {
        console.error("Get Announcement Error:", err);
        setError("Failed to load announcement.");
      } finally {
        setFetching(false);
      }
    };

    fetchAnnouncement();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!text.trim()) {
      setError("Announcement text cannot be empty.");
      return;
    }

    try {
      setSaving(true);

      if (announcement) {
        // Existing announcement -> update it
        const response = await updateAnnouncement(announcement._id, {
          text,
          active: true,
        });
        setAnnouncement(response.data.announcement);
      } else {
        // No announcement yet -> create one
        const response = await createAnnouncement(text);
        setAnnouncement(response.data.announcement);
      }

      setSuccess("Ticker bar updated successfully.");
    } catch (err) {
      console.error("Save Announcement Error:", err);
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  if (fetching) {
    return (
      <section className="p-6">
        <p className="text-gray-500">Loading announcement...</p>
      </section>
    );
  }

  return (
    <section className="p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Ticker Bar
        </h1>
        <p className="text-gray-500 mt-1">
          Edit the announcement text shown in the site's top ticker bar.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow border border-gray-200 p-6">

          <form onSubmit={handleSubmit} className="space-y-6">

            {error && (
              <div className="bg-red-100 text-red-700 px-4 py-3 rounded-xl">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-100 text-green-700 px-4 py-3 rounded-xl">
                {success}
              </div>
            )}

            <div>
              <label className="block font-semibold mb-2">
                Announcement Text
              </label>

              <textarea
                rows={4}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="e.g. 🚀 Next MERN Stack Batch starts on 16th April — Join Free 1-Month Demo Now!"
                className="w-full border rounded-xl px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                disabled={saving}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white px-6 py-3 rounded-xl"
              >
                <Save size={18} />
                {saving ? "Saving..." : "Save Announcement"}
              </button>
            </div>

          </form>

        </div>

        {/* Live Preview */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow border border-gray-200 p-6">

            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <Megaphone size={18} />
              Live Preview
            </h2>

            <div className="bg-[#0096FF] text-white py-2 overflow-hidden rounded-lg">
              <p className="whitespace-nowrap font-black text-[10px] tracking-widest uppercase px-3">
                {text || "Your ticker text will appear here..."}
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}