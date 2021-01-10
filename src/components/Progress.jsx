import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <Text
          fontSize={{ lg: 'md', xl: 'lg' }}
          fontWeight="semibold"
          overflowWrap="break-word"
        >
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

const Item = props => {
  return (
    <MenuItem _focus={{}} _active={{}}>
      <Box px={8} color="black">
        <Text fontSize="lg" fontWeight="semibold">
          {props.title}
        </Text>
        <Text fontSize="lg">{props.location}</Text>
        <Text fontSize="lg">{props.date}</Text>
      </Box>
    </MenuItem>
  );
};

const Progress = props => {
  const { startDate, endDate, startLocation, endLocation } = props.state;
  return (
    <Box w="100%">
      {/* Renders on large screens */}
      <Flex
        display={{ base: 'none', lg: 'flex' }}
        dir="row"
        w="100%"
        bg="gray.400"
      >
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

      {/* Renders on lg < screens */}
      <Box display={{ base: 'inherit', lg: 'none' }}>
        <Menu matchWidth closeOnSelect={false}>
          {({ isOpen }) => (
            <>
              <MenuButton w="100%" bg="gray.500">
                <Flex
                  dir="row"
                  justify="space-between"
                  align="center"
                  px={8}
                  py={1}
                >
                  <Text fontSize="lg" color="white" fontWeight="medium">
                    Alterar a reserva
                  </Text>
                  <FontAwesomeIcon
                    icon={isOpen ? faChevronUp : faChevronDown}
                    color="white"
                    size="lg"
                  />
                </Flex>
              </MenuButton>
              <MenuList bg="gray.300" mx={4} borderRadius={0} shadow="lg">
                <Item
                  title="Data de Levantamento"
                  location={startLocation + ','}
                  date={startDate.toLocaleDateString()}
                />
                <MenuDivider borderColor="black" />
                <Item
                  title="Data de Entrega"
                  location={endLocation + ','}
                  date={endDate.toLocaleDateString()}
                />
              </MenuList>
            </>
          )}
        </Menu>
      </Box>
    </Box>
  );
};

export default Progress;
