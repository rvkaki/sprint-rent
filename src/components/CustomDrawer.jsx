import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CustomDrawer = props => {
  const [t, i18n] = useTranslation('common');
  return (
    <Drawer
      isOpen={props.isOpen}
      placement="right"
      onClose={props.onClose}
      size="xs"
      returnFocusOnClose
    >
      <DrawerOverlay>
        <DrawerContent py="12">
          <DrawerCloseButton _focus={{}} _active={{}} _hover={{}} />
          <DrawerBody display="flex">
            <Stack spacing={5}>
              <Box>
                <Text fontSize="xl" fontWeight="semibold">
                  {t('drawer.group.title')}
                </Text>
                <Stack ml={3} spacing={1}>
                  <Text
                    as="a"
                    href="https://www.sprinttravelviagens.com/"
                    target="_blank"
                    fontSize="md"
                  >
                    {t('drawer.group.travel')}
                  </Text>
                  <Text
                    as="a"
                    href="https://www.sprinttravelshop.pt/"
                    target="_blank"
                    fontSize="md"
                  >
                    {t('drawer.group.shop')}
                  </Text>
                </Stack>
              </Box>
              <Box>
                <Text fontSize="xl" fontWeight="semibold">
                  {t('drawer.fleet.title')}
                </Text>
                <Stack ml={3} spacing={1} fontSize="lg">
                  <Text>{t('drawer.fleet.national')}</Text>
                  <Accordion ml={3} fontSize="md" allowToggle>
                    <Stack spacing={0} w="100%">
                      <AccordionItem
                        border="0"
                        as={Link}
                        onClick={props.onClose}
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
                      </AccordionItem>
                      <AccordionItem
                        border="0"
                        as={Link}
                        onClick={props.onClose}
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
                      </AccordionItem>
                      <AccordionItem border="0">
                        {({ isExpanded }) => (
                          <>
                            <AccordionButton
                              px={2}
                              py={1}
                              bg="white"
                              _hover={{
                                bg: 'gray.300',
                              }}
                              _active={{}}
                              _focus={{}}
                            >
                              <HStack w="100%" justifyContent="space-between">
                                <Text>Açores</Text>
                                <FontAwesomeIcon
                                  icon={
                                    isExpanded ? faChevronUp : faChevronDown
                                  }
                                />
                              </HStack>
                            </AccordionButton>
                            <AccordionPanel>
                              <Stack>
                                <Text
                                  as={Link}
                                  onClick={props.onClose}
                                  to="/frota?frota=sao_miguel"
                                >
                                  Ilha de São Miguel
                                </Text>
                                <Text
                                  as={Link}
                                  onClick={props.onClose}
                                  to="/frota?frota=terceira"
                                >
                                  Ilha Terceira
                                </Text>
                                <Text
                                  as={Link}
                                  onClick={props.onClose}
                                  to="/frota?frota=faial"
                                >
                                  Ilha do Faial
                                </Text>
                                <Text
                                  as={Link}
                                  onClick={props.onClose}
                                  to="/frota?frota=pico"
                                >
                                  Ilha do Pico
                                </Text>
                                <Text
                                  as={Link}
                                  onClick={props.onClose}
                                  to="/frota?frota=santa_maria"
                                >
                                  Ilha de Santa Maria
                                </Text>
                                <Text
                                  as={Link}
                                  onClick={props.onClose}
                                  to="/frota?frota=flores"
                                >
                                  Ilha das Flores
                                </Text>
                                <Text
                                  as={Link}
                                  onClick={props.onClose}
                                  to="/frota?frota=graciosa"
                                >
                                  Ilha da Graciosa
                                </Text>
                                <Text
                                  as={Link}
                                  onClick={props.onClose}
                                  to="/frota?frota=corvo"
                                >
                                  Ilha do Corvo
                                </Text>
                              </Stack>
                            </AccordionPanel>
                          </>
                        )}
                      </AccordionItem>
                    </Stack>
                  </Accordion>
                  <Text
                    as="a"
                    href="https://www.rentalcars.com/Home.do?affiliateCode=sprinttra667"
                    target="_blank"
                  >
                    {t('drawer.fleet.international')}
                  </Text>
                </Stack>
              </Box>
              <Link to="/franchising">
                <Text fontSize="xl" fontWeight="semibold">
                  {t('drawer.franchise')}
                </Text>
              </Link>
              <Link to="/sale">
                <Text fontSize="xl" fontWeight="semibold">
                  {t('drawer.sale')}
                </Text>
              </Link>
              <Text
                fontSize="xl"
                fontWeight="semibold"
                as="a"
                href="https://rentacar.filipeamorim.com/admin/"
                target="_blank"
              >
                {t('drawer.login')}
              </Text>
              <Link to="/contactos">
                <Text fontSize="xl" fontWeight="semibold">
                  {t('drawer.contacts')}
                </Text>
              </Link>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
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
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default CustomDrawer;
