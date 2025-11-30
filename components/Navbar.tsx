import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <a
          href="/"
          className="font-oxanium text-xl font-bold whitespace-nowrap"
        >
          AConversationAbout
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]">
            AI
          </span>
          .com
        </a>
        <div className="hidden md:block flex-1">
          <SearchBar />
        </div>
        <nav className="hidden md:flex gap-6 text-gray-700 text-sm">
          <a href="/news">News</a>
          <a href="/tools">Tools</a>
          <a href="/blog">Blog</a>
        </nav>
      </div>
    </header>
  );
}
