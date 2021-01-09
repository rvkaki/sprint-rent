import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { getLocations } from '../util/apiCalls';

const LocationInfo = props => {
  return (
    <Box w="90%">
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

const Locations = props => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations().then(data => setLocations(data));
  }, []);

  return (
    <Flex direction="column" align="center">
      <Text
        fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
        color="black"
        fontWeight="semibold"
      >
        Onde estamos
      </Text>
      <Flex direction={{ base: 'column', md: 'row' }} w="90%" my={8}>
        <Stack spacing={4} flex={{ base: 'auto', md: 3 }}>
          {locations.map((l, idx) => (
            <LocationInfo key={idx} {...l} />
          ))}
        </Stack>
        <Box
          flex={{ base: 'auto', md: 2 }}
          h={{ base: '80vh', md: 'auto' }}
          mt={{ base: 8, md: 0 }}
        >
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1mzAherBj40eWR_2WH_NUinqNw_JcYcwF"
            alt="map"
            title="Sprint Rent-a-Car locations"
            width="100%"
            height="100%"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Locations;
