import { portfolioData } from "@/data/portfolioData";

export default function About() {
  return (
    <section
      className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-outline-variant/20"
      id="about"
    >
      {/* Section Header */}
      <div className="mb-12">
        <div className="font-label-code text-label-code text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          02 / SOBRE MÍ &amp; FILOSOFÍA
        </div>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
          El equilibrio entre rigor de ingeniería y sensibilidad de diseño
        </h2>
      </div>

      {/* Bento Grid for Profile Manifesto and Skills Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Manifesto Card (5 cols) */}
        <div className="lg:col-span-5 bg-surface-container-low rounded-2xl p-8 border border-outline-variant/30 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="font-code-md text-code-md text-secondary">
              {portfolioData.manifesto.title}
            </span>
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
              {portfolioData.manifesto.quote}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Mi trabajo se fundamenta en tres pilares irremplazables:{" "}
              <strong className="text-on-surface">
                accesibilidad universal (a11y)
              </strong>
              ,{" "}
              <strong className="text-on-surface">
                código mantenible y tipado estricto
              </strong>
              , y{" "}
              <strong className="text-on-surface">
                micro-interacciones deliberadas
              </strong>{" "}
              que transmiten elegancia y solidez.
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
                {portfolioData.manifesto.badgeTitle}
              </div>
              <div className="font-label-code text-label-code text-outline">
                {portfolioData.manifesto.badgeSubtitle}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Categorized Matrix (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {portfolioData.skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/30"
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

