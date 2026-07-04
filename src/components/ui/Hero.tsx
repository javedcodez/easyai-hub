"use client";

import SearchBar from "./SearchBar";

interface HeroProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function Hero({
  search,
  setSearch,
}: HeroProps) {
  return (
    <section className="glass glow rounded-3xl p-6 md:p-10">
      <div className="max-w-3xl">

        <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
          🚀 EasyAI Hub
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
          <span className="gradient-text">
            AI Prompts & Free AI Tools
          </span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          Discover premium AI prompts, prompt generators, and the best free AI
          tools for content creation, image generation, marketing, coding,
          education, and productivity.
        </p>

        <div className="mt-8">
          <SearchBar
            value={search}
            onChange={setSearch}
          />
        </div>

      </div>
    </section>
  );
}