"use client";

import { Link } from "@heroui/link";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, LinkedInIcon } from "@/components/icons";

function navIcon(label: string) {
  switch (label) {
    case "Home":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-9.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "Projects":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4l1.2 1.2a1 1 0 0 0 .7.3h9.1A1.5 1.5 0 0 1 21 9v8.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-10Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "Certificates":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <path d="M6 3h9l3 3v15H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 3v3h3M8 12h8M8 16h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <path d="M12 13.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 20a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
  }
}

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="backdrop-blur-xl bg-white/70 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <NextLink
            href="/"
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            {siteConfig.name}
          </NextLink>

          {/* Navigation Links - Center */}
          <ul className="hidden md:flex items-center gap-8">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <NextLink
                  href={item.href}
                  className={clsx(
                    "text-sm font-medium transition-colors dark:hover:text-white hover:text-gray-900",
                    pathname === item.href
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-600 dark:text-gray-300"
                  )}
                >
                  {item.label}
                </NextLink>
              </li>
            ))}
          </ul>

          {/* Icons - Right */}
          <div className="flex items-center gap-4">
            <Link
              isExternal
              aria-label="LinkedIn"
              href={siteConfig.links.linkedin}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <LinkedInIcon size={20} />
            </Link>
            <Link
              isExternal
              aria-label="Github"
              href={siteConfig.links.github}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <GithubIcon size={20} />
            </Link>
            <ThemeSwitch />
          </div>
        </div>
      </div>
      </nav>

      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-md">
        <div className="grid grid-cols-4 gap-1 rounded-2xl border border-gray-200/70 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-2xl shadow-2xl p-2">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <NextLink
                key={item.href}
                href={item.href}
                className={clsx(
                  "flex flex-col items-center justify-center rounded-xl py-2 transition-colors",
                  isActive
                    ? "text-gray-900 dark:text-white bg-black/5 dark:bg-white/10"
                    : "text-gray-600 dark:text-gray-300"
                )}
              >
                <span>{navIcon(item.label)}</span>
                <span className="mt-1 text-[11px] leading-none font-medium">{item.label}</span>
              </NextLink>
            );
          })}
        </div>
      </nav>
    </>
  );
};
