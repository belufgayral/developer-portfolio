"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      className="relative max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-20 md:pb-28"
      id="home"
    >
      {/* Live Availability Tag */}
      <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/40 mb-8 backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
        </span>
        <span className="font-label-code text-label-code tracking-wider text-secondary uppercase font-semibold">
          {portfolioData.availability.status}
        </span>
        <span className="text-outline font-label-code text-label-code">
          | {portfolioData.availability.scope}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Hero Text & CTA Block (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface tracking-tight leading-tight">
            Desarrolladora{" "}
            <span className="text-primary italic font-light">Fullstack</span> &amp;{" "}
            Diseñadora Web
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Creo experiencias digitales memorables fusionando código escalable y
            arquitectura limpia con diseño centrado en el usuario. +5 años
            materializando interfaces de alto rendimiento con{" "}
            <span className="text-on-surface font-medium">
              React, TypeScript, Node.js, Tailwind
            </span>{" "}
            y sistemas de diseño meticulosos.
          </p>

          {/* Action Buttons Group */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-on-surface text-background font-medium hover:bg-white transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-primary/5"
              href="#projects"
            >
              <span>Ver proyectos destacados</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_downward
              </span>
            </a>
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-surface-container-low border border-outline-variant/40 text-on-surface hover:border-outline-variant hover:bg-surface-container transition-all duration-200"
              href="#contact"
            >
              <span className="material-symbols-outlined text-[18px]">
                description
              </span>
              <span>Descargar CV</span>
            </a>
          </div>
        </div>

        {/* Hero Photo & Editorial Frame (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            {/* Subtle Glow behind image */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-container/20 to-secondary/15 blur-xl opacity-70" />

            {/* Picture container with hairline border & glass panel */}
            <div className="relative rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/40 shadow-2xl p-2">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-surface-container-high flex items-center justify-center">
                {!imgError ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    alt={`${portfolioData.author} — ${portfolioData.headline}`}
                    className="w-full h-full object-cover object-center filter grayscale-[15%] hover:grayscale-0 transition-all duration-500 hover:scale-[1.02]"
                    src={portfolioData.avatar}
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-surface-container-high text-outline gap-3 p-6 text-center">
                    <span className="material-symbols-outlined text-5xl text-primary">
                      person
                    </span>
                    <span className="font-code-md text-code-md text-on-surface">
                      {portfolioData.author}
                    </span>
                    <span className="font-label-code text-label-code text-outline">
                      [Foto de perfil placeholder]
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Monospace Floating Status Pill */}
              <div className="p-3 bg-surface-container-low/90 backdrop-blur-md rounded-lg mt-2 border border-outline-variant/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    terminal
                  </span>
                  <span className="font-code-md text-code-md text-on-surface font-medium">
                    {portfolioData.author}
                  </span>
                </div>
                <span className="font-label-code text-label-code text-outline">
                  {portfolioData.locationShort}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

