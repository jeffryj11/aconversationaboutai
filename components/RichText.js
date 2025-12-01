"use client";

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "../lib/sanity";

const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      const src = urlFor(value).width(1000).quality(80).url();
      return (
        <div className="my-6">
          <Image
            src={src}
            alt={value.alt || ""}
            width={1000}
            height={600}
            className="rounded-xl border border-white/10"
          />
        </div>
      );
    }
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
    ),
    normal: ({ children }) => (
      <p className="text-gray-200 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-sky-400/50 pl-4 italic text-gray-300 my-4">
        {children}
      </blockquote>
    )
  }
};

export default function RichText({ value }) {
  return (
    <div className="prose prose-invert max-w-none">
      <PortableText value={value} components={components} />
    </div>
  );
}
