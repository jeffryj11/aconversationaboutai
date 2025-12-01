import { client } from "../../../lib/sanity";
import Link from "next/link";
import SuggestArticles from "../../../components/SuggestArticles";
import {
  TrendingWidget,
  EditorsPicksWidget,
  RecentUpdatesWidget
} from "../../../components/SidebarWidgets";
import "../../../globals.css";

/* -------------------------------------------------------
   SEO: Dynamic Metadata for Article Pages
------------------------------------------------------- */
export async function generateMetadata({ params }) {
  const slug = params.slug;

  const post = await client.fetch(
    `
    *[_type=="post" && slug.current == $slug][0]{
      title,
      excerpt,
      category,
      publishedAt,
      tags,
      "slug": slug.current
    }
  `,
    { slug }
  );

  if (!post) {
    return { title: "Article Not Found | A Conversation About AI" };
  }

  const url = `https://aconversationaboutai.com/articles/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt || "",
    openGraph: {
      title: post.title,
      description: post.excerpt || "",
      type: "article",
      url,
      tags: post.tags || [],
      publishedTime: post.publishedAt,
      siteName: "A Conversation About AI"
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || ""
    }
  };
}

/* -------------------------------------------------------
   JSON-LD Builder for Google SEO
------------------------------------------------------- */
function buildJsonLd(post, slug) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt || "",
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "A Conversation About AI Editorial Team"
    },
    mainEntityOfPage: `https://aconversationaboutai.com/articles/${slug}`
  };
}

/* -------------------------------------------------------
   FETCHERS
------------------------------------------------------- */

async function getPost(slug) {
  return await client.fetch(
    `
    *[_type=="post" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      content,
      excerpt,
      category,
      publishedAt,
      tags,
      author
    }
  `,
    { slug }
  );
}

async function getRelated(category, tags, slug) {
  return await client.fetch(
    `
    *[_type=="post" && slug.current != $slug &&
      (category == $category || count((tags[])[@ in $tags]) > 0)
    ][0...3]{
      title,
      "slug": slug.current,
      category
    }
  `,
    { category, tags, slug }
  );
}

/* -------------------------------------------------------
   SIDEBAR FETCHERS
------------------------------------------------------- */

async function getTrending() {
  return await client.fetch(`
    *[_type=="post"] | order(publishedAt desc)[0...5]{
      title,
      "slug": slug.current,
      category
    }
  `);
}

async function getEditorsPicks() {
  return await client.fetch(`
    *[_type=="post" && "editorpick" in tags][0...5]{
      title,
      "slug": slug.current,
      category
    }
  `);
}

/* -------------------------------------------------------
   UTILITIES
------------------------------------------------------- */

function readingTime(content) {
  if (!content) return 1;
  const wordCount = JSON.stringify(content).split(" ").length;
  return Math.max(1, Math.round(wordCount / 200));
}

function renderPortable(blocks) {
  return blocks?.map((block, i) => {
    if (block._type === "block") {
      switch (block.style) {
        case "h1":
          return <h1 key={i} className="text-4xl font-bold mt-8 mb-4">{block.children[0].text}</h1>;
        case "h2":
          return <h2 key={i} className="text-3xl font-semibold mt-8 mb-4">{block.children[0].text}</h2>;
        case "h3":
          return <h3 key={i} className="text-2xl font-semibold mt-8 mb-4">{block.children[0].text}</h3>;
        case "blockquote":
          return (
            <blockquote key={i} className="border-l-4 border-sky-400 pl-4 italic text-gray-300 my-6">
              {block.children[0].text}
            </blockquote>
          );
        default:
          return (
            <p key={i} className="my-4 leading-relaxed text-gray-200">
              {block.children?.map((span) => span.text).join("")}
            </p>
          );
      }
    }
    return null;
  });
}

/* -------------------------------------------------------
   ARTICLE PAGE (2-COLUMN LAYOUT)
------------------------------------------------------- */

export default async function ArticlePage({ params }) {
  const { slug } = params;

  const post = await getPost(slug);
  if (!post) return <div className="text-red-400 text-xl">Article not found.</div>;

  const [related, trending, editorsPicks] = await Promise.all([
    getRelated(post.category, post.tags || [], slug),
    getTrending(),
    getEditorsPicks()
  ]);

  const recentUpdates = trending; // placeholder
  const readTime = readingTime(post.content);
  const jsonLd = buildJsonLd(post, slug);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 py-12">

      {/* LEFT COLUMN: ARTICLE CONTENT */}
      <div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-400 mb-4">
          <Link href="/" className="hover:text-sky-300">Home</Link>
          {" / "}
          <Link
            href={`/category/${post.category.toLowerCase()}`}
            className="hover:text-sky-300"
          >
            {post.category}
          </Link>
          {" / "}
          <span className="text-gray-500">{post.title}</span>
        </nav>

        {/* Header */}
        <header>
          <p className="text-xs uppercase text-sky-300">{post.category}</p>
          <h1 className="text-5xl font-bold text-white my-4">{post.title}</h1>

          <p className="text-gray-400">
            {new Date(post.publishedAt).toLocaleDateString()} • {readTime} min read
          </p>

          <p className="mt-3 text-gray-300 text-lg max-w-2xl">{post.excerpt}</p>
        </header>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none">
          {renderPortable(post.content)}
        </article>

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag, i) => (
              <Link
                key={i}
                href={`/tags/${tag.toLowerCase()}`}
                className="px-3 py-1 text-xs bg-white/10 border border-white/10 rounded-lg hover:bg-white/20 transition"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}

        {/* Related Articles */}
        {related.length > 0 && <SuggestArticles posts={related} />}
      </div>

      {/* RIGHT COLUMN: SIDEBAR */}
      <div className="space-y-10">
        <TrendingWidget posts={trending} />
        <EditorsPicksWidget picks={editorsPicks} />
        <RecentUpdatesWidget posts={recentUpdates} />
      </div>

    </div>
  );
}
