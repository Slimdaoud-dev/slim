"use client"
import React, { createContext,  useEffect, useState, useContext } from 'react';

const ColorTheme = {
    light: 'light',
    dark: 'dark'
}

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        if (storedPrefs && (storedPrefs === ColorTheme.light || storedPrefs === ColorTheme.dark)) {
            return storedPrefs;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return ColorTheme.dark;
        }
    }

    return ColorTheme.light; // light theme as the default;
};

const ThemeContext = createContext({
    theme: ColorTheme.light,
    setTheme: () => {} // Corrected
});

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getInitialTheme);

    const rawSetTheme = (rawTheme) => {
        const root = window.document.documentElement;
        const isDark = rawTheme === ColorTheme.dark;

        root.classList.remove(isDark ? ColorTheme.light : ColorTheme.dark);
        root.classList.add(rawTheme);

        localStorage.setItem('color-theme', rawTheme);
    };

    useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;

export const useThemeContext = () => useContext(ThemeContext);
