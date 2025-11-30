import Hero from "@/components/Hero";
import AdSlot from "@/components/AdSlot";
import NewsletterSection from "@/components/NewsletterSection";
import SponsorGrid from "@/components/SponsorGrid";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-8">
        <AdSlot
          id="home-top-banner"
          label="Top Banner"
          description="Premium placement for a marquee sponsor or programmatic leaderboard ad."
        />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-[2fr,1fr] gap-10">
        <div>
          <h2 className="text-3xl font-oxanium font-bold mb-4">
            Today&apos;s AI Briefing (Coming Soon)
          </h2>
          <p className="text-gray-700 mb-4">
            This is where the daily AI Briefing will live — a concise, human + AI generated
            summary of everything that matters in AI today. It will include quick headlines,
            key moves from major players, funding rounds, and practical implications.
          </p>
          <p className="text-gray-700 mb-4">
            Below the fold, we&apos;ll insert contextual ad units and sponsor mentions
            that are clearly labeled, respectful, and aligned with the type of AI work
            our readers actually do.
          </p>
          <AdSlot
            id="home-inline-briefing"
            variant="inline"
            label="Inline Briefing Ad"
            description="Mid-article ad or sponsored callout within the daily briefing."
          />
        </div>

        <aside className="space-y-6">
          <NewsletterSection />
          <AdSlot
            id="home-sidebar"
            variant="sidebar"
            label="Sidebar Sponsor"
            description="Sidebar card for promoted tools, courses, or AI infrastructure."
          />
        </aside>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-200">
        <SponsorGrid />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-200">
        <h2 className="text-2xl font-oxanium font-bold mb-4">
          Advertise with AConversationAboutAI.com
        </h2>
        <p className="text-gray-700 mb-4">
          We&apos;re building a focused audience of founders, builders, engineers,
          product leaders, and curious professionals who are actively using AI to
          ship new products and make better decisions.
        </p>
        <p className="text-gray-700 mb-4">
          On this site, there will never be noisy, irrelevant ad clutter. Instead,
          we&apos;ll offer a small number of clearly-labeled, high-signal placements:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
          <li>Homepage top banner</li>
          <li>Sponsored tool slots in the AI Tools directory</li>
          <li>Inline placements in the daily AI Briefing and deep-dive essays</li>
          <li>Newsletter sponsorships and dedicated sends</li>
        </ul>
        <p className="text-gray-700">
          To discuss sponsorships or partnerships, drop a note to
          <span className="font-semibold"> sponsors@aconversationaboutai.com</span>.
          We&apos;ll respond with a simple media kit and available inventory.
        </p>
      </section>
    </>
  );
}
