type BlogPost = {
  slug: string;
  title: string;
  date: string;
  body: string;
};

const posts: BlogPost[] = [
  {
    slug: "how-to-think-about-ai",
    title: "How to Think About AI in 2025 (If You Actually Have Stuff to Ship)",
    date: "2025-11-01",
    body:
      "Most AI content right now is written for one of two audiences: investors who want graphs, or doomscrollers who want drama. If you’re the person who actually has to ship a product, hit a KPI, or make payroll, neither of those are very helpful.\n\n" +
      "A more useful mental model is this: AI is infrastructure plus behavior change, not a magic feature. Models are just one layer in a stack that also includes data, UX, incentives, and all the annoying operational details you already live with.\n\n" +
      "When you think in stacks instead of headlines, a few questions get a lot clearer:\n\n" +
      "1. Where does this sit in our workflow? Is this replacing a step, accelerating a step, or adding a brand-new step we didn’t have before?\n" +
      "2. What’s the failure mode? When the model is wrong, slow, or unavailable, what happens — and to whom?\n" +
      "3. What are we asking humans to do differently? \"Now you click this button\" sounds simple, but humans are where AI projects usually go to die.\n\n" +
      "The teams that are quietly winning with AI in 2025 are not the ones with the cleverest prompts. They are the ones who treat models as just another dependency and obsess over everything around them: logging, feedback loops, routing, who owns what, how you detect drift, and how you roll changes out safely.\n\n" +
      "If you’re thinking about where to start, don’t begin with \"Which model should we use?\" Begin with:\n" +
      "– Where are people copy-pasting between tools?\n" +
      "– Where are they writing the same thing over and over?\n" +
      "– Where are they making the same decision repeatedly with slightly different inputs?\n\n" +
      "Those are the places where a boring, reliable AI system pays for itself quickly. Everything else is decoration.",
  },
  {
    slug: "ai-tools-for-small-business",
    title: "AI Tools for Small Business Owners",
    date: "2025-11-10",
    body:
      "Most small businesses don’t need a research lab. They need fewer tabs, faster responses, and a better sense of what’s going on in the business day to day.\n\n" +
      "The right way to think about AI tools as a small business owner is to map them to the jobs you already do: triaging email, sending quotes, chasing invoices, updating spreadsheets, posting updates, and making sense of messy inputs from customers and vendors.\n\n" +
      "A good starting stack often looks like this:\n" +
      "– A general-purpose assistant for writing and editing (emails, proposals, website copy).\n" +
      "– A simple workflow inside your CRM or accounting tool that auto-drafts replies or summaries.\n" +
      "– A basic analytics or reporting helper that can turn raw exports into something you actually read.\n\n" +
      "If a tool doesn’t make one of those jobs meaningfully faster or less painful within a week, it’s probably not worth keeping around — no matter how impressive the demo is.",
  },
];

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-semibold mb-4">Post not found</h1>
        <p className="text-gray-600">
          Once real posts live in the CMS, this will show actual content.
        </p>
      </main>
    );
  }

  const paragraphs = post.body.split("\n\n");

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-oxanium font-bold mb-4">{post.title}</h1>
      <p className="text-xs text-gray-500 mb-8">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <article className="space-y-4 text-gray-800 leading-relaxed">
        {paragraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </article>
    </main>
  );
}
