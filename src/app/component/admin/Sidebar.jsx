"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  MessageSquare,
  Users,
  Settings,
  LogOut,
  X,
} from "lucide-react";

const menus = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "services",
    href: "/admin/services",
    icon: FileText,
  },
  {
    name: "Success Stories",
    href: "/admin/student-success-stories",
    icon: FolderOpen,
  },
  {
    name: "Mentors",
    href: "/admin/mentors",
    icon: MessageSquare,
  },
  {
    name: "Enrollments",
    href: "/admin/enrollments",
    icon: Users,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-64
          bg-slate-900 text-white
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="flex h-full flex-col">

          {/* Logo */}
          <div className="h-16 flex items-center justify-between px-6 border-b border-slate-700">

            <h1 className="text-2xl font-bold">
              PNINFOSYS
            </h1>

            <button
              className="lg:hidden"
              onClick={() => setIsOpen(false)}
            >
              <X size={22} />
            </button>

          </div>

          {/* Menu */}
          <nav className="flex-1 overflow-y-auto p-4">

            <div className="space-y-2">

              {menus.map((menu) => {
                const Icon = menu.icon;

                return (
                  <Link
                    key={menu.href}
                    href={menu.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 transition
                      ${
                        pathname === menu.href
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:bg-slate-800"
                      }`}
                  >
                    <Icon size={20} />
                    <span>{menu.name}</span>
                  </Link>
                );
              })}

            </div>

          </nav>

          {/* Logout */}
          <div className="border-t border-slate-700 p-4">

            <button className="flex w-full items-center gap-3 rounded-lg bg-red-600 px-4 py-3 hover:bg-red-700 transition">

              <LogOut size={20} />

              Logout

            </button>

          </div>

        </div>
      </aside>
    </>
  );
}