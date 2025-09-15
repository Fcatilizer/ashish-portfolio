"use client";

import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import {
  BreifcaseIcon,
  GithubIcon,
  LanguageIcon,
  LocationIcon,
  UniversityIcon,
} from "@/components/icons";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 px-6 py-12 md:py-20">
      <h1 className={`${title()} text-center`}>About Me</h1>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-8 w-full max-w-6xl">
        {/* Profile Card */}
        <Card className="flex-shrink-0 w-full md:w-80 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow bg-white/5 backdrop-blur-xl border border-white/10">
          <CardHeader className="flex flex-col items-center text-center pb-0 pt-6">
            <p className="text-sm uppercase font-bold tracking-wide">
              Ashish Gaurav
            </p>
            <small className="text-default-500">
              Android App & Web Developer
            </small>
            <h4 className="font-semibold text-lg mt-1">B.Tech (Hons.) CSE</h4>
          </CardHeader>
          <CardBody className="flex items-center justify-center py-6">
            <Image
              alt="Profile"
              className="object-cover rounded-2xl border shadow-sm"
              src="me.jpg"
              width={280}
            />
          </CardBody>
        </Card>

        {/* Info Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Education */}
          <li>
            <Card className="p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow h-full bg-white/5 backdrop-blur-xl border border-white/10">
              <CardBody className="flex flex-col space-y-4">
                <h4 className="font-semibold text-lg">Education</h4>
                <p className="text-default-600">
                  Pursued{" "}
                  <a
                    className="text-primary font-medium hover:underline"
                    href="https://en.wikipedia.org/wiki/Bachelor_of_Technology"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    B.Tech (Hons.) in Computer Science and Engineering
                  </a>
                </p>
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center">
                  <UniversityIcon className="inline-block mr-2 text-primary" />
                  <a
                    href="https://adamasuniversity.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-default-500 hover:text-primary transition"
                  >
                    Adamas University
                  </a>
                </div>
              </CardBody>
            </Card>
          </li>

          {/* Contact Info */}
          <li>
            <Card className="p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow h-full bg-white/5 backdrop-blur-xl border border-white/10">
              <CardBody className="flex flex-col space-y-3">
                <h4 className="font-semibold text-lg">Contact Info</h4>
                <p>
                  <span className="text-default-500">Email: </span>
                  <a
                    className="text-primary font-medium hover:underline"
                    href="mailto:ashish.gaurav2003@gmail.com"
                  >
                    ashish.gaurav2003@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-default-500">X/Twitter: </span>
                  <a
                    className="text-primary font-medium hover:underline"
                    href="https://x.com/ashishgaurav203"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    /ashishgaurav203
                  </a>
                </p>
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center">
                  <LocationIcon className="inline-block mr-2 text-primary" />
                  <a
                    className="text-default-500 hover:text-primary transition"
                    href="https://www.google.com/maps/place/Patna,+Bihar,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Patna, Bihar, India
                  </a>
                </div>
              </CardBody>
            </Card>
          </li>

          {/* Experience */}
          <li>
            <Card className="p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow h-full bg-white/5 backdrop-blur-xl border border-white/10">
              <CardBody className="flex flex-col space-y-6">
                <h4 className="font-semibold text-lg">Experience</h4>

                {/* Current Job */}
                <div className="relative pl-4 border-l-2 border-primary/50 bg-primary/5 rounded-lg p-3">
                  <p className="font-medium text-base">Python Developer</p>
                  <span className="text-sm text-default-500">
                    Aug 2025 – Present
                  </span>
                  <div className="mt-2 flex items-center">
                    <BreifcaseIcon className="inline-block mr-2 text-primary" />
                    <a
                      href="https://sukan.eu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline"
                    >
                      Sukan Food
                    </a>
                  </div>
                </div>

                {/* Previous Internship */}
                <div className="relative pl-4 border-l-2 border-default-200 p-3">
                  <p className="font-medium text-base">
                    Frontend Web Development Intern
                  </p>
                  <span className="text-sm text-default-500">
                    Aug 2024 – Nov 2024
                  </span>
                  <div className="mt-2 flex items-center">
                    <BreifcaseIcon className="inline-block mr-2 text-default-500" />
                    <a
                      href="https://github.com/Fcatilizer/INSTAKAS/blob/main/Internship%20Letter%20-%20Ashish%20Gaurav.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline"
                    >
                      VRAIO Software Solutions Pvt Ltd
                    </a>
                  </div>
                </div>
              </CardBody>
            </Card>
          </li>

          {/* Skills */}
          <li>
            <Card className="p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow h-full bg-white/5 backdrop-blur-xl border border-white/10">
              <CardBody className="flex flex-col h-full">
                <h4 className="font-semibold text-lg mb-4">Skills</h4>

                <div className="space-y-4 flex-grow">
                  <div>
                    <span className="font-semibold text-default-600">
                      Languages:
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["Python", "HTML", "CSS", "JavaScript", "Dart"].map(
                        (lang) => (
                          <span
                            key={lang}
                            className="px-3 py-1 text-sm bg-default-100 rounded-lg text-default-700"
                          >
                            {lang}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold text-default-600">
                      Frameworks:
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["Django", "Flutter", "React", "Next.js"].map((fw) => (
                        <span
                          key={fw}
                          className="px-3 py-1 text-sm bg-default-100 rounded-lg text-default-700"
                        >
                          {fw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/20 flex items-center">
                  <LanguageIcon className="inline-block mr-2 text-primary" />
                  <span className="text-default-500">English, Hindi</span>
                </div>
              </CardBody>
            </Card>
          </li>
        </ul>
      </div>

      {/* Footer Card */}
      <Card className="p-6 mt-10 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow text-center bg-white/5 backdrop-blur-xl border border-white/10">
        <CardBody>
          <h4 className="font-semibold text-lg">Built With:</h4>
          <p className="text-default-500 mt-1">Next.js + NextUI</p>
          <div className="mt-4 flex items-center justify-center gap-4 border-t border-white/20 pt-3">
            <a
              href="https://github.com/Fcatilizer/ashish-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github Repository"
              className="text-primary hover:scale-110 transition-transform"
            >
              <GithubIcon className="inline-block w-7 h-7" />
            </a>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}
