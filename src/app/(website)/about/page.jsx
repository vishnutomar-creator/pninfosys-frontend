import AboutClient from "./AboutClient";

export const metadata = {
  title:
    "About PNINFOSYS | Software Company & IT Training Institute in Gwalior",

  description:
    "Learn about PNINFOSYS, a software development company and IT training institute in Gwalior offering industry-focused IT training, software development, internships, workshops and career-oriented programs.",

  keywords: [
    "PNINFOSYS",
    "software company in Gwalior",
    "software development company in Gwalior",
    "IT training institute in Gwalior",
    "IT training in Gwalior",
    "software development training",
    "IT internship in Gwalior",
  ],

  alternates: {
    canonical: "https://pninfosys.com/about",
  },

  openGraph: {
    title:
      "About PNINFOSYS | Software Company & IT Training Institute in Gwalior",

    description:
      "Learn about PNINFOSYS, its software development services, IT training programs, internships, workshops and career-focused initiatives.",

    url: "https://pninfosys.com/about",

    siteName: "PNINFOSYS",

    locale: "en_IN",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return <AboutClient />;
}