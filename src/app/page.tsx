"use client";

import { useState } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/ui/Hero";
import Stats from "@/components/ui/Stats";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import CategoryTabs from "@/components/prompts/CategoryTabs";

import { Category } from "@/types";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("All");

  return (
    <>
      <Header />

      <main className="py-8">
        <Container className="space-y-10">
          <Hero
            search={search}
            setSearch={setSearch}
          />

          <Stats />

          <section className="glass glow rounded-3xl p-6 md:p-8">
            <SectionTitle
              title="Browse Categories"
              subtitle="Choose a category to explore AI prompts and free AI tools."
            />

            <CategoryTabs
              active={category}
              onChange={setCategory}
            />

            <div className="mt-8 rounded-2xl border border-dashed border-violet-500/30 bg-zinc-900/40 p-8 text-center">
              <h3 className="text-2xl font-bold text-white">
                🚀 Prompt Library Coming Next
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                In the next milestone we'll add live search, beautiful prompt
                cards, copy-to-clipboard, prompt generator, and the Free AI
                Tools directory.
              </p>

              <div className="mt-6 inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-violet-300">
                Selected Category: <span className="ml-2 font-semibold">{category}</span>
              </div>

              {search && (
                <div className="mt-4 text-slate-300">
                  Search: <span className="font-semibold">"{search}"</span>
                </div>
              )}
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  );
}