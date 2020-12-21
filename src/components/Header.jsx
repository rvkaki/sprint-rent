import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';

const Header = props => {
  return (
    <Flex
      dir="row"
      px="32px"
      h="60px"
      justify="space-between"
      align="center"
      boxShadow="md"
      zIndex="sticky"
    >
      <Image maxH="80%" objectFit="contain" src="assets/images/logo.png" alt="Logo" />
      <Flex w="60%" dir="row" justify="space-between">
        <Text>O Grupo</Text>
        <Text>Frota Nacional</Text>
        <Text>Frota Internacional</Text>
        <Text>Contactos</Text>
      </Flex>
      <Flex dir="row" justify="flex-end">
        <Text mr="4px" fontWeight="semibold">
          PT
        </Text>
        <Text>|</Text>
        <Text ml="4px">EN</Text>
      </Flex>
    </Flex>
  );
};

export default Header;
