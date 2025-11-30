import AdSlot from "@/components/AdSlot";

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  body: string;
};

const posts: BlogPost[] = [
  {
    slug: "how-to-think-about-ai",
    title: "How to Think About AI in 2025",
    date: "2025-11-01",
    body:
      "This essay sketches out a way to think about modern AI systems: not as magic, but as extremely capable pattern engines that sit on top of compute, data, and product decisions. The real leverage comes from how you wire them into workflows, not which model is on the front page this week.",
  },
  {
    slug: "ai-tools-for-small-business",
    title: "AI Tools for Small Business Owners",
    date: "2025-11-10",
    body:
      "This piece walks through practical use cases, tool stacks, and workflows for running a small business with AI: from inbox triage and quoting to reporting, hiring, and planning. The goal is to make AI feel like a boring, reliable part of the back office.",
  },
];

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-semibold mb-4">Post not found</h1>
        <p className="text-gray-600">
          Once real posts live in the CMS, this will show actual content.
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-[3fr,1fr] gap-10">
      <article className="space-y-4 text-gray-800 leading-relaxed">
        <h1 className="text-4xl font-oxanium font-bold mb-2">{post.title}</h1>
        <p className="text-xs text-gray-500 mb-4">
          {new Date(post.date).toLocaleDateString()}
        </p>
        <p>{post.body}</p>
        <div className="mt-6">
          <AdSlot
            id="blog-article-inline"
            variant="inline"
            label="In-Article Placement"
          />
        </div>
      </article>

      <aside className="space-y-6">
        <AdSlot
          id="blog-article-sidebar-1"
          variant="sidebar"
          label="Article Sidebar"
        />
        <AdSlot
          id="blog-article-sidebar-2"
          variant="sidebar"
          label="Secondary Sidebar"
        />
      </aside>
    </main>
  );
}
