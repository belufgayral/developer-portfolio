import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { brand, footer } = portfolioData;

  return (
    <footer className="w-full bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-code-md text-code-md text-on-surface font-semibold">
            {brand}
          </span>
          <span className="hidden sm:inline text-outline-variant">•</span>
          <p className="font-label-code text-label-code text-on-surface-variant">
            {footer.copyright}
          </p>
        </div>

        {/* Navigation Anchors */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-label-code text-label-code text-on-surface-variant">
          {footer.links.map((link) => (
            <a
              key={link.id}
              className="hover:text-primary transition-colors duration-150"
              href={`#${link.id}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
