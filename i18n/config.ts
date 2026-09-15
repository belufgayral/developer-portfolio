import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import es from "@/data/locales/es";
import en from "@/data/locales/en";
import { Language, PortfolioData } from "@/data/types";

export const resources = {
  es: { translation: es },
  en: { translation: en },
} as const;

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });
}

export function usePortfolioTranslation() {
  const { t, i18n: i18nInstance } = useTranslation();
  const currentLang = (i18nInstance.language?.slice(0, 2) || "es") as Language;
  const lang: Language = currentLang === "en" ? "en" : "es";
  const data: PortfolioData = resources[lang].translation;

  const changeLanguage = (newLang: Language) => {
    i18nInstance.changeLanguage(newLang);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("preferred_lang", newLang);
      } catch {
        // Ignorar
      }
    }
  };

  return {
    t,
    i18n: i18nInstance,
    lang,
    data,
    changeLanguage,
  };
}

export default i18n;

