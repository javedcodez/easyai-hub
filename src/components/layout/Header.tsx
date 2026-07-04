import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-indigo-500/20 bg-zinc-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/30">
            <Sparkles className="h-6 w-6 text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight gradient-text sm:text-2xl">
              EasyAI Hub
            </h1>

            <p className="text-xs text-slate-400 sm:text-sm">
              Premium AI Prompts & Free AI Tools
            </p>
          </div>
        </div>

        <div className="hidden rounded-full border border-indigo-500/20 bg-zinc-900/80 px-4 py-2 text-sm text-slate-300 backdrop-blur md:block">
          Beginner Friendly 🚀
        </div>
      </div>
    </header>
  );
}