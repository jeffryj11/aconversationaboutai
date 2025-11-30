export default function NewsletterSection() {
  return (
    <section
      id="newsletter"
      className="border border-gray-200 rounded-2xl p-5 bg-gradient-to-br from-white to-purple-50"
    >
      <h3 className="text-lg font-oxanium font-semibold mb-2">
        Get the AI Briefing (Coming Soon)
      </h3>
      <p className="text-sm text-gray-700 mb-3">
        A single, focused email that recaps the day in AI — curated by humans,
        accelerated by AI. No fluff, no doomscrolling.
      </p>
      <div className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="you@example.com"
          disabled
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-gray-100 cursor-not-allowed"
        />
        <button
          disabled
          className="w-full rounded-lg px-3 py-2 text-sm font-semibold bg-gray-300 text-gray-600 cursor-not-allowed"
        >
          Newsletter signups will open soon
        </button>
      </div>
      <p className="text-[10px] text-gray-500 mt-2">
        When we flip this live, you&apos;ll be able to subscribe for launch-day
        access and sponsorship announcements.
      </p>
    </section>
  );
}
