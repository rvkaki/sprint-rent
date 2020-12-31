import React, { useState } from 'react';
import { Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CustomDrawer from './CustomDrawer';
import { Link, useHistory } from 'react-router-dom';

const HeaderLink = props => {
  return (
    <Link to={props.to}>
      <Text fontSize={{ base: 'md', lg: 'lg' }}>{props.text}</Text>
    </Link>
  );
};

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
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
      <Image
        maxH={{ base: '60%', lg: '80%' }}
        onClick={() => history.replace('/')}
        _hover={{
          cursor: 'pointer',
        }}
        objectFit="contain"
        src="assets/images/logo.png"
        alt="Logo"
      />
      <IconButton
        display={{ base: 'inherit', md: 'none' }}
        icon={<FontAwesomeIcon icon={faBars} />}
        onClick={() => setIsOpen(true)}
        variant="ghost"
        color="black"
        size="xl"
        fontSize="xl"
        _hover={{}}
        _focus={{}}
      />
      <Flex
        flex={1}
        display={{ base: 'none', md: 'inherit' }}
        justify="space-between"
      >
        <Flex w="100%" dir="row" justify="space-evenly">
          <HeaderLink text="O Grupo" />
          <HeaderLink to="/frota" text="Frota Nacional" />
          <HeaderLink text="Frota Internacional" />
          <HeaderLink text="Contactos" />
        </Flex>
        <Flex dir="row" justify="flex-end">
          <Text mr="4px" fontWeight="semibold">
            PT
          </Text>
          <Text>|</Text>
          <Text ml="4px">EN</Text>
        </Flex>
      </Flex>
      <CustomDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Flex>
  );
};

export default Header;
