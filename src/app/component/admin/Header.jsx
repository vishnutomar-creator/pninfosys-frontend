"use client";

import { Menu, Bell, User } from "lucide-react";

export default function Navbar({ setIsOpen }) {
  return (
    <header className="sticky top-0 z-40 h-16 bg-white border-b shadow-sm flex items-center justify-between px-6">

      <div className="flex items-center gap-4">

        <button
          className="lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>

        <h2 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h2>

      </div>

      <div className="flex items-center gap-5">

        <button>
          <Bell size={22} />
        </button>

        <button>
          <User size={24} />
        </button>

      </div>

    </header>
  );
}