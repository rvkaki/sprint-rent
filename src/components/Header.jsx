import React, { useState } from 'react';
import { Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CustomDrawer from './CustomDrawer';
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeaderLink = props => {
  return (
    <Link to={props.to}>
      <Text fontSize={{ base: 'md', lg: 'lg' }}>{props.text}</Text>
    </Link>
  );
};

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [t, i18n] = useTranslation('common');
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
        src="/assets/images/logo.png"
        alt="Logo"
        maxH={{ base: '60%', lg: '80%' }}
        onClick={() => history.replace('/')}
        _hover={{
          cursor: 'pointer',
        }}
        objectFit="contain"
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
          <HeaderLink text={t('header.group')} />
          <HeaderLink to="/frota" text={t('header.fleet.national')} />
          <HeaderLink text={t('header.fleet.international')} />
          <HeaderLink text={t('header.contacts')} />
        </Flex>
        <Flex dir="row" justify="flex-end">
          <Text
            as="button"
            mr="4px"
            fontWeight={i18n.language === 'pt' ? 'semibold' : 'normal'}
            onClick={() => i18n.changeLanguage('pt')}
          >
            PT
          </Text>
          <Text>|</Text>
          <Text
            as="button"
            ml="4px"
            fontWeight={i18n.language === 'en' ? 'semibold' : 'normal'}
            onClick={() => i18n.changeLanguage('en')}
          >
            EN
          </Text>
        </Flex>
      </Flex>
      <CustomDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Flex>
  );
};

export default Header;
