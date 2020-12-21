import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
//import pt from 'date-fns/locale/pt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const months = [
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

const DatePicker = props => {
  const [startDate, setStartDate] = useState(null);
  const onChange = date => {
    console.log(date);
    setStartDate(date);
  };

  const format = date => {
    const minutes =
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}h${minutes}`;
  };

  const HeaderButton = props => {
    return (
      <IconButton
        onClick={props.onClick}
        icon={props.icon}
        isDisabled={!props.enabled}
        color="black"
        variant="ghost"
        size="sm"
        _hover={{}}
        _focus={{}}
        _active={{
          opacity: 0.8,
        }}
        _disabled={{
          opacity: 0,
          cursor: 'auto',
        }}
      />
    );
  };

  return <div></div>;
};

export default DatePicker;
