import { client } from "../../lib/sanity";
import Link from "next/link";

async function runSearch(q, category, tag) {
  const filters = [];

  if (q) {
    filters.push(`
      title match $q ||
      excerpt match $q ||
      category match $q ||
      $q in tags[]
    `);
  }

  if (category) filters.push(`category == $category`);
  if (tag) filters.push(`$tag in tags[]`);

  const where = filters.length ? filters.join(" && ") : "true";

  return await client.fetch(
    `
    *[_type=="post" && ${where}] | order(publishedAt desc){
      title,
      "slug": slug.current,
      excerpt,
      category,
      publishedAt,
      tags
    }
  `,
    { q: `*${q}*`, category, tag }
  );
}

async function getFilters() {
  const cats = await client.fetch(`*[_type=="category"]{ title }`);
  const tags = await client.fetch(`*[_type=="post"]{ tags }`);

  return {
    categories: cats.map((c) => c.title),
    tags: [...new Set(tags.flatMap((t) => t.tags || []))]
  };
}

export default async function SearchPage({ searchParams }) {
  const q = searchParams.q || "";
  const filterCategory = searchParams.category || "";
  const filterTag = searchParams.tag || "";

  const [results, filters] = await Promise.all([
    runSearch(q, filterCategory, filterTag),
    getFilters()
  ]);

  return (
    <div className="space-y-10">

      {/* Header */}
      <h1 className="text-4xl font-bold">Search</h1>

      {/* Search input */}
      <form action="/search" className="flex gap-3">
        <input
          type="text"
          name="q"
          placeholder="Search..."
          defaultValue={q}
          className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white w-full max-w-lg"
        />
        <button className="px-4 py-2 bg-sky-400 text-slate-900 rounded-lg font-semibold">
          Go
        </button>
      </form>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">

        {/* Category */}
        <form action="/search">
          <input type="hidden" name="q" value={q} />
          <select
            name="category"
            defaultValue={filterCategory}
            className="bg-white/10 border border-white/20 px-3 py-2 rounded-lg"
          >
            <option value="">All Categories</option>
            {filters.categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <button className="ml-2 px-3 py-2 bg-white/10 border border-white/20 rounded-lg">
            Apply
          </button>
        </form>

        {/* Tags */}
        <form action="/search">
          <input type="hidden" name="q" value={q} />
          <select
            name="tag"
            defaultValue={filterTag}
            className="bg-white/10 border border-white/20 px-3 py-2 rounded-lg"
          >
            <option value="">All Tags</option>
            {filters.tags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <button className="ml-2 px-3 py-2 bg-white/10 border border-white/20 rounded-lg">
            Apply
          </button>
        </form>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((post, i) => (
          <Link
            key={i}
            href={`/articles/${post.slug}`}
            className="block border border-white/10 bg-white/5 p-4 rounded-xl hover:bg-white/10"
          >
            <p className="text-xs uppercase text-sky-300">{post.category}</p>
            <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
            <p className="text-gray-300 mt-2">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

