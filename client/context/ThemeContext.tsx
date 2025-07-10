"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Theme = "theme1" | "theme2";

const ThemeContext = createContext<{
    theme: Theme;
  }>({
    theme: 'theme1',
  });
  

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("theme1");

    const toggleTheme = () => setTheme((prev) => prev === "theme1" ? "theme2" : "theme1");

    useEffect(() => {
        const interval = setInterval(() => {
          toggleTheme();
        }, 10000); // every 10 seconds
    
        return () => clearInterval(interval);
      }, []);

    return (
        <ThemeContext.Provider value={{ theme }}>
            {children}
        </ThemeContext.Provider>
    )
}