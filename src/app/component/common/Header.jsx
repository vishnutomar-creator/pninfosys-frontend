'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown, Menu, X, Laptop, Database, Code,
  Zap, Layout, GraduationCap, Briefcase,
  Image, PhoneOutgoing, Send
} from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hello Vikas Sir, I'm interested in the FREE 1-MONTH DEMO at PNINFOSYS Gwalior.");
    window.open(`https://wa.me/917000846823?text=${msg}`, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu Data Updated: SERVICES is now a direct link
  const menuData = [
    { name: 'HOME', type: 'link', path: '/' },
    { name: 'ABOUT', type: 'link', path: '/about' },
    {
      name: 'COURSES',
      type: 'dropdown',
      items: [
        { title: 'MERN Stack with AI', path: '/Courses/mern-stack-with-ai', icon: <Laptop size={14} /> },
        { title: 'Python with AI', path: '/Courses/python-with-ai', icon: <Code size={14} /> },
        { title: 'Python Data Analytics with AI', path: '/Courses/data-analytics', icon: <Database size={14} /> },
        { title: 'Machine Learning & AI', path: '/Courses/machine-learning-and-ai', icon: <Zap size={14} /> },
        { title: 'Web Designing with AI', path: '/Courses/web-designing-with-ai', icon: <Layout size={14} /> },
        { title: 'Full Stack Development with AI', path: '/Courses/full-stack-development-with-ai', icon: <Code size={14} /> }
      ]
    },
    { name: 'SERVICES', type: 'link', path: '/services' }, // Single Page Link
    {
      name: 'WORKSHOP',
      type: 'dropdown',
      items: [
        { title: 'College Workshops', path: '/workshop', icon: <GraduationCap size={14} /> },

      ]
    },
    {
      name: 'PLACEMENT',
      type: 'dropdown',
      items: [
        { title: 'Placement Desk', path: '/placement/placement-desk', icon: <Briefcase size={14} /> },
        { title: 'Placement Gallery', path: '/placement/placement-gallary', icon: <Image size={14} /> }
      ]
    },
    { name: 'CONTACT', type: 'link', path: '/contact' },
  ];

  // next/link has no built-in NavLink/isActive prop, so we compute it manually
  const isPathActive = (path) => pathname === path;

  return (
    <div className="fixed top-0 w-full z-1000 font-sans">

      {/* Ticker Bar */}
      <div className="bg-[#0096FF] text-white py-2 overflow-hidden border-b border-white/10">
        <div className="animate-marquee whitespace-nowrap font-black text-[10px] tracking-widest uppercase">
          🚀 Next MERN Stack Batch starts on 24th August — Join Free 1-Month Demo Now! &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
          🔥 Software Development Company & IT Training Academy &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
        </div>
      </div>

      {/* Navbar Main Section */}
      <nav className={`bg-white relative z-1001 transition-all duration-300 ${isScrolled ? 'shadow-lg h-16' : 'h-20 border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">

          {/* Logo */}
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-1">
            <span className="w-1 h-7 bg-[#0096FF] rounded-full"></span>
            <img src="\Logos\logo_pninfosys-removebg-preview.png" alt="PNINFOSYS" className="h-10 md:h-14 w-auto" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuData.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-4 py-2 text-[11px] font-black tracking-widest uppercase rounded-lg transition-all
                    ${isPathActive(item.path) ? 'text-[#0096FF] bg-blue-50' : 'text-slate-800 hover:text-[#0096FF]'}`}
                >
                  {item.name}
                </Link>
              ) : (
                <div key={item.name} className="relative group px-2 py-2">
                  <button className="flex items-center space-x-1 text-[11px] font-black text-slate-800 group-hover:text-[#0096FF] tracking-widest uppercase">
                    <span>{item.name}</span>
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                  </button>
                  <div className="absolute top-full left-0 w-64 bg-white shadow-2xl border border-slate-50 rounded-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0">
                    {item.items.map(sub => (
                      <Link
                        key={sub.title}
                        href={sub.path}
                        className={`flex items-center px-5 py-3 text-[11px] font-bold transition-all
                          ${isPathActive(sub.path) ? 'text-[#0096FF] bg-blue-50' : 'text-slate-600 hover:bg-blue-50 hover:text-[#0096FF]'}`}
                      >
                        <span className="mr-3 text-[#0096FF]">{sub.icon}</span>
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            ))}
            <button onClick={handleWhatsApp} className="ml-4 bg-[#0096FF] text-white px-6 py-3 rounded-xl font-black text-[11px] tracking-widest hover:bg-[#007acc] shadow-lg shadow-blue-100">
              FREE 1-MONTH DEMO
            </button>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <div className="lg:hidden flex items-center gap-3">
            <button onClick={handleWhatsApp} className="p-2.5 bg-[#0096FF] text-white rounded-full active:scale-90 transition-all">
              <PhoneOutgoing size={18} />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 text-slate-900 bg-slate-100 rounded-xl active:bg-[#0096FF] active:text-white transition-all"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 bg-white z-1000 lg:hidden transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="flex flex-col h-full pt-32 px-6 overflow-y-auto pb-10">
          {menuData.map((item) => (
            <div key={item.name} className="border-b border-slate-50">
              <div className="py-4">
                {item.type === 'link' ? (
                  <Link
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-[15px] font-black tracking-widest uppercase transition-all
                        ${isPathActive(item.path) ? 'text-[#0096FF]' : 'text-slate-800'}`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => setActiveAccordion(activeAccordion === item.name ? null : item.name)}
                      className="w-full flex justify-between items-center text-[15px] font-black text-slate-800 tracking-widest uppercase"
                    >
                      <span className={activeAccordion === item.name ? 'text-[#0096FF]' : ''}>{item.name}</span>
                      <ChevronDown size={20} className={`transition-transform duration-300 ${activeAccordion === item.name ? 'rotate-180 text-[#0096FF]' : 'text-slate-400'}`} />
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ${activeAccordion === item.name ? 'max-h-125 mt-5' : 'max-h-0'}`}>
                      <div className="pl-4 flex flex-col space-y-5 border-l-2 border-blue-100 mb-2">
                        {item.items.map(sub => (
                          <Link
                            key={sub.title}
                            href={sub.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center gap-4 text-[14px] font-bold transition-all
                                ${isPathActive(sub.path) ? 'text-[#0096FF]' : 'text-slate-500 hover:text-[#0096FF]'}`}
                          >
                            <span className="p-2 bg-blue-50 rounded-lg text-[#0096FF]">{sub.icon}</span>
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}

          <div className="mt-8 mb-10">
            <button
              onClick={handleWhatsApp}
              className="w-full bg-[#0096FF] text-white py-4 rounded-2xl font-black text-[13px] tracking-widest shadow-xl shadow-blue-200 flex items-center justify-center gap-3 active:scale-95 transition-all"
            >
              <Send size={18} /> FREE 1-MONTH DEMO
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
