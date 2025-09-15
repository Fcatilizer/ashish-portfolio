"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BreifcaseIcon, UniversityIcon } from "@/components/icons";

// Home icon
const HomeIcon = ({ size = 30 }: { size?: number }) => (
  <svg
    height={size}
    viewBox="0 0 24 24"
    width={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
);

// User icon
const UserIcon = ({ size = 30 }: { size?: number }) => (
  <svg
    height={size}
    viewBox="0 0 24 24"
    width={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: HomeIcon },
    { href: "/about", icon: UserIcon },
    { href: "/projects", icon: BreifcaseIcon },
    { href: "/certificates", icon: UniversityIcon },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-full px-4">
      <div className="flex justify-around items-center w-full rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg shadow-black/20 py-4">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center transition-colors px-3 ${
                isActive ? "text-primary" : "text-gray-300 hover:text-white"
              }`}
            >
              <IconComponent size={30} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
