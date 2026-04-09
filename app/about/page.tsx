"use client";

import { title } from "@/components/primitives";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Chip } from "@heroui/chip";
import { GithubIcon } from "@/components/icons";

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
    >
      <path
        d="M8 7V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="3"
        y="7"
        width="18"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M3 12h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LanguageIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
    >
      <path
        d="M12 21s7-4.8 7-11a7 7 0 1 0-14 0c0 6.2 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function UniversityIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
    >
      <path
        d="m3 9 9-4 9 4-9 4-9-4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M6 11.5V16c0 .8 2.7 2 6 2s6-1.2 6-2v-4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const languages = ["Python", "HTML", "CSS", "JavaScript", "Dart"];
const frameworks = ["Django", "Flutter", "React", "Next.js"];

export default function AboutPage() {
  return (
    <section className="relative w-full px-4 md:px-6 py-10 md:py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className={`${title()} mb-3`}>About Me</h1>
          <p className="mx-auto max-w-3xl text-default-500 text-base md:text-lg">
            Android app and web developer focused on practical products, clean
            interfaces, and business-driven software.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-6 md:gap-8 items-start">
          <Card className="rounded-3xl border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-xl shadow-lg">
            <CardHeader className="flex flex-col items-center text-center p-6 pb-3">
              <p className="text-xs uppercase tracking-[0.18em] text-default-500">
                Profile
              </p>
              <h2 className="mt-2 text-xl font-semibold">Ashish Gaurav</h2>
              <p className="text-default-500 text-sm mt-1">
                Android App and Web Developer
              </p>
              <Chip size="sm" variant="flat" className="mt-3">
                B.Tech (Hons.) CSE
              </Chip>
            </CardHeader>
            <CardBody className="pt-2 pb-6 px-6">
              <Image
                alt="Profile"
                src="/me.jpg"
                className="w-full h-auto rounded-2xl border border-white/10 object-cover"
              />
            </CardBody>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="rounded-3xl border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-xl shadow-lg h-full">
              <CardHeader className="px-6 pt-6 pb-2">
                <h3 className="text-lg font-semibold">Education</h3>
              </CardHeader>
              <CardBody className="px-6 pb-6 pt-2 space-y-4 text-default-600">
                <p>
                  Pursued{" "}
                  <Link
                    isExternal
                    href="https://en.wikipedia.org/wiki/Bachelor_of_Technology"
                    className="font-medium"
                  >
                    B.Tech (Hons.) in Computer Science and Engineering
                  </Link>
                </p>
                <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                  <UniversityIcon className="text-primary" />
                  <Link
                    isExternal
                    href="https://adamasuniversity.ac.in/"
                    className="text-default-600 hover:text-primary"
                  >
                    Adamas University
                  </Link>
                </div>
              </CardBody>
            </Card>

            <Card className="rounded-3xl border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-xl shadow-lg h-full">
              <CardHeader className="px-6 pt-6 pb-2">
                <h3 className="text-lg font-semibold">Contact</h3>
              </CardHeader>
              <CardBody className="px-6 pb-6 pt-2 space-y-3 text-default-600">
                <p>
                  <span className="text-default-500">Email: </span>
                  <Link href="mailto:ashish.gaurav2003@gmail.com" className="font-medium">
                    ashish.gaurav2003@gmail.com
                  </Link>
                </p>
                <p>
                  <span className="text-default-500">X/Twitter: </span>
                  <Link
                    isExternal
                    href="https://x.com/ashishgaurav203"
                    className="font-medium"
                  >
                    /ashishgaurav203
                  </Link>
                </p>
                <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                  <LocationIcon className="text-primary" />
                  <Link
                    isExternal
                    href="https://www.google.com/maps/place/Patna,+Bihar,+India"
                    className="text-default-600 hover:text-primary"
                  >
                    Patna, Bihar, India
                  </Link>
                </div>
              </CardBody>
            </Card>

            <Card className="rounded-3xl border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-xl shadow-lg h-full md:col-span-2">
              <CardHeader className="px-6 pt-6 pb-2">
                <h3 className="text-lg font-semibold">Experience</h3>
              </CardHeader>
              <CardBody className="px-6 pb-6 pt-2 space-y-4">
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <p className="font-medium">Freelancing</p>
                  <p className="text-sm text-default-500 mt-0.5">Mar 2026 - Present</p>
                  <div className="mt-2 flex items-center gap-2 text-default-600">
                    <BriefcaseIcon className="text-primary" />
                    <span className="font-medium">Independent Projects</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 p-4">
                  <p className="font-medium">Python Developer</p>
                  <p className="text-sm text-default-500 mt-0.5">Aug 2025 - Feb 2026</p>
                  <div className="mt-2 flex items-center gap-2 text-default-600">
                    <BriefcaseIcon className="text-default-500" />
                    <Link isExternal href="https://sukan.eu" className="font-medium">
                      Sukan Food
                    </Link>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 p-4">
                  <p className="font-medium">Frontend Web Development Intern</p>
                  <p className="text-sm text-default-500 mt-0.5">Aug 2024 - Nov 2024</p>
                  <div className="mt-2 flex items-center gap-2 text-default-600">
                    <BriefcaseIcon className="text-default-500" />
                    <Link
                      isExternal
                      href="https://github.com/Fcatilizer/INSTAKAS/blob/main/Internship%20Letter%20-%20Ashish%20Gaurav.pdf"
                      className="font-medium"
                    >
                      VRAIO Software Solutions Pvt Ltd
                    </Link>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="rounded-3xl border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-xl shadow-lg h-full md:col-span-2">
              <CardHeader className="px-6 pt-6 pb-2">
                <h3 className="text-lg font-semibold">Skills</h3>
              </CardHeader>
              <CardBody className="px-6 pb-6 pt-2 space-y-4">
                <div>
                  <p className="text-default-500 mb-2">Languages</p>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <Chip key={lang} size="sm" variant="flat">
                        {lang}
                      </Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-default-500 mb-2">Frameworks</p>
                  <div className="flex flex-wrap gap-2">
                    {frameworks.map((framework) => (
                      <Chip key={framework} size="sm" variant="flat">
                        {framework}
                      </Chip>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-default-600">
                  <LanguageIcon className="text-primary" />
                  <span>English, Hindi</span>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

        <Card className="mt-8 rounded-3xl border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-xl shadow-lg">
          <CardBody className="px-6 py-6 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Built With</h3>
              <p className="text-default-500 mt-1">Next.js + HeroUI</p>
            </div>
            <Link
              isExternal
              href="https://github.com/Fcatilizer/ashish-portfolio"
              aria-label="GitHub Repository"
              className="inline-flex items-center gap-2 text-primary font-medium"
            >
              <GithubIcon className="w-5 h-5" />
              View Repository
            </Link>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
