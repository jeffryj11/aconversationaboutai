
export default function robots() {
  const baseUrl = "https://AConversationAboutAI.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: "AConversationAboutAI.com",
  };
}
