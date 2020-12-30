import React from 'react';
import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faMobileAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = props => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      bg="gray.800"
      py={4}
      px={{ base: 4, md: 16 }}
      justify="space-between"
    >
      <Stack spacing={2} mb={{ base: 4, md: 0 }}>
        <Box>
          <Text fontSize="lg" fontWeight="semibold" color="white">
            Informações Úteis
          </Text>
          <Box
            borderBottom="2px solid white"
            display={{ base: 'auto', md: 'none' }}
          />
        </Box>
        <Text fontSize="md" color="white">
          Política de privacidade
        </Text>
        <Text fontSize="md" color="white">
          Condições gerais de venda
        </Text>
        <Text fontSize="md" color="white">
          Livro de reclamações online
        </Text>
        <Text fontSize="md" color="white">
          Termos e condições de aluguer
        </Text>
      </Stack>
      <Stack spacing={2} mb={{ base: 4, md: 0 }}>
        <Box>
          <Text fontSize="lg" fontWeight="semibold" color="white">
            Contactos
          </Text>
          <Box
            borderBottom="2px solid white"
            display={{ base: 'auto', md: 'none' }}
          />
        </Box>
        <Flex dir="row" align="center">
          <Box w={6} display="flex" justifyContent="center">
            <FontAwesomeIcon icon={faEnvelope} size="lg" color="white" />
          </Box>
          <Text fontSize="md" color="white" ml={2}>
            geral@sprinttravelviagens.com
          </Text>
        </Flex>
        <Flex dir="row" align="center">
          <Box w={6} display="flex" justifyContent="center">
            <FontAwesomeIcon icon={faPhoneAlt} size="lg" color="white" />
          </Box>
          <Text fontSize="md" color="white" ml={2}>
            (+351) 253 043 471
          </Text>
        </Flex>
        <Flex dir="row" align="center">
          <Box w={6} display="flex" justifyContent="center">
            <FontAwesomeIcon icon={faMobileAlt} size="lg" color="white" />
          </Box>
          <Text fontSize="md" color="white" ml={2}>
            (+351) 963 720 279
          </Text>
        </Flex>
      </Stack>
      <Stack spacing={2} mb={{ base: 4, md: 0 }}>
        <Box>
          <Text fontSize="lg" fontWeight="semibold" color="white">
            Visite-nos
          </Text>
          <Box
            borderBottom="2px solid white"
            display={{ base: 'auto', md: 'none' }}
          />
        </Box>
        <HStack spacing={4}>
          <FontAwesomeIcon icon={faFacebookSquare} size="3x" color="white" />
          <FontAwesomeIcon icon={faInstagram} size="3x" color="white" />
        </HStack>
        <Stack spacing={-1}>
          <Text fontSize="md" color="white">
            Rua Cidade do Porto, nº 45
          </Text>
          <Text fontSize="md" color="white">
            4705-086 Braga
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Footer;
