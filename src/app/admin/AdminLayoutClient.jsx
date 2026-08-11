"use client";

import { useState } from "react";
import Header from "../component/admin/Header";
import Sidebar from "../component/admin/Sidebar";
import Footer from "../component/admin/Footer";

export default function AdminLayoutClient({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col mih-h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 lg:ml-64 flex flex-col">
        <Header setIsOpen={setIsOpen} />

        <main className="flex-1 bg-gray-100 p-6">
          {children}
        </main>

        <Footer/>
      </div>
      
    </div>
  )
}
