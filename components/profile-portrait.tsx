import Image from "next/image";

import styles from "./profile-portrait.module.css";

export type PortraitProfile = {
  name: string;
  portrait: string;
  location: string;
  locationUrl: string;
};

export function ProfilePortrait({ profile }: { profile: PortraitProfile }) {
  return (
    <figure className={styles.portrait}>
      <div className={styles.visual}>
        <div className={styles.frame}>
          <Image
            fill
            priority
            alt={profile.name}
            sizes="(max-width: 767px) 90px, (max-width: 1050px) 225px, 260px"
            src={profile.portrait}
          />
        </div>
      </div>
      <figcaption className={styles.caption}>
        <span className={styles.name}>{profile.name}</span>
        <a href={profile.locationUrl} rel="noopener noreferrer" target="_blank">
          {profile.location}
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
            <path d="M6 18 18 6M6 6h12v12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </a>
      </figcaption>
    </figure>
  );
}
