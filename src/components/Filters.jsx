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
import { useTranslation } from 'react-i18next';
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

  const t = props.t;

  useEffect(() => {
    getFilterParams(props.fleet, 'gas').then(data => setGas(data));
    getFilterParams(props.fleet, 'model').then(data =>
      setModels(data.sort((m1, m2) => (m2 > m1 ? -1 : 1)))
    );
    getFilterParams(props.fleet, 'mode').then(data => setModes(data));
    getFilterParams(props.fleet, 'type').then(data => setTypes(data));
  }, [props.fleet]);

  return (
    <Stack spacing={3}>
      <FilterGroup
        label={t('filters.gas')}
        iconName={faGasPump}
        filters={gas}
        group="gas"
      />
      <FilterGroup
        label={t('filters.model')}
        iconName={faCarAlt}
        filters={models}
        group="model"
      />
      <FilterGroup
        label={t('filters.mode')}
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
        label={t('filters.type')}
        iconName={faCheckCircle}
        filters={types}
        group="type"
      />
    </Stack>
  );
};

const FiltersContainer = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [t] = useTranslation('common');
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
            {t('filters.title')}
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
          <Filters t={t} fleet={props.fleet} />
        </Box>
      </Box>
      <Box display={{ base: 'none', lg: 'inherit' }}>
        <Filters t={t} fleet={props.fleet} />
      </Box>
    </Box>
  );
};

export default FiltersContainer;
