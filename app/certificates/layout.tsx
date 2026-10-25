import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "Explore Ashish Gaurav's course credentials in Git and GitHub, cloud computing, and web programming, with direct links to Coursera and edX.",
  openGraph: {
    title: "Certificates | Ashish Gaurav",
    description:
      "Course credentials from IBM and HarvardX, covering version control, cloud computing, and web programming.",
  },
};

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
