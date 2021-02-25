import { Box, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import Line from './Line';
import ShareButtons from './ShareButtons';

const OfferInfo = props => {
  const [t] = useTranslation('common');
  return (
    <Box
      ml={{ base: 0, lg: 4 }}
      mt={{ base: 4, lg: 0 }}
      w={{ base: '100%', lg: '40%' }}
    >
      <Flex w="100%" justify="flex-end" mb={2}>
        <ShareButtons label={`${t('share')}:`} shareUrl={props.shareUrl} />
      </Flex>
      <Flex
        px={{ base: 4, md: 8 }}
        py={{ base: 2, md: 4 }}
        minH={{ base: '100%', lg: '65vh' }}
        w="100%"
        direction="column"
        justify="space-between"
        bg="gray.200"
        fontSize={{ base: 'md', md: 'lg' }}
        shadow="lg"
      >
        {props.description ? (
          <Box>
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold">
              {t('offer.description')}
            </Text>
            <Line />
            <Text>{props.description}</Text>
          </Box>
        ) : null}
        <Box>
          <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold">
            {t('offer.price')}
          </Text>
          <Line />
          <Text>
            {t('offer.from')}: {props.price}€
          </Text>
        </Box>
        {props.validUntil ? (
          <Box>
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold">
              {t('offer.validUntil')}
            </Text>
            <Line />
            <Text>{new Date(props.validUntil).toLocaleDateString()}</Text>
          </Box>
        ) : null}
        {props.info ? (
          <Box>
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="semibold">
              {t('offer.info')}
            </Text>
            <Line />
            <Box px={{ base: 4, md: 8 }}>
              <ReactMarkdown>{props.info}</ReactMarkdown>
            </Box>
          </Box>
        ) : null}
        <Box
          alignSelf="flex-end"
          as="button"
          bg="gray.800"
          borderRadius="md"
          px={3}
          py={1}
          color="white"
          fontWeight="semibold"
          onClick={props.checkout}
        >
          {t('offer.order')}
        </Box>
      </Flex>
    </Box>
  );
};

export default OfferInfo;
