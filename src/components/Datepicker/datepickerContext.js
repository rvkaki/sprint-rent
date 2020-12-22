import React from 'react';

export const datepickerContextDefaultValue = {
  focusedDate: null,
  isDateFocused: () => false,
  isDateSelected: () => false,
  isDateHovered: () => false,
  isDateBlocked: () => false,
  isFirstOrLastSelectedDate: () => false,
  onDateFocus: () => {},
  onDateHover: () => {},
  onDateSelect: () => {},
  startDate: Date,
  endDate: Date,
};

export default React.createContext(datepickerContextDefaultValue);
