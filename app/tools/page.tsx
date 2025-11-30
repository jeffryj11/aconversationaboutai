type Tool = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  pricing: string;
};

const tools: Tool[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    category: "Chatbot / Assistant",
    shortDescription:
      "General-purpose AI assistant for text, code, and more.",
    pricing: "Free + paid tiers",
  },
  {
    slug: "claude",
    name: "Claude",
    category: "Chatbot / Assistant",
    shortDescription:
      "Helpful, large-context AI assistant for writing and analysis.",
    pricing: "Free + usage-based",
  },
];

export default function ToolsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-oxanium font-bold mb-8">AI Tools Directory</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <a
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="block rounded-xl p-1 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] shadow-sm hover:shadow-lg transition"
          >
            <div className="bg-white rounded-lg p-5 h-full flex flex-col">
              <h2 className="text-lg font-semibold mb-1">{tool.name}</h2>
              <p className="text-xs text-gray-500 mb-2">{tool.category}</p>
              <p className="text-sm text-gray-700 mb-4 flex-1">
                {tool.shortDescription}
              </p>
              <span className="text-xs font-semibold text-[var(--gradient-start)]">
                {tool.pricing}
              </span>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
