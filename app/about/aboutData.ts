import { currentCompany, projectGroups } from "@/app/projects/workProjectsData";
import type { ProjectStatus } from "@/config/project-badges";
import { siteConfig } from "@/config/site";

// Edit About copy, skills, and journey dates here.
// Current company details and project links come from workProjectsData.ts.
export const aboutProfile = {
  name: siteConfig.name,
  introduction:
    "I'm Ashish, a software engineer based in Patna, India. I work with Python and Django, build mobile apps with Flutter, and connect the interfaces people use with the systems behind them.",
  location: "Patna, Bihar, India",
  locationUrl: "https://www.google.com/maps/place/Patna,+Bihar,+India",
  email: "ashish.gaurav2003@gmail.com",
  languages: ["English", "Hindi"],
  education: {
    degree: "B.Tech (Hons.)",
    field: "Computer Science & Engineering",
    institution: "Adamas University",
    logo: { src: "/Adamas_University_Logo.png", alt: "Adamas University logo" },
    url: "https://adamasuniversity.ac.in/",
  },
};

export const skillGroups = [
  {
    number: "01",
    title: "Backend & integrations",
    description: "My primary focus.",
    items: ["Python", "Django", "REST APIs", "Celery", "Meta APIs"],
  },
  {
    number: "02",
    title: "Interfaces & applications",
    description: "From web workflows to mobile experiences.",
    items: ["Flutter", "Dart", "React", "Next.js", "HTML & CSS", "JavaScript"],
  },
  {
    number: "03",
    title: "Data & delivery",
    description: "The systems that keep the product running.",
    items: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Docker", "Git"],
  },
];

export interface JourneyChapter {
  id: string;
  kind: "work" | "independent" | "education";
  organization: string;
  role: string;
  period: string;
  shortPeriod: string;
  preview: string;
  description: string;
  status?: ProjectStatus;
  current?: boolean;
  ongoing?: boolean;
  logo?: { src: string; alt: string };
  work: string[];
  technologies: string[];
  links: { label: string; url: string }[];
}

const sukan = projectGroups.find((project) => project.id === "sukan");
const freelanceProjects = projectGroups.filter((project) => project.category === "Freelance");

export const journeyChapters: JourneyChapter[] = [
  ...(currentCompany?.role
    ? [{
        id: currentCompany.id,
        kind: "work" as const,
        organization: currentCompany.name,
        role: currentCompany.role,
        // Replace "Current" with your start date when you want to show it.
        period: "Current",
        shortPeriod: "Now",
        preview: "Backend, CRM & integrations",
        description: currentCompany.roleDescription || currentCompany.summary,
        status: currentCompany.status,
        current: true,
        ongoing: true,
        logo: currentCompany.cover?.logo,
        work: currentCompany.work || [],
        technologies: currentCompany.technologies || [],
        links: [{ label: "Explore my work", url: "/projects#" + currentCompany.id }],
      }]
    : []),
  {
    id: "freelance",
    kind: "independent",
    organization: "Independent collaborations",
    role: "Freelance developer",
    period: "Mar 2026 — Present",
    shortPeriod: "2026",
    preview: "Web & mobile, end to end",
    description:
      "Alongside my professional roles, I build web platforms and mobile apps for independent clients. My work connects the administrative tools behind a business with the experience its customers use.",
    status: "ongoing",
    ongoing: true,
    work: freelanceProjects.map((project) => project.name + " — " + project.summary),
    technologies: ["Django", "React", "Flutter", "PostgreSQL", "MongoDB"],
    links: [{ label: "Explore freelance projects", url: "/projects" }],
  },
  {
    id: "sukan",
    kind: "work",
    organization: "Sukan Food",
    role: "Python Developer",
    period: "Aug 2025 — Feb 2026",
    shortPeriod: "2025",
    preview: "Python & business workflows",
    description:
      sukan?.overview || "Python development for internal business tools and customer-facing applications.",
    logo: sukan?.cover?.logo,
    work: [
      "Admin tools for customer access, announcements, banners, and permissions",
      "EnkiNext customer portal and mobile workflows",
      "Product catalogs, quotations, and business document access",
    ],
    technologies: Array.from(new Set(sukan?.products.flatMap((product) => product.technologies) || [])),
    links: [{ label: "Explore Sukan projects", url: "/projects#sukan" }],
  },
  {
    id: "vraio",
    kind: "work",
    organization: "VRAIO Software Solutions",
    logo: { src: "/vraio_logo.jpg", alt: "VRAIO Software Solutions logo" },
    role: "Frontend Web Development Intern",
    period: "Aug 2024 — Nov 2024",
    shortPeriod: "2024",
    preview: "Frontend foundations",
    description:
      "An early professional chapter focused on frontend web development during my internship at VRAIO Software Solutions Pvt Ltd.",
    work: ["Frontend web development"],
    technologies: [],
    links: [{
      label: "View internship letter",
      url: "https://github.com/Fcatilizer/INSTAKAS/blob/main/Internship%20Letter%20-%20Ashish%20Gaurav.pdf",
    }],
  },
  {
    id: "education",
    kind: "education",
    organization: aboutProfile.education.institution,
    logo: aboutProfile.education.logo,
    role: aboutProfile.education.degree + " · CSE",
    period: "Academic foundation",
    shortPeriod: "Study",
    preview: "Computer science & engineering",
    description:
      "Studied B.Tech (Hons.) in Computer Science and Engineering at Adamas University.",
    work: ["Computer Science & Engineering", "A technical foundation for my work in software development"],
    technologies: [],
    links: [{ label: "Adamas University", url: aboutProfile.education.url }],
  },
];

export const journeyPreview = journeyChapters.filter((chapter) => chapter.kind === "work").slice().reverse();
