export default function robot() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/login", "/api"],
    },
    sitemap: "http://localhost:3000/sitemap.xml",
  };
}
