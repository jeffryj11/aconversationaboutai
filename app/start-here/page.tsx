export default function StartHerePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-oxanium font-bold mb-4">Start Here</h1>
      <p className="text-gray-700 mb-4">
        AConversationAboutAI.com is meant to be the place you open when you want to
        understand what&apos;s happening in AI without drowning in tabs, hype, or doom.
      </p>
      <p className="text-gray-700 mb-4">
        The site is organized around three simple pillars:
      </p>
      <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
        <li>
          <span className="font-semibold">News</span> — short, opinionated rundowns of
          what actually matters in AI this week.
        </li>
        <li>
          <span className="font-semibold">Tools</span> — a curated directory of AI tools
          with real-world context and tradeoffs.
        </li>
        <li>
          <span className="font-semibold">Deep Dives</span> — essays and guides on how to
          think about AI strategically, not just tactically.
        </li>
      </ol>
      <h2 className="text-2xl font-semibold mb-3">How to use this site</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>
          Bookmark <span className="font-mono text-sm">dev.AConversationAboutAI.com</span>{" "}
          (for now) and check the News page a few times a week.
        </li>
        <li>
          When you&apos;re evaluating a new tool, jump to the Tools directory and skim
          the pros, cons, and pricing notes.
        </li>
        <li>
          When you&apos;re thinking about direction and strategy, read a Deep Dive or
          two from the Blog section.
        </li>
      </ul>
      <p className="text-gray-700">
        Over time, this will also become a living knowledge base: playbooks, prompts,
        workflows, and case studies from people actually shipping with AI. If you want
        to share your own story or use case, you&apos;ll be able to submit it directly
        from the site.
      </p>
    </main>
  );
}
