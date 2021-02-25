import { Box, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const HighlightItem = props => {
  const [isHovered, setIsHovered] = useState(false);
  const [t] = useTranslation('common');

  useEffect(() => {
    return () => {
      setIsHovered(false);
    };
  }, []);

  return (
    <Box
      h={{ base: '200px', lg: '250px' }}
      w={{ base: '100%', sm: '50%', lg: '33.33%' }}
      position="relative"
      overflow="hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={props.onClick}
      _hover={{ cursor: 'pointer' }}
    >
      <Box
        as="img"
        src={`${process.env.REACT_APP_SERVER_URL}${props.coverImage.url}`}
        alt={props.coverImage.name}
        objectFit="cover"
        h="100%"
        w="100%"
        transition="ease-in-out 0.5s"
        transform={isHovered ? 'scale(1.4)' : 'auto'}
      />
      <Flex
        direction="column"
        justify="space-between"
        h="100%"
        w="100%"
        position="absolute"
        bg="rgba(0,0,0,0.2)"
        top={0}
        left={0}
        p={4}
      >
        <Text
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="semibold"
          color="white"
        >
          {props.title}
        </Text>
        <Text
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="semibold"
          color="white"
          textAlign="right"
        >
          <Box as="span" fontSize="lg">
            {t('offer.from')}:{' '}
          </Box>
          {props.price}€
        </Text>
      </Flex>
    </Box>
  );
};

export default HighlightItem;
