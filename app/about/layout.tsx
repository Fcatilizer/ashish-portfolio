import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ashish Gaurav — Full-Stack Developer from Patna, India. B.Tech in CSE, experienced in Python, Django, Next.js, Flutter. Available for freelance projects.",
  openGraph: {
    title: "About Ashish Gaurav — Full-Stack Developer & Freelancer",
    description:
      "B.Tech (Hons.) CSE graduate from Adamas University. Python, Django, Next.js, Flutter developer. Open for freelance work — request a free quote.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
