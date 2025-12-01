import SearchBar from "../components/SearchBar";
import { client } from "../lib/sanity";
import Link from "next/link";
import FeaturedCarousel from "../components/FeaturedCarousel";

// ---- FETCHERS ----

// Get featured posts for the hero carousel
async function getFeatured() {
  return await client.fetch(`
    *[_type=="post"] | order(publishedAt desc)[0...5]{
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      category
    }
  `);
}

// Get latest 6 articles
async function getLatest() {
  return await client.fetch(`
    *[_type=="post"] | order(publishedAt desc)[0...6]{
      title,
      "slug": slug.current,
      excerpt,
      category,
      publishedAt
    }
  `);
}

// Get all categories
async function getCategories() {
  return await client.fetch(`
    *[_type=="category"]{
      title,
      "slug": title
    }
  `);
}

// ---- HOME PAGE ----
export default async function HomePage() {
  const [featured, latest, categories] = await Promise.all([
    getFeatured(),
    getLatest(),
    getCategories()
  ]);

  return (
    <div className="space-y-20">

      {/* --------------------------
          HERO + SEARCH BAR
      --------------------------- */}
      <section className="mt-10 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          A Conversation About <span className="text-sky-300">AI</span>
        </h1>

        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Essays, analysis, and reporting on the breakthroughs, risks, and
          future impact of artificial intelligence.
        </p>

        {/* Search bar */}
     <SearchBar />

      </section>

      {/* --------------------------
          FEATURED CAROUSEL
      --------------------------- */}
      {featured.length > 0 && (
        <section>
          <h2 className="text-3xl font-semibold mb-6">Featured</h2>
          <FeaturedCarousel posts={featured} />
        </section>
      )}

      {/* --------------------------
          LATEST ARTICLES
      --------------------------- */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Latest Articles</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((post, i) => (
            <Link
              href={`/articles/${post.slug}`}
              key={i}
              className="block rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
            >
              <p className="text-xs uppercase text-sky-300">
                {post.category}
              </p>

              <h3 className="mt-2 text-xl font-semibold">{post.title}</h3>

              <p className="mt-2 text-gray-300">{post.excerpt}</p>

              <p className="mt-3 text-xs text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* --------------------------
          BROWSE BY CATEGORY
      --------------------------- */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Explore by Category</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <Link
              href={`/category/${cat.slug.toLowerCase()}`}
              key={i}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200 hover:bg-white/10 hover:border-sky-300 transition"
            >
              {cat.title}
            </Link>
          ))}
        </div>
      </section>

      {/* --------------------------
          NEWSLETTER SIGNUP
      --------------------------- */}
      <section className="text-center mt-20 pb-24">
        <h2 className="text-3xl font-semibold">Stay Updated</h2>
        <p className="mt-2 text-gray-300">
          Get weekly insights on the rapid changes in artificial intelligence.
        </p>

        <form
          action="/api/subscribe"
          method="POST"
          className="mt-6 flex justify-center gap-3"
        >
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="rounded-lg px-4 py-2 bg-white/10 border border-white/20 text-white focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-lg px-4 py-2 bg-sky-400 text-slate-900 font-semibold hover:bg-sky-300 transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
