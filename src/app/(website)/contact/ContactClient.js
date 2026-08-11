"use client";
import React ,{ useEffect } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";



function Contact() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
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
                    M-2, Gandhi Nagar, Near Mayur Market, Thatipur, Gwalior
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

            <button className="mt-8 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2">
              <MessageCircle size={20} />
              Chat on WhatsApp
            </button>
          </div>

          {/* Right Side Form */}
          <div className="bg-slate-50 p-8 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-black mb-6">Send Message</h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl border"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl border"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl border"
              />

              <select className="w-full p-4 rounded-xl border">
                <option>Select Course</option>
                <option>MERN Stack</option>
                <option>Python Data Analytics</option>
                <option>Machine Learning</option>
                <option>Web Designing</option>
                <option>Digital Marketing</option>
                <option>Internship Program</option>
              </select>

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl border"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#0096FF] text-white py-4 rounded-xl font-bold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
