"use client";

import { Category } from "@/types";

const categories: Category[] = [
  "All",
  "AI Images",
  "AI Video Scripts",
  "Photo Editing",
  "Free AI Tools",
];

interface CategoryTabsProps {
  active: Category;
  onChange: (category: Category) => void;
}

export default function CategoryTabs({
  active,
  onChange,
}: CategoryTabsProps) {
  return (
    <div className="hide-scrollbar flex gap-3 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`min-w-max rounded-full border px-5 py-3 text-sm font-medium transition-all duration-200 ${
            active === category
              ? "border-violet-500 bg-violet-600 text-white shadow-lg shadow-violet-500/30"
              : "border-zinc-700 bg-zinc-900/70 text-slate-300 hover:border-violet-400 hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}