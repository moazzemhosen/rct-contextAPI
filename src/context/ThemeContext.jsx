import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(false)
    const toggle = () => {
        if (theme === false) {
            console.log("yes");
            setTheme(true)
        } else {
            setTheme(false);
        }
    }
    return <ThemeContext.Provider value={{theme,toggle}}>{children}</ThemeContext.Provider>;
}