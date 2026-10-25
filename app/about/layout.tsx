import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Ashish Gaurav, a software engineer from Patna, India. Explore his journey through backend development, mobile applications, and freelance projects.",
  openGraph: {
    title: "About Ashish Gaurav — Full-Stack Developer & Freelancer",
    description:
      "Explore Ashish Gaurav's engineering journey, current backend work, technical skills, and independent web and mobile projects.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
