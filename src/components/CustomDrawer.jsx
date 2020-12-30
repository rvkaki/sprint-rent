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
import { Link } from 'react-router-dom';

const CustomDrawer = props => {
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
          <DrawerBody display="flex" >
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
              <Text mr="4px" fontWeight="semibold">
                PT
              </Text>
              <Text>|</Text>
              <Text ml="4px">EN</Text>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default CustomDrawer;
