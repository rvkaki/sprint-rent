import React, { useRef, useContext } from 'react';
import { isEndDate, isStartDate, useDay } from '@datepicker-react/hooks';
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
    startDate,
    endDate,
  } = useContext(DatepickerContext);
  const {
    tabIndex,
    onKeyDown,
    onClick,
    onMouseEnter,
    disabledDate,
    isWithinHoverRange,
    isSelectedStartOrEnd,
    isSelected,
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
        {isSelectedStartOrEnd ? (
          <Box
            borderLeftRadius={isStartDate(date, startDate) ? '50%' : 0}
            borderRightRadius={isEndDate(date, endDate) ? '50%' : 0}
            bg="gray.500"
          />
        ) : null}
        <Box
          as="button"
          onClick={onClick}
          onKeyDown={onKeyDown}
          onMouseEnter={onMouseEnter}
          tabIndex={tabIndex}
          type="button"
          ref={dayRef}
          borderLeftRadius={
            (isSelected || isWithinHoverRange) && weekDay === 0 ? '50%' : 0
          }
          borderRightRadius={
            (isSelected || isWithinHoverRange) && weekDay === 6 ? '50%' : 0
          }
          borderRadius={isSelectedStartOrEnd ? '50%' : 'auto'}
          background={
            isSelectedStartOrEnd
              ? 'gray.800'
              : isSelected
              ? 'gray.500'
              : isWithinHoverRange
              ? 'gray.500'
              : 'white'
          }
          color={
            disabledDate
              ? 'gray.500'
              : isSelected || isSelectedStartOrEnd || isWithinHoverRange
              ? 'white'
              : 'black'
          }
        >
          {day}
        </Box>
      </>
    </AspectRatio>
  );
}

export default Day;
