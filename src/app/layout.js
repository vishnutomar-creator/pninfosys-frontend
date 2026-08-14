import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://pninfosys.com"),

  title: {
    default:
      "PNINFOSYS | Software Development Company & IT Training in Gwalior",
    template: "%s | PNINFOSYS",
  },

  description:
    "PNINFOSYS is a software development company and IT training institute in Gwalior offering IT courses, Full Stack Development, Data Analytics, internships, workshops and software development services.",

  keywords: [
    "PNINFOSYS",
    "software company in Gwalior",
    "software development company in Gwalior",
    "IT company in Gwalior",
    "IT training institute in Gwalior",
    "IT courses in Gwalior",
    "Full Stack Development course in Gwalior",
    "Data Analytics course in Gwalior",
    "IT internship in Gwalior",
  ],

  authors: [
    {
      name: "PNINFOSYS",
    },
  ],

  creator: "PNINFOSYS",
  publisher: "PNINFOSYS",

  alternates: {
    canonical: "https://pninfosys.com/",
  },

  openGraph: {
    title:
      "PNINFOSYS | Software Development Company & IT Training in Gwalior",

    description:
      "Software development, IT training, courses, internships, workshops and career-focused programs by PNINFOSYS.",

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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}