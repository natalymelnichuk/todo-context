

import React from "react";
import { ThemeProvider } from "./ThemeContext";
import { FilterProvider } from "./FilterContext";
import { TodoProvider } from "./TodoContext";

interface AppProvidersProps {
    children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({children}) => {
    return (
        <ThemeProvider>
            <FilterProvider>
                <TodoProvider>
                    {children}
                </TodoProvider>
            </FilterProvider>
        </ThemeProvider>
    )
}