import AdSlot from "@/components/AdSlot";

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

const posts: BlogPost[] = [
  {
    slug: "how-to-think-about-ai",
    title: "How to Think About AI in 2025",
    date: "2025-11-01",
    summary:
      "A starter essay about framing AI as infrastructure — not magic. Placeholder content for now.",
  },
  {
    slug: "ai-tools-for-small-business",
    title: "AI Tools for Small Business Owners",
    date: "2025-11-10",
    summary:
      "An overview of how solo founders and small teams can integrate AI into daily operations.",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 className="text-4xl font-oxanium font-bold">AI Deep Dives &amp; Essays</h1>
        <AdSlot
          id="blog-top-banner"
          label="Blog Banner"
          description="Long-form content sponsor placement."
        />
      </div>

      <div className="grid md:grid-cols-[2fr,1fr] gap-10">
        <div className="space-y-8">
          {posts.map((post, idx) => (
            <div key={post.slug}>
              <a
                href={`/blog/${post.slug}`}
                className="block border-b pb-4 hover:bg-gray-50 rounded-lg px-4 -mx-4 transition"
              >
                <h2 className="text-2xl font-semibold mb-1">{post.title}</h2>
                <p className="text-xs text-gray-500 mb-2">
                  {new Date(post.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700 text-sm">{post.summary}</p>
              </a>
              {idx === 0 && (
                <div className="mt-4">
                  <AdSlot
                    id="blog-inline-1"
                    variant="inline"
                    label="Inline Blog Placement"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <aside className="space-y-6">
          <AdSlot
            id="blog-sidebar-1"
            variant="sidebar"
            label="Blog Sidebar"
          />
          <AdSlot
            id="blog-sidebar-2"
            variant="sidebar"
            label="Secondary Sidebar"
          />
        </aside>
      </div>
    </main>
  );
}
