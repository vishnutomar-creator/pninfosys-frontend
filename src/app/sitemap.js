export default function sitemap() {
  const baseUrl = "https://pninfosys.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/workshop`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/placement`,
      lastModified: new Date(),
    },

    // Courses
    {
      url: `${baseUrl}/Courses/data-analytics`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Courses/full-stack-development-with-ai`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Courses/machine-learning-and-ai`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Courses/mern-stack-with-ai`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Courses/python-with-ai`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Courses/web-designing-with-ai`,
      lastModified: new Date(),
    },
  ];
}