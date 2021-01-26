import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  Stack,
  Text,
} from '@chakra-ui/react';
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
        <DrawerContent py="20%">
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
                  <Text
                    as="a"
                    href="https://www.sprintsolucoesinformaticas.com/"
                    target="_blank"
                    fontSize="md"
                  >
                    {t('drawer.group.tech')}
                  </Text>
                </Stack>
              </Box>
              <Box>
                <Text fontSize="xl" fontWeight="semibold">
                  {t('drawer.fleet.title')}
                </Text>
                <Stack ml={3} spacing={1}>
                  <Link to="/frota">{t('drawer.fleet.national')}</Link>
                  <Text
                    as="a"
                    href="https://www.rentalcars.com/Home.do?affiliateCode=sprinttra667"
                    target="_blank"
                    fontSize="md"
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
                href="/admin"
                target="_blank"
              >
                {t('drawer.login')}
              </Text>
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
