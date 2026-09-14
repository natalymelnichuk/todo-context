
import React, { useState, useEffect } from 'react';
import type { ThemeType } from '../types/ToDotypes';
import { ThemeContext } from '../hooks/useTheme';


//Create a provider component for the theme context
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    //Initialize the theme state with a default value of 'light' or take it from localStorage if it exists
    const [theme, setTheme] = useState<ThemeType>(() => {
        const savedTheme = localStorage.getItem('theme') as ThemeType;
        return savedTheme || 'light';
    });

    //Effect to update the localStorage whenever the theme state changes
    useEffect(() => {
        localStorage.setItem('theme', theme);
        //Update the document's body class to reflect the current theme
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    //Function to toggle between 'light' and 'dark' themes
    const toggleTheme = () => {
        setTheme((prevTheme: ThemeType) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    //Provide the theme and toggleTheme function to the context consumers
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

