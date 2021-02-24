import React, { useEffect, useState } from 'react';
import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faMobileAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import { getPrivacyPolicy, getTermsAndConditions } from '../util/apiCalls';
import ReactMarkdown from 'react-markdown';

const Footer = props => {
  const [privacy, setPrivacy] = useState('');
  const [terms, setTerms] = useState('');
  const [t] = useTranslation('common');

  const modal = global['modal'];

  useEffect(() => {
    getPrivacyPolicy().then(data => setPrivacy(data.text));
    getTermsAndConditions().then(data => setTerms(data.text));
  }, []);

  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      bg="gray.800"
      py={4}
      px={{ base: 4, lg: 16 }}
      justify="space-between"
    >
      <Stack spacing={2} mb={{ base: 4, lg: 0 }}>
        <Box>
          <Text fontSize="lg" fontWeight="semibold" color="white">
            {t('footer.info.title')}
          </Text>
          <Box
            borderBottom="2px solid white"
            display={{ base: 'auto', lg: 'none' }}
          />
        </Box>
        <Text
          fontSize="md"
          color="white"
          onClick={() =>
            modal.open(
              t('footer.info.privacy'),
              <ReactMarkdown>{privacy}</ReactMarkdown>
            )
          }
          _hover={{
            cursor: 'pointer',
          }}
        >
          {t('footer.info.privacy')}
        </Text>
        <Text
          fontSize="md"
          color="white"
          onClick={() =>
            modal.open(
              t('footer.info.terms'),
              <ReactMarkdown>{terms}</ReactMarkdown>
            )
          }
          _hover={{
            cursor: 'pointer',
          }}
        >
          {t('footer.info.terms')}
        </Text>
        <Text
          as="a"
          href="https://www.livroreclamacoes.pt"
          target="_blank"
          fontSize="md"
          color="white"
        >
          {t('footer.info.complaints')}
        </Text>
      </Stack>
      <Stack spacing={2} mb={{ base: 4, lg: 0 }}>
        <Box>
          <Text fontSize="lg" fontWeight="semibold" color="white">
            {t('footer.contacts')}
          </Text>
          <Box
            borderBottom="2px solid white"
            display={{ base: 'auto', lg: 'none' }}
          />
        </Box>
        <Flex dir="row" align="center">
          <Box w={6} display="flex" justifyContent="center">
            <FontAwesomeIcon icon={faEnvelope} size="lg" color="white" />
          </Box>
          <Text fontSize="md" color="white" ml={2}>
            reservas@sprinttravelrentacar.com
          </Text>
        </Flex>
        <Flex dir="row" align="center">
          <Box w={6} display="flex" justifyContent="center">
            <FontAwesomeIcon icon={faPhoneAlt} size="lg" color="white" />
          </Box>
          <Text fontSize="md" color="white" ml={2}>
            (+351) 253 043 471
          </Text>
        </Flex>
        <Flex dir="row" align="center">
          <Box w={6} display="flex" justifyContent="center">
            <FontAwesomeIcon icon={faMobileAlt} size="lg" color="white" />
          </Box>
          <Text fontSize="md" color="white" ml={2}>
            (+351) 963 720 279
          </Text>
        </Flex>
      </Stack>
      <Stack spacing={2} mb={{ base: 4, lg: 0 }}>
        <Box>
          <Text fontSize="lg" fontWeight="semibold" color="white">
            {t('footer.visit')}
          </Text>
          <Box
            borderBottom="2px solid white"
            display={{ base: 'auto', lg: 'none' }}
          />
        </Box>
        <HStack spacing={4}>
          <Box
            as="a"
            href="https://www.facebook.com/sprinttravelviagens"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebookSquare} size="3x" color="white" />
          </Box>
          <Box
            as="a"
            href="https://www.instagram.com/sprinttravelviagens/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="3x" color="white" />
          </Box>
        </HStack>
        <Stack spacing={-1}>
          <Text fontSize="md" color="white">
            Rua Cidade do Porto, nº 45
          </Text>
          <Text fontSize="md" color="white">
            4705-086 Braga
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Footer;
