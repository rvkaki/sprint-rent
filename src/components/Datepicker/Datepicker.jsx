import React, { useEffect, useRef, useState } from 'react';
import { useDatepicker, START_DATE } from '@datepicker-react/hooks';
import Month from './Month';
import DatepickerContext from './datepickerContext';
import { Box, Button, Flex, Grid, IconButton } from '@chakra-ui/react';
import NavButton from './NavButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import DateInput from './DateInput';

const Datepicker = props => {
  const [state, setState] = useState({
    minBookingDate: new Date(),
    startDate: null,
    endDate: null,
    focusedInput: null,
  });

  const ref = useRef(null);

  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonths,
    goToNextMonths,
  } = useDatepicker({
    startDate: state.startDate,
    endDate: state.endDate,
    focusedInput: state.focusedInput,
    onDatesChange: handleDateChange,
    numberOfMonths: 1,
    minBookingDate: state.minBookingDate,
  });

  function handleDateChange(data) {
    setState({ ...state, ...data });
  }

  function isBefore(date, month) {
    if (date.getFullYear() === month.year) return date.getMonth() < month.month;
    else if (date.getFullYear() < month.year) return true;
    else return false;
  }

  function format(date) {
    if (!date) return '';

    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const month =
      date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1;
    const year = date.getFullYear();

    return day + '/' + month + '/' + year;
  }

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        state.focusedInput &&
        ref.current &&
        !ref.current.contains(event.target)
      )
        setState({ ...state, focusedInput: null });
    }
    document.addEventListener('click', handleOutsideClick, true);
    return () => {
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, [state]);

  return (
    <DatepickerContext.Provider
      value={{
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover,
        startDate: state.startDate,
        endDate: state.endDate,
      }}
    >
      <Box position="relative">
        <DateInput
          value={
            state.startDate
              ? format(state.startDate) + ' - ' + format(state.endDate)
              : ''
          }
          onClick={() => setState({ ...state, focusedInput: START_DATE })}
        />
        {state.focusedInput ? (
          <Box
            ref={ref}
            position="absolute"
            bottom={10}
            right={0}
            zIndex="sticky"
            bg="white"
            boxShadow="xl"
            border="1px"
            borderColor="gray.300"
          >
            <Flex direction="row" justify="space-between">
              <Button
                leftIcon={
                  <FontAwesomeIcon
                    icon={faRedoAlt}
                    size="lg"
                    color="gray.800"
                  />
                }
                onClick={() =>
                  setState({ ...state, startDate: null, endDate: null })
                }
                variant="ghost"
                size="sm"
                _hover={{
                  transform: 'scale(1.1)',
                }}
                _focus={{}}
                _active={{}}
              >
                Refazer
              </Button>
              <IconButton
                icon={
                  <FontAwesomeIcon icon={faTimes} size="lg" color="gray.800" />
                }
                onClick={() => setState({ ...state, focusedInput: null })}
                variant="ghost"
                size="sm"
                _hover={{
                  transform: 'scale(1.1)',
                }}
                _focus={{}}
                _active={{}}
              />
            </Flex>
            <Grid
              m="32px 0 0"
              templateColumns={`repeat(${activeMonths.length}, 300px)`}
              gap="0 64px"
            >
              {activeMonths.map(month => (
                <Month
                  key={`${month.year}-${month.month}`}
                  year={month.year}
                  month={month.month}
                  firstDayOfWeek={firstDayOfWeek}
                  left={
                    <NavButton
                      side="left"
                      enabled={isBefore(state.minBookingDate, month)}
                      onClick={goToPreviousMonths}
                    />
                  }
                  right={
                    <NavButton side="right" enabled onClick={goToNextMonths} />
                  }
                />
              ))}
            </Grid>
          </Box>
        ) : null}
      </Box>
    </DatepickerContext.Provider>
  );
};

export default Datepicker;
