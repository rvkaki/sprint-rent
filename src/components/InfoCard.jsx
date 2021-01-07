import React from 'react';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const InfoCard = props => {
  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      p={4}
      bg="white"
      shadow="dark-lg"
      justify="space-between"
    >
      <Text
        fontSize="2xl"
        textAlign="center"
        fontWeight="semibold"
        color="black"
      >
        {props.brand + ' ' + props.model}
      </Text>
      <Stack spacing={3}>
        <Flex dir="row" align="center">
          {/* On md >= screens */}
          <Flex
            display={{ base: 'none', md: 'inherit' }}
            w="50px"
            justify="center"
            align="center"
          >
            <FontAwesomeIcon icon={faUserFriends} size="2x" color="black" />
          </Flex>
          {/* On md < screens */}
          <Flex
            display={{ base: 'inherit', md: 'none' }}
            w="32px"
            justify="center"
            align="center"
          >
            <FontAwesomeIcon icon={faUserFriends} size="lg" color="black" />
          </Flex>

          <Text fontSize="lg">{props.seats} lugares</Text>
        </Flex>

        <Flex dir="row" align="center">
          <Flex
            w={{ base: '32px', md: '50px' }}
            justify="center"
            align="center"
          >
            <Box
              as="img"
              src="https://img.icons8.com/pastel-glyph/48/000000/gearbox-selector.png"
            />
          </Flex>
          <Text textTransform="capitalize" fontSize="lg">
            {props.mode}
          </Text>
        </Flex>
        <Flex dir="row" align="center">
          {/* On md >= screens */}
          <Flex
            display={{ base: 'none', md: 'inherit' }}
            w="50px"
            justify="center"
            align="center"
          >
            <FontAwesomeIcon icon={faGasPump} size="2x" color="black" />
          </Flex>

          {/* On md < screens */}
          <Flex
            display={{ base: 'inherit', md: 'none' }}
            w="32px"
            justify="center"
            align="center"
          >
            <FontAwesomeIcon icon={faGasPump} size="lg" color="black" />
          </Flex>

          <Text textTransform="capitalize" fontSize="lg">
            {props.gas}
          </Text>
        </Flex>
        <Flex dir="row" align="center">
          <Flex
            w={{ base: '32px', md: '50px' }}
            justify="center"
            align="center"
          >
            <Box
              as="img"
              src="https://img.icons8.com/material/48/000000/car-door--v2.png"
            />
          </Flex>
          <Text fontSize="lg">{props.doors} portas</Text>
        </Flex>
      </Stack>
      <Flex justify="space-between">
        <Flex align="baseline">
          <Text
            fontSize={{ base: '4xl', md: '5xl' }}
            fontWeight="bold"
            color="black"
          >
            {props.price}€
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }}>/dia</Text>
        </Flex>
        <Box
          as="button"
          borderRadius="4px"
          p={2}
          my="auto"
          fontSize={{ base: 'md', md: 'lg' }}
          color="white"
          bg="gray.800"
          onClick={e => {
            e.stopPropagation();
            console.log(props.id);
          }}
        >
          Selecionar
        </Box>
      </Flex>
    </Flex>
  );
};

export default InfoCard;
