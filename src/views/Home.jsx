import React, { useEffect, useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Header from '../components/Header';
import SingleCarousel from '../components/SingleCarousel';
import { Carousel } from '../components/Carousel3D';
import MainSearch from '../components/MainSearch';
import Footer from '../components/Footer';
import { getHighlights, getLocations, getSlides } from '../util/apiCalls';
import Highlights from '../components/Highlights';
import Loader from '../components/Loader';

const Home = props => {
  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState([]);
  const [images, setImages] = useState();
  const [highlights, setHighlights] = useState();

  useEffect(() => {
    getLocations().then(data => setLocations(data));
    getHighlights().then(data => setHighlights(data));
    getSlides().then(data => {
      setImages(
        data.slides.map(i => {
          return { src: process.env.REACT_APP_SERVER_URL + i.url, alt: i.name };
        })
      );
      setLoading(false);
    });
  }, []);

  return (
    <Box>
      <Box minH="100vh">
        <Header />
        {loading ? (
          <Loader loading={true} color="black" />
        ) : (
          <>
            <Box
              w="80%"
              zIndex="sticky"
              left="10%"
              top={{ base: '45vh', md: '45vh', lg: '55vh', xl: '70vh' }}
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
              <Box pos="relative" w="100%" minH={{ base: '30vh', lg: '50vh' }}>
                <Box pos="absolute" bottom={0} w="100%" bg="#333" h="45%" />
                <Box
                  pos="absolute"
                  right={0}
                  left={0}
                  top={{ base: 8, lg: 10 }}
                >
                  <Text
                    textAlign="center"
                    fontFamily="Josefin Sans"
                    fontWeight="light"
                    fontSize={{base: "2xl", md: "3xl"}}
                    color="gray.600"
                  >
                    ...take a ride with us
                  </Text>
                </Box>
                {images ? (
                  <>
                    <Box display={{ base: 'none', md: 'inherit' }}>
                      <Carousel
                        autoplay={true}
                        interval={2500}
                        showArrows={true}
                        slides={images.map(i => (
                          <Box
                            as="img"
                            src={i.src}
                            alt={i.alt}
                            objectFit="cover"
                          />
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
                display={{ base: 'inherit', xl: 'none' }}
                objectFit={{ base: 'cover', md: 'contain' }}
                src="assets/images/background.jpg"
                alt="background"
              />
            </Flex>
            {highlights ? <Highlights data={highlights.ofertas} /> : null}
          </>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
