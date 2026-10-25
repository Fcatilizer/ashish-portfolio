"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { DbStatusBrand } from "@/components/db-status-brand";

import styles from "./navbar.module.css";

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
  const isCurrentPage = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <>
      <header className={styles.header}>
        <a className={styles.skipLink} href="#main-content">Skip to content</a>
        <nav aria-label="Primary navigation" className={styles.bar}>
          <DbStatusBrand className={styles.brand} />

          <ul className={styles.desktopLinks}>
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <NextLink
                  aria-current={isCurrentPage(item.href) ? "page" : undefined}
                  className={clsx(styles.pageLink, isCurrentPage(item.href) && styles.activeLink)}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <a className={styles.resumeLink} href={siteConfig.resumeUrl} rel="noopener noreferrer" target="_blank">
              Résumé
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
            </a>
            <div className={styles.socialLinks}>
              <a aria-label="LinkedIn" className={styles.iconLink} href={siteConfig.links.linkedin} rel="noopener noreferrer" target="_blank" title="LinkedIn">
                <LinkedInIcon aria-hidden="true" focusable="false" size={17} />
              </a>
              <a aria-label="GitHub" className={styles.iconLink} href={siteConfig.links.github} rel="noopener noreferrer" target="_blank" title="GitHub">
                <GithubIcon aria-hidden="true" focusable="false" size={17} />
              </a>
            </div>
            <div className={styles.themeControl}>
              <ThemeSwitch className={styles.themeSwitch} classNames={{ wrapper: styles.themeIcon }} />
            </div>
          </div>
        </nav>
      </header>

      <nav aria-label="Mobile navigation" className={styles.mobileNav}>
        <ul className={styles.mobileLinks}>
          {siteConfig.navItems.map((item) => (
            <li key={item.href}>
              <NextLink
                aria-current={isCurrentPage(item.href) ? "page" : undefined}
                className={clsx(styles.mobileLink, isCurrentPage(item.href) && styles.activeLink)}
                href={item.href}
              >
                {navIcon(item.label)}
                <span>{item.label}</span>
              </NextLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
