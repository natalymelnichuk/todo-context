
import { createContext, useContext } from 'react';
import type { ThemeContextType } from '../types/ToDotypes';

//Create a context for the theme with an initial value of undefined
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

//Custom hook to use the ThemeContext
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}