import Link from "next/link";

export default function SuggestArticles({ posts }) {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-4">Suggested Articles</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <Link
            key={i}
            href={`/articles/${post.slug}`}
            className="block p-4 bg-white/5 rounded-lg border border-white/10"
          >
            <p className="text-xs uppercase text-sky-400">{post.category}</p>
            <h4 className="text-lg font-semibold">{post.title}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}
