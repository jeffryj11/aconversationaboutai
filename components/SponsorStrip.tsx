export default function SponsorStrip() {
  return (
    <div className="w-full border-b border-gray-200 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-2 flex flex-wrap items-center gap-2 text-xs text-gray-600">
        <span className="font-semibold uppercase tracking-wide">
          Sponsor Opportunities:
        </span>
        <span>Homepage banner</span>
        <span className="hidden sm:inline">·</span>
        <span>Newsletter placement</span>
        <span className="hidden sm:inline">·</span>
        <span>Featured AI tools</span>
        <span className="hidden sm:inline">·</span>
        <span>Email: sponsors@aconversationaboutai.com</span>
      </div>
    </div>
  );
}
