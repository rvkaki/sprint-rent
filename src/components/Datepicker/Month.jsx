import React from 'react';
import { useMonth } from '@datepicker-react/hooks';
import Day from './Day';
import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const ptWeekDayLabels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];
const ptMonthLabels = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

function Month({ year, month, firstDayOfWeek, left, right }) {
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek,
  });

  const [t, i18n] = useTranslation('common');

  // Check page language
  let weekLabels = i18n.language === 'pt' ? ptWeekDayLabels : weekdayLabels;
  let mLabel =
    i18n.language === 'pt' ? ptMonthLabels[month] + ' ' + year : monthLabel;

  return (
    <Box>
      <Flex direction="row" justify="space-between" m="0 0 16px">
        {left}
        <Box as="p" textAlign="center" fontWeight="bold">
          {mLabel}
        </Box>
        {right}
      </Flex>
      <Grid templateColumns="repeat(7, 1fr)" justifyContent="center">
        {weekLabels.map(dayLabel => (
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
