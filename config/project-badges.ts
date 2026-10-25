type BadgePalette = {
  text: string;
  background: string;
  border: string;
};

type BadgeDefinition = {
  label: string;
  singularLabel?: string;
  description: string;
  icon: "dot" | "archive" | "check" | "sparkle" | "layers" | "none";
  light: BadgePalette;
  dark: BadgePalette;
};

// All project badge content lives here: labels, hover descriptions, icons, and colors.
// To add a badge, copy an entry below and give it a new key. The key automatically
// becomes available as status: "your-key" in app/projects/workProjectsData.ts.
// Use icon: "none" for text only. "{count}" is replaced by the actual product count;
// singularLabel is optional and is used when count is 1.
export const projectBadges = {
  maintained: {
    label: "Actively maintained",
    description: "Receiving ongoing updates and maintenance.",
    icon: "dot",
    light: { text: "#236345", background: "#edf7f0", border: "#cce5d4" },
    dark: { text: "#a1d9b7", background: "#162820", border: "#2c4838" },
  },
  archived: {
    label: "Archived",
    description: "No longer actively developed; preserved for reference.",
    icon: "archive",
    light: { text: "#5d626f", background: "#f0f1f4", border: "#dce0e6" },
    dark: { text: "#b3b8c4", background: "#202228", border: "#383b45" },
  },
  "handed-over": {
    label: "Handed over",
    description: "Completed and transferred to the client or their team.",
    icon: "check",
    light: { text: "#3e5f8a", background: "#eef3fb", border: "#d3dff0" },
    dark: { text: "#a9c6ed", background: "#1a2637", border: "#33465f" },
  },
  new: {
    label: "New project",
    description: "A recent addition to the portfolio.",
    icon: "sparkle",
    light: { text: "#79602b", background: "#faf5e8", border: "#e9ddbd" },
    dark: { text: "#d8c18d", background: "#2c271b", border: "#4c422c" },
  },
  current: {
    label: "Current company",
    description: "Where I currently work.",
    icon: "dot",
    light: { text: "#5b4c92", background: "#f2effa", border: "#ddd5ef" },
    dark: { text: "#c6b8ee", background: "#272036", border: "#45395d" },
  },
  "connected-products": {
    label: "{count} connected products",
    singularLabel: "{count} connected product",
    description: "Explore the products built as part of this collaboration.",
    icon: "layers",
    light: { text: "#454754", background: "#f5f5f8", border: "#e1e2e8" },
    dark: { text: "#c6c9d3", background: "#23252d", border: "#3c3f4b" },
  },
} as const satisfies Record<string, BadgeDefinition>;

export type ProjectBadgeId = keyof typeof projectBadges;
export type ProjectStatus = Exclude<ProjectBadgeId, "connected-products">;

export function getProjectBadge(badge: ProjectBadgeId, count?: number) {
  const definition: BadgeDefinition = projectBadges[badge];
  const label = count === 1 && definition.singularLabel ? definition.singularLabel : definition.label;
  const interpolate = (text: string) => text.replaceAll("{count}", String(count ?? 0));

  return {
    ...definition,
    label: interpolate(label),
    description: interpolate(definition.description),
  };
}
