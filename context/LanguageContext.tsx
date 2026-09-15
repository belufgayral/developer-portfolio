"use client";

import React, { useEffect } from "react";
import i18n, { usePortfolioTranslation } from "@/i18n/config";
import { Language } from "@/data/types";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { data, lang } = usePortfolioTranslation();

  useEffect(() => {
    try {
      const saved = localStorage.getItem("preferred_lang") as Language | null;
      if (saved && (saved === "es" || saved === "en") && i18n.language !== saved) {
        i18n.changeLanguage(saved);
      }
    } catch {
      // Ignorar si localStorage no está disponible
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = data.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", data.meta.description);
  }, [data, lang]);

  return <>{children}</>;
}

export function useLanguage() {
  const { lang, changeLanguage, data, t, i18n: i18nInstance } = usePortfolioTranslation();
  return {
    lang,
    setLang: changeLanguage,
    data,
    t,
    i18n: i18nInstance,
  };
}

