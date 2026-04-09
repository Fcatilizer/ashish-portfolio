"use client";

import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Chip } from "@heroui/chip";

const certificates = [
  {
    name: "Getting Started with Git and GitHub",
    provider: "Coursera, IBM",
    desc: "Usage of Git and GitHub with the appropriate license for projects. CLI configuration and experience.",
    logo: "https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png",
    link: "https://www.coursera.org/account/accomplishments/verify/J4LRPNWMG5KQ",
    linkLabel: "Check Credentials on Coursera",
    theme: "from-blue-500/15 via-cyan-500/10 to-transparent",
  },
  {
    name: "Introduction to Cloud Computing",
    provider: "Coursera, IBM",
    desc: "An introduction to cloud computing with hands-on experience in IBM Cloud deployment.",
    logo: "https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png",
    link: "https://www.coursera.org/account/accomplishments/certificate/2C7WE69LR6FQ",
    linkLabel: "Check Credentials on Coursera",
    theme: "from-emerald-500/15 via-teal-500/10 to-transparent",
  },
  {
    name: "CS50 Web Programming with Python and JavaScript",
    provider: "EDX, HarvardX",
    desc: "A course by HarvardX focusing on modern Web Programming with Python and JavaScript.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/EdX_newer_logo.svg",
    link: "https://courses.edx.org/certificates/d70991c00ec44aed8c50b23e4c52a4e5",
    linkLabel: "Check Credentials on EdX",
    theme: "from-orange-500/15 via-rose-500/10 to-transparent",
  },
];

export default function CertificatesPage() {
  return (
    <section className="relative w-full py-8 md:py-14">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="mb-10 md:mb-14 text-center">
          <h1 className={`${title()} mb-4`}>My Certificates</h1>
          <p className="mx-auto max-w-2xl text-default-500 text-base md:text-lg">
            Verified learning milestones across software engineering, cloud,
            and modern web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((cert) => (
            <Card
              key={cert.link}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] dark:bg-black/20 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.theme} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
              />

              <CardHeader className="relative z-10 p-6 pb-4 flex items-start gap-4">
                <div className="rounded-xl bg-white/80 dark:bg-black/40 p-2.5 ring-1 ring-white/20">
                  <Image
                    alt={`${cert.provider} logo`}
                    width={36}
                    height={36}
                    radius="sm"
                    src={cert.logo}
                    className="object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0 text-left">
                  <h3 className="text-base md:text-lg font-semibold text-foreground leading-snug">
                    {cert.name}
                  </h3>
                  <Chip
                    size="sm"
                    variant="flat"
                    className="mt-2 bg-white/60 dark:bg-white/10 text-default-700 dark:text-default-300"
                  >
                    {cert.provider}
                  </Chip>
                </div>
              </CardHeader>

              <CardBody className="relative z-10 px-6 py-3">
                <p className="text-sm text-default-600 dark:text-default-400 leading-relaxed">
                  {cert.desc}
                </p>
              </CardBody>

              <CardFooter className="relative z-10 px-6 pt-3 pb-6">
                <Link
                  isExternal
                  showAnchorIcon
                  href={cert.link}
                  className="font-medium text-primary"
                >
                  {cert.linkLabel}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
