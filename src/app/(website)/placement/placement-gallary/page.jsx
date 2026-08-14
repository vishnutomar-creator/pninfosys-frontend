import PlacementGalleryClient from "./PlacementGalleryClient";

export const metadata = {
  title:
    "Placement Gallery | Student Success Stories | PNINFOSYS Gwalior",

  description:
    "Explore PNINFOSYS student placement success stories, career journeys and achievements through practical IT training, internships, live projects and placement support in Gwalior.",

  keywords: [
    "PNINFOSYS placement",
    "student placement success stories",
    "IT placement in Gwalior",
    "student success stories Gwalior",
    "IT job placement Gwalior",
    "software placement in Gwalior",
    "PNINFOSYS students placement",
    "IT career success stories",
    "placement assistance in Gwalior",
  ],

  alternates: {
    canonical: "https://pninfosys.com/placement-gallery",
  },

  openGraph: {
    title:
      "Placement Gallery | Student Success Stories | PNINFOSYS Gwalior",

    description:
      "Explore student placement success stories and career journeys from PNINFOSYS through IT training, internships, projects and placement support.",

    url: "https://pninfosys.com/placement-gallery",

    siteName: "PNINFOSYS",

    locale: "en_IN",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function PlacementGalleryPage() {
  return <PlacementGalleryClient />;
}