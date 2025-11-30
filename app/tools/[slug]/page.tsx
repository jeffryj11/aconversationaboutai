type ToolDetail = {
  slug: string;
  name: string;
  category: string;
  description: string;
  pricing: string;
  pros: string[];
  cons: string[];
};

const tools: ToolDetail[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    category: "Chatbot / Assistant",
    description:
      "ChatGPT is a general-purpose AI assistant you can use for writing, coding, analysis, and more. This is placeholder copy for local dev.",
    pricing: "Free tier + ChatGPT Plus subscription.",
    pros: ["Great general-purpose model", "Huge ecosystem", "Easy to use UI"],
    cons: ["Internet access / plugins may be limited", "Quality depends on prompts"],
  },
  {
    slug: "claude",
    name: "Claude",
    category: "Chatbot / Assistant",
    description:
      "Claude focuses on helpful, safe, and very long-context conversations. Placeholder copy until CMS is wired up.",
    pricing: "Free tier + usage-based API pricing.",
    pros: ["Very large context window", "Strong writing and analysis"],
    cons: ["Some features may be region-limited"],
  },
];

export default function ToolDetailPage({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);

  if (!tool) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-semibold mb-4">Tool not found</h1>
        <p className="text-gray-600">
          This is placeholder data. Once the CMS is connected, real tool profiles will show here.
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-oxanium font-bold mb-2">{tool.name}</h1>
      <p className="text-sm text-gray-500 mb-1">{tool.category}</p>
      <p className="text-sm text-gray-500 mb-6">{tool.pricing}</p>

      <p className="text-gray-800 mb-8 leading-relaxed">{tool.description}</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-3">Pros</h2>
          <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
            {tool.pros.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Cons</h2>
          <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
            {tool.cons.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
