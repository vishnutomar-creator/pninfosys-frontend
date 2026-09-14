"use client";
import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import api from "@/lib/api"; // ⚠️ adjust path if your axios instance is elsewhere
import toast from "react-hot-toast";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  course: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await api.post("/contacts", form);

      toast.success(res.data.message || "Message sent successfully!");
      setForm(initialState);
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

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="bg-blue-100 text-[#0096FF] px-5 py-2 rounded-full text-sm font-semibold">
            Contact PNINFOSYS
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-black text-slate-900">
            Get In <span className="text-[#0096FF]">Touch</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Connect with PNINFOSYS for training, internships, software
            development services, and career guidance.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-black mb-8">Get In Touch</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-100 p-4 rounded-2xl">
                  <MapPin className="text-[#0096FF]" />
                </div>
                <div>
                  <h3 className="font-bold">Office Address</h3>
                  <p className="text-gray-600">
                    MIG 332, Darpan Colony Rd, 8 Dukan, Thatipur, Gwalior
                    (M.P.)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-100 p-4 rounded-2xl">
                  <Phone className="text-[#0096FF]" />
                </div>
                <div>
                  <h3 className="font-bold">Call / WhatsApp</h3>
                  <p className="text-gray-600">+91 7000846823</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-100 p-4 rounded-2xl">
                  <Mail className="text-[#0096FF]" />
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-600">hr@pninfosys.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-100 p-4 rounded-2xl">
                  <Clock className="text-[#0096FF]" />
                </div>
                <div>
                  <h3 className="font-bold">Training Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday
                    <br />
                    10:00 AM - 07:00 PM
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/917000846823"
              target="_blank"
              rel="noreferrer"
              className="mt-8 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 w-fit"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right Side Form */}
          <div className="bg-slate-50 p-8 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-black mb-6">Send Message</h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full p-4 rounded-xl border"
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full p-4 rounded-xl border"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full p-4 rounded-xl border"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
              />

              <select
                className="w-full p-4 rounded-xl border"
                value={form.course}
                onChange={(e) => update("course", e.target.value)}
              >
                <option value="">Select Course</option>
                <option value="MERN Stack">MERN Stack</option>
                <option value="Python Data Analytics">
                  Python Data Analytics
                </option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Web Designing">Web Designing</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Internship Program">
                  Internship Program
                </option>
              </select>

              <textarea
                rows="5"
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-xl border"
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
              ></textarea>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#0096FF] text-white py-4 rounded-xl font-bold disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;