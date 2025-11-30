export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-oxanium font-bold mb-4">
        About AConversationAboutAI.com
      </h1>
      <p className="text-gray-700 mb-4">
        AConversationAboutAI.com exists because most AI coverage lives at one of two
        extremes: breathless hype or dense research papers. There isn&apos;t much in the
        middle for people who actually have to make decisions, ship products, or run
        teams.
      </p>
      <p className="text-gray-700 mb-4">
        This site is an experiment in something different: a calm, practical feed of
        what&apos;s happening in AI, paired with a growing library of tools and guides
        that help you turn those changes into action.
      </p>
      <h2 className="text-2xl font-semibold mb-3">What you can expect</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>
          <span className="font-semibold">Signal over noise.</span> We&apos;re not trying
          to catalog every press release. We care about the moves that actually change
          how you work.
        </li>
        <li>
          <span className="font-semibold">Human + AI.</span> The content here uses AI
          models as assistants, not oracles. Humans still own the opinions and the
          responsibility.
        </li>
        <li>
          <span className="font-semibold">Clear labels.</span> When something is
          sponsored, promoted, or affiliate-supported, it will be clearly labeled as such.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-3">Who this is for</h2>
      <p className="text-gray-700 mb-4">
        If you&apos;re a founder, operator, engineer, analyst, or curious professional
        who wants to use AI as infrastructure rather than a magic trick, this site is for
        you. You don&apos;t have to be an ML researcher. You do have to care about how
        your decisions ripple through your product, team, or community.
      </p>
      <h2 className="text-2xl font-semibold mb-3">How the content is created</h2>
      <p className="text-gray-700 mb-4">
        Most pieces start as a rough outline, are expanded and fact-checked with the help
        of large language models, and then edited back down by a human. That&apos;s the
        &quot;conversation&quot; in AConversationAboutAI.com — not just between humans,
        but between humans and the tools they&apos;re building.
      </p>
      <p className="text-gray-700">
        If you&apos;re interested in contributing essays, case studies, or tools, reach
        out to <span className="font-semibold">editor@aconversationaboutai.com</span>.
        We&apos;ll be building an open contributor program as the audience grows.
      </p>
    </main>
  );
}
