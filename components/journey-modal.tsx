"use client";

import type { CSSProperties, KeyboardEvent } from "react";

import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/modal";
import Image from "next/image";
import Link from "next/link";
import { useId, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

import { journeyChapters } from "@/app/about/aboutData";

import { ProjectBadge } from "./project-badge";

export function JourneyModal({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState(Math.max(0, journeyChapters.findIndex((chapter) => chapter.current)));
  const layoutRef = useRef<HTMLDivElement>(null);
  const prefix = useId();
  const reducedMotion = useReducedMotion();
  const chapter = journeyChapters[selected];
  const count = journeyChapters.length;

  const selectChapter = (index: number) => {
    setSelected(index);
    layoutRef.current?.parentElement?.scrollTo({ top: 0 });
  };

  const onChapterKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === "ArrowDown") next = (index + 1) % count;
    else if (event.key === "ArrowUp") next = (index - 1 + count) % count;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = count - 1;
    else return;

    event.preventDefault();
    selectChapter(next);
    layoutRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  };

  return (
    <Modal
      isOpen
      disableAnimation={!!reducedMotion}
      placement="center"
      scrollBehavior="inside"
      size="5xl"
      classNames={{
        base: "journey-dialog",
        header: "journey-dialog-header",
        body: "journey-dialog-body",
        wrapper: "journey-dialog-wrapper",
        backdrop: "journey-dialog-backdrop",
        closeButton: "journey-dialog-close",
      }}
      onClose={onClose}
    >
      <ModalContent>
        <ModalHeader>
          <span className="about-eyebrow">PEOPLE, PRODUCTS & THE CHAPTERS IN BETWEEN</span>
          <h2>The journey so far.</h2>
          <p>Move the marker or choose a chapter to explore.</p>
        </ModalHeader>
        <ModalBody>
          <div ref={layoutRef} className="journey-layout">
            <aside aria-label="Journey navigation" className="journey-sidebar">
              <div
                className="journey-timeline"
                style={{ "--journey-index": selected } as CSSProperties}
              >
                <div aria-hidden="true" className="journey-track" />
                <div
                  aria-label="Career chapters"
                  aria-orientation="vertical"
                  className="journey-stops"
                  role="tablist"
                >
                  {journeyChapters.map((entry, index) => (
                    <button
                      key={entry.id}
                      aria-controls={prefix + "-panel"}
                      aria-label={entry.organization + ", " + entry.role + ", " + entry.period}
                      aria-selected={selected === index}
                      className={selected === index ? "journey-stop is-selected" : "journey-stop"}
                      id={prefix + "-" + entry.id}
                      role="tab"
                      tabIndex={selected === index ? 0 : -1}
                      title={entry.organization + " · " + entry.period}
                      onClick={() => selectChapter(index)}
                      onKeyDown={(event) => onChapterKey(event, index)}
                    >
                      <span aria-hidden="true" className={entry.current ? "journey-stop-point is-current" : "journey-stop-point"} />
                      <span className="journey-stop-copy">
                        <span className="journey-stop-period">{entry.period}</span>
                        <span aria-hidden="true" className="journey-stop-short">{entry.shortPeriod}</span>
                        <strong>{entry.organization}</strong>
                        <span className="journey-stop-role">{entry.role}</span>
                      </span>
                    </button>
                  ))}
                </div>
                <input
                  aria-controls={prefix + "-panel"}
                  aria-describedby={prefix + "-hint"}
                  aria-label="Journey position"
                  aria-orientation="vertical"
                  aria-valuetext={chapter.organization + " — " + chapter.role + " — " + chapter.period}
                  className="journey-range"
                  max={count - 1}
                  min={0}
                  step={1}
                  type="range"
                  value={selected}
                  onChange={(event) => selectChapter(Number(event.target.value))}
                />
                <div aria-hidden="true" className="journey-dial" />
              </div>
              <p className="journey-dial-hint" id={prefix + "-hint"}>
                <span aria-hidden="true">↕</span><span className="dial-hint-full">Drag to explore the timeline.</span><span className="dial-hint-short">Drag</span>
              </p>
            </aside>

            <section
              aria-labelledby={prefix + "-" + chapter.id}
              className="journey-chapter"
              id={prefix + "-panel"}
              role="tabpanel"
              tabIndex={0}
            >
              <p aria-live="polite" className="sr-only">
                Viewing {chapter.organization}, {chapter.role}, {chapter.period}.
              </p>
              <div className="journey-chapter-meta">
                <span className="about-eyebrow">CHAPTER {String(selected + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}</span>
                {chapter.status && <ProjectBadge badge={chapter.status} />}
              </div>
              <div className="journey-chapter-heading">
                {chapter.logo ? (
                  <Image alt={chapter.logo.alt} className="journey-chapter-logo" height={96} src={chapter.logo.src} width={96} />
                ) : (
                  <span aria-hidden="true" className="journey-chapter-symbol">
                    {chapter.kind === "education" ? "↗" : (
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="16" rx="3" />
                        <path d="M3 8h18M8 12l-2 2 2 2m8-4 2 2-2 2m-3-5-2 6" />
                        <path d="M6 6h.01M9 6h.01" strokeWidth="2" />
                      </svg>
                    )}
                  </span>
                )}
                <div>
                  <h3>{chapter.organization}</h3>
                  <p className="journey-chapter-role">{chapter.role}</p>
                </div>
              </div>
              <p className="journey-chapter-period">{chapter.period}</p>
              <p className="journey-chapter-description">{chapter.description}</p>

              <div className="journey-chapter-work">
                <h4 className="about-eyebrow">{chapter.ongoing ? "WHAT I'M WORKING ON" : chapter.kind === "education" ? "THE FOUNDATION" : "WHAT I WORKED ON"}</h4>
                <ul>
                  {chapter.work.map((work) => <li key={work}>{work}</li>)}
                </ul>
              </div>
              {chapter.technologies.length > 0 && (
                <div className="journey-chapter-tools">
                  <h4 className="about-eyebrow">TOOLS IN THIS CHAPTER</h4>
                  <div className="about-tags">{chapter.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                </div>
              )}
              <div className="journey-chapter-footer">
                <div className="journey-chapter-links">
                  {chapter.links.map((link) => (
                    <Link key={link.url} href={link.url} rel={link.url.startsWith("https:") ? "noopener noreferrer" : undefined} target={link.url.startsWith("https:") ? "_blank" : undefined}>
                      {link.label}<span aria-hidden="true">↗</span>
                    </Link>
                  ))}
                </div>
                <div aria-label="Browse chapters" className="journey-step-controls">
                  <button aria-label="View newer chapter" disabled={selected === 0} onClick={() => selectChapter(selected - 1)}>↑</button>
                  <button aria-label="View earlier chapter" disabled={selected === count - 1} onClick={() => selectChapter(selected + 1)}>↓</button>
                </div>
              </div>
            </section>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
