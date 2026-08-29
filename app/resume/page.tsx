"use client";

import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";
import { siteConfig } from "@/config/site";

export default function ResumePage() {
  const resumeUrl = siteConfig.resumeUrl;

  return (
    <section className="relative w-full py-8 md:py-14">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-4 md:px-6">
        <div className="mb-8 text-center">
          <h1 className={`${title()} mb-3`}>Resume</h1>
          <p className="mx-auto max-w-2xl text-default-500 text-base md:text-lg">
            Ashish Gaurav — Android App and Web Developer (Python, Django,
            Next.js)
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <Button
              as="a"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              size="lg"
              className="rounded-full px-7 font-medium shadow-lg hover:shadow-primary/25"
              startContent={
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              }
            >
              View / Download PDF
            </Button>

            <Button
              as={Link}
              href="/about"
              variant="flat"
              size="lg"
              className="rounded-full px-7"
            >
              About Me
            </Button>
          </div>
        </div>

        {/* Embedded Viewer */}
        <Card className="rounded-3xl border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-xl shadow-2xl overflow-hidden">
          <CardBody className="p-2 md:p-4">
            <div className="w-full h-[75vh] min-h-[600px] rounded-2xl overflow-hidden bg-gray-900 border border-white/10">
              <iframe
                src={resumeUrl}
                title="Ashish Gaurav Resume"
                className="w-full h-full border-none"
              />
            </div>
            <div className="p-4 text-center text-sm text-default-500">
              Having trouble previewing?{" "}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Open the PDF directly
              </a>
              .
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
