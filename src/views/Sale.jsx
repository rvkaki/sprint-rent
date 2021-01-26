import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

const Sale = props => {
  const [t] = useTranslation('common');

  return (
    <Box h="100vh">
      <Header />
      <Flex
        w="100%"
        h="100%"
        direction="column"
        align="center"
        justify="center"
      >
        <Text fontSize="4xl" fontWeight="medium" color="gray.800">
          {t('sale.unavailable')}
        </Text>
        <Box
          as="img"
          src="https://img.icons8.com/ios-filled/500/000000/roadblock.png"
          alt="roadblock"
          objectFit="contain"
        />
      </Flex>
      <Footer />
    </Box>
  );
};

export default Sale;
