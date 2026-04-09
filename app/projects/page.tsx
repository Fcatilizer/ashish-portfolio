"use client";

import { GithubIcon, PlayStoreIcon, OpenFolderIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { useState, useEffect } from "react";
import { ProjectModal } from "@/components/project-modal";
import { workProjectsData } from "./workProjectsData";

function FadingImageSlider({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[240px] rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700">
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full h-full shrink-0">
            <img
              src={img}
              alt={`${alt} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-full p-1.5 transition-colors shadow"
            aria-label="Previous preview image"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-full p-1.5 transition-colors shadow"
            aria-label="Next preview image"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white w-5"
                    : "bg-white/50 w-1.5"
                }`}
                aria-label={`Go to preview image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function PreviewCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[320px] flex items-center justify-center" style={{ overflow: "clip" }}>
      {images.map((img, index) => {
        const offset = index - currentIndex;
        const isActive = index === currentIndex;

        if (Math.abs(offset) > 1) return null;

        return (
          <div
            key={index}
            className="absolute transition-all duration-500 ease-out"
            style={{
              transform: `translateX(${offset * 145}px) scale(${isActive ? 1 : 0.86})`,
              opacity: isActive ? 1 : 0.35,
              zIndex: isActive ? 20 : 10,
            }}
          >
            <div className="w-[138px] h-[300px] rounded-3xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-xl">
              <img
                src={img}
                alt={`${alt} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        );
      })}

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-full p-2 transition-colors shadow-lg"
            aria-label="Previous preview image"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-full p-2 transition-colors shadow-lg"
            aria-label="Next preview image"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-blue-500 w-6"
                    : "bg-gray-400 dark:bg-gray-600 w-1.5"
                }`}
                aria-label={`Go to preview image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

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
      image: "/ic_launcher.png",
    },
  ];

  const workProjects = workProjectsData.map((proj) => ({
    ...proj,
    icon:
      proj.linkLabel === "Learn More" ? (
        <OpenFolderIcon className="w-5 h-5 mr-2 text-primary" />
      ) : (
        <PlayStoreIcon className="w-5 h-5 mr-2 text-primary" />
      ),
  }));

  return (
    <section className="flex flex-col items-center justify-center py-12 md:py-20 px-6">
      <h1 className={`${title()} text-center mb-12`}>My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {projects.map((proj) => (
          <Card
            key={proj.name}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            <CardBody className="p-6">
              <div className="flex flex-col h-full">
                {/* Project Info */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {proj.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm leading-relaxed">
                    {proj.desc}
                  </p>
                </div>

                {/* Preview Image */}
                <div className="flex-1 flex justify-center items-center rounded-xl overflow-hidden mb-4">
                  <Image
                    alt={proj.name}
                    src={proj.image}
                    className="object-contain max-h-64 w-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Link */}
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors"
                >
                  {proj.icon}
                  {proj.linkLabel}
                </a>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Work Projects Section */}
      <h2 className={`${title()} text-center mb-12 mt-20`}>Work Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {workProjects.map((proj) => (
          <Card
            key={proj.name}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            <CardBody className="p-6">
              <div className="flex flex-col h-full">
                {/* Project Info */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {proj.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm leading-relaxed">
                    {proj.desc}
                  </p>
                </div>

                {/* Preview Image */}
                <div className="flex-1 flex justify-center items-center rounded-xl overflow-hidden mb-4">
                  {proj.images && proj.images.length > 1 ? (
                    proj.imageMode === "portrait" ? (
                      <PreviewCarousel images={proj.images} alt={proj.name} />
                    ) : (
                      <FadingImageSlider images={proj.images} alt={proj.name} />
                    )
                  ) : (
                    <Image
                      alt={proj.name}
                      src={proj.images[0]}
                      className="object-contain max-h-64 w-auto transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Link */}
                <button
                  onClick={() => handleLearnMore(proj)}
                  className="flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors cursor-pointer bg-transparent border-none p-0"
                >
                  {proj.icon}
                  {proj.linkLabel}
                </button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={selectedProject}
        />
      )}
    </section>
  );
}
