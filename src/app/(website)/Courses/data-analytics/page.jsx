import PythonAnalysisClient from "./PythonAnalysisClient";

export const metadata = {
  title:
    "Data Analytics Course in Gwalior | Python, SQL & Power BI | PNINFOSYS",

  description:
    "Join the Data Analytics Course in Gwalior at PNINFOSYS. Learn Python, Excel, SQL, NumPy, Pandas and Power BI with practical projects, industrial training and internship certification.",

  keywords: [
    "Data Analytics Course in Gwalior",
    "Data Analytics Training in Gwalior",
    "Data Analysis with Python Course",
    "Python Data Analytics Course in Gwalior",
    "Python Course in Gwalior",
    "SQL Course in Gwalior",
    "Power BI Course in Gwalior",
    "Data Analyst Course in Gwalior",
    "Data Analytics Internship in Gwalior",
    "PNINFOSYS Data Analytics",
  ],

  alternates: {
    canonical: "https://pninfosys.com/courses/data-analytics",
  },

  openGraph: {
    title:
      "Data Analytics Course in Gwalior | Python, SQL & Power BI | PNINFOSYS",

    description:
      "Learn Python, Excel, SQL, NumPy, Pandas and Power BI with practical Data Analytics training and projects at PNINFOSYS.",

    url: "https://pninfosys.com/courses/data-analytics",

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
  return <PythonAnalysisClient />;
}