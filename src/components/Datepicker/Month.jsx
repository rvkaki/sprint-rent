import React from 'react';
import { useMonth } from '@datepicker-react/hooks';
import Day from './Day';
import { Box, Flex, Grid, Text } from '@chakra-ui/react';

function Month({ year, month, firstDayOfWeek, left, right }) {
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek,
  });

  return (
    <Box>
      <Flex direction="row" justify="space-between" m="0 0 16px">
        {left}
        <Box as="p" textAlign="center" fontWeight="bold">
          {monthLabel}
        </Box>
        {right}
      </Flex>
      <Grid templateColumns="repeat(7, 1fr)" justifyContent="center">
        {weekdayLabels.map(dayLabel => (
          <Text textAlign="center" fontWeight="medium" key={dayLabel}>
            {dayLabel}
          </Text>
        ))}
      </Grid>
      <Grid templateColumns="repeat(7, 1fr)" justifyContent="center">
        {days.map((day, idx) => (
          <Day
            date={day.date}
            weekDay={idx % 7}
            key={day.dayLabel}
            day={day.dayLabel}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default Month;
