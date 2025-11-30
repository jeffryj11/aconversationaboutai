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
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-oxanium font-bold mb-4">{item.title}</h1>
      <p className="text-xs text-gray-500 mb-8">
        {new Date(item.date).toLocaleDateString()}
      </p>
      <article className="space-y-4 text-gray-800 leading-relaxed">
        <p>{item.body}</p>
      </article>
    </main>
  );
}
