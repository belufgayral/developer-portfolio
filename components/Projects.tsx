"use client";

import { useLanguage } from "@/context/LanguageContext";
import ProjectCard from "./ProjectCard";
import { useReveal } from "./useReveal";

export default function Projects() {
  const { sections, projects } = useLanguage().data;
  const { elementRef, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      ref={elementRef}
      className={`reveal max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-outline-variant/20 ${
        isVisible ? "is-visible" : ""
      }`}
      id="projects"
    >
      {/* Section Header */}
      <div className="reveal-child flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="font-label-code text-label-code text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {sections.projects.kicker}
          </div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            {sections.projects.title}
          </h2>
        </div>
      </div>

      {/* Bento-style Project Grid */}
      <div className="reveal-child grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
