import MachineLearningClient from "./MachineLearningClient";

export const metadata = {
  title:
    "Machine Learning Course in Gwalior | AI & ML Training | PNINFOSYS",

  description:
    "Join the Machine Learning Course in Gwalior at PNINFOSYS. Learn Python, Scikit-learn, TensorFlow, NLP and Deep Learning through practical AI projects, industrial training and internship certification.",

  keywords: [
    "Machine Learning Course in Gwalior",
    "Machine Learning Training in Gwalior",
    "AI ML Course in Gwalior",
    "Artificial Intelligence Course in Gwalior",
    "Machine Learning with Python",
    "AI Course in Gwalior",
    "Deep Learning Course in Gwalior",
    "NLP Course in Gwalior",
    "Machine Learning Internship in Gwalior",
    "PNINFOSYS Machine Learning Course",
  ],

  alternates: {
    canonical:
      "https://pninfosys.com/courses/machine-learning",
  },

  openGraph: {
    title:
      "Machine Learning Course in Gwalior | AI & ML Training | PNINFOSYS",

    description:
      "Learn Machine Learning, AI, Python, Scikit-learn, TensorFlow, NLP and Deep Learning with practical projects and industry-focused training at PNINFOSYS.",

    url:
      "https://pninfosys.com/courses/machine-learning",

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
  return <MachineLearningClient />;
}