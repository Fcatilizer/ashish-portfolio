import type { ReactNode } from "react";

import { ProfilePortrait, type PortraitProfile } from "./profile-portrait";

import styles from "./profile-hero.module.css";

type ProfileHeroProps = {
  profile: PortraitProfile;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  primaryAction: ReactNode;
  secondaryAction: ReactNode;
};

export function ProfileHero({ profile, eyebrow, title, accent, description, primaryAction, secondaryAction }: ProfileHeroProps) {
  return (
    <header className={styles.hero}>
      <p className={styles.eyebrow}><span aria-hidden="true" className={styles.mark} />{eyebrow}</p>
      <div className={styles.copy}>
        <h1>{title}<span>{accent}</span></h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <div className={styles.primaryAction}>{primaryAction}</div>
          <div className={styles.secondaryAction}>{secondaryAction}</div>
        </div>
      </div>
      <div className={styles.portrait}><ProfilePortrait profile={profile} /></div>
    </header>
  );
}
