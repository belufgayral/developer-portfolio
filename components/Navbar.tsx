"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const { lang, setLang, data } = useLanguage();
  const { navigation, brand, author } = data;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Offset para el header fijo
      const scrollBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

      if (scrollBottom) {
        setActiveSection("contact");
        return;
      }

      for (const link of [...navigation.links].reverse()) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigation.links]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Brand Logo / Identity */}
        <a className="flex items-center gap-2 group" href="#home">
          <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block transition-transform duration-300 group-hover:scale-125" />
          <span className="font-code-md text-code-md font-bold text-on-surface tracking-wider">
            {brand}
          </span>
          <span className="font-label-code text-label-code text-outline hidden sm:inline ml-1">
            // {author}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-code-md text-code-md tracking-tight">
          {navigation.links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`pb-1 border-b transition-all duration-200 ${
                  isActive
                    ? "text-primary font-medium border-primary"
                    : "text-on-surface-variant border-transparent hover:text-primary hover:border-primary"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Trailing Controls: Language Switcher, Action Icon & Primary CTA */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Language Switcher Pill (ES / EN) */}
          <div
            aria-label="Language selector"
            className="flex items-center bg-surface-container-low border border-outline-variant/30 rounded-full p-0.5"
            role="group"
          >
            <button
              onClick={() => setLang("es")}
              type="button"
              className={`px-2.5 py-1 text-label-code font-label-code rounded-full transition-all duration-150 cursor-pointer ${
                lang === "es"
                  ? "bg-surface-container-high text-primary border border-outline-variant/40 font-semibold"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              type="button"
              className={`px-2.5 py-1 text-label-code font-label-code rounded-full transition-all duration-150 cursor-pointer ${
                lang === "en"
                  ? "bg-surface-container-high text-primary border border-outline-variant/40 font-semibold"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              EN
            </button>
          </div>

          {/* Trailing Primary Action */}
          <a
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-inverse-surface text-inverse-on-surface hover:bg-white font-code-md text-code-md font-medium transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
            href="#contact"
          >
            <span>{navigation.cta}</span>
            <span className="material-symbols-outlined text-[16px]">mail</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            aria-label={navigation.menuAria}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center text-on-surface-variant hover:text-on-surface border border-outline-variant/30 rounded cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest/95 backdrop-blur-xl border-b border-outline-variant/30 px-6 py-4 space-y-3 font-code-md text-code-md animate-fadeIn">
          {navigation.links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                onClick={() => setIsMobileMenuOpen(false)}
                href={`#${link.id}`}
                className={`block py-1.5 pl-2 border-l-2 transition-all duration-150 ${
                  isActive
                    ? "text-primary font-medium border-primary"
                    : "text-on-surface-variant border-transparent hover:text-primary hover:border-primary"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-2 border-t border-outline-variant/20 flex items-center justify-between">
            <span className="text-label-code font-label-code text-outline">
              {navigation.languageLabel} {lang.toUpperCase()}
            </span>
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-label-code font-label-code text-primary underline"
              href="#contact"
            >
              {navigation.cta} →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

