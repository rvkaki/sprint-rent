import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { faList, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ViewToggle = props => {
  return (
    <Box
      alignSelf="flex-end"
      display={{ base: 'none', lg: 'inherit' }}
      mr={{ base: 0, lg: '5%', xl: '8%' }}
      pt={16}
      pb={2}
    >
      <Flex dir="row" alignItems="center">
        <Text fontSize="xl" color="gray.500" mr={2}>
          Vista:
        </Text>
        <IconButton
          icon={<FontAwesomeIcon icon={faThLarge} size="lg" />}
          variant="ghost"
          color={props.grid ? 'gray.900' : 'gray.500'}
          onClick={() => props.setGrid(true)}
          _hover={{
            transform: 'scale(1.2)',
          }}
          _focus={{}}
        />
        <IconButton
          icon={<FontAwesomeIcon icon={faList} size="lg" />}
          variant="ghost"
          color={props.grid ? 'gray.500' : 'gray.900'}
          onClick={() => props.setGrid(false)}
          _hover={{
            transform: 'scale(1.2)',
          }}
          _focus={{}}
        />
      </Flex>
    </Box>
  );
};

export default ViewToggle;
