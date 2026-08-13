import React from 'react';

export default function Footer() {
  // WhatsApp Number and Custom Message
  const phoneNumber = "917000846823";
  const customMessage = encodeURIComponent("Hello PNINFOSYS, I want to inquiry about the new batch.");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${customMessage}`;

  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10 font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- MAIN FOOTER CONTENT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info & Logo */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/Logos/logo_pninfosys-removebg-preview.png" 
                alt="PNINFOSYS Logo" 
                className="h-12 w-auto object-contain brightness-110"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Gwalior's premier IT Training Institute. We specialize in MERN Stack, Data Analytics, and Web Design to make you MNC-ready.
            </p>
            
            {/* Social Hub */}
            <div className="flex gap-4">
              <a href="https://youtube.com/@pninfosys" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-all group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-all group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-[#0096FF] transition-all group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black mb-8 text-white uppercase tracking-[0.2em]">Learning Paths</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li className="hover:text-blue-400 cursor-pointer transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-[#0096FF] rounded-full"></span> MERN Stack Mastery
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-[#0096FF] rounded-full"></span> Data Analytics with Python
              </li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-[#0096FF] rounded-full"></span> Web UI/UX Design
              </li>
            </ul>
          </div>

          {/* Contact Details (Updated with your number) */}
          <div>
            <h4 className="text-sm font-black mb-8 text-white uppercase tracking-[0.2em]">Location</h4>
            <ul className="space-y-5 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <svg width="18" height="18" className="mt-1 text-[#0096FF] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Gwalior, MP, India</span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="18" height="18" className="text-[#0096FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>+91 7000846823</span>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-sm font-black mb-8 text-white uppercase tracking-[0.2em]">Quick Inquiry</h4>
            <p className="text-slate-400 text-xs mb-5">Drop your email to get course syllabus.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-slate-800 border-none rounded-2xl py-4 px-5 text-sm focus:ring-2 focus:ring-[#0096FF] outline-none w-full"
              />
              <button className="bg-[#0096FF] py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg">
                Send Request
              </button>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
          <p>© 2026 PNINFOSYS IT COMPANY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <span className="text-[#0096FF] hover:underline cursor-pointer">www.pninfosys.com</span>
          </div>
        </div>
      </div>

      {/* --- WHATSAPP FLOATING BUTTON (With Auto Message) --- */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 flex items-center justify-center animate-bounce"
        style={{ animationDuration: '3s' }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </footer>
  );
}
