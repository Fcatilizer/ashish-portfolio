"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { currentCompany } from "@/app/projects/workProjectsData";
import { JourneyModal } from "@/components/journey-modal";
import { ProjectBadge } from "@/components/project-badge";
import { PageHero } from "@/components/page-hero";
import { ProfilePortrait } from "@/components/profile-portrait";
import { siteConfig } from "@/config/site";

import { aboutProfile, journeyPreview, skillGroups } from "./aboutData";
import "./about.css";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function AboutPage() {
  const [journeyOpen, setJourneyOpen] = useState(false);

  useEffect(() => {
    const syncWithUrl = () => setJourneyOpen(window.location.hash === "#journey");
    syncWithUrl();
    window.addEventListener("hashchange", syncWithUrl);
    window.addEventListener("popstate", syncWithUrl);

    return () => {
      window.removeEventListener("hashchange", syncWithUrl);
      window.removeEventListener("popstate", syncWithUrl);
    };
  }, []);

  const openJourney = () => {
    if (window.location.hash !== "#journey") window.history.pushState(null, "", "#journey");
    setJourneyOpen(true);
  };

  const closeJourney = () => {
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
    setJourneyOpen(false);
  };

  return (
    <div className="about-page">
      <PageHero
        variant="profile"
        aside={<ProfilePortrait profile={aboutProfile} />}
        eyebrow={"ABOUT / " + aboutProfile.name.toUpperCase()}
        title="A builder at heart."
        accent="Curious by nature."
        description={aboutProfile.introduction}
        primaryAction={<button aria-haspopup="dialog" onClick={openJourney}>Explore my journey <Arrow /></button>}
        secondaryAction={<a href={siteConfig.resumeUrl} rel="noopener noreferrer" target="_blank">Download résumé <Arrow diagonal /></a>}
      />

      <div className="about-chapters-row">
        {currentCompany && (
          <section aria-labelledby="working-now-title" className="about-now-panel">
            <div className="about-panel-topline">
              <span className="about-eyebrow">WORKING NOW</span>
              {currentCompany.status && <ProjectBadge badge={currentCompany.status} />}
            </div>
            <div className="about-current-company">
              {currentCompany.cover?.logo && <Image alt={currentCompany.cover.logo.alt} height={48} src={currentCompany.cover.logo.src} width={48} />}
              <Link href={"/projects#" + currentCompany.id}>{currentCompany.name}</Link>
            </div>
            <h2 id="working-now-title">{currentCompany.role}</h2>
            <p>{currentCompany.summary}</p>
            <div className="about-tags">{currentCompany.areas.map((area) => <span key={area}>{area}</span>)}</div>
            <Link className="about-text-link" href={"/projects#" + currentCompany.id}>Explore the work <Arrow diagonal /></Link>
          </section>
        )}

        <button aria-haspopup="dialog" className="about-journey-preview" onClick={openJourney}>
          <span className="about-eyebrow">MY JOURNEY</span>
          <h2>How I got here.</h2>
          <div aria-hidden="true" className="about-mini-timeline">
            {journeyPreview.map((chapter) => (
              <div key={chapter.id} className={chapter.current ? "mini-chapter is-current" : "mini-chapter"}>
                <span className="mini-chapter-point" />
                <span className="mini-chapter-year">{chapter.shortPeriod}</span>
                <div><strong>{chapter.organization}</strong><span>{chapter.preview}</span></div>
              </div>
            ))}
          </div>
          <span className="about-text-link">Follow the full story <Arrow /></span>
        </button>
      </div>

      <section aria-labelledby="about-skills-title" className="about-skills-section">
        <div className="about-section-heading">
          <div><span className="about-eyebrow">THE TOOLBOX</span><h2 id="about-skills-title">Tools, with a purpose.</h2></div>
          <p>Across backend systems, web platforms, and mobile apps.</p>
        </div>
        <div className="about-skill-rows">
          {skillGroups.map((group) => (
            <div key={group.number} className="about-skill-row">
              <div className="about-skill-label">
                <span>{group.number}</span>
                <div><h3>{group.title}</h3><p>{group.description}</p></div>
              </div>
              <div className="about-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="about-notes-row">
        <section aria-labelledby="about-education-title" className="about-education-panel">
          <div className="about-education-heading">
            <div>
              <span className="about-eyebrow">THE FOUNDATION</span>
              <h2 id="about-education-title">{aboutProfile.education.degree}</h2>
              <p>{aboutProfile.education.field}</p>
            </div>
            <Image alt={aboutProfile.education.logo.alt} className="about-education-logo" height={108} src={aboutProfile.education.logo.src} width={108} />
          </div>
          <a className="about-text-link" href={aboutProfile.education.url} rel="noopener noreferrer" target="_blank">{aboutProfile.education.institution} <Arrow diagonal /></a>
          <div className="about-spoken-languages"><span className="about-eyebrow">IN CONVERSATION</span><span>{aboutProfile.languages.join(" · ")}</span></div>
        </section>
        <section aria-labelledby="about-contact-title" className="about-contact-panel">
          <span className="about-eyebrow">LET&apos;S CONNECT</span>
          <h2 id="about-contact-title">What are you building?</h2>
          <p>For a project, a collaboration, or a conversation.</p>
          <a className="about-email-link" href={"mailto:" + aboutProfile.email}>{aboutProfile.email}<Arrow diagonal /></a>
          <div className="about-social-links">
            <a href={siteConfig.links.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href={siteConfig.links.github} rel="noopener noreferrer" target="_blank">GitHub <span aria-hidden="true">↗</span></a>
            <a href={siteConfig.links.twitter} rel="noopener noreferrer" target="_blank">X / Twitter <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </div>

      <footer className="about-page-footer">
        <span>{aboutProfile.name} / A work in progress, always.</span>
        <a href="https://github.com/Fcatilizer/ashish-portfolio" rel="noopener noreferrer" target="_blank">Portfolio source <Arrow diagonal /></a>
      </footer>

      {journeyOpen && <JourneyModal onClose={closeJourney} />}
    </div>
  );
}
