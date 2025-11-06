import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

function LegalHeader({ title, subtitle }) {
  return (
    <header className="px-6 py-12 md:py-16 border-b border-slate-200/70 dark:border-slate-800/70 bg-white/70 dark:bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto text-center space-y-3">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
          Legal
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
        {subtitle && (
          <p className="text-slate-600 dark:text-slate-400 text-sm">{subtitle}</p>
        )}

        <div className="mt-5 flex justify-center gap-3">
          <ThemeToggle />
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-700 rounded-full px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </header>
  );
}

export default LegalHeader;
