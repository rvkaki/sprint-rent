import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { faGasPump, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const serverURL = 'http://localhost:1337';

const CarCard = props => {
  return (
    <Flex w="800px" shadow="xl" direction="row">
      {props.images.length > 0 ? (
        <Box
          as="img"
          h="100%"
          w="30%"
          src={serverURL + props.images[0].url}
          alt={props.images[0].url}
          objectFit="contain"
        />
      ) : null}
      <Flex w="100%" bg="gray.200" dir="row" p={4} justify="space-between">
        <Box>
          <Text fontSize="xl" fontWeight="semibold" color="black">
            {props.brand + ' ' + props.model}
          </Text>
          <Stack spacing={1} mt={2}>
            <Flex dir="row">
              <FontAwesomeIcon icon={faUserFriends} size="lg" color="black" />
              <Text>{props.seats} lugares</Text>
            </Flex>
            <Flex dir="row">
              <Box
                as="img"
                w="28px"
                src="https://img.icons8.com/pastel-glyph/64/000000/gearbox-selector.png"
              />
              <Text textTransform="capitalize">{props.mode}</Text>
            </Flex>
            <Flex dir="row">
              <FontAwesomeIcon icon={faGasPump} size="lg" color="black" />
              <Text textTransform="capitalize">{props.gas}</Text>
            </Flex>
            <Flex dir="row">
              <Box
                as="img"
                w="24px"
                src="https://img.icons8.com/material/24/000000/car-door--v2.png"
              />
              <Text textTransform="capitalize">{props.doors} portas</Text>
            </Flex>
          </Stack>
        </Box>
        <Flex direction="column" justify="space-between" align="flex-end">
          <Box
            as="button"
            border="2px solid"
            borderColor="gray.400"
            borderRadius="4px"
            px={2}
            py={1}
            fontSize="lg"
            color="gray.600"
          >
            Selecionar
          </Box>
          <Flex dir="row" align="baseline">
            <Text fontSize="4xl" fontWeight="bold" color="black">
              {props.price}€
            </Text>
            <Text>/dia</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CarCard;
