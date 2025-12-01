import { client } from "../../../lib/sanity";
import Link from "next/link";

/* -------------------------------------------------------
   SEO: Dynamic Metadata for Category Pages
------------------------------------------------------- */
export async function generateMetadata({ params }) {
  const { slug } = params;

  const cat = await client.fetch(
    `
    *[_type=="category" && title == $slug][0]{
      title,
      description
    }
  `,
    { slug }
  );

  if (!cat) {
    return {
      title: `Category: ${slug} | A Conversation About AI`
    };
  }

  return {
    title: `${cat.title} | A Conversation About AI`,
    description:
      cat.description ??
      `Explore articles about ${cat.title} and the latest AI developments.`,
    openGraph: {
      title: `${cat.title} | A Conversation About AI`,
      description:
        cat.description ??
        `Explore articles about ${cat.title} and the latest AI developments.`
    }
  };
}

/* -------------------------------------------------------
   FETCHERS
------------------------------------------------------- */

async function getCategoryData(slug) {
  const cat = await client.fetch(
    `
    *[_type=="category" && title == $slug][0]{
      title,
      description
    }
  `,
    { slug }
  );

  const posts = await client.fetch(
    `
    *[_type=="post" && category == $slug]
      | order(publishedAt desc){
        title,
        "slug": slug.current,
        excerpt,
        category,
        publishedAt,
        tags
      }
  `,
    { slug }
  );

  return { cat, posts };
}

/* -------------------------------------------------------
   PAGINATION HELPERS
------------------------------------------------------- */

function paginate(arr, page, perPage) {
  const offset = (page - 1) * perPage;
  return {
    data: arr.slice(offset, offset + perPage),
    totalPages: Math.ceil(arr.length / perPage)
  };
}

/* -------------------------------------------------------
   MAIN PAGE COMPONENT
------------------------------------------------------- */

export default async function CategoryPage({ params, searchParams }) {
  const { slug } = params;
  const page = Number(searchParams.page) || 1;
  const perPage = 9;

  const { cat, posts } = await getCategoryData(slug);

  const { data: paginated, totalPages } = paginate(posts, page, perPage);

  return (
    <div className="space-y-12">

      {/* Category Hero */}
      <section className="pb-6 border-b border-white/10">
        <h1 className="text-5xl font-bold capitalize">
          {cat?.title || slug}
        </h1>

        <p className="mt-3 text-gray-300 max-w-2xl">
          {cat?.description ??
            `Articles related to ${cat?.title || slug} in artificial intelligence.`}
        </p>
      </section>

      {/* Articles Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginated.map((post, i) => (
            <Link
              href={`/articles/${post.slug}`}
              key={i}
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
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-3 mt-10">
          {Array.from({ length: totalPages }).map((_, idx) => {
            const pageNumber = idx + 1;
            const isCurrent = pageNumber === page;

            return (
              <Link
                key={idx}
                href={`/category/${slug}?page=${pageNumber}`}
                className={`px-4 py-2 rounded-lg border ${
                  isCurrent
                    ? "bg-sky-400 text-slate-900 border-sky-400"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                {pageNumber}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
