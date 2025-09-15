"use client";

import { GithubIcon, PlayStoreIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function ProjectsPage() {
  const projects = [
    {
      name: "Eye Care",
      desc: "Keep records of Eye prescriptions in the cloud and access them from anywhere at any time.",
      icon: <PlayStoreIcon className="w-5 h-5 mr-2 text-primary" />,
      link: "https://play.google.com/store/apps/details?id=com.a3.eyecare",
      linkLabel: "Get On Play Store",
      image:
        "https://www.a3group.co.in/_next/image?url=%2Feye-care%2Fimages%2Fcover.png&w=640&q=75",
    },
    {
      name: "Library Management",
      desc: "Library Books Management App with Student & Teacher login. Features easy book search, assign, and add options.",
      icon: <GithubIcon className="w-5 h-5 mr-2 text-primary" />,
      link: "https://github.com/Fcatilizer/Library_Management",
      linkLabel: "Get On GitHub",
      image: "ic_launcher.png",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-12 md:py-20 px-6">
      <h1 className={`${title()} text-center mb-12`}>My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {projects.map((proj) => (
          <Card
            key={proj.name}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform"
          >
            <CardBody className="p-6">
              <div className="flex flex-col h-full">
                {/* Project Info */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold">{proj.name}</h3>
                  <p className="text-default-500 mt-1 text-sm">{proj.desc}</p>
                </div>

                {/* Preview Image */}
                <div className="flex-1 flex justify-center items-center rounded-xl overflow-hidden mb-4">
                  <Image
                    alt={proj.name}
                    src={proj.image}
                    className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Link */}
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary font-medium hover:underline"
                >
                  {proj.icon}
                  {proj.linkLabel}
                </a>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
