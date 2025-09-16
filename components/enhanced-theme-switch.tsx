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
      className="
        relative w-12 h-6 rounded-full p-1 transition-all duration-500 ease-in-out
        bg-gradient-to-r from-orange-400 to-yellow-400
        dark:from-indigo-600 dark:to-purple-600
        hover:shadow-lg hover:shadow-orange-400/50 dark:hover:shadow-purple-500/50
        focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-purple-500
        transform hover:scale-105 active:scale-95
      "
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      {/* Sliding toggle */}
      <div
        className={`
          absolute top-1 w-4 h-4 rounded-full transition-all duration-500 ease-in-out
          bg-white shadow-md
          flex items-center justify-center
          ${theme === "dark" ? "translate-x-6" : "translate-x-0"}
        `}
      >
        {/* Icon with rotation animation */}
        <div
          className={`
            transition-all duration-500 ease-in-out
            ${theme === "dark" ? "rotate-180" : "rotate-0"}
          `}
        >
          {theme === "dark" ? (
            <MoonFilledIcon size={12} className="text-indigo-600" />
          ) : (
            <SunFilledIcon size={12} className="text-orange-500" />
          )}
        </div>
      </div>

      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1">
        <SunFilledIcon
          size={14}
          className={`
            transition-all duration-500 ease-in-out
            ${theme === "light" 
              ? "text-white opacity-0" 
              : "text-yellow-200 opacity-70"
            }
          `}
        />
        <MoonFilledIcon
          size={14}
          className={`
            transition-all duration-500 ease-in-out
            ${theme === "dark" 
              ? "text-white opacity-0" 
              : "text-indigo-200 opacity-70"
            }
          `}
        />
      </div>

      {/* Animated ripple effect on click */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-white/20 scale-0 rounded-full animate-ping opacity-0 active:animate-none active:scale-100 active:opacity-100 transition-all duration-200"></div>
      </div>
    </button>
  );
};