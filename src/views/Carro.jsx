import React, { useEffect, useMemo, useState } from 'react';
import { Box, Flex, Grid, Spinner, Stack, Text } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { loadImages } from '../util/preloader';
import _ from 'lodash';

const Carro = props => {
  const history = useHistory();
  const car = history.location.state;
  const [images, setImages] = useState();
  const [idx, setIdx] = useState(0);

  const [pressed, setPressed] = useState(false);
  const [prevX, setPrevX] = useState();
  const [lastMove, setLastMove] = useState(new Date().getTime());
  const interval = 100;

  useEffect(() => {
    loadImages(
      car.images.map(i => process.env.REACT_APP_SERVER_URL + i.url)
    ).then(() => {
      const newImages = car.images.sort((a, b) => {
        const aName = parseInt(a.name.split('.')[0]);
        const bName = parseInt(b.name.split('.')[0]);
        if (aName < bName) return -1;
        else if (aName > bName) return 1;
        return 0;
      });
      setImages(newImages);
    });
  }, [car.images]);

  const handleMove = e => {
    const newTime = new Date().getTime();
    if (newTime - lastMove > interval) {
      if (e.screenX > prevX) setIdx((idx + 1) % images.length);
      else if (e.screenX < prevX)
        setIdx((idx - 1 + images.length) % images.length);
      setPrevX(e.screenX);
      setLastMove(newTime);
    }
  };

  // const onMouseMove = useMemo(() => {
  //   const _throttled = _.throttle(handleMove, 1000);
  //   return e => {
  //     e.persist();
  //     return _throttled(e);
  //   };
  // });

  return (
    <Box>
      <Header />
      <Flex dir="row" h="100vh" w="100%" position="relative">
        <Box pos="absolute" bottom={0} w="100%" bg="#333" h="45%" />
        {images ? (
          <Box
            as="img"
            draggable={false}
            onMouseDown={e => {
              setPrevX(e.screenX);
              setPressed(true);
            }}
            onMouseUp={() => setPressed(false)}
            onMouseMove={pressed ? handleMove : () => {}}
            zIndex={2}
            w="60%"
            objectFit="contain"
            src={`${process.env.REACT_APP_SERVER_URL}${images[idx].url}`}
          />
        ) : (
          <Spinner size="xl" />
        )}
        <Flex
          direction="column"
          w="25%"
          h="70%"
          m="auto"
          p={4}
          bg="white"
          shadow="dark-lg"
          zIndex={2}
          justify="space-between"
        >
          <Text
            fontSize="2xl"
            textAlign="center"
            fontWeight="semibold"
            color="black"
          >
            {car.brand + ' ' + car.model}
          </Text>
          <Stack spacing={3}>
            <Flex dir="row" align="center">
              <Flex w="50px" justify="center" align="center">
                <FontAwesomeIcon icon={faUserFriends} size="2x" color="black" />
              </Flex>
              <Text fontSize="lg">{car.seats} lugares</Text>
            </Flex>
            <Flex dir="row" align="center">
              <Flex w="50px" justify="center" align="center">
                <Box
                  as="img"
                  src="https://img.icons8.com/pastel-glyph/48/000000/gearbox-selector.png"
                />
              </Flex>
              <Text textTransform="capitalize" fontSize="lg">
                {car.mode}
              </Text>
            </Flex>
            <Flex dir="row" align="center">
              <Flex w="50px" justify="center" align="center">
                <FontAwesomeIcon icon={faGasPump} size="2x" color="black" />
              </Flex>
              <Text textTransform="capitalize" fontSize="lg">
                {car.gas}
              </Text>
            </Flex>
            <Flex dir="row" align="center">
              <Flex w="50px" justify="center" align="center">
                <Box
                  as="img"
                  src="https://img.icons8.com/material/48/000000/car-door--v2.png"
                />
              </Flex>
              <Text fontSize="lg">{car.doors} portas</Text>
            </Flex>
          </Stack>
          <Flex justify="space-between">
            <Flex align="baseline">
              <Text fontSize="5xl" fontWeight="bold" color="black">
                {car.price}€
              </Text>
              <Text fontSize="lg">/dia</Text>
            </Flex>
            <Box
              as="button"
              borderRadius="4px"
              p={2}
              my="auto"
              fontSize="lg"
              color="white"
              bg="gray.800"
              onClick={e => {
                e.stopPropagation();
                console.log(props.id);
              }}
            >
              Selecionar
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Carro;
