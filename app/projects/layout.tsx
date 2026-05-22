import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore custom mobile and web applications built by Ashish Gaurav — Android apps, iOS apps, admin dashboards, B2B portals, and education platforms.",
  openGraph: {
    title: "Projects | Ashish Gaurav — Custom App & Web Portfolio",
    description:
      "Explore custom mobile and web applications built by Ashish Gaurav — Android apps, iOS apps, admin dashboards, B2B portals, and education platforms.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
