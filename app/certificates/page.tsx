"use client";

import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";

export default function CertificatesPage() {
  const certificates = [
    {
      name: "Getting Started with Git and GitHub",
      provider: "Coursera, IBM",
      desc: "Usage of Git and GitHub with the appropriate license for projects. CLI configuration and experience.",
      logo: "https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png",
      link: "https://www.coursera.org/account/accomplishments/verify/J4LRPNWMG5KQ",
      linkLabel: "Check Credentials on Coursera",
    },
    {
      name: "Introduction to Cloud Computing",
      provider: "Coursera, IBM",
      desc: "An introduction to cloud computing with hands-on experience in IBM Cloud deployment.",
      logo: "https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png",
      link: "https://www.coursera.org/account/accomplishments/certificate/2C7WE69LR6FQ",
      linkLabel: "Check Credentials on Coursera",
    },
    {
      name: "CS50 Web Programming with Python and JavaScript",
      provider: "EDX, HarvardX",
      desc: "A course by HarvardX focusing on modern Web Programming with Python and JavaScript.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/EdX_newer_logo.svg",
      link: "https://courses.edx.org/certificates/d70991c00ec44aed8c50b23e4c52a4e5",
      linkLabel: "Check Credentials on EdX",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-12 md:py-20 px-6">
      <h1 className={`${title()} text-center mb-12`}>My Certificates</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {certificates.map((cert, idx) => (
          <Card
            key={idx}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform"
          >
            <CardHeader className="flex gap-3 items-center p-6">
              <Image
                alt={`${cert.provider} logo`}
                width={40}
                height={40}
                radius="sm"
                src={cert.logo}
                className="object-contain"
              />
              <div className="flex flex-col text-left">
                <p className="text-md font-semibold">{cert.name}</p>
                <p className="text-small text-default-500">{cert.provider}</p>
              </div>
            </CardHeader>

            <Divider className="opacity-20" />

            <CardBody className="px-6 py-4">
              <p className="text-sm text-default-500 leading-relaxed">
                {cert.desc}
              </p>
            </CardBody>

            <Divider className="opacity-20" />

            <CardFooter className="px-6 py-4">
              <Link
                isExternal
                showAnchorIcon
                href={cert.link}
                className="text-primary font-medium hover:underline"
              >
                {cert.linkLabel}
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
