"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const box = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handler(e) {
      if (box.current && !box.current.contains(e.target)) {
        setSuggestions([]);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Autocomplete
  useEffect(() => {
    async function fetchSuggestions() {
      if (query.length < 2) return setSuggestions([]);

      const res = await fetch(`/api/search?q=${query}`);
      const data = await res.json();
      setSuggestions(data);
    }

    fetchSuggestions();
  }, [query]);

  return (
    <div className="relative w-full max-w-xl mx-auto" ref={box}>
      <form action="/search" method="GET">
        <input
          type="text"
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles..."
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none"
        />
      </form>

      {suggestions.length > 0 && (
        <div className="absolute mt-2 w-full bg-slate-900 border border-white/10 rounded-xl shadow-xl z-50 p-2">
          {suggestions.map((s, i) => (
            <Link
              key={i}
              href={`/articles/${s.slug}`}
              className="block px-3 py-2 text-sm text-gray-200 hover:bg-white/10 rounded-lg"
            >
              <span className="font-semibold text-sky-300">{s.title}</span>
              <p className="text-xs text-gray-400 uppercase">{s.category}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
