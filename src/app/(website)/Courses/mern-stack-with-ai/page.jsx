import MernStackClient from "./MernStackClient";

export const metadata = {
  title:
    "MERN Stack Course in Gwalior | Full Stack Developer Training | PNINFOSYS",

  description:
    "Join the MERN Stack Course in Gwalior at PNINFOSYS and learn MongoDB, Express.js, React.js and Node.js with practical projects, industry-focused training and internship certification.",

  keywords: [
    "MERN Stack Course in Gwalior",
    "MERN Stack Training in Gwalior",
    "MERN Stack Developer Course in Gwalior",
    "Full Stack Developer Course in Gwalior",
    "MERN Developer Training in Gwalior",
    "React Node MongoDB Course in Gwalior",
    "MERN Stack Internship in Gwalior",
    "Full Stack Development Training in Gwalior",
    "MERN Stack Projects",
    "PNINFOSYS MERN Stack Course",
  ],

  alternates: {
    canonical:
      "https://pninfosys.com/courses/mern-stack",
  },

  openGraph: {
    title:
      "MERN Stack Course in Gwalior | Full Stack Developer Training | PNINFOSYS",

    description:
      "Learn MongoDB, Express.js, React.js and Node.js with practical projects, industry-focused training and internship certification at PNINFOSYS.",

    url:
      "https://pninfosys.com/courses/mern-stack",

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
  return <MernStackClient />;
}