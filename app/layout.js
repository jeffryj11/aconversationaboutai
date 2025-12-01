import "./globals.css";
import Link from "next/link";
import { getNav, getFooter } from "../lib/sanityQueries";
import { client } from "../lib/sanity";

// Fetch all categories for the mega-menu + footer
async function getCategories() {
  return await client.fetch(`
    *[_type=="category"]{
      title,
      "slug": title
    }
  `);
}

export const metadata = {
  metadataBase: new URL("https://aconversationaboutai.com"),
  title: {
    default: "A Conversation About AI",
    template: "%s | A Conversation About AI"
  },
  description:
    "A modern publication covering artificial intelligence breakthroughs, risks, policy, and the world technology is reshaping.",
  keywords: [
    "AI",
    "artificial intelligence",
    "machine learning",
    "GPT",
    "LLM",
    "AGI",
    "AI policy",
    "AI safety",
    "Anthropic",
    "OpenAI",
    "DeepMind"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aconversationaboutai.com",
    title: "A Conversation About AI",
    description:
      "Essays, research, and reporting on AI, alignment, governance, breakthroughs, and global impact.",
    siteName: "A Conversation About AI"
  },
  twitter: {
    card: "summary_large_image",
    title: "A Conversation About AI",
    description:
      "A modern publication exploring artificial intelligence and its impact on the world.",
    creator: "@your_handle_here"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};


export default async function RootLayout({ children }) {
  const [navItems, footerDoc, categories] = await Promise.all([
    getNav(),
    getFooter(),
    getCategories()
  ]);

  const fallbackNav = [
    { label: "Home", href: "/" },
    { label: "Articles", href: "/articles" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ];

  const items = navItems?.length ? navItems : fallbackNav;
  const footerText =
    footerDoc?.copyright ||
    "© " +
      new Date().getFullYear() +
      " AConversationAboutAI.com. All rights reserved.";

  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white">
        {/* Glow background */}
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.28),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),_transparent_55%)] opacity-80" />

        {/* HEADER */}
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
          <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
            {/* LOGO */}
            <Link
              href="/"
              className="flex items-baseline gap-1 text-xl font-semibold tracking-tight"
            >
              <span className="text-white">A</span>
              <span className="text-sky-300">Conversation</span>
              <span className="text-white">About</span>
              <span className="rounded-lg bg-gradient-to-r from-sky-400 to-violet-400 px-2 py-0.5 text-sm font-bold leading-none text-slate-900 shadow-[0_0_20px_rgba(56,189,248,0.7)]">
                AI
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium relative group">
              <Link href="/" className="hover:text-sky-300">
                Home
              </Link>

              <Link href="/articles" className="hover:text-sky-300">
                Articles
              </Link>

              {/* MEGA MENU TRIGGER */}
              <div className="relative group">
                <button className="hover:text-sky-300 flex items-center gap-1">
                  Categories
                  <span>▼</span>
                </button>

                {/* MEGA MENU PANEL */}
                <div className="absolute left-0 top-full mt-2 hidden group-hover:block w-[700px] bg-slate-900/95 border border-white/10 backdrop-blur-xl rounded-xl shadow-2xl p-6 z-50">
                  <div className="grid grid-cols-3 gap-4">
                    {categories.map((cat, i) => (
                      <Link
                        key={i}
                        href={`/category/${cat.slug.toLowerCase()}`}
                        className="px-3 py-2 rounded-lg hover:bg-white/10 transition text-gray-200"
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/about" className="hover:text-sky-300">
                About
              </Link>

              <Link href="/contact" className="hover:text-sky-300">
                Contact
              </Link>

              {/* SEARCH */}
              <Link
                href="/search"
                className="ml-3 px-3 py-1.5 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition"
              >
                Search
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden">
              <MobileMenu categories={categories} items={items} />
            </div>
          </nav>
        </header>

        {/* MAIN CONTENT */}
        <main className="mx-auto w-full max-w-6xl flex-1 px-6 pt-24 pb-12">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="border-t border-white/10 bg-slate-950/90 mt-10">
          <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-300">
            {/* Brand / About */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-sky-300">
                A Conversation About AI
              </p>
              <p className="text-gray-400">
                A modern publication dedicated to understanding artificial
                intelligence — its breakthroughs, its risks, and the world it's
                reshaping.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-sky-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="hover:text-sky-300">
                    Articles
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-sky-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-sky-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories (top slice) */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.slice(0, 6).map((cat, i) => (
                  <li key={i}>
                    <Link
                      href={`/category/${cat.slug.toLowerCase()}`}
                      className="hover:text-sky-300"
                    >
                      {cat.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">
                Newsletter
              </h3>
              <p className="text-gray-400 text-xs mb-3">
                Get weekly insights on AI developments, policy, and research.
              </p>
              <form
                action="/api/subscribe"
                method="POST"
                className="flex flex-col gap-2"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="rounded-lg px-3 py-2 bg-white/10 border border-white/20 text-white text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg px-3 py-2 bg-sky-400 text-slate-900 text-sm font-semibold hover:bg-sky-300 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10">
            <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
              <p>{footerText}</p>

              <div className="flex gap-4">
                <Link href="#" className="hover:text-sky-300">
                  Twitter
                </Link>
                <Link href="#" className="hover:text-sky-300">
                  LinkedIn
                </Link>
                <Link href="#" className="hover:text-sky-300">
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

// --------------------------
// MOBILE MENU COMPONENT
// --------------------------
function MobileMenu({ categories, items }) {
  return (
    <div className="md:hidden">
      <details className="relative">
        <summary className="cursor-pointer px-3 py-2 bg-white/10 rounded-lg">
          ☰
        </summary>

      <div className="absolute right-0 mt-2 w-64 bg-slate-900 border border-white/10 rounded-xl p-4 shadow-xl space-y-4 z-50">
          {items.map((item, i) => (
            <Link key={i} href={item.href} className="block hover:text-sky-300">
              {item.label}
            </Link>
          ))}

          <hr className="border-white/10" />

          <p className="text-xs text-gray-400">Categories</p>

          {categories.map((cat, i) => (
            <Link
              key={i}
              href={`/category/${cat.slug.toLowerCase()}`}
              className="block px-2 py-1 rounded hover:bg-white/10"
            >
              {cat.title}
            </Link>
          ))}

          <hr className="border-white/10" />

          <Link
            href="/search"
            className="block px-3 py-2 bg-sky-400 text-slate-900 font-semibold rounded-lg text-center hover:bg-sky-300"
          >
            Search
          </Link>
        </div>
      </details>
    </div>
  );
}
