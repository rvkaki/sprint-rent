import { Box, Flex, Text } from '@chakra-ui/react';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MediaContainer = props => {
  const [imageIdx, setImageIdx] = useState(0);

  const [t] = useTranslation('common');

  const nextMedia = () => {
    setImageIdx((imageIdx + 1) % props.images.length);
  };

  const prevMedia = () => {
    setImageIdx((imageIdx - 1 + props.images.length) % props.images.length);
  };

  return (
    <Box
      w={{ base: '100%', lg: '60%' }}
      mr={{ base: 0, lg: 4 }}
      mb={{ base: 4, lg: 0 }}
      overflow="hidden"
      borderBottomRightRadius={{ base: '20px', md: '40px' }}
    >
      <Box
        h={{ base: '30vh', md: '40vh', lg: '60vh' }}
        overflow="hidden"
        borderWidth="3px"
        borderTopLeftRadius={{ base: '20px', md: '40px' }}
        borderBottomRightRadius={{ base: '20px', md: '40px' }}
        borderColor="gray.800"
        position="relative"
      >
        <Box
          as="img"
          src={props.images[imageIdx].src}
          alt={props.images[imageIdx].alt}
          objectFit="cover"
          h="100%"
          w="100%"
        />
        {props.images.length > 1 ? (
          <>
            <Box
              position="absolute"
              as="button"
              left={4}
              top="50%"
              bottom="50%"
              onClick={prevMedia}
            >
              <Box
                display={{ base: 'none', md: 'inherit' }}
                as={FontAwesomeIcon}
                icon={faChevronLeft}
                size="3x"
                color="black"
              />
              <Box
                display={{ base: 'inherit', md: 'none' }}
                as={FontAwesomeIcon}
                icon={faChevronLeft}
                size="2x"
                color="black"
              />
            </Box>
            <Box
              position="absolute"
              as="button"
              right={4}
              top="50%"
              bottom="50%"
              onClick={nextMedia}
            >
              <Box
                display={{ base: 'none', md: 'inherit' }}
                as={FontAwesomeIcon}
                icon={faChevronRight}
                size="3x"
                color="black"
              />
              <Box
                display={{ base: 'inherit', md: 'none' }}
                as={FontAwesomeIcon}
                icon={faChevronRight}
                size="2x"
                color="black"
              />
            </Box>
          </>
        ) : null}
      </Box>
      <Flex>
        <Box
          bg={'gray.800'}
          h="40px"
          w="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            color={'white'}
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight={'semibold'}
            textAlign="center"
          >
            {t('offer.images')}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default MediaContainer;
