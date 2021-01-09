import { Box, Checkbox, Flex, Stack, Text } from '@chakra-ui/react';
import {
  faCarAlt,
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faGasPump,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import { getFilterParams } from '../util/apiCalls';

const FilterGroup = props => {
  return (
    <AppContext.Consumer>
      {({ filters, toggleFilters }) => (
        <Box>
          <Flex dir="row" align="center">
            {props.icon ? (
              props.icon
            ) : (
              <FontAwesomeIcon icon={props.iconName} size="lg" color="black" />
            )}
            <Text
              ml={2}
              fontSize={{ base: 'inherit', lg: '2xl' }}
              color="black"
              fontWeight="semibold"
            >
              {props.label}
            </Text>
          </Flex>
          <Flex direction="column">
            {props.filters.map((g, idx) => (
              <Checkbox
                key={idx}
                isChecked={filters[props.group].includes(g)}
                onChange={e => toggleFilters(props.group, g)}
                ml={4}
                colorScheme="gray"
                iconColor="black"
              >
                <Text
                  textTransform="capitalize"
                  fontSize={{ base: 'inherit', lg: 'xl' }}
                  color="black"
                >
                  {g}
                </Text>
              </Checkbox>
            ))}
          </Flex>
        </Box>
      )}
    </AppContext.Consumer>
  );
};

const Filters = props => {
  const [models, setModels] = useState([]);
  const [gas, setGas] = useState([]);
  const [modes, setModes] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    getFilterParams('gas').then(data => setGas(data));
    getFilterParams('model').then(data => setModels(data));
    getFilterParams('mode').then(data => setModes(data));
    getFilterParams('type').then(data => setTypes(data));
  }, []);

  return (
    <Stack spacing={3}>
      <FilterGroup
        label="Combustivel"
        iconName={faGasPump}
        filters={gas}
        group="gas"
      />
      <FilterGroup
        label="Modelo"
        iconName={faCarAlt}
        filters={models}
        group="model"
      />
      <FilterGroup
        label="Transmissao"
        icon={
          <Box
            as="img"
            justifySelf="flex-start"
            h="28px"
            mr={-2}
            src="https://img.icons8.com/pastel-glyph/64/000000/gearbox-selector.png"
          />
        }
        filters={modes}
        group="mode"
      />
      <FilterGroup
        label="Tipo"
        iconName={faCheckCircle}
        filters={types}
        group="type"
      />
    </Stack>
  );
};

const FiltersContainer = props => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box>
      <Box
        w="90%"
        mx="auto"
        display={{ base: 'inherit', lg: 'none' }}
        my={4}
        shadow="md"
      >
        <Flex
          px={4}
          py={1}
          bg="gray.800"
          borderRadius="md"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Text color="white" fontSize="lg" fontWeight="medium">
            Filtros
          </Text>
          <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            color="white"
            size="lg"
          />
        </Flex>
        <Box
          display={isOpen ? 'inherit' : 'none'}
          bg="gray.300"
          p={4}
          borderRadius="md"
        >
          <Filters />
        </Box>
      </Box>
      <Box display={{ base: 'none', lg: 'inherit' }}>
        <Filters />
      </Box>
    </Box>
  );
};

export default FiltersContainer;
