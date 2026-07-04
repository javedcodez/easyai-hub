"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import SearchBar from "@/components/ui/SearchBar";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header />

      <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <section className="glass glow rounded-3xl p-8">
          <span className="mb-4 inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            🚀 Premium AI Prompt Library
          </span>

          <h2 className="gradient-text text-4xl font-extrabold leading-tight md:text-6xl">
            Build Better AI Prompts in Seconds
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            EasyAI Hub is a beginner-friendly collection of premium AI prompts,
            prompt generators, and free AI tools designed to help creators,
            marketers, developers, students, and businesses work faster with AI.
          </p>

          <div className="mt-8">
            <SearchBar value={search} onChange={setSearch} />
          </div>
        </section>

        <section className="glass rounded-3xl p-8">
          <h3 className="mb-4 text-2xl font-bold text-white">
            Development Status
          </h3>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
              <p className="font-semibold text-emerald-300">
                ✅ Foundation Complete
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Next.js, Tailwind CSS, TypeScript, and global styling are ready.
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-5">
              <p className="font-semibold text-indigo-300">
                🚧 Components Coming
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Prompt cards, filters, prompt generator, and AI tools directory
                will be added in the next milestones.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-5">
              <p className="font-semibold text-purple-300">
                🔥 Responsive Layout
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Fully mobile-first with glassmorphism and premium neon styling.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}