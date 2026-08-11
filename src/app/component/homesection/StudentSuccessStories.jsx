"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function StudentSuccessStories() {
    const testimonials = [
        {
            name: "Rahul Sharma",
            course: "MERN Stack Development",
            // video: "/videos/student1.mp4",
        },
        {
            name: "Priya Verma",
            course: "Python Data Analytics",
            // video: "/videos/student2.mp4",
        },
        {
            name: "Aman Gupta",
            course: "Web Designing",
            // video: "/videos/student3.mp4",
        },
        {
            name: "Sneha Singh",
            course: "Digital Marketing",
            // video: "/videos/student4.mp4",
        },
        {
            name: "Rohit Jain",
            course: "Full Stack Development",
            // video: "/videos/student5.mp4",
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-14">
                    <span className="px-4 py-2 rounded-full bg-blue-100 text-[#009df2] text-sm font-medium">
                        🎓 Student Learning Journey
                    </span>

                    <h2 className="mt-5 text-4xl md:text-6xl font-bold">
                        What Students
                        <span className="text-[#009df2]"> Learned at PNINFOSYS</span>
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                        Hear directly from our students as they share their learning experiences,
                        skills gained, projects developed, and career growth after training at
                        PNINFOSYS.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-14">
                    <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
                        <h3 className="text-4xl font-bold text-[#009df2]">5000+</h3>
                        <p className="text-gray-500">Students Trained</p>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
                        <h3 className="text-4xl font-bold text-[#009df2]">100+</h3>
                        <p className="text-gray-500">Live Projects</p>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
                        <h3 className="text-4xl font-bold text-[#009df2]">95%</h3>
                        <p className="text-gray-500">Student Satisfaction</p>
                    </div>
                </div>

                {/* Auto Slider */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={25}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {testimonials.map((student, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">

                                <video
                                    controls
                                    className="w-full h-64 object-cover"
                                >
                                    <source src={student.video} type="video/mp4" />
                                </video>

                                <div className="p-5">
                                    <h3 className="text-xl font-bold text-gray-800">
                                        {student.name}
                                    </h3>

                                    <p className="text-[#009df2] mt-1 font-medium">
                                        {student.course}
                                    </p>

                                    <p className="text-gray-500 text-sm mt-3">
                                        Sharing their learning experience and success journey
                                        at PNINFOSYS.
                                    </p>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}

export default StudentSuccessStories;