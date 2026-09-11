import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-code-md text-code-md text-on-surface font-semibold">
            {portfolioData.brand}
          </span>
          <span className="hidden sm:inline text-outline-variant">•</span>
          <p className="font-label-code text-label-code text-on-surface-variant">
            © 2025 Senior Fullstack Engineer &amp; Designer. Built with precision.
          </p>
        </div>

        {/* Navigation Anchors */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-label-code text-label-code text-on-surface-variant">
          <a
            className="hover:text-primary transition-colors duration-150"
            href="#home"
          >
            Inicio
          </a>
          <a
            className="hover:text-primary transition-colors duration-150"
            href="#projects"
          >
            Proyectos
          </a>
          <a
            className="hover:text-primary transition-colors duration-150"
            href="#about"
          >
            Sobre Mí
          </a>
          <a
            className="hover:text-primary transition-colors duration-150"
            href="#contact"
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}

