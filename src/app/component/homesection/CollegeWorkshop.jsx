"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = {
  RJIT: {
    title: "RJIT College Workshop",
    type: "Engineering Workshop",
    students: "120+",
    video: "/RJIT/",
    images: [
      "/RJIT/ammnjmjz2pve6t2ya4wz.webp",
      "/RJIT/gdi965v50usudpdvhliq.webp",
      "/RJIT/hgn3orggzwkdjqmofjkb.webp",
      "/RJIT/jy48tgxwsgmbgus3gutm.webp",
      "/RJIT/lherpc8eo3f2szemwjf3.webp",
      "/RJIT/pxaqcnfm4vuo66cfgbnd.webp",
      "/RJIT/WhatsApp Image 2026-01-23 at 9.40.54 AM.jpeg"
    ],
  },

  STPI: {
    title: "STPI Visit",
    type: "Industry Visit & Exposure Program",
    students: "30+",
    video: "/STPI visit/IMG_1393 (1).MOV",
    images: [
      "/STPI visit/IMG_1309.JPG.jpeg",
      "/STPI visit/IMG_1307.jpg",
      "/STPI visit/IMG_1315.jpg",
      "/STPI visit/IMG_1329.jpg",
      "/STPI visit/IMG_1357.jpg",
      "/STPI visit/IMG_1367.jpg",
    ],
  },

  ITM: {
    title: "ITM College Workshop",
    type: "Web Development Training",
    students: "350+",
    video:"/ITM/itm.mp4" ,
    images: [
      "/ITM/a.jpeg",
      "/ITM/b.jpeg",
      "/ITM/jhzmwcbw2hohselndb58.webp",
      "/ITM/nvgqholiy7wn4jelwxry.webp",
      "/ITM/t6pjlxaodcvlesgkex9c.webp",
      "/ITM/tfazupbojc91yl2jyzvj.webp",
    ],
  },

  MPCT: {
    title: "MPCT College Workshop",
    type: "PHP & MySQL Training",
    students: "200+",
    video: "/MPCT/mpct.mp4",
    images: [
      "/MPCT/c0apzqffxvhwldsu729a.webp",
      "/MPCT/kcjzseozpg3vwzty1usc.webp",
      "/MPCT/mzhvgnjq7yvp89dvpjek.webp",
      "/MPCT/osimadlpcj0n3qgjsp95.webp",
      "/MPCT/vjhycn9kt21zzhr6fhkw.webp",
      "/MPCT/vzeoj0oggyyfbgzkr2fi.webp"
    ],
  },

  SRIIT: {
    title: "Shri Ram College Workshop",
    type: "Skill Development Session",
    students: "200+",
    video: "/SRIIT/shriram.mp4",
    images: [
      "/SRIIT/byjmlftpol7wnte7k4z1.webp",
      "/SRIIT/jshosi5dlsp61qazpfhg.webp",
      "/SRIIT/pfihzkxifqqzh94k1nhk.webp",
      "/SRIIT/uvg90t3mrrtmgmjjykez.webp",
      "/SRIIT/yueqwtqdy1ol1e5mfyqm.webp",
    ],
  },
  Prestige_College: {
    title: "Prestige Institute Workshop",
    type: "Management & Skill Development Session",
    students: "250+",
    video: "null",
    images: [
      "/PRESTIGE/j0i79oe3nbwlc0eq22xr.webp",
      "/PRESTIGE/mv6daqu9flxdnjesb6yb.webp",
      "/PRESTIGE/oqecqaf2306xm97d5dhn.webp",
      "/PRESTIGE/tsrkdbyhzrj7jv40uxdd.webp",
      "/PRESTIGE/vqiy9n0u3lmcz0n2clrv.webp",
      "/PRESTIGE/yoinoketdced9fcbjetx.webp"
    ],
  },
};

function CollegeWorkshop() {
  const [selected, setSelected] = useState("RJIT");
  const [preview, setPreview] = useState(null);

  const current = data[selected];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="px-4 py-2 rounded-full bg-blue-100 text-[#009df2] text-sm font-medium">
            🎓 College Workshops
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-bold text-slate-900">
            College Workshops &
            <span className="text-[#009df2]"> Training Programs</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
            PNINFOSYS regularly conducts technical workshops, career guidance
            sessions and industry-oriented training programs at colleges and
            educational institutions, helping students gain practical knowledge
            and industry exposure.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.keys(data).map((key) => (
            <button
              key={key}
              onClick={() => setSelected(key)}
              className={`px-5 py-3 rounded-full transition-all ${
                selected === key
                  ? "bg-[#009df2] text-white"
                  : "bg-white border hover:border-blue-400"
              }`}
            >
              {key.replaceAll("_", " ")}
            </button>
          ))}
        </div>

        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl overflow-hidden shadow-xl"
        >
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            <div>
              <video
                src={current.video}
                controls
                poster={current.images[0]}
                className="w-full h-[300px] rounded-2xl object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold">{current.title}</h3>

              <p className="text-[#009df2] mt-2">{current.type}</p>

              <p className="mt-4 text-gray-600">
                Practical hands-on workshop focused on real projects, industry
                mentorship and career development.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-blue-50 p-5 rounded-2xl">
                  <h4 className="text-3xl font-bold text-blue-600">
                    {current.students}
                  </h4>
                  <p className="text-sm text-gray-500">Students Trained</p>
                </div>

                <div className="bg-green-50 p-5 rounded-2xl">
                  <h4 className="text-3xl font-bold text-green-600">100%</h4>
                  <p className="text-sm text-gray-500">Practical Learning</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <h4 className="text-xl font-bold mb-5">Workshop Gallery</h4>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {current.images.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setPreview(img)}
                  className="h-56 w-full object-cover rounded-2xl cursor-pointer shadow-md"
                />
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {preview && (
            <motion.div
              onClick={() => setPreview(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            >
              <img
                src={preview}
                alt=""
                className="max-w-[90vw] max-h-[90vh] rounded-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default CollegeWorkshop;