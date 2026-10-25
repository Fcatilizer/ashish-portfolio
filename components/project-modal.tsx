"use client";

import type { KeyboardEvent } from "react";
import type { ProjectGroup, ProjectProduct } from "@/app/projects/workProjectsData";

import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/modal";
import Image from "next/image";
import { useRef, useState } from "react";

import { getProjectBadge } from "@/config/project-badges";

import { ProjectCover } from "./project-cover";
import { ProjectBadge } from "./project-badge";

function Arrow({ previous = false }: { previous?: boolean }) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d={previous ? "m14 6-6 6 6 6" : "m10 6 6 6-6 6"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ExternalLinks({ links }: { links?: ProjectProduct["links"] }) {
  if (!links?.length) return null;

  return (
    <div className="case-links">
      {links.map((link) => (
        <a key={link.url} href={link.url} rel="noopener noreferrer" target="_blank">
          {link.label}
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
            <path d="M6 18 18 6M6 6h12v12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </a>
      ))}
    </div>
  );
}

function ProductGallery({ product }: { product: ProjectProduct }) {
  const [current, setCurrent] = useState(0);
  const total = product.images.length;
  const move = (direction: number) => setCurrent((index) => (index + direction + total) % total);

  if (!total) return null;

  return (
    <div className={"case-gallery gallery-" + product.imageMode}>
      <div
        aria-label={product.name + " screenshots"}
        aria-roledescription="carousel"
        className="case-gallery-stage"
        role="region"
        tabIndex={total > 1 ? 0 : undefined}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            move(event.key === "ArrowRight" ? 1 : -1);
          }
        }}
      >
        <Image
          key={product.images[current]}
          alt={product.name + " — screenshot " + (current + 1)}
          className="case-gallery-image"
          height={product.imageMode === "portrait" ? 2400 : 965}
          sizes={product.imageMode === "portrait" ? "250px" : "(max-width: 768px) 90vw, 900px"}
          src={product.images[current]}
          width={product.imageMode === "portrait" ? 1080 : 1868}
        />
        {total > 1 && (
          <>
            <button aria-label="Previous screenshot" className="gallery-arrow gallery-prev" onClick={() => move(-1)}><Arrow previous /></button>
            <button aria-label="Next screenshot" className="gallery-arrow gallery-next" onClick={() => move(1)}><Arrow /></button>
          </>
        )}
        <span aria-atomic="true" aria-live="polite" className="gallery-count">{String(current + 1).padStart(2, "0")} <span>/ {String(total).padStart(2, "0")}</span></span>
      </div>
      {total > 1 && (
        <div aria-label="Choose a screenshot" className="gallery-thumbnails" role="group">
          {product.images.map((src, index) => (
            <button
              key={src}
              aria-label={"Show screenshot " + (index + 1) + " of " + total}
              aria-pressed={current === index}
              className={current === index ? "gallery-thumbnail is-active" : "gallery-thumbnail"}
              onClick={() => setCurrent(index)}
            >
              <Image alt="" height={60} src={src} width={90} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function ProjectModal({
  isOpen,
  onClose,
  project,
}: {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectGroup;
}) {
  const [activeTab, setActiveTab] = useState("overview");
  const panelRef = useRef<HTMLDivElement>(null);
  const tabs = [{ id: "overview", name: "Overview" }, ...project.products];
  const activeProduct = project.products.find((product) => product.id === activeTab);
  const activeLogo = activeProduct?.logo ?? project.cover?.logo;
  const tabPrefix = "case-" + project.id;

  const selectTab = (id: string) => {
    setActiveTab(id);
    const scrollContainer = panelRef.current?.parentElement;
    if (scrollContainer) scrollContainer.scrollTop = 0;
  };

  const handleTabKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    else return;

    event.preventDefault();
    selectTab(tabs[next].id);
    event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  };

  return (
    <Modal
      classNames={{
        base: "project-dialog",
        backdrop: "project-dialog-backdrop",
        wrapper: "project-dialog-wrapper",
        header: "project-dialog-header",
        body: "project-dialog-body",
        closeButton: "project-dialog-close",
      }}
      isOpen={isOpen}
      placement="center"
      scrollBehavior="inside"
      size="5xl"
      onClose={onClose}
    >
      <ModalContent>
        <ModalHeader>
          <div className="case-heading-meta">
            <span>{project.category} <span>/</span> {project.field}</span>
            {project.status ? (
              <ProjectBadge badge={project.status} />
            ) : project.products.length > 0 ? (
              <ProjectBadge badge="connected-products" count={project.products.length} />
            ) : null}
          </div>
          <h2>{project.name}</h2>
          <p>{project.summary}</p>
        </ModalHeader>
        <ModalBody>
          {project.products.length > 0 && (
            <div aria-label={"Explore " + project.name} className="case-tabs" role="tablist">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  aria-controls={tabPrefix + "-panel"}
                  aria-selected={activeTab === tab.id}
                  className={activeTab === tab.id ? "case-tab is-active" : "case-tab"}
                  id={tabPrefix + "-" + tab.id}
                  role="tab"
                  tabIndex={activeTab === tab.id ? 0 : -1}
                  onClick={() => selectTab(tab.id)}
                  onKeyDown={(event) => handleTabKey(event, index)}
                >
                  {tab.name}
                  {tab.id !== "overview" && <span>0{index}</span>}
                </button>
              ))}
            </div>
          )}
          <div
            ref={panelRef}
            aria-labelledby={project.products.length ? tabPrefix + "-" + activeTab : undefined}
            className="case-panel"
            id={tabPrefix + "-panel"}
            role={project.products.length ? "tabpanel" : undefined}
            tabIndex={project.products.length ? 0 : undefined}
          >
            {activeProduct ? (
              <div className="product-detail">
                <div className="product-detail-intro">
                  <div className="product-detail-heading">
                    {activeLogo && (
                      <Image alt={activeLogo.alt} className="case-product-logo" height={80} src={activeLogo.src} width={80} />
                    )}
                    <div>
                      <div className="product-detail-meta">
                        <span className="eyebrow">{activeProduct.type}</span>
                        {activeProduct.status && <ProjectBadge badge={activeProduct.status} />}
                      </div>
                      <h3>{activeProduct.name}</h3>
                    </div>
                  </div>
                  <ExternalLinks links={activeProduct.links} />
                </div>
                <ProductGallery key={activeProduct.id} product={activeProduct} />
                <div className="product-detail-columns">
                  <div>
                    <span className="eyebrow">THE PRODUCT</span>
                    <p>{activeProduct.description}</p>
                    {activeProduct.technologies.length > 0 && (
                      <div className="case-tech">
                        <h4>Built with</h4>
                        <div className="project-tags">{activeProduct.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                      </div>
                    )}
                  </div>
                  <div>
                    <span className="eyebrow">WHAT I WORKED ON</span>
                    <ul className="contribution-list">{activeProduct.work.map((work) => <li key={work}>{work}</li>)}</ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="case-overview">
                <div className="case-cover"><ProjectCover composition={project.cover} visual={project.visual} /></div>
                <div className="case-overview-copy">
                  <div>
                    <span className="eyebrow">{project.role ? "ABOUT THE COMPANY" : project.products.length ? "THE BIGGER PICTURE" : "A NEW CHAPTER"}</span>
                    <p>{project.overview}</p>
                    {project.note && <p className="case-note">{project.note}</p>}
                    <ExternalLinks links={project.links} />
                  </div>
                  <dl className="case-facts">
                    {project.role && <div><dt>My role</dt><dd>{project.role}</dd></div>}
                    <div><dt>Collaboration</dt><dd>{project.category === "Work" ? "Company work" : "Freelance"}</dd></div>
                    {project.products.length > 0 && <div><dt>Project scope</dt><dd>{getProjectBadge("connected-products", project.products.length).label}</dd></div>}
                    <div><dt>{project.products.length ? "Across" : "Focus"}</dt><dd>{project.areas.join(" · ")}</dd></div>
                  </dl>
                </div>
                {project.role && (
                  <section className="case-products-section case-role-section">
                    <div className="case-section-heading">
                      <h3>My work at {project.name}</h3>
                      <span>{project.role}</span>
                    </div>
                    {project.roleDescription && <p className="case-role-description">{project.roleDescription}</p>}
                    <div className="product-detail-columns">
                      {project.work && project.work.length > 0 && (
                        <div>
                          <span className="eyebrow">WHAT I WORK ON</span>
                          <ul className="contribution-list">{project.work.map((work) => <li key={work}>{work}</li>)}</ul>
                        </div>
                      )}
                      {project.technologies && project.technologies.length > 0 && (
                        <div>
                          <span className="eyebrow">PRIMARY STACK & TOOLS</span>
                          <div className="case-tech">
                            <div className="project-tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </section>
                )}
                {project.products.length > 0 && (
                  <div className="case-products-section">
                    <div className="case-section-heading"><h3>Inside the project</h3><span>Select a product to explore my work.</span></div>
                    <div className="case-product-grid">
                      {project.products.map((product, index) => {
                        const logo = product.logo ?? project.cover?.logo;

                        return (
                          <button key={product.id} className="case-product-link" onClick={() => selectTab(product.id)}>
                            {logo ? (
                              <Image alt="" className="case-product-logo" height={64} src={logo.src} width={64} />
                            ) : (
                              <span className="case-product-number">0{index + 1}</span>
                            )}
                            <div>
                              <span className="eyebrow">{product.type}</span>
                              <h4>{product.name}</h4>
                              <p>{product.summary}</p>
                              {product.status && <div className="case-product-status"><ProjectBadge badge={product.status} /></div>}
                            </div>
                            <Arrow />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
