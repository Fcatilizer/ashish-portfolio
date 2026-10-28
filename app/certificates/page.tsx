"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { PageHero } from "@/components/page-hero";

import {
  certificateCategories,
  certificatePlatforms,
  certificates,
  type Certificate,
  type CertificateCategory,
} from "./certificatesData";
import "./certificates.css";

function Arrow() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path d="M6 18 18 6M6 6h12v12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function CertificateCard({ certificate, index }: { certificate: Certificate; index: number }) {
  const platform = certificatePlatforms[certificate.platform];

  return (
    <article className="credential-card">
      <span aria-hidden="true" className="credential-index">{String(index + 1).padStart(2, "0")}</span>
      <div className="credential-logo">
        <Image alt={platform.name + " logo"} height={72} src={platform.logo} width={72} />
      </div>
      <div className="credential-body">
        <p className="credential-metadata">
          <span>{certificateCategories[certificate.category].label}</span>
          <span aria-hidden="true" className="credential-meta-separator">/</span>
          <span>{certificate.issuer} <span className="credential-platform">via {platform.name}</span></span>
        </p>
        <h2>{certificate.name}</h2>
        <p className="credential-description">{certificate.description}</p>
        <ul aria-label="Course topics" className="credential-topics">
          {certificate.topics.map((topic) => <li key={topic}>{topic}</li>)}
        </ul>
      </div>
      <a
        aria-label={"View credential for " + certificate.name + " on " + platform.name}
        className="credential-link"
        href={certificate.credentialUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        View credential <Arrow />
      </a>
    </article>
  );
}

const providers = Array.from(new Map(certificates.map((certificate) => [
  certificate.issuer + "-" + certificate.platform,
  { issuer: certificate.issuer, platform: certificatePlatforms[certificate.platform] },
])).values());

export default function CertificatesPage() {
  const [category, setCategory] = useState<CertificateCategory | "all">("all");
  const visibleCertificates = certificates.filter((certificate) => category === "all" || certificate.category === category);

  return (
    <div className="certificates-page">
      <PageHero
        eyebrow="LEARNING / CREDENTIALS"
        title="Certificates &"
        accent="continued learning."
        description="Courses in web development, cloud computing, and version control that support the way I build software."
        aside={
          <aside aria-label="Course providers" className="certificates-providers">
            <span className="certificates-eyebrow">COURSES FROM</span>
            <div className="certificates-provider-list">
              {providers.map((provider) => (
                <div key={provider.issuer + "-" + provider.platform.name} className="certificates-provider">
                  <Image alt={provider.platform.name + " logo"} height={64} src={provider.platform.logo} width={64} />
                  <div><strong>{provider.issuer}</strong><span>via {provider.platform.name}</span></div>
                </div>
              ))}
            </div>
          </aside>
        }
      />

      <div className="certificates-toolbar">
        <div aria-label="Filter certificates" className="certificates-filters" role="group">
          <button aria-controls="credential-collection" aria-pressed={category === "all"} className={category === "all" ? "certificate-filter is-active" : "certificate-filter"} onClick={() => setCategory("all")}>
            All <span>{String(certificates.length).padStart(2, "0")}</span>
          </button>
          {Object.keys(certificateCategories).map((key) => {
            const id = key as CertificateCategory;
            const definition = certificateCategories[id];
            const count = certificates.filter((certificate) => certificate.category === id).length;

            return (
              <button
                key={id}
                aria-controls="credential-collection"
                aria-pressed={category === id}
                className={category === id ? "certificate-filter is-active" : "certificate-filter"}
                title={definition.label}
                onClick={() => setCategory(id)}
              >
                {definition.shortLabel} <span>{String(count).padStart(2, "0")}</span>
              </button>
            );
          })}
        </div>
        <span className="certificates-toolbar-note">A foundation for the work.</span>
      </div>

      <section aria-label="Certificate archive" id="credential-collection">
        <div className="certificates-collection-heading">
          <p>{category === "all" ? "The credential archive" : certificateCategories[category].label}</p>
          <span aria-live="polite">{visibleCertificates.length} {visibleCertificates.length === 1 ? "credential" : "credentials"}</span>
        </div>
        <div className="credential-list">
          {visibleCertificates.map((certificate) => <CertificateCard key={certificate.id} certificate={certificate} index={certificates.indexOf(certificate)} />)}
        </div>
      </section>

      <footer className="certificates-footer">
        <div>
          <span className="certificates-eyebrow">LEARNING IN PRACTICE</span>
          <h2>See what I build with it.</h2>
          <p>Explore my web platforms, mobile apps, and backend work.</p>
        </div>
        <Link href="/projects">View my projects <Arrow /></Link>
      </footer>
    </div>
  );
}
