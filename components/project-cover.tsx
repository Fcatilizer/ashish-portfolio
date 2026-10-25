import Image from "next/image";

import type { ProjectCoverComposition, ProjectImage, ProjectVisual } from "@/app/projects/workProjectsData";

function ProductComposition({ composition }: { composition: ProjectCoverComposition }) {
  return (
    <>
      <div className="cover-orbit cover-orbit-one" />
      <div className="cover-orbit cover-orbit-two" />
      <div className={composition.mobile ? "cover-browser" : "cover-browser cover-browser-solo"}>
        <div className="cover-browser-bar">
          <span /><span /><span />
          <span className="cover-browser-address">
            {composition.address}
          </span>
        </div>
        <Image
          alt=""
          className="cover-desktop-image"
          height={composition.desktop.height}
          sizes="(max-width: 640px) 80vw, 520px"
          src={composition.desktop.src}
          width={composition.desktop.width}
        />
      </div>
      {composition.mobile && (
        <div className="cover-phone">
          <Image
            alt=""
            height={composition.mobile.height}
            sizes="(max-width: 640px) 110px, 145px"
            src={composition.mobile.src}
            width={composition.mobile.width}
          />
        </div>
      )}
      <div className="cover-product-label">
        <span className="cover-label-dot" />
        {composition.caption}
      </div>
      {composition.logo && (
        <Image
          alt={composition.logo.alt}
          className="cover-brand-logo"
          height={512}
          sizes="36px"
          src={composition.logo.src}
          width={512}
        />
      )}
    </>
  );
}

export function ProjectCover({
  visual,
  image,
  composition,
}: { visual: ProjectVisual; composition?: ProjectCoverComposition; image?: never } | { image: ProjectImage; visual?: never; composition?: never }) {
  if (image) {
    return (
      <div className={["project-cover", "cover-image", "cover-image-" + image.presentation].join(" ")}>
        <Image
          fill
          alt={image.alt}
          className="project-cover-image"
          sizes={image.presentation === "icon" ? "160px" : "(max-width: 600px) 90vw, (max-width: 1200px) 45vw, 530px"}
          src={image.src}
        />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={["project-cover", "cover-" + visual].join(" ")}>
      {composition && <ProductComposition composition={composition} />}
    </div>
  );
}
