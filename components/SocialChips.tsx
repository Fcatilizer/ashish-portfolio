"use client";

import { Link } from "@nextui-org/link";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/components/icons";

export default function SocialChips() {
  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ashish-gaurav03/", // Replace with your LinkedIn
      icon: LinkedInIcon,
      hoverColor: "hover:bg-blue-500/10 hover:border-blue-500/30",
      textColor: "text-blue-400",
    },
    {
      label: "GitHub",
      href: "https://github.com/Fcatilizer",
      icon: GithubIcon,
      hoverColor: "hover:bg-gray-500/10 hover:border-gray-500/30",
      textColor: "text-gray-400",
    },
    {
      label: "Twitter",
      href: "https://x.com/ashishgaurav203", // Replace with your Twitter
      icon: TwitterIcon,
      hoverColor: "hover:bg-sky-500/10 hover:border-sky-500/30",
      textColor: "text-sky-400",
    },
  ];

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
      <div className="flex items-center gap-3">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          
          return (
            <Link
              key={social.label}
              href={social.href}
              isExternal
              className={`
                inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium
                bg-white/5 backdrop-blur-md border border-white/10
                ${social.textColor} ${social.hoverColor}
                hover:scale-105 hover:shadow-lg hover:shadow-black/20
                transition-all duration-300 ease-out
                cursor-pointer
                shadow-md
                px-3 py-2 sm:px-4 sm:py-2
              `}
            >
              <IconComponent size={16} />
              {/* Show text only on larger screens */}
              <span className="hidden sm:inline-block">{social.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}