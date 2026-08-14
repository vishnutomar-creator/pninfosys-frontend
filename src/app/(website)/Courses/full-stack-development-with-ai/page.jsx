import FullStackMernClient from "./FullStackMernClient";

export const metadata = {
  title:
    "Full Stack Development Course in Gwalior | MERN Stack Training | PNINFOSYS",

  description:
    "Join the Full Stack Development Course in Gwalior at PNINFOSYS. Learn React, Node.js, Express.js and MongoDB with live projects, industrial training, internship certification and 1-month free demo.",

  keywords: [
    "Full Stack Development Course in Gwalior",
    "Full Stack Training in Gwalior",
    "MERN Stack Course in Gwalior",
    "MERN Stack Training in Gwalior",
    "Full Stack Developer Course in Gwalior",
    "MERN Developer Course in Gwalior",
    "React Node MongoDB Course in Gwalior",
    "Full Stack Internship in Gwalior",
    "MERN Stack Internship in Gwalior",
    "PNINFOSYS Full Stack Course",
  ],

  alternates: {
    canonical:
      "https://pninfosys.com/courses/full-stack-development",
  },

  openGraph: {
    title:
      "Full Stack Development Course in Gwalior | MERN Stack Training | PNINFOSYS",

    description:
      "Learn Full Stack Development with React, Node.js, Express.js and MongoDB through live projects, industrial training and internship at PNINFOSYS.",

    url:
      "https://pninfosys.com/courses/full-stack-development",

    siteName: "PNINFOSYS",

    locale: "en_IN",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function CoursePage() {
  return <FullStackMernClient />;
}