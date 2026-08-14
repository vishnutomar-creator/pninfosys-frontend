import ContactClient from "./ContactClient";

export const metadata = {
  title:
    "Contact PNINFOSYS | Software Company & IT Training in Gwalior",

  description:
    "Contact PNINFOSYS in Gwalior for software development services, IT courses, internships, workshops, placement preparation and career-focused training.",

  keywords: [
    "PNINFOSYS contact",
    "software company in Gwalior",
    "software development company in Gwalior",
    "IT training institute in Gwalior",
    "IT courses in Gwalior",
    "IT internship in Gwalior",
    "software development services in Gwalior",
  ],

  alternates: {
    canonical: "https://pninfosys.com/contact",
  },

  openGraph: {
    title:
      "Contact PNINFOSYS | Software Company & IT Training in Gwalior",

    description:
      "Contact PNINFOSYS for software development services, IT training, courses, internships and career-focused programs in Gwalior.",

    url: "https://pninfosys.com/contact",

    siteName: "PNINFOSYS",

    locale: "en_IN",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}