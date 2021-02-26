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
        px={4}
        direction="column"
        align="center"
        justify="center"
      >
        <Text
          fontSize={{ base: '2xl', md: '4xl' }}
          textAlign="center"
          fontWeight="medium"
          color="gray.800"
        >
          {t('sale.unavailable')}
        </Text>
        <Box
          as="img"
          src="/assets/images/usados.png"
          alt="usados"
          h="60%"
          objectFit="contain"
        />
      </Flex>
      <Footer />
    </Box>
  );
};

export default Sale;
