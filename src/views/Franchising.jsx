import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import FranchiseForm from '../components/FranchiseForm';
import Header from '../components/Header';

const Franchising = props => {
  const [t] = useTranslation('common');

  const submit = (name, email, contact, area, subject, message) => {
    console.log(name, email, contact, area, subject, message);
  };

  return (
    <Box minH="100vh">
      <Header />
      <Flex direction="column" h="100%" w="100%">
        <Flex
          h={{ base: '30vh', md: '50vh' }}
          w="100%"
          position="relative"
          align="center"
          justify="center"
        >
          <Box
            as="img"
            src="assets/images/franchise.jpg"
            alt="franchise"
            w="100%"
            h="100%"
            objectFit="cover"
          />
          <Text
            position="absolute"
            fontSize={{ base: '4xl', md: '7xl' }}
            fontWeight="bold"
            color="gray.100"
            textShadow="1px 0 0 #555, -1px 0 0 #555, 0 1px 0 #555, 0 -1px 0 #555, 1px 1px #555, -1px -1px 0 #555, 1px -1px 0 #555, -1px 1px 0 #555"
          >
            FRANCHISING
          </Text>
        </Flex>
        <Box
          py={8}
          px={{ base: 4, md: 8 }}
          w={{ base: '100%', md: '60%' }}
          alignSelf="center"
        >
          <Text
            fontSize="2xl"
            color="black"
            fontWeight="semibold"
            mb={4}
          >
            {t('franchise.info.label')}
          </Text>
          <FranchiseForm submit={submit} />
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Franchising;
