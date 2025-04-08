export default function sitemap() {
  return [
    {
      url: "http://localhost:3000/",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "http://localhost:3000/login",
      changeFrequency: "monthly",
    },
  ];
}
