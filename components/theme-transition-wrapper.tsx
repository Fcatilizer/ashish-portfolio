"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeTransitionWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme, resolvedTheme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [theme, mounted]);

  if (!mounted) {
    return <div className="opacity-0">{children}</div>;
  }

  return (
    <div className="relative min-h-screen">
      {/* Theme transition overlay */}
      <div
        className={`
          fixed inset-0 z-50 pointer-events-none transition-all duration-500 ease-in-out
          ${isTransitioning 
            ? 'opacity-100' 
            : 'opacity-0'
          }
        `}
      >
        {/* Animated gradient overlay */}
        <div
          className={`
            absolute inset-0 transition-all duration-500 ease-in-out
            ${resolvedTheme === 'dark'
              ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'
              : 'bg-gradient-to-br from-orange-100 via-yellow-50 to-blue-50'
            }
          `}
        />
        
        {/* Ripple effect animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`
              w-4 h-4 rounded-full transition-all duration-500 ease-out
              ${resolvedTheme === 'dark'
                ? 'bg-purple-500 shadow-lg shadow-purple-500/50'
                : 'bg-orange-400 shadow-lg shadow-orange-400/50'
              }
              ${isTransitioning 
                ? 'scale-150 animate-ping' 
                : 'scale-0'
              }
            `}
          />
        </div>

        {/* Particle effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`
                absolute w-2 h-2 rounded-full transition-all duration-700 ease-out
                ${resolvedTheme === 'dark'
                  ? 'bg-purple-400/60'
                  : 'bg-orange-300/60'
                }
                ${isTransitioning 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-0'
                }
              `}
              style={{
                left: `${20 + i * 12}%`,
                top: `${30 + (i % 2) * 20}%`,
                animationDelay: `${i * 100}ms`,
                animation: isTransitioning ? 'float 2s ease-in-out infinite' : 'none',
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content with fade transition */}
      <div
        className={`
          transition-all duration-300 ease-in-out
          ${isTransitioning 
            ? 'opacity-80 scale-[0.98] blur-[1px]' 
            : 'opacity-100 scale-100 blur-0'
          }
        `}
      >
        {children}
      </div>

      {/* CSS keyframes for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(120deg);
          }
          66% {
            transform: translateY(5px) rotate(240deg);
          }
        }
      `}</style>
    </div>
  );
};