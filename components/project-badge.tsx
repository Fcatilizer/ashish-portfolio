import type { CSSProperties } from "react";

import { getProjectBadge, type ProjectBadgeId } from "@/config/project-badges";

import styles from "./project-badge.module.css";

export function ProjectBadge({
  badge,
  count,
  appearance = "default",
}: {
  badge: ProjectBadgeId;
  count?: number;
  appearance?: "default" | "cover";
}) {
  const definition = getProjectBadge(badge, count);
  const palette = {
    "--status-light-text": definition.light.text,
    "--status-light-bg": definition.light.background,
    "--status-light-border": definition.light.border,
    "--status-dark-text": definition.dark.text,
    "--status-dark-bg": definition.dark.background,
    "--status-dark-border": definition.dark.border,
  } as CSSProperties;

  return (
    <span
      className={styles.badge}
      data-appearance={appearance}
      data-badge={badge}
      style={palette}
      title={definition.description}
    >
      {definition.icon === "dot" ? (
        <span aria-hidden="true" className={styles.dot} />
      ) : definition.icon !== "none" ? (
        <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
          {definition.icon === "archive" && <path d="M2.5 6v7h11V6M2 3h12v3H2V3Zm4 6h4" />}
          {definition.icon === "check" && <path d="m3 8 3.2 3.2L13 4.5" />}
          {definition.icon === "sparkle" && <path d="m8 1.5 1.8 4.7 4.7 1.8-4.7 1.8L8 14.5 6.2 9.8 1.5 8l4.7-1.8L8 1.5Z" />}
          {definition.icon === "layers" && <path d="m8 2-6 3 6 3 6-3-6-3ZM2 8l6 3 6-3M2 11l6 3 6-3" />}
        </svg>
      ) : null}
      {definition.label}
    </span>
  );
}
