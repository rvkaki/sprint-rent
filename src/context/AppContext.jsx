import React from 'react';

const AppContext = React.createContext({
  startDate: null,
  endDate: null,
  startLocation: null,
  endLocation: null,
  setStartDate: () => {},
  setEndDate: () => {},
  setStartLocation: () => {},
  setEndLocation: () => {},
  filters: [],
  toggleFilters: () => {},
});

export default AppContext;
