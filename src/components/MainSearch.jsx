import React, { useState } from 'react';
import { Box, Checkbox, Flex, Stack, Text } from '@chakra-ui/react';
import Datepicker from './Datepicker/Datepicker.jsx';
import SearchBar from './SearchBar.jsx';
import AppContext from '../context/AppContext.jsx';

const MainSearch = props => {
  const [checked, setChecked] = useState(true);
  return (
    <AppContext.Consumer>
      {({
        startDate,
        endDate,
        startLocation,
        endLocation,
        setStartDate,
        setEndDate,
        setStartLocation,
        setEndLocation,
      }) => (
        <Stack
          bg={{ base: 'rgba(0,0,0,0.85)', md: 'black' }}
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
              <SearchBar
                options={props.options}
                value={startLocation}
                onChange={setStartLocation}
                label="Local de Levantamento"
              />
              {!checked ? (
                <SearchBar
                  options={props.options}
                  value={endLocation}
                  onChange={setEndLocation}
                  label="Local de Entrega"
                />
              ) : null}
            </Stack>
            <Stack flex={1} w="100%" spacing={1} position="relative">
              <Text color="white" fontWeight="medium">
                Data
              </Text>
              <Datepicker
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
              />
            </Stack>
          </Stack>
          <Flex direction="row" justify="space-between">
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
            <Box
              as="button"
              bg="gray.300"
              px={2}
              py={1}
              borderRadius="sm"
              fontWeight="semibold"
              color="black"
              onClick={() => {
                console.log(startLocation, endLocation, startDate, endDate);
              }}
            >
              Pesquisar
            </Box>
          </Flex>
        </Stack>
      )}
    </AppContext.Consumer>
  );
};

export default MainSearch;
