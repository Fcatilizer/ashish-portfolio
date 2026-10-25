"use client";

import Link from "next/link";

import type { PersonalProject, ProjectGroup } from "@/app/projects/workProjectsData";
import { ProjectCover } from "@/components/project-cover";
import { ProjectBadge } from "@/components/project-badge";
import { getProjectBadge } from "@/config/project-badges";

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

export function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: ProjectGroup | PersonalProject;
  index: number;
  onOpen?: (project: ProjectGroup) => void;
}) {
  const isPersonal = project.category === "Personal";
  const label = isPersonal ? project.linkLabel : "Explore";
  const productCount = isPersonal ? 0 : project.products.length;

  return (
    <Link
      aria-haspopup={!isPersonal && onOpen ? "dialog" : undefined}
      aria-label={(isPersonal ? label + " — " + project.name : "Explore " + project.name) + (productCount ? ", " + getProjectBadge("connected-products", productCount).label : "") + (project.status ? ", " + getProjectBadge(project.status).label : "") + (!isPersonal && project.role ? ", " + project.role : "")}
      className="work-card"
      href={isPersonal ? project.link : (onOpen ? "#" : "/projects#") + project.id}
      rel={isPersonal ? "noopener noreferrer" : undefined}
      target={isPersonal ? "_blank" : undefined}
      onClick={(event) => {
        if (!onOpen || project.category === "Personal" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        onOpen(project);
      }}
    >
      <div className="work-card-art">
        {isPersonal ? <ProjectCover image={project.image} /> : <ProjectCover composition={project.cover} visual={project.visual} />}
        <div className="work-card-art-top">
          {project.status ? (
            <ProjectBadge appearance="cover" badge={project.status} />
          ) : (
            <ProjectBadge appearance="cover" badge="connected-products" count={productCount} />
          )}
          <span className="card-open-icon"><Arrow diagonal /></span>
        </div>
      </div>
      <div className="work-card-content">
        <div className="work-card-meta">
          <span>{project.category} <span className="meta-divider">/</span> {project.field}</span>
          <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3>{project.name}</h3>
        {!isPersonal && project.role && <span className="work-card-role">{project.role}</span>}
        <p>{project.summary}</p>
        <div className="work-card-bottom">
          <div className="project-tags">
            {project.areas.map((area) => <span key={area}>{area}</span>)}
          </div>
          <span className="card-explore"><span>{label}</span><Arrow diagonal={isPersonal} /></span>
        </div>
      </div>
    </Link>
  );
}
