import React, { useEffect, useRef, useState } from 'react';
import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import CustomDrawer from './CustomDrawer';
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HelpDesk from './HelpDesk';

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
    <Box boxShadow="md" zIndex="sticky">
      <Flex
        dir="row"
        px="32px"
        h="30px"
        justify="space-between"
        align="center"
        borderColor="gray.300"
        borderBottomWidth="1px"
      >
        <Flex align="center">
          <FontAwesomeIcon icon={faPhoneAlt} size="xs" />
          <Text ml={1} fontSize="xs" color="black">
            (+351) 963 720 279
          </Text>
          <Box
            display={{ base: 'none', sm: 'inherit' }}
            ml={1}
            h="16px"
            borderLeftWidth="2px"
            borderColor="black"
          />
          <Text
            display={{ base: 'none', sm: 'inherit' }}
            ml={1}
            fontSize="xs"
            color="black"
          >
            (+351) 253 043 471
          </Text>
        </Flex>
        <Flex align="center">
          <HelpDesk />
          <Box
            flex={1}
            as="a"
            href="https://www.facebook.com/sprinttravelrentacar/"
            target="_blank"
          >
            <Box
              as="img"
              src="/assets/images/facebook_icon.webp"
              alt="facebook_icon"
              h="20px"
              w="20px"
            />
          </Box>
          <Box
            flex={1}
            ml={2}
            as="a"
            href="https://www.instagram.com/sprinttravelviagens/"
            target="_blank"
          >
            <Box
              as="img"
              src="/assets/images/instagram_icon.png"
              alt="instagram_icon"
              h="20px"
              w="20px"
            />
          </Box>
        </Flex>
      </Flex>
      <Flex dir="row" px="32px" h="60px" justify="space-between" align="center">
        <Image
          src="/assets/images/logo.png"
          alt="Logo"
          h="100%"
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
                <Text as="button" fontSize="sm">
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
                    bg="white"
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
                    bg="white"
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
                </Flex>
              }
            />
            <Text
              as="a"
              href="https://www.sprinttravelviagens.com/"
              target="_blank"
              fontSize="sm"
            >
              {t('drawer.group.travel')}
            </Text>
            <Menu
              label={
                <Text as="button" fontSize="sm">
                  {t('header.fleet.national')}
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
                  fontSize="lg"
                >
                  <Box
                    as={Link}
                    to="/frota?frota=continente"
                    zIndex={2}
                    px={2}
                    py={1}
                    bg="white"
                    _hover={{
                      bg: 'gray.300',
                    }}
                  >
                    <Text>Continente</Text>
                  </Box>
                  <Box
                    as={Link}
                    to="/frota?frota=madeira"
                    zIndex={2}
                    px={2}
                    py={1}
                    bg="white"
                    _hover={{
                      bg: 'gray.300',
                    }}
                  >
                    <Text>Madeira</Text>
                  </Box>
                  <Box
                    as={Link}
                    to="/frota?frota=acores"
                    zIndex={2}
                    px={2}
                    py={1}
                    bg="white"
                    _hover={{
                      bg: 'gray.300',
                    }}
                  >
                    <Text>Açores</Text>
                  </Box>
                </Flex>
              }
            />
            <Text
              as="a"
              href="https://www.rentalcars.com/Home.do?affiliateCode=sprinttra667"
              target="_blank"
              fontSize="sm"
            >
              {t('header.fleet.international')}
            </Text>
            <Link to="/franchising">
              <Text fontSize="sm">{t('header.franchise')}</Text>
            </Link>
            <Link to="/sale">
              <Text fontSize="sm">{t('header.sale')}</Text>
            </Link>
            <Text
              as="a"
              href="https://rentacar.filipeamorim.com/admin/"
              target="_blank"
              fontSize="sm"
            >
              {t('header.login')}
            </Text>
            <Link to="/contactos">
              <Text fontSize="sm">{t('header.contacts')}</Text>
            </Link>
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
    </Box>
  );
};

export default Header;
