type NewsItem = {
  slug: string;
  title: string;
  date: string;
  body: string;
};

const newsItems: NewsItem[] = [
  {
    slug: "today-in-ai-vertical-models",
    title: "Today in AI: Foundation Models Quietly Go Vertical",
    date: "2025-11-30",
    body:
      "Over the last year, most of the noise in AI has been about \"the biggest\" and \"most powerful\" general-purpose models. What’s happening underneath the hype is more interesting: teams are quietly training or fine-tuning models that are brutally narrow, but incredibly useful.\n\n" +
      "You’re starting to see this in places like legal, healthcare documentation, financial analysis, customer support, and industrial operations. Instead of asking \"Which model is the smartest?\", these teams ask \"What exactly are we trying to decide, and what data do we already trust?\"\n\n" +
      "Two patterns are emerging:\n\n" +
      "1. Vertical copilots — tools that live inside an existing workflow (EHR, CRM, IDE, design tool) and answer only a small set of domain-shaped questions very well.\n" +
      "2. Decision scaffolding — systems that don’t replace a human judgment call, but lay out the relevant facts, similar cases, and likely outcomes so a human can decide faster and with more context.\n\n" +
      "Why this matters: if you’re a founder or operator, you probably don’t need \"the best model.\" You need a boring, reliable model that understands your data and your decisions. That’s a very different buying and integration conversation.\n\n" +
      "What to watch next:\n" +
      "– Vendors who talk more about integrations and data pipelines than parameters.\n" +
      "– Companies spinning down their own R&D spend and instead building on top of these vertical copilots.\n" +
      "– Compliance and ops teams quietly becoming the power users of AI, because they already think in systems and edge cases.",
  },
  {
    slug: "openai-updates-sample",
    title: "OpenAI Releases New Sample Feature",
    date: "2025-11-29",
    body:
      "Here you would put a longer-form writeup about the update, with links, analysis, and takeaways. For now this remains placeholder content until you add a real story.",
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

  const paragraphs = item.body.split("\n\n");

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-oxanium font-bold mb-4">{item.title}</h1>
      <p className="text-xs text-gray-500 mb-8">
        {new Date(item.date).toLocaleDateString()}
      </p>
      <article className="space-y-4 text-gray-800 leading-relaxed">
        {paragraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </article>
    </main>
  );
}
