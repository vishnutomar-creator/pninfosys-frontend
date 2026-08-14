import WebDesignClient from "./WebDesignClient";

export const metadata = {
  title:
    "Web Design Course in Gwalior | HTML, CSS, JavaScript & UI/UX | PNINFOSYS",

  description:
    "Join the Web Design Course in Gwalior at PNINFOSYS. Learn UI/UX, Figma, HTML5, CSS3, Tailwind CSS and JavaScript through practical projects and internship-focused training.",

  keywords: [
    "Web Design Course in Gwalior",
    "Web Design Training in Gwalior",
    "Web Designing Course in Gwalior",
    "Web Development Course in Gwalior",
    "UI UX Course in Gwalior",
    "HTML CSS Course in Gwalior",
    "JavaScript Course in Gwalior",
    "Figma Course in Gwalior",
    "Tailwind CSS Course in Gwalior",
    "Web Design Internship in Gwalior",
    "PNINFOSYS Web Design Course",
  ],

  alternates: {
    canonical:
      "https://pninfosys.com/courses/web-design",
  },

  openGraph: {
    title:
      "Web Design Course in Gwalior | HTML, CSS, JavaScript & UI/UX | PNINFOSYS",

    description:
      "Learn UI/UX, Figma, HTML5, CSS3, Tailwind CSS and JavaScript with practical projects and internship-focused Web Design training at PNINFOSYS.",

    url:
      "https://pninfosys.com/courses/web-design",

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
  return <WebDesignClient />;
}