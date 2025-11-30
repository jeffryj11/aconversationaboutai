export default function Hero() {
  return (
    <section className="bg-white pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-oxanium font-bold mb-6 leading-tight">
          Where Humans and AI Think Together.
        </h1>
        <p className="text-gray-600 text-xl max-w-2xl mb-8">
          Daily AI news, tools, and insights — all in one place. Built for
          people who actually use AI to ship, not just talk about it.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            className="px-6 py-3 rounded-md bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-semibold shadow hover:opacity-90"
            href="#newsletter"
          >
            Get the AI Briefing
          </a>
          <a
            className="px-6 py-3 rounded-md border border-gray-300 font-semibold text-gray-700 hover:bg-gray-100"
            href="/tools"
          >
            Explore AI Tools
          </a>
        </div>
      </div>
    </section>
  );
}
