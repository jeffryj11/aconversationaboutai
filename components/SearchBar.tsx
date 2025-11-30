"use client";

import { useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search (placeholder, not wired yet)..."
      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gradient-start)]"
    />
  );
}
