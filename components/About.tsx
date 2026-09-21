"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useReveal } from "./useReveal";

export default function About() {
  const { sections, manifesto, skillCategories } = useLanguage().data;
  const { elementRef, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      ref={elementRef}
      className={`reveal max-w-7xl mx-auto px-6 md:px-12 py-20 ${
        isVisible ? "is-visible" : ""
      }`}
      id="about"
    >
      {/* Section Header */}
      <div className="reveal-child mb-12">
        <div className="font-label-code text-label-code text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          {sections.about.kicker}
        </div>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
          {sections.about.title}
        </h2>
      </div>

      {/* Bento Grid for Profile Manifesto and Skills Matrix */}
      <div className="reveal-child grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Manifesto Card (5 cols) */}
        <div className="reveal-child lg:col-span-5 bg-surface-container-low rounded-2xl p-8 border border-outline-variant/30 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="font-code-md text-code-md text-secondary">
              {manifesto.title}
            </span>
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
              {manifesto.quote}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {manifesto.paragraph.intro}{" "}
              <strong className="text-on-surface">
                {manifesto.paragraph.pillar1}
              </strong>
              ,{" "}
              <strong className="text-on-surface">
                {manifesto.paragraph.pillar2}
              </strong>
              , y{" "}
              <strong className="text-on-surface">
                {manifesto.paragraph.pillar3}
              </strong>{" "}
              {manifesto.paragraph.outro}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-outline-variant/20 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[20px]">
                architecture
              </span>
            </div>
            <div>
              <div className="font-code-md text-code-md font-semibold text-on-surface">
                {manifesto.badgeTitle}
              </div>
              <div className="font-label-code text-label-code text-outline">
                {manifesto.badgeSubtitle}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Categorized Matrix (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="reveal-child bg-surface-container-low rounded-xl p-6 border border-outline-variant/30"
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`material-symbols-outlined ${category.iconColor} text-[20px]`}
                >
                  {category.icon}
                </span>
                <h3 className="font-code-md text-code-md text-on-surface font-semibold uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded bg-surface-container font-label-code text-label-code text-on-surface border border-outline-variant/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
