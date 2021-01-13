import React, { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import SingleCarousel from '../components/SingleCarousel';
import { Carousel } from '../components/Carousel3D';
import MainSearch from '../components/MainSearch';
import Locations from '../components/Locations';
import Footer from '../components/Footer';
import { getLocations, getSlides } from '../util/apiCalls';

const Home = props => {
  const [locations, setLocations] = useState([]);
  const [images, setImages] = useState();

  useEffect(() => {
    getLocations().then(data => setLocations(data));
    getSlides().then(data =>
      setImages(
        data.slides.map(i => {
          return { src: process.env.REACT_APP_SERVER_URL + i.url, alt: i.name };
        })
      )
    );
  }, []);

  return (
    <Box>
      <Header />
      <Box
        w="80%"
        zIndex="sticky"
        left="10%"
        top={{ base: '45vh', md: '40vh', lg: '55vh', xl: '65vh' }}
        position="absolute"
      >
        <MainSearch
          options={locations.map(l => {
            return { name: l.title, value: l.id };
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
        <Box pos="relative" w="100%" h="auto">
          <Box pos="absolute" bottom={0} w="100%" bg="#333" h="45%" />
          {images ? (
            <>
              <Box display={{ base: 'none', md: 'inherit' }}>
                <Carousel
                  autoplay={true}
                  interval={2500}
                  showArrows={true}
                  slides={images.map(i => (
                    <Box as="img" src={i.src} alt={i.alt} objectFit="cover" />
                  ))}
                />
              </Box>
              <Box display={{ base: 'inherit', md: 'none' }}>
                <SingleCarousel images={images} />
              </Box>
            </>
          ) : null}
        </Box>
        <Box
          as="img"
          h="100%"
          w="100%"
          objectFit={{ base: 'cover', md: 'contain' }}
          src="assets/images/background.jpg"
          alt="background"
        />
      </Flex>
      <Locations locations={locations} />
      <Footer />
    </Box>
  );
};

export default Home;
