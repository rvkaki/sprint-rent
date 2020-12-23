import React from 'react';
import {
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = props => {
  return (
    <Stack spacing={1}>
      <Text color="white" fontWeight="medium">
        {props.label}
      </Text>
      <InputGroup>
        <InputLeftElement
          children={
            <FontAwesomeIcon size="lg" icon={faMapMarkerAlt} color="gray.400" />
          }
        />
        <Input bg="white" placeholder="Cidade, código postal, etc." />
      </InputGroup>
    </Stack>
  );
};

export default SearchBar;
