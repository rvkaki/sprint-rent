import { AspectRatio, Box, IconButton, Stack, Text } from '@chakra-ui/react';
import {
  faChevronDown,
  faChevronUp,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { loadImages } from '../util/preloader';

const images = [
  'assets/images/ligeiros.jpg',
  'assets/images/vito.png',
  'assets/images/sprinter.jpg',
];

const info = [
  { name: 'Ligeiros', price: 21 },
  { name: 'Vito', price: 33 },
  { name: 'Sprinter', price: 43 },
];

const CleanButton = props => {
  return (
    <IconButton
      {...props}
      variant="ghost"
      _focus={{}}
      _active={{}}
      _hover={{}}
    />
  );
};

const RoundButton = props => {
  return (
    <Box
      {...props}
      as="button"
      w={props.current ? '30px' : '24px'}
      h={props.current ? '30px' : '24px'}
      bg={props.current ? 'gray.500' : 'gray.400'}
      borderRadius="50%"
      border="1px"
      borderColor="gray.500"
      transition=" 0.3s ease-in-out"
      outline="none"
      _hover={{
        transform: 'scale(1.3)',
      }}
      _active={{
        border: '0px',
      }}
      _focus={{}}
      _pressed={{}}
    />
  );
};

const OfferButtons = props => {
  return (
    <Box position="absolute" right={4} bottom="40%">
      <CleanButton
        icon={<FontAwesomeIcon icon={faChevronUp} size="lg" />}
        onClick={props.previous}
      />
      <Stack alignItems="center" spacing={1}>
        <RoundButton current={props.current == 0} onClick={props.onClick[0]} />
        <RoundButton current={props.current == 1} onClick={props.onClick[1]} />
        <RoundButton current={props.current == 2} onClick={props.onClick[2]} />
      </Stack>
      <CleanButton
        icon={<FontAwesomeIcon icon={faChevronDown} size="lg" />}
        onClick={props.next}
      />
    </Box>
  );
};

const Offers = props => {
  useEffect(() => {
    loadImages(images);
  }, []);

  const [idx, setIdx] = useState(0);

  return (
    <Box position="relative" h={{ base: '100vh', md: 'auto' }}>
      <Box
        as="img"
        h={{ base: '80%', md: '100%' }}
        w={{ base: 'auto', md: '100%' }}
        objectFit={{ base: 'cover', md: 'contain' }}
        src={images[idx]}
        alt={images[idx]}
      />
      <AspectRatio
        position="absolute"
        left={{ base: -16, md: -20 }}
        bottom={{ base: 28, md: -10 }}
        w={{ base: '70%', sm: '60%', md: '40%', lg: '30%' }}
        ratio={1}
      >
        <Box bg="gray.400" boxShadow="dark-lg" borderRadius="50%">
          <Text
            position="absolute"
            top="20%"
            left={{ base: '30%', lg: '25%' }}
            fontSize={{ base: '2xl', lg: '4xl' }}
            color="black"
          >
            {info[idx].name}
          </Text>
          <Stack position="absolute" bottom="20%" right="10%" spacing={-8}>
            <Text fontSize="md" color="black" fontWeight="light">
              Desde
            </Text>
            <Text
              fontSize={{ base: '7xl', lg: '8xl' }}
              color="black"
              fontWeight="bold"
            >
              {info[idx].price}€
            </Text>
          </Stack>
        </Box>
      </AspectRatio>
      <OfferButtons
        onClick={[() => setIdx(0), () => setIdx(1), () => setIdx(2)]}
        next={() => setIdx((idx + 1) % 3)}
        previous={() => setIdx((idx - 1 + 3) % 3)}
        current={idx}
      />
    </Box>
  );
};

export default Offers;
