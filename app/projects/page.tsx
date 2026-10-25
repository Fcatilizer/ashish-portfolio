"use client";

import { useEffect, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";

import {
  personalProjects,
  projectGroups,
  currentCompany,
  type ProjectCategory,
  type ProjectGroup,
} from "./workProjectsData";
import "./projects.css";

type Filter = "All" | ProjectCategory;

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


export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectGroup | null>(null);

  useEffect(() => {
    const syncProjectWithUrl = () => {
      const id = window.location.hash.slice(1);
      setSelectedProject(projectGroups.find((project) => project.id === id) || null);
    };

    syncProjectWithUrl();
    window.addEventListener("hashchange", syncProjectWithUrl);
    window.addEventListener("popstate", syncProjectWithUrl);

    return () => {
      window.removeEventListener("hashchange", syncProjectWithUrl);
      window.removeEventListener("popstate", syncProjectWithUrl);
    };
  }, []);

  const openProject = (project: ProjectGroup) => {
    window.history.pushState(null, "", "#" + project.id);
    setSelectedProject(project);
  };

  const closeProject = () => {
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
    setSelectedProject(null);
  };

  const filters: { label: Filter; text: string; count: number }[] = [
    { label: "All", text: "All work", count: projectGroups.length + personalProjects.length },
    { label: "Freelance", text: "Freelance", count: projectGroups.filter((project) => project.category === "Freelance").length },
    { label: "Work", text: "At work", count: projectGroups.filter((project) => project.category === "Work").length },
    { label: "Personal", text: "Personal", count: personalProjects.length },
  ];

  const visibleProjects = projectGroups
    .filter((project) => filter === "All" || project.category === filter)
    .sort((a, b) => filter === "Work" ? Number(b.status === "current") - Number(a.status === "current") : 0);
  const showPersonal = filter === "All" || filter === "Personal";

  return (
    <div className="projects-page">
      <header className="projects-intro">
        <div className="intro-main">
          <p className="eyebrow"><span className="intro-mark" /> THE WORK COLLECTION</p>
          <h1>Thoughtfully built.<br /><span>Connected by purpose.</span></h1>
          <p className="intro-description">
            Web platforms, mobile apps, and the systems in between.
            A closer look at my work, one collaboration at a time.
          </p>
        </div>
        {currentCompany && <a
          aria-haspopup="dialog"
          className="current-chapter"
          href={"#" + currentCompany.id}
          onClick={(event) => {
            if (!currentCompany || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            event.preventDefault();
            openProject(currentCompany);
          }}
        >
          <span className="current-chapter-label"><span className="status-dot" /> THE CURRENT CHAPTER</span>
          <span className="current-chapter-name">{currentCompany.name} <Arrow diagonal /></span>
          <span className="current-chapter-description">{currentCompany.role || "Explore my current work."}</span>
        </a>}
      </header>

      <div className="collection-toolbar">
        <div aria-label="Filter projects" className="project-filters" role="group">
          {filters.map((item) => (
            <button
              key={item.label}
              aria-controls="project-collection"
              aria-pressed={filter === item.label}
              className={filter === item.label ? "filter-button is-active" : "filter-button"}
              onClick={() => setFilter(item.label)}
            >
              {item.text}<span>{String(item.count).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
        <span className="collection-hint">A few products. A bigger picture.</span>
      </div>

      <div id="project-collection">
        <p aria-live="polite" className="sr-only">
          Showing {filter === "All" ? projectGroups.length + personalProjects.length : filter === "Personal" ? personalProjects.length : visibleProjects.length} {filter === "All" ? "" : filter.toLowerCase() + " "}projects.
        </p>
        {visibleProjects.length > 0 && (
          <section aria-label={filter === "All" ? "Featured collaborations" : filter + " collaborations"}>
            <div className="collection-heading">
              <h2>{filter === "All" ? "Featured collaborations" : filter === "Work" ? "Built with a team" : "Independent collaborations"}</h2>
              <span>{filter === "Work" ? "The companies. The contributions." : "Each card opens a whole story."}</span>
            </div>
            <div className="project-grid">
              {visibleProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  index={projectGroups.indexOf(project)}
                  project={project}
                  onOpen={openProject}
                />
              ))}
            </div>
          </section>
        )}

        {showPersonal && (
          <section aria-labelledby="personal-projects-title" className="personal-section">
            <div className="collection-heading">
              <h2 id="personal-projects-title">Made out of curiosity</h2>
              <span>Personal projects & experiments</span>
            </div>
            <div className="project-grid">
              {personalProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  index={projectGroups.length + index}
                  project={project}
                  onOpen={openProject}
                />
              ))}
            </div>
          </section>
        )}
      </div>

      <footer className="projects-footer">
        <div>
          <span className="eyebrow">HAVE SOMETHING IN MIND?</span>
          <h2>Let&apos;s build the next one.</h2>
        </div>
        <a className="project-contact" href="mailto:ashish.gaurav2003@gmail.com">
          Start a conversation <Arrow diagonal />
        </a>
      </footer>

      {selectedProject && (
        <ProjectModal
          key={selectedProject.id}
          isOpen
          project={selectedProject}
          onClose={closeProject}
        />
      )}
    </div>
  );
}
