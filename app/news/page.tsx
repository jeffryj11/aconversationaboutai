import AdSlot from "@/components/AdSlot";

type NewsItem = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

const newsItems: NewsItem[] = [
  {
    slug: "today-in-ai-1",
    title: "Today in AI — Sample Briefing",
    date: "2025-11-30",
    summary:
      "Sample daily AI briefing. Once Sanity is connected, this will be populated dynamically.",
  },
  {
    slug: "openai-updates-sample",
    title: "OpenAI Releases New Sample Feature",
    date: "2025-11-29",
    summary:
      "Placeholder story about a major AI model update. This is mock data for local dev.",
  },
];

export default function NewsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-4xl font-oxanium font-bold">AI News</h1>
        <AdSlot
          id="news-top-banner"
          label="News Page Banner"
          description="Top-of-page sponsor slot for the news section."
        />
      </div>

      <div className="grid md:grid-cols-[2fr,1fr] gap-10">
        <div className="space-y-8">
          {newsItems.map((item, idx) => (
            <div key={item.slug}>
              <a
                href={`/news/${item.slug}`}
                className="block border-b pb-4 hover:bg-gray-50 rounded-lg px-4 -mx-4 transition"
              >
                <h2 className="text-2xl font-semibold mb-1">{item.title}</h2>
                <p className="text-xs text-gray-500 mb-2">
                  {new Date(item.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700 text-sm">{item.summary}</p>
              </a>
              {idx === 0 && (
                <div className="mt-4">
                  <AdSlot
                    id="news-inline-1"
                    variant="inline"
                    label="Inline News Ad"
                    description="Contextual ad between the first and second news items."
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <aside className="space-y-6">
          <AdSlot
            id="news-sidebar-1"
            variant="sidebar"
            label="News Sidebar"
            description="Longer-form sponsor or house promo."
          />
          <AdSlot
            id="news-sidebar-2"
            variant="sidebar"
            label="Secondary Sidebar"
          />
        </aside>
      </div>
    </main>
  );
}
