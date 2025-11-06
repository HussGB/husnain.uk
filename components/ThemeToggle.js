import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("dark");

  // Initialize theme on mount (sync with localStorage + <html>)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("theme");
    const initial = stored === "light" ? "light" : "dark";
    setTheme(initial);
    setMounted(true);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  if (!mounted) return null; // prevent hydration mismatch

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-700 rounded-full px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
    >
      {theme === "dark" ? (
        <>
          <FiSun className="h-4 w-4" />
          <span>Light</span>
        </>
      ) : (
        <>
          <FiMoon className="h-4 w-4" />
          <span>Dark</span>
        </>
      )}
    </button>
  );
}
