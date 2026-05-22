import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "Professional certifications and achievements of Ashish Gaurav in software development, web technologies, and mobile app development.",
  openGraph: {
    title: "Certificates | Ashish Gaurav",
    description:
      "Professional certifications and achievements in software development, web technologies, and mobile app development.",
  },
};

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
