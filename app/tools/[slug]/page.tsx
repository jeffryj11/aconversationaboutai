type ToolDetail = {
  slug: string;
  name: string;
  category: string;
  description: string;
  pricing: string;
  pros: string[];
  cons: string[];
  sponsored?: boolean;
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
    sponsored: true,
  },
  {
    slug: "claude",
    name: "Claude",
    category: "Chatbot / Assistant",
    description:
      "Claude is at its best when you have long, squishy input: product specs, contracts, research dumps, transcripts, or multi-step reasoning. If ChatGPT feels great for quick ask-and-get tasks, Claude often feels like a patient collaborator for slow, deep work.",
    pricing: "Free tier + usage-based API pricing.",
    pros: [
      "Handles very long documents without falling apart halfway through",
      "Conservative tone and explicit about uncertainty",
      "Strong at restructuring messy input into plans, outlines, and checklists",
      "Works well for research synthesis, meeting notes, and policy drafts",
    ],
    cons: [
      "Less playful by default; prompts sometimes need to be more explicit",
      "Can feel slower on huge-context tasks",
      "Still capable of hallucinations if pushed outside its lane",
    ],
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
    <main className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-[3fr,1.2fr] gap-10">
      <section>
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-oxanium font-bold">{tool.name}</h1>
          {tool.sponsored && (
            <span className="text-[10px] font-semibold uppercase tracking-wide text-sponsorGold border border-sponsorGold/60 rounded-full px-2 py-1">
              Sponsored Listing
            </span>
          )}
        </div>
        <p className="text-sm text-gray-500 mb-1">{tool.category}</p>
        <p className="text-sm text-gray-500 mb-6">{tool.pricing}</p>

        <p className="text-gray-800 mb-8 leading-relaxed">{tool.description}</p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
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
      </section>

      <aside className="space-y-6">
        <div className="border border-gray-200 rounded-xl p-4 text-sm text-gray-700">
          <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
            How to actually use it
          </div>
          <p className="mb-2">
            The real leverage isn&apos;t \"ask Claude anything.\" It&apos;s feeding it
            raw artifacts you already have — user interviews, ticket descriptions,
            internal docs — and asking it to reframe them into plans, decision memos,
            risk lists, and customer stories.
          </p>
          <p>
            Use it as a sanity-checker on your own thinking: \"Here&apos;s our plan;
            what did we miss?\" or \"Here&apos;s the research; turn this into something
            executives can read in three minutes.\" 
          </p>
        </div>
      </aside>
    </main>
  );
}
