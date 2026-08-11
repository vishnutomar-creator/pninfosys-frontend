"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Lock,
  Bell,
  Globe,
  Save,
  Mail,
  Phone,
  Building2,
  Eye,
  EyeOff,
  CheckCircle2,
} from "lucide-react";

export default function SettingsPage() {
  const router = useRouter();

  // ---- AUTH: tracks whether we've finished checking the token ----
  const [checkingAuth, setCheckingAuth] = useState(true);

  const [activeTab, setActiveTab] = useState("general");

  const [saved, setSaved] = useState(false);

  const [showCurrentPassword, setShowCurrentPassword] =
    useState(false);

  const [showNewPassword, setShowNewPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [settings, setSettings] = useState({
    adminName: "PNINFOSYS Admin",
    email: "admin@pninfosys.com",
    phone: "9876543210",
    company: "PNINFOSYS",
    website: "https://pninfosys.com",

    currentPassword: "",
    newPassword: "",
    confirmPassword: "",

    enrollmentNotifications: true,
    emailNotifications: true,
    newEnrollmentAlert: true,

    websiteName: "PNINFOSYS",
    websiteEmail: "info@pninfosys.com",
    websitePhone: "9876543210",
    websiteDescription:
      "Software Development Company & IT Training Academy",
  });

  // ---- AUTH: on mount, verify a JWT exists in localStorage ----
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // No token -> not logged in, send them to login page
      router.push("/admin-login");
    } else {
      // Token exists -> allow page to render
      setCheckingAuth(false);
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  // ---- AUTH: block page render until the check above finishes ----
  // (prevents a flash of the settings form before redirect kicks in)
  if (checkingAuth) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f5f6f8]">

      <main className="p-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#14213d]">
            Settings
          </h1>

          <p className="mt-1 text-gray-500">
            Manage your admin account and website settings.
          </p>
        </div>

        {/* Success Message */}
        {saved && (
          <div className="mb-6 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-green-700">
            <CheckCircle2 size={20} />

            <div>
              <p className="font-semibold">
                Settings saved successfully
              </p>

              <p className="text-sm text-green-600">
                Your changes have been saved.
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6">

          {/* Sidebar */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 h-fit">

            <SettingsTab
              icon={<User size={18} />}
              title="General"
              active={activeTab === "general"}
              onClick={() => setActiveTab("general")}
            />

            <SettingsTab
              icon={<Lock size={18} />}
              title="Security"
              active={activeTab === "security"}
              onClick={() => setActiveTab("security")}
            />

            <SettingsTab
              icon={<Bell size={18} />}
              title="Notifications"
              active={activeTab === "notifications"}
              onClick={() => setActiveTab("notifications")}
            />

            <SettingsTab
              icon={<Globe size={18} />}
              title="Website"
              active={activeTab === "website"}
              onClick={() => setActiveTab("website")}
            />

          </div>

          {/* Content */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">

            <form onSubmit={handleSave}>

              {/* ================= GENERAL ================= */}
              {activeTab === "general" && (
                <div>

                  <SettingsHeader
                    title="General Settings"
                    description="Manage your administrator profile information."
                  />

                  <div className="p-6">

                    <div className="flex items-center gap-5 mb-8">

                      <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold">
                        P
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900">
                          {settings.adminName}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          Administrator
                        </p>

                        <button
                          type="button"
                          className="mt-3 text-sm font-semibold text-blue-600 hover:text-blue-700"
                        >
                          Change Profile Picture
                        </button>
                      </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                      <InputField
                        label="Admin Name"
                        name="adminName"
                        value={settings.adminName}
                        onChange={handleChange}
                        icon={<User size={18} />}
                      />

                      <InputField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={settings.email}
                        onChange={handleChange}
                        icon={<Mail size={18} />}
                      />

                      <InputField
                        label="Phone Number"
                        name="phone"
                        value={settings.phone}
                        onChange={handleChange}
                        icon={<Phone size={18} />}
                      />

                      <InputField
                        label="Company"
                        name="company"
                        value={settings.company}
                        onChange={handleChange}
                        icon={<Building2 size={18} />}
                      />

                    </div>

                  </div>

                </div>
              )}

              {/* ================= SECURITY ================= */}
              {activeTab === "security" && (
                <div>

                  <SettingsHeader
                    title="Security"
                    description="Update your admin password and security settings."
                  />

                  <div className="p-6">

                    <div className="max-w-xl space-y-5">

                      <PasswordField
                        label="Current Password"
                        name="currentPassword"
                        value={settings.currentPassword}
                        onChange={handleChange}
                        show={showCurrentPassword}
                        setShow={setShowCurrentPassword}
                      />

                      <PasswordField
                        label="New Password"
                        name="newPassword"
                        value={settings.newPassword}
                        onChange={handleChange}
                        show={showNewPassword}
                        setShow={setShowNewPassword}
                      />

                      <PasswordField
                        label="Confirm New Password"
                        name="confirmPassword"
                        value={settings.confirmPassword}
                        onChange={handleChange}
                        show={showConfirmPassword}
                        setShow={setShowConfirmPassword}
                      />

                    </div>

                    <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100">

                      <p className="text-sm font-semibold text-blue-800">
                        Password requirements
                      </p>

                      <ul className="mt-2 text-sm text-blue-700 space-y-1">
                        <li>• At least 8 characters</li>
                        <li>• Include uppercase and lowercase letters</li>
                        <li>• Include at least one number</li>
                      </ul>

                    </div>

                  </div>

                </div>
              )}

              {/* ================= NOTIFICATIONS ================= */}
              {activeTab === "notifications" && (
                <div>

                  <SettingsHeader
                    title="Notification Settings"
                    description="Choose which notifications you want to receive."
                  />

                  <div className="p-6 space-y-5">

                    <ToggleSetting
                      name="enrollmentNotifications"
                      checked={settings.enrollmentNotifications}
                      onChange={handleChange}
                      title="Enrollment Notifications"
                      description="Receive notifications when a student submits an enrollment."
                    />

                    <ToggleSetting
                      name="emailNotifications"
                      checked={settings.emailNotifications}
                      onChange={handleChange}
                      title="Email Notifications"
                      description="Receive important admin notifications through email."
                    />

                    <ToggleSetting
                      name="newEnrollmentAlert"
                      checked={settings.newEnrollmentAlert}
                      onChange={handleChange}
                      title="New Enrollment Alerts"
                      description="Show alerts for newly submitted enrollment requests."
                    />

                  </div>

                </div>
              )}

              {/* ================= WEBSITE ================= */}
              {activeTab === "website" && (
                <div>

                  <SettingsHeader
                    title="Website Settings"
                    description="Manage basic information displayed on the PNINFOSYS website."
                  />

                  <div className="p-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                      <InputField
                        label="Website Name"
                        name="websiteName"
                        value={settings.websiteName}
                        onChange={handleChange}
                        icon={<Globe size={18} />}
                      />

                      <InputField
                        label="Website Email"
                        name="websiteEmail"
                        type="email"
                        value={settings.websiteEmail}
                        onChange={handleChange}
                        icon={<Mail size={18} />}
                      />

                      <InputField
                        label="Website Phone"
                        name="websitePhone"
                        value={settings.websitePhone}
                        onChange={handleChange}
                        icon={<Phone size={18} />}
                      />

                      <InputField
                        label="Website URL"
                        name="website"
                        value={settings.website}
                        onChange={handleChange}
                        icon={<Globe size={18} />}
                      />

                    </div>

                    <div className="mt-5">

                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Website Description
                      </label>

                      <textarea
                        name="websiteDescription"
                        value={settings.websiteDescription}
                        onChange={handleChange}
                        rows={4}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"
                      />

                    </div>

                  </div>

                </div>
              )}

              {/* Save Button */}
              <div className="border-t border-gray-200 px-6 py-4 flex justify-end">

                <button
                  type="submit"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#078fe0] hover:bg-[#067fc7] text-white font-semibold transition"
                >
                  <Save size={18} />
                  Save Changes
                </button>

              </div>

            </form>

          </div>

        </div>

      </main>

    </div>
  );
}


/* ================================================= */
/* SETTINGS TAB */
/* ================================================= */

function SettingsTab({
  icon,
  title,
  active,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition mb-1 ${
        active
          ? "bg-blue-600 text-white"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      {title}
    </button>
  );
}


/* ================================================= */
/* SETTINGS HEADER */
/* ================================================= */

function SettingsHeader({
  title,
  description,
}) {
  return (
    <div className="px-6 py-5 border-b border-gray-200">

      <h2 className="text-xl font-bold text-[#14213d]">
        {title}
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        {description}
      </p>

    </div>
  );
}


/* ================================================= */
/* INPUT FIELD */
/* ================================================= */

function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  icon,
}) {
  return (
    <div>

      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>

      <div className="relative">

        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full h-11 pl-11 pr-4 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
        />

      </div>

    </div>
  );
}


/* ================================================= */
/* PASSWORD FIELD */
/* ================================================= */

function PasswordField({
  label,
  name,
  value,
  onChange,
  show,
  setShow,
}) {
  return (
    <div>

      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>

      <div className="relative">

        <Lock
          size={18}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type={show ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={label}
          className="w-full h-11 pl-11 pr-11 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
        >
          {show ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>

      </div>

    </div>
  );
}


/* ================================================= */
/* TOGGLE SETTING */
/* ================================================= */

function ToggleSetting({
  name,
  checked,
  onChange,
  title,
  description,
}) {
  return (
    <div className="flex items-center justify-between gap-5 p-5 rounded-xl border border-gray-200">

      <div>

        <h3 className="font-semibold text-gray-900">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {description}
        </p>

      </div>

      <label className="relative inline-flex items-center cursor-pointer shrink-0">

        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />

        <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition">

          <div className="absolute top-0.75 left-0.75 w-4.5 h-4.5 bg-white rounded-full transition-transform peer-checked:translate-x-5" />

        </div>

      </label>

    </div>
  );
}
