type NewsItem = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

const newsItems: NewsItem[] = [
  {
    slug: "today-in-ai-vertical-models",
    title: "Today in AI: Foundation Models Quietly Go Vertical",
    date: "2025-11-30",
    summary:
      "Most of the noise is about the biggest, flashiest models. The real shift is quietly happening in narrow, vertical copilots.",
  },
  {
    slug: "openai-updates-sample",
    title: "OpenAI Releases New Sample Feature",
    date: "2025-11-29",
    summary:
      "Placeholder story about a major AI model update. This is mock data that will be replaced by real coverage.",
  },
];

export default function NewsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-oxanium font-bold mb-4">AI News</h1>
      <p className="text-gray-700 mb-8">
        Short, opinionated rundowns of what actually matters in AI this week.
        No attempt to cover everything; just the moves that change how you work.
      </p>

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
