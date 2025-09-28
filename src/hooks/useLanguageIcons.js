import { useMemo } from "react";
import { useLanguage } from "../assets/context/LanguageContext";
import UK_flag from "../assets/pictures/icons/flag-UK.svg";
import FR_flag from "../assets/pictures/icons/flag-FR.svg";

export function useLanguageIcons() {
  const { language } = useLanguage();

  return useMemo(
    () => ({
      language: language === "french" ? UK_flag : FR_flag,
    }),
    [language]
  );
}
