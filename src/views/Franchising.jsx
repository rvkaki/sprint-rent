import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import FranchiseForm from '../components/FranchiseForm';
import Header from '../components/Header';
import { getFranchisingBook } from '../util/apiCalls';

const Franchising = props => {
  const [t] = useTranslation('common');
  const [book, setBook] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const submit = (name, email, contact, area, subject, message) => {
    console.log(name, email, contact, area, subject, message);
  };

  useEffect(() => {
    getFranchisingBook().then(data => setBook(data.file.url));
  }, []);

  return (
    <Box minH="100vh">
      <Header />
      <Flex direction="column" h="100%" w="100%">
        <Flex
          h={{ base: '30vh', md: '40vh' }}
          w="100%"
          position="relative"
          align="center"
          justify="center"
        >
          <Box
            as="img"
            src="assets/images/franchise_banner.jpg"
            alt="banner"
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
        <Box position="relative" w="100%">
          <Box
            as="img"
            src="assets/images/franchise_background.jpg"
            objectFit="cover"
            alt="background"
            h="90vh"
            w="100%"
          />
          <Box
            position="absolute"
            right={8}
            top={8}
            as="button"
            onClick={isOpen ? onClose : onOpen}
            bg="gray.800"
            borderRadius="lg"
            px={5}
            py={3}
            color="white"
            fontSize="xl"
            fontWeight="medium"
            shadow="lg"
            transition="ease-in-out 0.2s"
            _hover={{
              bg: 'gray.900',
              transform: 'scale(1.03)',
              shadow: '2xl',
            }}
          >
            Entrar em contacto
          </Box>
          <Flex
            as="a"
            position="absolute"
            right={8}
            bottom={8}
            w={20}
            h={20}
            align="center"
            justify="center"
            href={`${process.env.REACT_APP_SERVER_URL}${book}`}
            target="_blank"
            bg="gray.800"
            borderRadius="50%"
            color="white"
            fontSize="xl"
            fontWeight="medium"
            shadow="lg"
            transition="ease-in-out 0.2s"
            _hover={{
              bg: 'gray.900',
              transform: 'scale(1.03)',
              shadow: '2xl',
            }}
          >
            <FontAwesomeIcon icon={faBook} size="2x" color="white" />
          </Flex>
          {isOpen ? (
            <Box
              position="absolute"
              top={0}
              py={8}
              px={{ base: 4, md: 8 }}
              w={{ base: '100%', md: '60%' }}
              alignSelf="center"
            >
              {/* <Text fontSize="2xl" color="black" fontWeight="semibold" mb={4}>
                {t('franchise.info.label')}
              </Text> */}
              <FranchiseForm submit={submit} />
            </Box>
          ) : null}
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Franchising;
