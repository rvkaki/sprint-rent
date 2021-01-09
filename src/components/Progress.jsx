import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Shape = props => {
  const parentH = parseInt(props.h.slice(0, -2));
  return (
    <Box
      w={props.w}
      h={props.h}
      bg={props.color}
      color="white"
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Flex direction="column" h="100%" ml="80px" mb="16px" justify="center">
        <Text fontSize="sm">{props.title}</Text>
        <Text fontSize="lg" fontWeight="semibold" overflowWrap="break-word">
          {props.info}
        </Text>
      </Flex>
      <Box
        position="absolute"
        zIndex={props.zIndex}
        right="-69px"
        w="0px"
        h="0px"
        bg="transparent"
        borderStyle="solid"
        borderLeftWidth={(parentH / 2).toString() + 'px'}
        borderRightWidth={(parentH / 2).toString() + 'px'}
        borderBottomWidth="40px"
        borderLeftColor="transparent"
        borderRightColor="transparent"
        borderBottomColor={props.color}
        transform="rotate(90deg)"
      />
    </Box>
  );
};

const Progress = props => {
  const { startDate, endDate, startLocation, endLocation } = useContext(
    AppContext
  );
  return (
    <Box w="100%">
      <Flex dir="row" w="100%" bg="gray.400">
        <Shape
          w="23vw"
          h="100px"
          color="gray.800"
          zIndex={5}
          title="Levantamento"
          info={startLocation + ', ' + startDate.toLocaleDateString()}
        />
        <Shape
          w="23vw"
          h="100px"
          color="gray.700"
          zIndex={4}
          title="Entrega"
          info={endLocation + ', ' + endDate.toLocaleDateString()}
        />
        <Shape
          w="23vw"
          h="100px"
          color="gray.600"
          zIndex={3}
          title="Veiculo"
          info="Escolha o carro"
        />
        <Shape
          w="23vw"
          h="100px"
          color="gray.500"
          zIndex={2}
          title="Extras"
          info="Escolha os extras"
        />
      </Flex>
      <Box position="relative" bg="gray.200" w="100%" h="10px">
        <Box
          position="absolute"
          left={0}
          zIndex={1}
          w="46vw"
          h="100%"
          bg="green.400"
        />
      </Box>
    </Box>
  );
};

export default Progress;
