"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export const EnhancedThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      className="
        relative w-12 h-6 rounded-full transition-all duration-300 ease-in-out
        bg-neutral-200 dark:bg-neutral-700
        focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500
      "
    >
      {/* Toggle circle */}
      <div
        className={`
          absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white dark:bg-neutral-200
          flex items-center justify-center shadow-sm transition-all duration-300
          ${theme === "dark" ? "translate-x-6" : "translate-x-0"}
        `}
      >
        {theme === "dark" ? (
          <MoonFilledIcon size={14} className="text-neutral-700" />
        ) : (
          <SunFilledIcon size={14} className="text-yellow-500" />
        )}
      </div>
    </button>
  );
};
