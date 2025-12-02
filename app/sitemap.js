
import { client } from "../lib/sanity";

const baseUrl = "https://AConversationAboutAI.com";

export default async function sitemap() {
  const posts = await client.fetch(
    `*[_type=="post" && defined(slug.current)]{
      "slug": slug.current,
      _updatedAt
    }`
  );

  const categories = await client.fetch(
    `*[_type=="category" && defined(slug.current)]{
      "slug": slug.current,
      _updatedAt
    }`
  );

  const staticRoutes = [
    "",
    "/articles",
    "/about",
    "/contact",
    "/search"
  ].map((path) => ({
    url: baseUrl + path,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const articleRoutes = posts.map((post) => ({
    url: `${baseUrl}/articles/${post.slug}`,
    lastModified: post._updatedAt,
  }));

  const categoryRoutes = categories.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: cat._updatedAt,
  }));

  return [...staticRoutes, ...articleRoutes, ...categoryRoutes];
}
