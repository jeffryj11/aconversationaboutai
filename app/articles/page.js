import { client } from "../../lib/sanity";
import Link from "next/link";

async function getAllArticles() {
  return await client.fetch(`
    *[_type=="post"] | order(publishedAt desc){
      title,
      "slug": slug.current,
      excerpt,
      category,
      publishedAt
    }
  `);
}

export default async function ArticlesPage() {
  const posts = await getAllArticles();

  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold mb-6">All Articles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <Link
            key={i}
            href={`/articles/${post.slug}`}
            className="block rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
          >
            <p className="text-xs uppercase text-sky-300">{post.category}</p>
            <h3 className="mt-2 text-xl font-semibold">{post.title}</h3>
            <p className="mt-2 text-gray-300">{post.excerpt}</p>
            <p className="mt-3 text-xs text-gray-500">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
