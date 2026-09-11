"use client";

import { useState } from "react";
import { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="project-card group bg-surface-container-low rounded-2xl border border-outline-variant/30 overflow-hidden hover:border-outline-variant/70 transition-all duration-300 flex flex-col">
      {/* Media frame */}
      <div className="relative h-60 bg-surface-container-high overflow-hidden border-b border-outline-variant/20 flex items-center justify-center">
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.alt}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
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
              [Preview placeholder]
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
          <details className="group/detail text-on-surface-variant font-body-md text-body-md mb-6 transition-all duration-300">
            <summary className="cursor-pointer list-none inline-flex items-center gap-1 font-label-code text-label-code text-primary hover:underline focus:outline-none mb-3 py-1">
              <span className="group-open/detail:hidden inline-flex items-center gap-1">
                Expandir detalles{" "}
                <span className="material-symbols-outlined text-[16px]">
                  expand_more
                </span>
              </span>
              <span className="hidden group-open/detail:inline-flex items-center gap-1">
                Colapsar detalles{" "}
                <span className="material-symbols-outlined text-[16px]">
                  expand_less
                </span>
              </span>
            </summary>
            <div className="space-y-3 pt-2 text-body-sm font-body-sm text-outline border-t border-outline-variant/20">
              <p className="text-body-md text-on-surface-variant">
                {project.description}
              </p>
              <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/20 space-y-2">
                <p>
                  <strong className="text-on-surface font-code-md text-code-md">
                    Desafío:
                  </strong>{" "}
                  {project.details.challenge}
                </p>
                <p>
                  <strong className="text-on-surface font-code-md text-code-md">
                    Arquitectura:
                  </strong>{" "}
                  {project.details.architecture}
                </p>
                <p>
                  <strong className="text-on-surface font-code-md text-code-md">
                    Resultados:
                  </strong>{" "}
                  {project.details.results}
                </p>
              </div>
            </div>
          </details>
        </div>

        {/* Footer links */}
        <div className="flex items-center justify-end pt-4 border-t border-outline-variant/20">
          <div className="flex items-center gap-3">
            <a
              className="text-on-surface-variant hover:text-on-surface transition-colors"
              href={project.repoUrl}
              title="Ver repositorio de código"
            >
              <span className="material-symbols-outlined text-[20px]">code</span>
            </a>
            <a
              className="inline-flex items-center gap-1 font-label-code text-label-code text-on-surface hover:text-primary transition-colors"
              href={project.demoUrl}
            >
              <span>Demo Live</span>
              <span className="material-symbols-outlined text-[16px]">
                north_east
              </span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

