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
  title:
    "PNINFOSYS | Software Development Company & IT Training in Gwalior",

  description:
    "PNINFOSYS is a software development company and IT training institute in Gwalior offering Full Stack Development, Data Analytics, internships, workshops and career-focused training.",

  keywords: [
    "PNINFOSYS",
    "software company in Gwalior",
    "software development company in Gwalior",
    "IT training institute in Gwalior",
    "IT courses in Gwalior",
    "Full Stack Development course in Gwalior",
    "MERN Stack course in Gwalior",
    "Data Analytics course in Gwalior",
    "Python course in Gwalior",
    "IT internship in Gwalior",
  ],

  alternates: {
    canonical: "https://pninfosys.com/",
  },

  openGraph: {
    title:
      "PNINFOSYS | Software Development Company & IT Training in Gwalior",

    description:
      "Software development, IT training, internships, workshops and career-focused programs by PNINFOSYS.",

    url: "https://pninfosys.com/",
    siteName: "PNINFOSYS",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
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

      {/* <StudentSuccessStories /> */}

      <CollegeWorkshop />

      <OurProjects />

      <Testimonial />

      <YoutubeHub />

      <FinalCTA />
    </>
  );
}