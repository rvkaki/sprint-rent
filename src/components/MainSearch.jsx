import React, { useState } from 'react';
import { Checkbox, Stack, Text } from '@chakra-ui/react';
import Datepicker from './Datepicker/Datepicker.jsx';
import SearchBar from './SearchBar.jsx';

const MainSearch = () => {
  const [checked, setChecked] = useState(true);
  return (
    <Stack
      w="80%"
      position="absolute"
      top="87%"
      bg="black"
      p="16px"
      borderRadius="lg"
      spacing={4}
    >
      <Stack
        spacing={3}
        direction={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'center', md: 'center' }}
      >
        <Stack flex={3} w="100%">
          <SearchBar label="Local de Levantamento" />
          {!checked ? <SearchBar label="Local de Entrega" /> : null}
        </Stack>
        <Stack flex={1} w="100%" spacing={1} position="relative">
          <Text color="white" fontWeight="medium">
            Data
          </Text>
          <Datepicker />
        </Stack>
      </Stack>
      <Checkbox
        isChecked={checked}
        onChange={e => setChecked(e.target.checked)}
        colorScheme="gray"
        iconColor="black"
      >
        <Text color="white" fontSize="sm">
          Entrega no local de levantamento
        </Text>
      </Checkbox>
    </Stack>
  );
};

export default MainSearch;
