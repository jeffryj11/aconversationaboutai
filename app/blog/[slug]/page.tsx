type BlogPost = {
  slug: string;
  title: string;
  date: string;
  body: string;
};

const posts: BlogPost[] = [
  {
    slug: "how-to-think-about-ai",
    title: "How to Think About AI in 2025",
    date: "2025-11-01",
    body:
      "This is where a long-form essay would go. For now, this is placeholder content so you can see layout and typography.",
  },
  {
    slug: "ai-tools-for-small-business",
    title: "AI Tools for Small Business Owners",
    date: "2025-11-10",
    body:
      "Here you might walk through practical use cases, tool stacks, and workflows for running a small business with AI.",
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

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-oxanium font-bold mb-4">{post.title}</h1>
      <p className="text-xs text-gray-500 mb-8">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <article className="space-y-4 text-gray-800 leading-relaxed">
        <p>{post.body}</p>
      </article>
    </main>
  );
}
