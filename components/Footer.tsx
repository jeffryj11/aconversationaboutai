export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 text-gray-500 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <span>
          © {new Date().getFullYear()} AConversationAboutAI.com — All Rights Reserved.
        </span>
        <span className="text-xs">
          Built with Next.js and TailwindCSS. Monetization-friendly layout with
          clearly labeled sponsor placements.
        </span>
      </div>
    </footer>
  );
}
