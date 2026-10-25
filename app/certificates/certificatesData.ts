// Add certificates, categories, or learning platforms here.
// Counts, filters, and provider details on the page update from this data.
export const certificatePlatforms = {
  coursera: { name: "Coursera", logo: "/providers/coursera.png" },
  edx: { name: "edX", logo: "/providers/edx.svg" },
} as const;

export const certificateCategories = {
  web: { label: "Web development", shortLabel: "Web" },
  cloud: { label: "Cloud computing", shortLabel: "Cloud" },
  git: { label: "Version control", shortLabel: "Git & GitHub" },
} as const;

export type CertificateCategory = keyof typeof certificateCategories;

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  platform: keyof typeof certificatePlatforms;
  category: CertificateCategory;
  description: string;
  topics: string[];
  credentialUrl: string;
}

export const certificates: Certificate[] = [
  {
    id: "git-github",
    name: "Getting Started with Git and GitHub",
    issuer: "IBM",
    platform: "coursera",
    category: "git",
    description:
      "Version control with Git and GitHub, command-line configuration, and choosing appropriate licenses for projects.",
    topics: ["Git", "GitHub", "Command line", "Project licensing"],
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/J4LRPNWMG5KQ",
  },
  {
    id: "cloud-computing",
    name: "Introduction to Cloud Computing",
    issuer: "IBM",
    platform: "coursera",
    category: "cloud",
    description:
      "Cloud computing fundamentals, with hands-on experience in IBM Cloud deployment.",
    topics: ["Cloud computing", "IBM Cloud", "Deployment"],
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/2C7WE69LR6FQ",
  },
  {
    id: "cs50-web",
    name: "CS50 Web Programming with Python and JavaScript",
    issuer: "HarvardX",
    platform: "edx",
    category: "web",
    description:
      "Modern web programming with Python and JavaScript, through a course by HarvardX.",
    topics: ["Python", "JavaScript", "Web programming"],
    credentialUrl: "https://courses.edx.org/certificates/d70991c00ec44aed8c50b23e4c52a4e5",
  },
];
