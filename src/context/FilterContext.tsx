

import React, { useState, useEffect } from 'react';
import type { Filter } from '../types/ToDotypes';
import { FilterContext } from '../hooks/useFilter';


//Create a provider component for the filter context
export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    //Initialize the filter state with a default value of 'all'
    const [filter, setFilter] = useState<Filter>('all');

    //Effect to update the localStorage whenever the filter state changes
    useEffect(() => {
        localStorage.setItem('filter', filter);
    }, [filter]);

    //Function to update the filter state
    const updateFilter = (newFilter: Filter) => {
        setFilter(newFilter);
    };

    //Provide the filter and updateFilter function to the context consumers
    return (
        <FilterContext.Provider value={{ filter, setFilter: updateFilter }}>
            {children}
        </FilterContext.Provider>
    );
};



