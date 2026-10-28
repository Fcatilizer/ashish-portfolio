import type { ReactNode } from "react";

import clsx from "clsx";

import styles from "./page-hero.module.css";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
  aside?: ReactNode;
  variant?: "profile" | "collection";
};

export function PageHero({ eyebrow, title, accent, description, primaryAction, secondaryAction, aside, variant = "collection" }: PageHeroProps) {
  return (
    <header className={clsx(styles.hero, aside && styles.withAside, variant === "profile" && styles.profile)}>
      <p className={styles.eyebrow}><span aria-hidden="true" className={styles.mark} />{eyebrow}</p>
      <div className={styles.copy}>
        <h1>{title}<span>{accent}</span></h1>
        <p className={styles.description}>{description}</p>
        {(primaryAction || secondaryAction) && (
          <div className={styles.actions}>
            {primaryAction && <div className={styles.primaryAction}>{primaryAction}</div>}
            {secondaryAction && <div className={styles.secondaryAction}>{secondaryAction}</div>}
          </div>
        )}
      </div>
      {aside && <div className={styles.aside}>{aside}</div>}
    </header>
  );
}
