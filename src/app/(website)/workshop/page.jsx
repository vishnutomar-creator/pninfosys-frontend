import WorkshopClient from "./WorkshopClient";

export const metadata = {
  title:
    "IT Workshops in Gwalior | College Technical Workshops & Training | PNINFOSYS",

  description:
    "PNINFOSYS conducts technical IT workshops, industrial training and career guidance programs for colleges and universities in Gwalior, covering software development, programming, databases and emerging technologies.",

  keywords: [
    "IT workshops in Gwalior",
    "technical workshops in Gwalior",
    "college workshops in Gwalior",
    "IT workshop for colleges",
    "technical training for colleges",
    "industrial training in Gwalior",
    "software development workshop",
    "programming workshop in Gwalior",
    "college technical training",
    "IT career guidance workshop",
    "PNINFOSYS workshops",
  ],

  alternates: {
    canonical: "https://pninfosys.com/workshop",
  },

  openGraph: {
    title:
      "IT Workshops in Gwalior | College Technical Workshops & Training | PNINFOSYS",

    description:
      "Explore technical IT workshops, industrial training and career guidance programs conducted by PNINFOSYS for colleges and universities.",

    url: "https://pninfosys.com/workshop",

    siteName: "PNINFOSYS",

    locale: "en_IN",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function WorkshopPage() {
  return <WorkshopClient />;
}