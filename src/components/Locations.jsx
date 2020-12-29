import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import {
  faAt,
  faCarAlt,
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
  faPlaneDeparture,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const locations = [
  {
    primary: true,
    name: 'Braga (Sede)',
    address: 'Rua Cidade do Porto nº45, 4705-086 Braga',
    phone: '(+351) 253 043 471',
    cellphone: '(+351) 963 720 279',
    mail: {
      main: 'geral@sprinttravelviagens.com',
      travel: 'braga1@sprinttravelviagens.com',
      rent: 'reservas@sprinttravelrentacar.com',
      franchise: 'franchising@sprinttravelviagens.com',
    },
  },
  {
    name: 'Aeroporto do Porto',
    address: 'Aeroporto Francisco Sá Carneiro, 4470-558 Maia',
  },
  {
    name: 'Aeroporto de Lisboa',
    address: 'Alameda das Comunidades Portuguesas, 1700-111 Lisboa',
  },
  {
    name: 'Porto',
    address: 'Estrada da Circunvalação 11124, 4460-282 Sra. da Hora',
  },
  {
    name: 'Aeroporto de Faro',
    address: 'Aeroporto de Faro, 8006-901 Faro',
  },
  {
    name: 'Lisboa',
    address:
      ' Av. D. João II - Estação do Oriente Loja G204- Lote 1.07.15, 1990-233 Lisboa',
  },
  {
    primary: true,
    name: 'Montijo',
    address: 'Av. Infante D.Henrique 875 R/C Esqº, 2870-157 Montijo',
    phone: '(+351) 212 431 805',
    cellphone: '(+351) 933 935 360',
    mail: {
      main: 'montijo@ sprinttravelrentacar.com ',
    },
  },
];

const LocationInfo = props => {
  return (
    <Box w="90%">
      <Text fontSize="2xl" fontWeight="medium" color="black">
        {props.name}
      </Text>
      <Box borderBottom="2px solid black" mb={2} />
      <Stack spacing={5}>
        <Flex dir="row" align="center">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="black" />
          <Text ml={2}>{props.address}</Text>
        </Flex>
        {props.primary ? (
          <Stack>
            <Flex dir="row" align="center">
              <FontAwesomeIcon icon={faPhoneAlt} size="lg" color="black" />
              <Text ml={2}>{props.phone}</Text>
            </Flex>
            <Flex dir="row" align="center">
              <FontAwesomeIcon icon={faPhoneAlt} size="lg" color="black" />
              <Text ml={2}>{props.cellphone}</Text>
            </Flex>
          </Stack>
        ) : null}
        {props.primary ? (
          <Stack>
            <Flex dir="row" align="center">
              <FontAwesomeIcon icon={faEnvelope} size="lg" color="black" />
              <Text ml={2}>{props.mail.main}</Text>
            </Flex>
            {props.mail.travel ? (
              <Flex dir="row" align="center">
                <FontAwesomeIcon
                  icon={faPlaneDeparture}
                  size="lg"
                  color="black"
                />
                <Text ml={2}>{props.mail.travel}</Text>
              </Flex>
            ) : null}
            {props.mail.rent ? (
              <Flex dir="row" align="center">
                <FontAwesomeIcon icon={faCarAlt} size="lg" color="black" />
                <Text ml={2}>{props.mail.rent}</Text>
              </Flex>
            ) : null}
            {props.mail.franchise ? (
              <Flex dir="row" align="center">
                <FontAwesomeIcon icon={faAt} size="lg" color="black" />
                <Text ml={2}>{props.mail.franchise}</Text>
              </Flex>
            ) : null}
          </Stack>
        ) : null}
      </Stack>
    </Box>
  );
};

const Locations = props => {
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
          {locations.map(l => (
            <LocationInfo {...l} />
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
            width="100%"
            height="100%"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Locations;
