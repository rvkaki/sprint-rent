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
                  O Grupo
                </Text>
                <Stack ml={3} spacing={1}>
                  <Text>Sprint Viagens</Text>
                  <Text>Sprint Travel Shop</Text>
                  <Text>Sprint Informática</Text>
                </Stack>
              </Box>
              <Box>
                <Text fontSize="xl" fontWeight="semibold">
                  Frota
                </Text>
                <Stack ml={3} spacing={1}>
                  <Link to="/frota">Nacional</Link>
                  <Text>Internacional</Text>
                </Stack>
              </Box>
              <Text fontSize="xl" fontWeight="semibold">
                Contactos
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
