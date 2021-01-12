import React, { useEffect, useRef, useState } from 'react';
import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CustomDrawer from './CustomDrawer';
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Menu = props => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = e => {
      if (
        wrapperRef.current &&
        dropdownRef.current &&
        !wrapperRef.current.contains(e.target) &&
        !dropdownRef.current.contains(e.target)
      )
        setIsOpen(false);
    };
    window.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('mousedownn', handleOutsideClick);
    };
  }, [wrapperRef]);

  return (
    <Box
      ref={wrapperRef}
      position="relative"
      onClick={() => setIsOpen(!isOpen)}
    >
      {props.label}
      <Box
        ref={dropdownRef}
        position="absolute"
        top={8}
        display={isOpen ? 'inherit' : 'none'}
      >
        {props.menu}
      </Box>
    </Box>
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
        display={{ base: 'inherit', lg: 'none' }}
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
        display={{ base: 'none', lg: 'inherit' }}
        justify="space-between"
      >
        <Flex w="100%" dir="row" justify="space-evenly">
          <Menu
            label={
              <Text as="button" fontSize="lg">
                {t('header.group')}
              </Text>
            }
            menu={
              <Flex
                direction="column"
                bg="white"
                w="200px"
                border="1px solid"
                borderColor="gray.300"
                shadow="lg"
              >
                <Box
                  as="a"
                  href="https://www.sprinttravelviagens.com/"
                  target="_blank"
                  fontSize="lg"
                  zIndex={2}
                  px={2}
                  py={1}
                  _hover={{
                    bg: 'gray.300',
                  }}
                >
                  {t('drawer.group.travel')}
                </Box>
                <Box
                  as="a"
                  href="https://www.sprinttravelshop.pt/"
                  target="_blank"
                  fontSize="lg"
                  zIndex={2}
                  px={2}
                  py={1}
                  _hover={{
                    bg: 'gray.300',
                  }}
                >
                  <Text fontSize="lg">{t('drawer.group.shop')}</Text>
                </Box>
                <Box
                  as="a"
                  href="https://www.sprintsolucoesinformaticas.com/"
                  target="_blank"
                  fontSize="lg"
                  zIndex={2}
                  px={2}
                  py={1}
                  _hover={{
                    bg: 'gray.300',
                  }}
                >
                  <Text fontSize="lg">{t('drawer.group.tech')}</Text>
                </Box>
              </Flex>
            }
          />
          <Link to="/frota">
            <Text fontSize="lg">{t('header.fleet.national')}</Text>
          </Link>
          <Text
            as="a"
            href="https://www.rentalcars.com/Home.do?affiliateCode=sprinttra667"
            target="_blank"
            fontSize="lg"
          >
            {t('header.fleet.international')}
          </Text>
          {/* <Text as="button" fontSize="lg" onClick={() => {}}>
            {t('header.contacts')}
          </Text> */}
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
