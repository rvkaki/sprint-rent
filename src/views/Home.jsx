import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import MainSearch from '../components/MainSearch';

const images = [
  { src: 'assets/images/class_A/white_0.webp', model: 'Classe A' },
  { src: 'assets/images/class_A/grey_0.webp', model: 'Classe A' },
  { src: 'assets/images/class_B/white_0.webp', model: 'Classe B' },
  { src: 'assets/images/class_B/grey_0.webp', model: 'Classe B' },
];

const Home = props => {
  return (
    <Box>
      <Header />
      <Carousel images={images} />
      <Flex justify="center">
        <MainSearch />
      </Flex>
    </Box>
  );
};

export default Home;
