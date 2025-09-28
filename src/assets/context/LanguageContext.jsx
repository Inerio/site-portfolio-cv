/* eslint react-refresh/only-export-components: "off" */
import { createContext, useContext, useEffect, useMemo, useState } from "react"

const LanguageContext = createContext({
    language: "french",
    toggleLanguage: () => { },
})

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => localStorage.getItem("language") || "french")

    useEffect(() => {
        document.body.setAttribute("data-language", language)
        localStorage.setItem("language", language)
    }, [language])

    const toggleLanguage = () =>
        setLanguage(prev => (prev === "french" ? "english" : "french"))

    const value = useMemo(() => ({ language, toggleLanguage }), [language])

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
