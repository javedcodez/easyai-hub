"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="glass glow rounded-2xl p-3">
      <div className="relative">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={20}
        />

        <input
          type="text"
          value={value}
          placeholder="Search prompts or AI tools..."
          onChange={(e) => onChange(e.target.value)}
          className="h-12 w-full rounded-xl border border-indigo-500/20 bg-zinc-900/80 pl-12 pr-4 text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
        />
      </div>
    </div>
  );
}