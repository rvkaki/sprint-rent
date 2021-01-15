import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LocationMap from './LocationMap';

const LocationInfo = props => {
  return (
    <Flex dir="row">
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
    </Flex>
  );
};

const Locations = props => {
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
      <Flex direction={{ base: 'column', lg: 'row' }} w="90%" my={8}>
        <Stack spacing={4} flex={{ base: 'auto', lg: 2 }}>
          {props.locations.map((l, idx) => (
            <LocationInfo key={idx} {...l} />
          ))}
        </Stack>
        <LocationMap
          flex={{ base: 'auto', lg: 2 }}
          h={{ base: '80vh', lg: 'auto' }}
          mt={{ base: 8, lg: 0 }}
          locations={props.locations}
        />
      </Flex>
    </Flex>
  );
};

export default Locations;
