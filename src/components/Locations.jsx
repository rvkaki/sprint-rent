import {
  Box,
  Flex,
  Stack,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LocationMap from './LocationMap';

const LocationInfo = props => {
  return (
    <Box w={{ base: '100%', lg: '90%' }}>
      <Text fontSize="2xl" fontWeight="medium" color="black">
        {props.title}
      </Text>
      <Box borderBottom="2px solid black" mb={2} />
      <Stack spacing={4}>
        <Flex dir="row" align="center">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="black" />
          <Text ml={2}>{props.address}</Text>
        </Flex>
        {props.numbers ? (
          <Stack>
            {props.numbers.map(n => (
              <Flex key={n.id} dir="row" align="center">
                <FontAwesomeIcon icon={faPhoneAlt} size="lg" color="black" />
                <Text ml={2}>{n.number}</Text>
              </Flex>
            ))}
          </Stack>
        ) : null}
        {props.emails ? (
          <Stack>
            {props.emails.map(e => (
              <Flex key={e.id} dir="row" align="center">
                <FontAwesomeIcon icon={faEnvelope} size="lg" color="black" />
                <Text ml={2}>{e.email}</Text>
              </Flex>
            ))}
          </Stack>
        ) : null}
      </Stack>
    </Box>
  );
};

const Locations = ({ locations }) => {
  const [t] = useTranslation('common');

  return (
    <Flex direction="column" align="center">
      <Text
        fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
        color="black"
        fontWeight="semibold"
      >
        {t('locations')}
      </Text>
      <Flex direction={{ base: 'column', lg: 'row' }} w="90%" my={12}>
        <Stack spacing={4} flex={{ base: 'auto', lg: 2 }}>
          <Airports
            airports={locations.filter(l => l.title.includes('Aeroporto'))}
          />
          {locations
            .filter(l => !l.title.includes('Aeroporto'))
            .map((l, idx) => (
              <LocationInfo key={idx} {...l} />
            ))}
        </Stack>
        <LocationMap
          flex={{ base: 'auto', lg: 2 }}
          mt={{ base: 8, lg: 0 }}
          locations={locations}
        />
      </Flex>
    </Flex>
  );
};

const Airports = ({ airports }) => {
  const [curAirport, setCurAirport] = useState();

  useEffect(() => {
    setCurAirport(airports[0]);
  }, [airports]);

  return (
    <Box w={{ base: '100%', lg: '90%' }}>
      <CustomSelect
        value={curAirport?.title}
        onChange={a => setCurAirport(a)}
        options={airports}
        renderItem={a => (
          <option key={a.id} value={a.id}>
            {a.title}
          </option>
        )}
      />
      <Box borderBottom="2px solid black" mb={2} />
      <Stack spacing={4}>
        <Flex dir="row" align="center">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="black" />
          <Text ml={2}>{curAirport?.address}</Text>
        </Flex>
        {curAirport?.numbers ? (
          <Stack>
            {curAirport?.numbers.map(n => (
              <Flex key={n.id} dir="row" align="center">
                <FontAwesomeIcon icon={faPhoneAlt} size="lg" color="black" />
                <Text ml={2}>{n.number}</Text>
              </Flex>
            ))}
          </Stack>
        ) : null}
        {curAirport?.emails ? (
          <Stack>
            {curAirport?.emails.map(e => (
              <Flex key={e.id} dir="row" align="center">
                <FontAwesomeIcon icon={faEnvelope} size="lg" color="black" />
                <Text ml={2}>{e.email}</Text>
              </Flex>
            ))}
          </Stack>
        ) : null}
      </Stack>
    </Box>
  );
};

const CustomSelect = ({ value, onChange, options, renderItem }) => {
  return (
    <Menu w="100%" defaultIsOpen={false}>
      {({ isOpen }) => (
        <>
          <MenuButton w="100%">
            <HStack w="100%" justifyContent="space-between">
              <Text fontSize="2xl" fontWeight="medium" color="black">
                {value}
              </Text>

              <FontAwesomeIcon
                icon={isOpen ? faChevronUp : faChevronDown}
                size="lg"
                color="black"
              />
            </HStack>
          </MenuButton>
          <MenuList>
            {options.map(o => (
              <MenuItem onClick={() => onChange(o)}>{renderItem(o)}</MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default Locations;
