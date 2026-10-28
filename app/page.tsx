import Image from "next/image";
import Link from "next/link";

import { aboutProfile } from "@/app/about/aboutData";
import { currentCompany, projectGroups } from "@/app/projects/workProjectsData";
import { ProjectBadge } from "@/components/project-badge";
import { ProjectCard } from "@/components/project-card";
import { ProfilePortrait } from "@/components/profile-portrait";
import { QuoteModalTrigger } from "@/components/quote-modal-trigger";
import { siteConfig } from "@/config/site";

import { homeContent } from "./homeData";
import "./home.css";

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

export default function Home() {
  const selectedProjects = homeContent.featuredProjectIds.flatMap((id) => {
    const project = projectGroups.find((item) => item.id === id);
    return project ? [project] : [];
  });

  return (
    <div className="home-page">
      <header className="home-hero">
        <div className="home-hero-copy">
          <p className="home-eyebrow home-intro-label">
            <span aria-hidden="true" className="home-intro-mark" />
            {homeContent.eyebrow}
          </p>
          <h1>{homeContent.headline}<br /><span>{homeContent.headlineAccent}</span></h1>
          <p className="home-introduction">{homeContent.introduction}</p>
          <div className="home-hero-actions">
            <Link className="home-primary-link" href="#selected-work">Explore my work <Arrow /></Link>
            <a className="home-text-link" href={siteConfig.resumeUrl} rel="noopener noreferrer" target="_blank">Download résumé <Arrow diagonal /></a>
          </div>
        </div>

        <ProfilePortrait profile={aboutProfile} />
      </header>

      {currentCompany && (
        <Link className="home-now" href={"/projects#" + currentCompany.id}>
          <div className="home-now-company">
            <span className="home-eyebrow">THE CURRENT CHAPTER</span>
            <div className="home-company-identity">
              {currentCompany.cover?.logo && <Image alt={currentCompany.cover.logo.alt} height={44} src={currentCompany.cover.logo.src} width={52} />}
              <div><h2>{currentCompany.name}</h2><p>{currentCompany.role}</p></div>
            </div>
          </div>
          <p className="home-now-summary">{currentCompany.summary}</p>
          <div className="home-now-action">
            {currentCompany.status && <ProjectBadge badge={currentCompany.status} />}
            <span>Explore my role <Arrow diagonal /></span>
          </div>
        </Link>
      )}

      <section aria-labelledby="selected-work-title" className="home-selected-work" id="selected-work">
        <div className="home-section-heading">
          <div><p className="home-eyebrow">SELECTED WORK</p><h2 id="selected-work-title">{homeContent.workHeading}</h2></div>
          <Link className="home-text-link" href="/projects">All projects <Arrow /></Link>
        </div>
        <div className="home-project-grid">
          {selectedProjects.map((project, index) => <ProjectCard key={project.id} index={index} project={project} />)}
        </div>
      </section>

      <nav aria-label="More about Ashish" className="home-more">
        {homeContent.explore.map((item) => (
          <Link key={item.href} className="home-explore-link" href={item.href}>
            <span className="home-eyebrow">{item.eyebrow}</span>
            <div><h2>{item.title}</h2><Arrow /></div>
            <p>{item.description}</p>
            <span className="home-explore-label">{item.label}</span>
          </Link>
        ))}
      </nav>

      <section aria-labelledby="home-contact-title" className="home-contact">
        <div>
          <p className="home-eyebrow">HAVE SOMETHING IN MIND?</p>
          <h2 id="home-contact-title">{homeContent.contactHeading}</h2>
          <p>{homeContent.contactDescription}</p>
        </div>
        <div className="home-contact-actions">
          <QuoteModalTrigger className="home-quote-button" />
          <a className="home-text-link" href={"mailto:" + aboutProfile.email}>Or send me an email <Arrow diagonal /></a>
        </div>
      </section>

      <footer className="home-footer">
        <span>{aboutProfile.name} / {aboutProfile.location}</span>
        <div>
          <a href={siteConfig.links.github} rel="noopener noreferrer" target="_blank">GitHub <Arrow diagonal /></a>
          <a href={siteConfig.links.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn <Arrow diagonal /></a>
        </div>
      </footer>
    </div>
  );
}
