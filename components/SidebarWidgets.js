import Link from "next/link";

/* -------------------------------------------------------
   Trending Articles
------------------------------------------------------- */
export function TrendingWidget({ posts }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
      <h3 className="text-xl font-semibold text-white">Trending</h3>

      {posts.map((post, i) => (
        <Link
          key={i}
          href={`/articles/${post.slug}`}
          className="block bg-white/5 hover:bg-white/10 transition rounded-lg p-3"
        >
          <p className="text-xs uppercase text-sky-300">{post.category}</p>
          <p className="text-sm text-white">{post.title}</p>
        </Link>
      ))}
    </div>
  );
}

/* -------------------------------------------------------
   Editors Picks (posts tagged `editorpick`)
------------------------------------------------------- */
export function EditorsPicksWidget({ picks }) {
  if (!picks || picks.length === 0) return null;

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
      <h3 className="text-xl font-semibold text-white">Editor’s Picks</h3>

      {picks.map((post, i) => (
        <Link
          key={i}
          href={`/articles/${post.slug}`}
          className="block bg-white/5 hover:bg-white/10 transition rounded-lg p-3"
        >
          <p className="text-xs uppercase text-sky-300">{post.category}</p>
          <p className="text-sm">{post.title}</p>
        </Link>
      ))}
    </div>
  );
}

/* -------------------------------------------------------
   Recently Updated (currently same as trending)
------------------------------------------------------- */
export function RecentUpdatesWidget({ posts }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
      <h3 className="text-xl font-semibold text-white">Recently Updated</h3>

      {posts.map((post, i) => (
        <Link
          key={i}
          href={`/articles/${post.slug}`}
          className="block bg-white/5 hover:bg-white/10 transition rounded-lg p-3"
        >
          <p className="text-xs uppercase text-sky-300">{post.category}</p>
          <p className="text-sm">{post.title}</p>
        </Link>
      ))}
    </div>
  );
}
