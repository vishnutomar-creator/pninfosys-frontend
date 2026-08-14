import ServicesClient from "./ServicesClient";

export const metadata = {
  title:
    "Software Development Company in Gwalior | IT & Software Services | PNINFOSYS",

  description:
    "PNINFOSYS is a software development company in Gwalior offering website development, mobile app development, custom software, SEO, digital marketing, AI and data analytics solutions.",

  keywords: [
    "software company in Gwalior",
    "software development company in Gwalior",
    "software development services in Gwalior",
    "web development company in Gwalior",
    "website development company in Gwalior",
    "mobile app development company in Gwalior",
    "custom software development in Gwalior",
    "IT company in Gwalior",
    "AI development company in Gwalior",
    "data analytics services in Gwalior",
    "SEO services in Gwalior",
    "digital marketing services in Gwalior",
    "PNINFOSYS software services",
  ],

  alternates: {
    canonical: "https://pninfosys.com/services",
  },

  openGraph: {
    title:
      "Software Development Company in Gwalior | IT & Software Services | PNINFOSYS",

    description:
      "Explore website development, mobile app development, custom software, AI, data analytics, SEO and digital marketing services by PNINFOSYS.",

    url: "https://pninfosys.com/services",

    siteName: "PNINFOSYS",

    locale: "en_IN",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}