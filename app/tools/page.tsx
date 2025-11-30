import AdSlot from "@/components/AdSlot";

type Tool = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  pricing: string;
  sponsored?: boolean;
};

const tools: Tool[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    category: "Chatbot / Assistant",
    shortDescription:
      "General-purpose AI assistant for text, code, and more.",
    pricing: "Free + paid tiers",
    sponsored: true,
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
  const sponsored = tools.filter((t) => t.sponsored);
  const organic = tools.filter((t) => !t.sponsored);

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 className="text-4xl font-oxanium font-bold">AI Tools Directory</h1>
        <AdSlot
          id="tools-top-banner"
          label="Tools Directory Banner"
          description="Sponsor slot targeting people evaluating AI tools."
        />
      </div>

      {sponsored.length > 0 && (
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            Featured &amp; Sponsored Tools
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sponsored.map((tool) => (
              <a
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="block rounded-xl p-1 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] shadow-sm hover:shadow-lg transition"
              >
                <div className="bg-white rounded-lg p-5 h-full flex flex-col">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-sponsorGold mb-2">
                    Sponsored
                  </span>
                  <h3 className="text-lg font-semibold mb-1">{tool.name}</h3>
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
        </section>
      )}

      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-lg font-semibold mb-3">All Tools</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {organic.map((tool) => (
            <a
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="block rounded-xl border border-gray-200 p-5 hover:shadow-md transition bg-white"
            >
              <h3 className="text-lg font-semibold mb-1">{tool.name}</h3>
              <p className="text-xs text-gray-500 mb-2">{tool.category}</p>
              <p className="text-sm text-gray-700 mb-4">
                {tool.shortDescription}
              </p>
              <span className="text-xs font-semibold text-[var(--gradient-start)]">
                {tool.pricing}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
