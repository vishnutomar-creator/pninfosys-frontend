"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Pencil,
  MessageCircle,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { getMentor } from "@/services/mentorService";

export default function ViewMentorPage() {
  const params = useParams();
  const router = useRouter();

  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch mentor
  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const response = await getMentor(params.id);

        setMentor(response.data.mentor);
      } catch (error) {
        console.error("Failed to fetch mentor:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchMentor();
    }
  }, [params.id]);

  // Loading
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-500">Loading mentor...</p>
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
            View Mentor
          </h1>

          <p className="text-gray-500 mt-1">
            Mentor profile details.
          </p>
        </div>

        <Link
          href={`/admin/mentors/edit/${mentor._id}`}
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-3 rounded-xl shadow"
        >
          <Pencil size={18} />
          Edit Mentor
        </Link>
      </div>

      {/* Mentor Card */}

      <div className="bg-white rounded-2xl shadow border overflow-hidden">

        {/* Cover */}

        <div className="h-72 bg-gradient-to-r from-blue-600 to-indigo-700 flex justify-center items-center">
          <img
            src={mentor.photo || "https://placehold.co/220x220"}
            alt={mentor.name}
            className="w-44 h-44 rounded-full border-4 border-white shadow-xl object-cover"
          />
        </div>

        {/* Content */}

        <div className="p-8">

          {/* Name & Designation */}

          <div className="text-center">
            <h2 className="text-3xl font-bold">
              {mentor.name}
            </h2>

            <p className="text-blue-600 font-semibold mt-2">
              {mentor.designation}
            </p>
          </div>

          {/* Description */}

          <div className="mt-8 bg-gray-50 rounded-xl border p-6">
            <h3 className="font-semibold text-lg mb-3">
              About Mentor
            </h3>

            <p className="text-gray-600 leading-8">
              {mentor.description || "No description available."}
            </p>
          </div>

          {/* Social */}

          <div className="grid md:grid-cols-3 gap-5 mt-8">

            {/* LinkedIn */}

            <a
              href={mentor.linkedin || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-xl p-5 text-center hover:bg-gray-50 transition"
            >
              <FaLinkedin
                className="mx-auto text-blue-600"
                size={30}
              />

              <p className="mt-3 font-semibold">
                LinkedIn
              </p>
            </a>

            {/* GitHub */}

            <a
              href={mentor.github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-xl p-5 text-center hover:bg-gray-50 transition"
            >
              <FaGithub
                className="mx-auto"
                size={30}
              />

              <p className="mt-3 font-semibold">
                GitHub
              </p>
            </a>

            {/* WhatsApp */}

            <a
              href={
                mentor.whatsapp
                  ? mentor.whatsapp.startsWith("http")
                    ? mentor.whatsapp
                    : `https://wa.me/${mentor.whatsapp}`
                  : "#"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-xl p-5 text-center hover:bg-gray-50 transition"
            >
              <MessageCircle
                className="mx-auto text-green-600"
                size={30}
              />

              <p className="mt-3 font-semibold">
                WhatsApp
              </p>
            </a>

          </div>

          {/* Details */}

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            {/* Display Order */}

            <div className="border rounded-xl p-5">
              <h4 className="text-gray-500">
                Display Order
              </h4>

              <p className="font-bold text-xl mt-2">
                {mentor.order}
              </p>
            </div>

            {/* Status */}

            <div className="border rounded-xl p-5">
              <h4 className="text-gray-500">
                Status
              </h4>

              <span
                className={`inline-block mt-3 px-4 py-2 rounded-full ${
                  mentor.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {mentor.status}
              </span>
            </div>

          </div>

          {/* Footer Buttons */}

          <div className="flex gap-4 mt-10">

            <Link
              href="/admin/mentors"
              className="px-6 py-3 border rounded-xl hover:bg-gray-100"
            >
              Back
            </Link>

            <Link
              href={`/admin/mentors/edit/${mentor._id}`}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
            >
              Edit Mentor
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}