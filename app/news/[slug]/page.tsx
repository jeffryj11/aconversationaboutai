import AdSlot from "@/components/AdSlot";

type NewsItem = {
  slug: string;
  title: string;
  date: string;
  body: string;
};

const newsItems: NewsItem[] = [
  {
    slug: "today-in-ai-1",
    title: "Today in AI — Sample Briefing",
    date: "2025-11-30",
    body:
      "This is placeholder content for the daily AI briefing. Later, this will come from Sanity CMS and/or an automated GPT summary.",
  },
  {
    slug: "openai-updates-sample",
    title: "OpenAI Releases New Sample Feature",
    date: "2025-11-29",
    body:
      "Here you would put a longer-form writeup about the update, with links, analysis, and takeaways.",
  },
];

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const item = newsItems.find((n) => n.slug === params.slug);

  if (!item) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-semibold mb-4">Article not found</h1>
        <p className="text-gray-600">
          This is just mock data. Once CMS is wired up, real articles will appear here.
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-[3fr,1fr] gap-10">
      <article className="space-y-4 text-gray-800 leading-relaxed">
        <h1 className="text-4xl font-oxanium font-bold mb-2">{item.title}</h1>
        <p className="text-xs text-gray-500 mb-4">
          {new Date(item.date).toLocaleDateString()}
        </p>
        <p>{item.body}</p>
        <div className="mt-6">
          <AdSlot
            id="news-article-inline"
            variant="inline"
            label="In-Article Sponsor"
            description="Inline sponsor message or promoted resource."
          />
        </div>
      </article>

      <aside className="space-y-6">
        <AdSlot
          id="news-article-sidebar-1"
          variant="sidebar"
          label="Article Sidebar"
        />
        <AdSlot
          id="news-article-sidebar-2"
          variant="sidebar"
          label="Secondary Sidebar"
        />
      </aside>
    </main>
  );
}
