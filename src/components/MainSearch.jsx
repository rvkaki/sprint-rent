import React from 'react';
import {
  Checkbox,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Datepicker from './Datepicker/Datepicker.jsx';

const MainSearch = () => {
  return (
    <>
      <Stack
        direction={['column', 'row']}
        spacing={3}
        display="flex"
        alignItems="flex-start"
        w="80%"
        bg="black"
        p="16px"
        borderRadius="lg"
      >
        <Stack flex={3} spacing={1}>
          <Text color="white" fontWeight="medium">
            Local de Levantamento
          </Text>
          <InputGroup>
            <InputLeftElement
              children={
                <FontAwesomeIcon
                  size="lg"
                  icon={faMapMarkerAlt}
                  color="gray.400"
                />
              }
            />
            <Input bg="white" placeholder="Cidade, código postal, etc." />
          </InputGroup>
          <Checkbox defaultIsChecked>
            <Text color="white" fontSize="sm">
              Entrega no local de levantamento
            </Text>
          </Checkbox>
        </Stack>
        <Stack flex={1} spacing={1} position="relative">
          <Text color="white" fontWeight="medium">
            Data
          </Text>
          <Datepicker />
        </Stack>
      </Stack>
    </>
  );
};

export default MainSearch;
