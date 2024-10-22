import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(
        () => localStorage.getItem('language') || 'french'
    );

    useEffect(() => {
        document.body.setAttribute('data-language', language);
        localStorage.setItem('language', language)
    }, [language]);

    const toggleLanguage = () => {
        console.log("language switched")
        setLanguage((prevLanguage) => (prevLanguage === 'french' ? 'english' : 'french'))
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
};