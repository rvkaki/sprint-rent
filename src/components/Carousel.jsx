import React, { useEffect, useState } from 'react';
import { Box, Flex, IconButton, Spinner, Text } from '@chakra-ui/react';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { loadImages } from '../util/preloader';

const CarouselButton = props => {
  return (
    <IconButton
      onClick={props.onClick}
      icon={<FontAwesomeIcon icon={props.icon} />}
      color="black"
      isRound
      aria-label={props.label}
      variant="ghost"
      size="lg"
      fontSize="3xl"
      zIndex="2"
      _hover={{
        transform: 'scale(1.2)',
        bg: 'gray.100',
      }}
      _focus={{}}
      _active={{
        boxShadow: '0 0 1px 2px rgba(200,200,200,0.6)',
        opacity: 0.8,
        bg: 'gray.100',
      }}
    />
  );
};

const Carousel = props => {
  const [idx, setIdx] = useState(1);
  const [images, setImages] = useState();

  const handleClick = dir => {
    if (dir === 'left') {
      setIdx((idx - 1 + images.length) % images.length);
    } else if (dir === 'right') {
      setIdx((idx + 1) % images.length);
    }
  };

  // on component mount
  useEffect(() => {
    loadImages(props.images.map(i => i.src)).then(() => {
      setImages(props.images);
    });
  }, [props.images]);

  if (!images) return <Spinner size="xl" />;

  return (
    <Box pos="relative" w="100%">
      <Box pos="absolute" bottom={0} w="100%" bg="#333" h="45%" />
      <Flex
        dir="row"
        px={['16px', '32px']}
        justify="space-between"
        align="center"
      >
        <CarouselButton
          icon={faChevronLeft}
          label="left"
          onClick={() => handleClick('left')}
        />
        <Flex dir="row" justify="center" align="center" zIndex="1">
          <Box
            as="img"
            display={['none', 'inherit', 'inherit', 'inherit']}
            src={images[(idx - 1 + images.length) % images.length].src}
            boxSize={['6rem', '10rem', '3xs', '2xs']}
            mr={['-10%', '-10%', '-10%', 0]}
            objectFit="cover"
          />
          <Box
            as="img"
            pos="relative"
            src={images[idx].src}
            boxSize={['3xs', 'xs', 'md', 'lg']}
            objectFit="cover"
            zIndex="2"
          />
          <Text
            pos="absolute"
            color="white"
            bottom="20%"
            fontSize={['md', 'lg', 'xl', '2xl']}
            fontWeight="medium"
          >
            {images[idx].model}
          </Text>
          <Box
            as="img"
            display={['none', 'inherit', 'inherit', 'inherit']}
            src={images[(idx + 1) % images.length].src}
            boxSize={['6rem', '10rem', '3xs', '2xs']}
            objectFit="cover"
            ml={['-10%', '-10%', '-10%', 0]}
          />
        </Flex>
        <CarouselButton
          icon={faChevronRight}
          label="right"
          onClick={() => handleClick('right')}
        />
      </Flex>
    </Box>
  );
};

export default Carousel;
