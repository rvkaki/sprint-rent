import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';

const DateInput = props => {
  const [t] = useTranslation('common');
  return (
    <InputGroup>
      <InputLeftElement
        children={
          <FontAwesomeIcon icon={faCalendarAlt} size="lg" color="gray.400" />
        }
      />
      <Input
        bg="white"
        borderColor="gray.500"
        placeholder={t('datepicker.placeholder')}
        isReadOnly
        isDisabled={props.isDisabled}
        value={props.value}
        onClick={props.onClick}
      />
    </InputGroup>
  );
};

export default DateInput;
