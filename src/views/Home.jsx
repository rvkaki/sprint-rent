import React, { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import MainSearch from '../components/MainSearch';
import Offers from '../components/Offers';
import Locations from '../components/Locations';
import Footer from '../components/Footer';
import { getLocations } from '../util/apiCalls';

const images = [
  { src: 'assets/images/class_A/white_0.webp', model: 'Classe A' },
  { src: 'assets/images/class_A/grey_0.webp', model: 'Classe A' },
  { src: 'assets/images/class_B/white_0.webp', model: 'Classe B' },
  { src: 'assets/images/class_B/grey_0.webp', model: 'Classe B' },
];

const Home = props => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations().then(data => setLocations(data));
  }, []);
  return (
    <Box>
      <Header />
      <Box
        w="80%"
        zIndex="sticky"
        left="10%"
        top={{ base: '30vh', md: '65vh' }}
        position="absolute"
      >
        <MainSearch
          options={locations.map(l => {
            return { name: l.title, value: l.title };
          })}
        />
      </Box>
      <Flex
        w="100%"
        h={{ base: '90vh', md: 'auto' }}
        direction="column"
        justify="center"
        align="center"
      >
        <Carousel images={images} />
        <Box
          as="img"
          display={{ base: 'inherit', md: 'none' }}
          h={{ base: '100%', md: 'auto' }}
          w={{ base: 'auto', md: '100%' }}
          objectFit={{ base: 'cover', md: 'contain' }}
          src="assets/images/background.jpg"
          alt="background"
        />
      </Flex>
      <Offers />
      <Locations locations={locations} />
      <Footer />
    </Box>
  );
};

export default Home;
