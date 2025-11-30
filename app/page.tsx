import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-oxanium font-bold mb-4">
          Welcome to AConversationAboutAI.com
        </h2>
        <p className="text-gray-700 text-lg">
          This is your local development build with real page structure for News, Tools,
          and Blog. Once everything looks good, we&apos;ll hook it up to Sanity CMS,
          automation, and monetization.
        </p>
      </section>
    </>
  );
}
