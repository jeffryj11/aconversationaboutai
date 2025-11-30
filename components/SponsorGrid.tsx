const sponsors = [
  {
    name: "Your Logo Here",
    tier: "Launch Partner",
    blurb:
      "Reserved for one or two key partners aligned with AI infrastructure, dev tools, or education.",
  },
  {
    name: "Future Sponsor",
    tier: "Newsletter Sponsor",
    blurb:
      "Feature your brand in the AI Briefing email and on-site placements.",
  },
  {
    name: "Featured Tool",
    tier: "Tools Directory Sponsor",
    blurb:
      "Highlight your AI product in the tools directory with priority placement.",
  },
];

export default function SponsorGrid() {
  return (
    <div>
      <h2 className="text-2xl font-oxanium font-bold mb-4">
        Launch Sponsors & Featured Partners
      </h2>
      <p className="text-gray-700 mb-6">
        These slots will be reserved for a small set of high-signal sponsors.
        No junk ads, no dark patterns — just tools and services our audience
        will actually care about.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {sponsors.map((s) => (
          <div
            key={s.name}
            className="rounded-xl border border-gray-200 p-4 flex flex-col gap-2 bg-white"
          >
            <div className="text-xs font-semibold text-sponsorGold uppercase tracking-wide">
              {s.tier}
            </div>
            <div className="text-lg font-semibold">{s.name}</div>
            <div className="text-sm text-gray-700">{s.blurb}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
