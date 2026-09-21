"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Project } from "@/data/types";

interface ProjectCardProps {
  project: Project;
}

function hasValidSource(source: string | undefined): boolean {
  if (!source?.trim()) return false;

  try {
    new URL(source, "http://localhost");
    return true;
  } catch {
    return false;
  }
}

function hasValidDemoUrl(url: string | undefined): boolean {
  if (!url?.trim()) return false;
  if (url.startsWith("#")) return url.length > 1;

  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
  } catch {
    return false;
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imgError, setImgError] = useState(
    !hasValidSource(project.image),
  );
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const { projectLabels } = useLanguage().data;
  const hasDemoUrl = hasValidDemoUrl(project.demoUrl);

  return (
    <article
      className="reveal-child project-card group bg-surface-container-low rounded-2xl border border-outline-variant/30 overflow-hidden hover:border-outline-variant/70 transition-all duration-300 flex flex-col"
    >
      {/* Media frame */}
      <div className="relative h-60 bg-surface-container-high overflow-hidden border-b border-outline-variant/20 flex items-center justify-center">
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.alt}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-surface-container-high text-outline gap-2 p-6 text-center">
            <span className="material-symbols-outlined text-4xl text-primary">
              image
            </span>
            <span className="font-code-md text-code-md text-on-surface">
              {project.title}
            </span>
            <span className="font-label-code text-label-code text-outline">
              {projectLabels.placeholderImageText}
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-background/80 backdrop-blur-md border border-outline-variant/40 font-label-code text-label-code text-on-surface">
          {project.badge}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
        <div>
          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-code text-label-code text-on-surface-variant border border-outline-variant/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
            {project.title}
          </h3>

          {/* Collapsible Details */}
          <div className="text-on-surface-variant font-body-md text-body-md mb-6">
            <button
              aria-controls={`project-details-${project.id}`}
              aria-expanded={isDetailsOpen}
              className={`details-toggle cursor-pointer inline-flex items-center gap-1 font-label-code text-label-code text-primary focus:outline-none py-1 ${
                isDetailsOpen ? "is-expanded" : ""
              }`}
              onClick={() => setIsDetailsOpen((isOpen) => !isOpen)}
              type="button"
            >
              <span className={isDetailsOpen ? "hidden" : "inline-flex"}>
                {projectLabels.expandDetails}
              </span>
              <span className={isDetailsOpen ? "inline-flex" : "hidden"}>
                {projectLabels.collapseDetails}
              </span>
              <span className="details-chevron material-symbols-outlined text-[16px]">
                expand_more
              </span>
            </button>
            <div
              className={`details-content ${isDetailsOpen ? "is-expanded" : ""}`}
              id={`project-details-${project.id}`}
            >
              <div className="details-content-inner space-y-3 pt-2 text-body-sm font-body-sm text-outline border-t border-outline-variant/20">
                <p className="text-body-md text-on-surface-variant">
                  {project.description}
                </p>
                <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/20 space-y-2">
                  <p>
                    <strong className="text-on-surface font-code-md text-code-md">
                      {projectLabels.challenge}
                    </strong>{" "}
                    {project.details.challenge}
                  </p>
                  <p>
                    <strong className="text-on-surface font-code-md text-code-md">
                      {projectLabels.architecture}
                    </strong>{" "}
                    {project.details.architecture}
                  </p>
                  <p>
                    <strong className="text-on-surface font-code-md text-code-md">
                      {projectLabels.results}
                    </strong>{" "}
                    {project.details.results}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer links */}
        <div className="flex items-center justify-end pt-4 border-t border-outline-variant/20">
          {hasDemoUrl ? (
            <a
              className="inline-flex items-center gap-1 font-label-code text-label-code text-on-surface  hover:text-primary transition-colors"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{projectLabels.demoLive}</span>
              <span className="material-symbols-outlined text-[16px]">
                north_east
              </span>
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex items-center gap-1 font-label-code text-label-code text-outline cursor-not-allowed"
            >
              <span>{projectLabels.demoLive}</span>
              <span className="material-symbols-outlined text-[16px]">
                block
              </span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
