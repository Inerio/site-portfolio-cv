import { useLanguage } from "../assets/context/LanguageContext";
import { translations } from "../assets/dictionnaire/translations";

export const useTranslation = () => {
  const { language } = useLanguage();

  return (key) => {
    // Splits the key into an array of sub-keys (for nested paths)
    const keys = key.split(".");

    // Starts with the translation object of the current language
    let result = translations[language];

    // Loops through each sub-key to traverse the object
    for (const k of keys) {
      result = result?.[k]; // Si la clé existe, descend plus bas
      if (result === undefined) {
        console.log(`Clé non trouvée : ${key}`);
        return key; // If the key does not exist, return the raw key
      }
    }

    return result;
  };
};
