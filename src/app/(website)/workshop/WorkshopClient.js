"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Images Import
// import rjit1 from "../../assets/RJIT/ammnjmjz2pve6t2ya4wz.webp";
// import rjit2 from "../../assets/RJIT/jy48tgxwsgmbgus3gutm.webp";

// import mpct1 from "../../assets/MPCT/c0apzqffxvhwldsu729a.webp";
// import mpct2 from "../../assets/MPCT/mzhvgnjq7yvp89dvpjek.webp";

// import shriram1 from "../../assets/SHRIRAM/uvg90t3mrrtmgmjjykez.webp";
// import shriram2 from "../../assets/SHRIRAM/yueqwtqdy1ol1e5mfyqm.webp";

// import prestige1 from "../../assets/PRESTIGE/mv6daqu9flxdnjesb6yb.webp";
// import prestige2 from "../../assets/PRESTIGE/zrnmdhitp2t2oo0nzvui.webp";

// import itm1 from "../../assets/ITM/jhzmwcbw2hohselndb58.webp";
// import itm2 from "../../assets/ITM/t6pjlxaodcvlesgkex9c.webp";

function Workshop() {
    const [preview, setPreview] = useState(null);

    const workshops = [
        {
            college: "RJIT Gwalior",
            students: "120+",
            topic: "Web Development & MERN Stack",
            images: [
                "/RJIT/ammnjmjz2pve6t2ya4wz.webp",
                "/RJIT/gdi965v50usudpdvhliq.webp"
            ],
        },
        {
            college: "MPCT Gwalior",
            students: "200+",
            topic: "PHP, MySQL & Career Guidance",
            images: [
                "/MPCT/c0apzqffxvhwldsu729a.webp",
                "/MPCT/kcjzseozpg3vwzty1usc.webp"
            ],
        },
        {
            college: "Shri Ram College",
            students: "180+",
            topic: "Skill Development Workshop",
            images: [
                "/SRIIT/byjmlftpol7wnte7k4z1.webp",
                "/SRIIT/jshosi5dlsp61qazpfhg.webp"
            ],
        },
        {
            college: "Prestige Institute",
            students: "250+",
            topic: "Management & Technology Session",
            images: [
                "/PRESTIGE/j0i79oe3nbwlc0eq22xr.webp",
                "/PRESTIGE/mv6daqu9flxdnjesb6yb.webp"
            ],
        },
        {
            college: "ITM University",
            students: "150+",
            topic: "Full Stack Development Training",
            images: [
                "/ITM/a.jpeg",
                "/ITM/b.jpeg"
            ],
        },
    ];

    return (
        <section className="bg-slate-50 min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16 mt-9">
                    <span className="bg-blue-100 text-[#009df2] px-4 py-2 rounded-full text-sm font-medium">
                        🎓 College Workshops
                    </span>

                    <h1 className="mt-6 text-4xl md:text-6xl font-bold text-slate-900">
                        Workshops &
                        <span className="text-[#009df2]"> Training Programs</span>
                    </h1>

                    <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
                        PNINFOSYS has successfully conducted technical workshops,
                        industrial training sessions, career guidance programs and
                        skill development events across leading colleges and universities.
                    </p>
                </div>

                {/* Workshop Cards */}
                <div className="grid lg:grid-cols-2 gap-8">

                    {workshops.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-3xl shadow-lg overflow-hidden"
                        >
                            <div className="grid md:grid-cols-2 gap-5 p-6">

                                <img
                                    src={item.images[0]}
                                    alt={item.college}
                                    className="h-64 w-full object-cover rounded-2xl"
                                />

                                <div className="flex flex-col justify-center">
                                    <h3 className="text-3xl font-bold text-slate-900">
                                        {item.college}
                                    </h3>

                                    <p className="text-[#009df2] font-medium mt-2">
                                        {item.topic}
                                    </p>

                                    <p className="mt-4 text-slate-600">
                                        Interactive workshop focused on practical learning,
                                        industry exposure and career growth opportunities.
                                    </p>

                                    <div className="mt-6 bg-blue-50 p-4 rounded-2xl">
                                        <h4 className="text-3xl font-bold text-[#009df2]">
                                            {item.students}
                                        </h4>
                                        <p className="text-sm text-slate-500">
                                            Students Participated
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Gallery */}
                            <div className="p-6 pt-0">
                                <div className="grid grid-cols-2 gap-4">
                                    {item.images.map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            onClick={() => setPreview(img)}
                                            className="h-48 w-full object-cover rounded-2xl cursor-pointer hover:scale-105 transition"
                                            alt=""
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {preview && (
                        <motion.div
                            onClick={() => setPreview(null)}
                            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
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

export default Workshop;