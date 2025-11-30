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
      <h1 className="text-4xl font-oxanium font-bold mb-8">AI News</h1>

      <div className="space-y-8">
        {newsItems.map((item) => (
          <a
            key={item.slug}
            href={`/news/${item.slug}`}
            className="block border-b pb-6 hover:bg-gray-50 rounded-lg px-4 -mx-4 transition"
          >
            <h2 className="text-2xl font-semibold mb-1">{item.title}</h2>
            <p className="text-xs text-gray-500 mb-2">
              {new Date(item.date).toLocaleDateString()}
            </p>
            <p className="text-gray-700 text-sm">{item.summary}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
