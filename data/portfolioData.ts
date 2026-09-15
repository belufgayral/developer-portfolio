import es from "./locales/es";
import en from "./locales/en";
import { PortfolioData, Language } from "./types";

export * from "./types";
export { es, en };

export const portfolioDataByLang: Record<Language, PortfolioData> = {
  es,
  en,
};

export const portfolioData: PortfolioData = es;
export default portfolioData;
