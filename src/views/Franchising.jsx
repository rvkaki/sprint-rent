import { Box, Flex, Stack, useDisclosure } from '@chakra-ui/react';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import FranchiseForm from '../components/FranchiseForm';
import Header from '../components/Header';
import Loader from '../components/Loader';
import { getFranchisingBook } from '../util/apiCalls';
import ShareButtons from '../components/ShareButtons';
import { sendFranchiseEmail } from '../util/email';

const Franchising = props => {
  const [t] = useTranslation('common');
  const [book, setBook] = useState();
  const [loading, setLoading] = useState(false);
  const modal = global['modal'];
  const { isOpen, onOpen, onClose } = useDisclosure();

  const shareUrl = `${process.env.REACT_APP_SERVER_URL}/franchising`;

  const submit = (name, email, contact, area, subject, message) => {
    console.log(name, email, contact, area, subject, message);
    setLoading(true);
    sendFranchiseEmail(name, email, contact, area, subject, message).then(
      res => {
        console.log(res);
        setLoading(false);
        if (res.ok)
          modal.open(t('checkout.order.requested'), t('checkout.order.text'));
        else
          modal.open(
            t('checkout.order.error.label'),
            t('checkout.order.error.text') +
              'franchising@sprinttravelviagens.com'
          );
      }
    );
  };

  useEffect(() => {
    getFranchisingBook().then(data => setBook(data.file.url));
  }, []);

  const Button = () => {
    return (
      <Box
        as="button"
        onClick={isOpen ? onClose : onOpen}
        bg="gray.800"
        borderRadius="lg"
        px={{ base: 2, md: 5 }}
        py={{ base: 1, md: 3 }}
        w={{ base: '50%', md: 'auto' }}
        color="white"
        fontSize={{ base: 'md', md: 'xl' }}
        fontWeight="medium"
        shadow="lg"
        transition="ease-in-out 0.2s"
        _hover={{
          bg: 'gray.900',
          transform: 'scale(1.03)',
          shadow: '2xl',
        }}
      >
        {t('franchise.info.label')}
      </Box>
    );
  };

  return (
    <Box minH="100vh">
      <Header />
      <Loader loading={loading} />
      <Flex direction="column" h="100%" w="100%">
        <Box position="relative" w="100%">
          <Box
            as="img"
            src="assets/images/franchise_background.jpg"
            objectFit="cover"
            alt="background"
            h={{ base: '110vh', md: '94vh' }}
            w="100%"
          />
          <Flex
            position="absolute"
            top={0}
            left={0}
            p={{ base: 4, md: 8 }}
            w="100%"
            h="100%"
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
          >
            <Flex
              dir="row"
              justify="space-between"
              display={{ base: 'inherit', md: 'none' }}
            >
              <Button />
              <ShareButtons label={`${t('share')}:`} shareUrl={shareUrl} />
            </Flex>
            <Box
              visibility={isOpen ? 'visible' : 'hidden'}
              py={{ base: 4, md: 8 }}
              px={{ base: 0, md: 8 }}
              mx={{ base: 0, md: 16 }}
              w={{ base: '100%', md: '60%' }}
              alignSelf="center"
            >
              <FranchiseForm submit={submit} />
            </Box>
            <Flex
              direction="column"
              h="100%"
              justify="space-between"
              align="flex-end"
            >
              <Stack align="flex-end" display={{ base: 'none', md: 'inherit' }}>
                <Button />
                <ShareButtons label={`${t('share')}:`} shareUrl={shareUrl} />
              </Stack>
              <Flex
                as="a"
                w={{ base: 16, md: 20 }}
                h={{ base: 16, md: 20 }}
                align="center"
                justify="center"
                href={`${process.env.REACT_APP_SERVER_URL}${book}`}
                target="_blank"
                bg="gray.800"
                borderRadius="50%"
                color="white"
                fontSize={{ base: 'md', md: 'xl' }}
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
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Franchising;
