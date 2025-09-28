import { useLanguage } from "../assets/context/LanguageContext";
import { translations } from "../assets/dictionnaire/translations";

/** Simple i18n getter: "experiences.portfolio.title" → string */
export const useTranslation = () => {
  const { language } = useLanguage();

  return (key) => {
    const keys = key.split(".");
    let result = translations[language];

    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        if (import.meta.env.DEV) {
          console.warn(`Missing i18n key: "${key}" for language "${language}"`);
        }
        return key;
      }
    }
    return result;
  };
};
