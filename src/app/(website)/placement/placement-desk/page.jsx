import PlacementDeskClient from "./PlacementDeskClient";

export const metadata = {
  title:
    "Placement Preparation in Gwalior | IT Placement & Career Support | PNINFOSYS",

  description:
    "PNINFOSYS Placement Desk provides placement preparation in Gwalior through technical training, real-world projects, interview preparation, aptitude practice and career guidance.",

  keywords: [
    "Placement Preparation in Gwalior",
    "IT Placement Preparation in Gwalior",
    "Placement Training in Gwalior",
    "IT Job Preparation in Gwalior",
    "Software Job Preparation in Gwalior",
    "Interview Preparation for IT Jobs",
    "IT Career Guidance in Gwalior",
    "Campus Placement Preparation",
    "Technical Interview Preparation",
    "PNINFOSYS Placement Desk",
  ],

  alternates: {
    canonical: "https://pninfosys.com/placement",
  },

  openGraph: {
    title:
      "Placement Preparation in Gwalior | IT Placement & Career Support | PNINFOSYS",

    description:
      "Prepare for IT jobs with technical training, real-world projects, interview preparation, aptitude practice and career guidance at PNINFOSYS.",

    url: "https://pninfosys.com/placement",

    siteName: "PNINFOSYS",

    locale: "en_IN",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function PlacementDeskPage() {
  return <PlacementDeskClient />;
}