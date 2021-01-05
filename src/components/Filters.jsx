import { Box, Checkbox, Flex, Stack, Text } from '@chakra-ui/react';
import {
  faCarAlt,
  faCheckCircle,
  faGasPump,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import FilterContext from '../context/FilterContext';

const getParams = async param => {
  try {
    const res = await fetch(`http://localhost:1337/cars/params?t=${param}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const FilterGroup = props => {
  return (
    <FilterContext.Consumer>
      {({ filters, toggleFilters }) => (
        <Box>
          <Flex dir="row" align="center">
            {props.icon ? (
              props.icon
            ) : (
              <FontAwesomeIcon icon={props.iconName} size="lg" color="black" />
            )}
            <Text ml={2} fontSize="2xl" color="black" fontWeight="semibold">
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
                <Text textTransform="capitalize" fontSize="xl" color="black">
                  {g}
                </Text>
              </Checkbox>
            ))}
          </Flex>
        </Box>
      )}
    </FilterContext.Consumer>
  );
};

const Filters = props => {
  const [models, setModels] = useState([]);
  const [gas, setGas] = useState([]);
  const [modes, setModes] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    getParams('gas').then(data => setGas(data));
    getParams('model').then(data => setModels(data));
    getParams('mode').then(data => setModes(data));
    getParams('type').then(data => setTypes(data));
  }, []);

  return (
    <Stack {...props} spacing={3}>
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

export default Filters;
