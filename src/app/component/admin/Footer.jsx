import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto flex flex-col items-center justify-between gap-4 px-6 py-4 text-sm text-gray-600 md:flex-row">

        {/* Left */}
        <div>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-slate-800">
            Blog CMS
          </span>
          . All Rights Reserved.
        </div>

        {/* Center */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="hover:text-blue-600 transition"
          >
            Website
          </Link>

          <Link
            href="/admin/profile"
            className="hover:text-blue-600 transition"
          >
            Profile
          </Link>

          <Link
            href="/admin/settings"
            className="hover:text-blue-600 transition"
          >
            Settings
          </Link>
        </div>

        {/* Right */}
        <div>
          Developed with ❤️ using{" "}
          <span className="font-semibold text-black">
            Next.js
          </span>
        </div>

      </div>
    </footer>
  );
}