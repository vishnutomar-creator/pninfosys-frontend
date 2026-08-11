"use client";

import axios from "axios"; // API Calls
import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      // Call backend login API
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      // Store JWT Token
      localStorage.setItem("token", res.data.token);

      // Store Admin Details (Optional)
      localStorage.setItem(
        "admin",
        JSON.stringify(res.data.admin)
      );

      // Redirect to Dashboard
      router.push("/admin");

    } catch (error) {
      setError(
        error.response?.data?.message || "Login Failed"
      );
    }
  }; // handleLogin ends here now

  return (
    <main className="min-h-screen bg-[#f5f7fb] flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-md">

        {/* Logo / Brand */}
       <div className="flex justify-center mb-4">

            <img
              src="\Logos\logo_pninfosys-removebg-preview.png"
              alt="PNINFOSYS"
              className="h-14 w-auto mx-auto"
            />

          </div>

        {/* Login Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">

          {/* Top Section */}
          <div className="bg-[#14213d] px-7 py-7 text-white">

            <h1 className="text-2xl font-bold">
              Admin Login
            </h1>

            <p className="text-sm text-gray-300 mt-2">
              Sign in to manage your PNINFOSYS website.
            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={handleLogin}
            className="p-7"
          >

            {/* Error */}
            {error && (
              <div className="mb-5 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Email */}
            <div className="mb-5">

              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>

              <div className="relative">

                <Mail
                  size={19}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@pninfosys.com"
                  className="w-full h-12 pl-11 pr-4 border border-gray-300 rounded-lg outline-none text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />

              </div>

            </div>

            {/* Password */}
            <div className="mb-5">

              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>

              <div className="relative">

                <LockKeyhole
                  size={19}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full h-12 pl-11 pr-12 border border-gray-300 rounded-lg outline-none text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                  title={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>

            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between mb-6">

              <label className="flex items-center gap-2 cursor-pointer">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) =>
                    setRememberMe(e.target.checked)
                  }
                  className="w-4 h-4 accent-blue-600"
                />

                <span className="text-sm text-gray-600">
                  Remember me
                </span>

              </label>

              <button
                type="button"
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Forgot Password?
              </button>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full h-12 rounded-lg bg-[#078fe0] hover:bg-[#067fc7] text-white font-semibold flex items-center justify-center gap-2 transition shadow-sm"
            >
              Login to Admin Panel
              <ArrowRight size={18} />
            </button>

          </form>

        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          © 2026 PNINFOSYS. All Rights Reserved.
        </p>

      </div>

    </main>
  );
}
