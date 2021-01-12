import React from 'react';

const AppContext = React.createContext({
  startDate: null,
  endDate: null,
  startLocation: null,
  endLocation: null,
  car: null,
  setStartDate: () => {},
  setEndDate: () => {},
  setStartLocation: () => {},
  setEndLocation: () => {},
  setCar: () => {},
  filters: [],
  toggleFilters: () => {},
});

export default AppContext;
