/* eslint react-refresh/only-export-components: "off" */
import { createContext, useContext, useEffect, useMemo, useState } from "react"

const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => { },
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light")

    useEffect(() => {
        document.body.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"))

    const value = useMemo(() => ({ theme, toggleTheme }), [theme])

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
