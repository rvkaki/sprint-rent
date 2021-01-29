import React, { useRef, useContext } from 'react';
import { useDay } from '@datepicker-react/hooks';
import DatepickerContext from './datepickerContext';
import { AspectRatio, Box } from '@chakra-ui/react';

function Day({ day, date, weekDay }) {
  const dayRef = useRef(null);
  const {
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover,
  } = useContext(DatepickerContext);
  const {
    tabIndex,
    onKeyDown,
    onClick,
    onMouseEnter,
    disabledDate,
    isSelectedStartOrEnd,
  } = useDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    dayRef,
  });

  if (!day) {
    return <Box />;
  }

  return (
    <AspectRatio ratio={1} position="relative">
      <>
        <Box
          as="button"
          onClick={onClick}
          onKeyDown={onKeyDown}
          onMouseEnter={onMouseEnter}
          tabIndex={tabIndex}
          type="button"
          ref={dayRef}
          borderRadius={isSelectedStartOrEnd ? '50%' : 'auto'}
          background={isSelectedStartOrEnd ? 'gray.800' : 'white'}
          color={
            disabledDate ? 'gray.500' : isSelectedStartOrEnd ? 'white' : 'black'
          }
        >
          {day}
        </Box>
      </>
    </AspectRatio>
  );
}

export default Day;
