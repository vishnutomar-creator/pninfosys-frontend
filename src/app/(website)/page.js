import React from "react";

import HeroSection from "../component/homesection/HeroSection";
import AboutPNINFOSYS from "../component/homesection/AboutPNINFOSYS";
import WhyChoosePNINFOSYS from "../component/homesection/WhyChoosePNINFOSYS";
import OurServices from "../component/homesection/OurServices";
import PlacementSection from "../component/homesection/PlacementSection";
import StudentSuccessStories from "../component/homesection/StudentSuccessStories";
import OurProjects from "../component/homesection/OurProjects";
import Testimonial from "../component/homesection/Testimonial";
import YoutubeHub from "../component/homesection/YoutubeHub";
import FinalCTA from "../component/homesection/FinalCTA";
import PopularCourses from "../component/homesection/PopularCourses";
import CollegeWorkshop from "../component/homesection/CollegeWorkshop";


// SEO Metadata
export const metadata = {
  title: "PNINFOSYS | IT Training, Courses & Internship",
  description:
    "PNINFOSYS provides industry-focused IT courses, internships, project-based training and career-oriented programs for students and professionals.",
};


export default function Page() {
  return (
    <>

      <HeroSection />
      <AboutPNINFOSYS />

      <WhyChoosePNINFOSYS />

      <OurServices />

      <PopularCourses />

      <PlacementSection />

      <StudentSuccessStories />

      {/* <CollegeWorkshop /> */}

      <OurProjects />

      <Testimonial />

      <YoutubeHub />

      <FinalCTA />
    </>
  );
}