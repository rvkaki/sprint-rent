import React from 'react';

const FilterContext = React.createContext({
    filters: [],
    toggleFilters: () => {}
});

export default FilterContext;
