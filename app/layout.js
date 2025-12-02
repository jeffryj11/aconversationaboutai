
import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Top-level category list (editable)
const categories = [
  { title: "Agents & Automation", slug: "agents" },
  { title: "Alignment & Safety", slug: "alignment" },
  { title: "Prompting & UX", slug: "prompting" },
  { title: "AI Models & Benchmarks", slug: "models" },
  { title: "Open Source AI", slug: "open-source" },
  { title: "AI & Society", slug: "society" }
];

export const metadata = {
  title: "A Conversation About AI",
  description:
    "Long-form conversations about artificial intelligence, safety, reasoning, prompting, ethics, and the future of AGI.",
  robots: "index, follow",
  alternates: {
    canonical: "https://AConversationAboutAI.com"
  },
  openGraph: {
    title: "A Conversation About AI",
    description:
      "Deep, meaningful conversations and analysis about artificial intelligence.",
    url: "https://AConversationAboutAI.com",
    siteName: "A Conversation About AI",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-950 text-slate-100">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">

            {/* LOGO */}
            <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-1">
              <span className="text-slate-100">A Conversation About</span>
              <span
                className="
                  bg-gradient-to-r 
                  from-[#6BC6FF]
                  via-[#3A8DFF]
                  to-[#9AA0FF]
                  bg-clip-text text-transparent
                  font-extrabold
                  drop-shadow-[0_0_8px_rgba(107,198,255,0.6)]
                "
              >
                AI
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">

              <Link href="/" className="hover:text-sky-300">Home</Link>
              <Link href="/articles" className="hover:text-sky-300">Articles</Link>

              {/* CATEGORIES (HOVER DROPDOWN) */}
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-sky-300">
                  Categories <span className="text-[10px]">▼</span>
                </button>

                <div
                  className="
                    invisible opacity-0 pointer-events-none
                    group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto
                    transition ease-out duration-150
                    absolute left-0 top-full mt-2
                    min-w-[280px]
                    rounded-xl border border-white/10
                    bg-slate-950/95 backdrop-blur-xl
                    shadow-2xl z-50
                  "
                >
                  <div className="grid grid-cols-2 gap-2 p-3">
                    {categories.map((cat, i) => (
                      <Link
                        key={i}
                        href={`/category/${cat.slug}`}
                        className="rounded-lg px-3 py-2 text-sm text-gray-200 hover:bg-white/10 transition"
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/about" className="hover:text-sky-300">About</Link>
              <Link href="/contact" className="hover:text-sky-300">Contact</Link>

              <Link
                href="/search"
                className="ml-3 px-3 py-1.5 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition"
              >
                Search
              </Link>
            </nav>

          </div>
        </header>

        <main className="mx-auto max-w-5xl px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
