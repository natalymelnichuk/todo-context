
import { createContext, useContext } from 'react';
import type { FilterContextType } from '../types/ToDotypes';

//Create a context for the filter with an initial value of all
export const FilterContext = createContext<FilterContextType | undefined>(undefined);

//Custom hook to use the FilterContext
export const useFilter = (): FilterContextType => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error('useFilter must be used within a FilterProvider');
    }
    return context;
}
