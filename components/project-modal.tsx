"use client";

import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/modal";
import { useState } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    name: string;
    desc: string;
    detailedDesc?: string;
    images: string[];
    technologies?: string[];
    imageMode?: "landscape" | "portrait";
    storeLinks?: { label: string; url: string }[];
  };
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isPortraitMode = project.imageMode === "portrait";
  const slideWidth = isPortraitMode ? 250 : 340;
  const frameWidthClass = isPortraitMode ? "w-[230px]" : "w-[320px]";
  const frameHeightClass = isPortraitMode ? "h-[500px]" : "h-[220px]";
  const imageFitClass = isPortraitMode ? "object-contain" : "object-cover";

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="3xl"
      scrollBehavior="inside"
      classNames={{
        base: "bg-white dark:bg-gray-900",
        backdrop: "bg-black/50 backdrop-blur-sm",
      }}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-gray-900 dark:text-white">
          {project.name}
        </ModalHeader>
        <ModalBody className="pb-6">
          {/* Image Carousel */}
          <div className="relative w-full mb-8" style={{ overflow: "clip" }}>
            {/* Main carousel container */}
            <div
              className={`relative flex items-center justify-center ${
                isPortraitMode ? "h-[500px]" : "h-[280px]"
              }`}
            >
              {project.images.map((img, index) => {
                const offset = index - currentImageIndex;
                const isActive = index === currentImageIndex;

                if (Math.abs(offset) > 1) return null;

                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-500 ease-out"
                    style={{
                      transform: `translateX(${offset * slideWidth}px) scale(${isActive ? 1 : 0.85})`,
                      opacity: isActive ? 1 : 0.4,
                      zIndex: isActive ? 20 : 10,
                    }}
                    onClick={() => !isActive && setCurrentImageIndex(index)}
                  >
                    <div
                      className={`${frameWidthClass} ${frameHeightClass} rounded-3xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-2xl cursor-pointer flex items-center justify-center`}
                    >
                      <img
                        src={img}
                        alt={`${project.name} ${index + 1}`}
                        className={`w-full h-full ${imageFitClass}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-full p-2.5 transition-colors shadow-xl"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-5 h-5"
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
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-full p-2.5 transition-colors shadow-xl"
                  aria-label="Next image"
                >
                  <svg
                    className="w-5 h-5"
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
              </>
            )}

            {/* Image indicators */}
            {project.images.length > 1 && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-blue-600 w-8"
                        : "bg-gray-400 dark:bg-gray-600 w-2"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Project Description */}
          <div className="space-y-4 px-1">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Overview
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.desc}
              </p>
            </div>

            {/* Detailed Description */}
            {project.detailedDesc && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Details
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                  {project.detailedDesc}
                </p>
              </div>
            )}

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Store Links */}
            {project.storeLinks && project.storeLinks.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Published On
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.storeLinks.map((store) => (
                    <a
                      key={store.label}
                      href={store.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      {store.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
