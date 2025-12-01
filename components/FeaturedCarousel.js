"use client";

import Link from "next/link";
import { useState } from "react";

export default function FeaturedCarousel({ posts }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % posts.length);
  const prev = () => setIndex((index - 1 + posts.length) % posts.length);

  const post = posts[index];

  return (
    <div className="relative w-full bg-white/5 rounded-xl p-8 shadow-lg">
      <div className="flex justify-between">
        <button onClick={prev} className="px-3 py-1 bg-white/10 rounded-lg">◀</button>
        <button onClick={next} className="px-3 py-1 bg-white/10 rounded-lg">▶</button>
      </div>

      <Link href={`/articles/${post.slug}`}>
        <h2 className="text-3xl font-bold mt-4">{post.title}</h2>
        <p className="mt-2 text-gray-300">{post.excerpt}</p>
      </Link>
    </div>
  );
}
