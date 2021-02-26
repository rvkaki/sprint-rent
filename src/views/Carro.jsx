import React, { useContext, useEffect, useState } from 'react';
import { Box, Flex, Spinner, useDisclosure } from '@chakra-ui/react';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { loadImages } from '../util/preloader';
import { debounce } from 'lodash';
import InfoCard from '../components/InfoCard';
import { getCar, getLocations } from '../util/apiCalls';
import DataPopUp from '../components/DataPopUp';
import AppContext from '../context/AppContext';
import SingleCarousel from '../components/SingleCarousel';

const Carro = props => {
  const history = useHistory();
  const { carID } = useParams();
  const [car, setCar] = useState({});
  const [images, setImages] = useState();
  const [idx, setIdx] = useState(0);

  const [locations, setLocations] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const appState = useContext(AppContext);

  const [pressed, setPressed] = useState(false);
  const [prevX, setPrevX] = useState();

  useEffect(() => {
    getLocations().then(data => setLocations(data));
  }, []);

  const onSelect = id => {
    appState.setCar(id);
    if (appState.startLocation) {
      history.push('/checkout/carro');
    } else onOpen();
  };

  useEffect(() => {
    if (history.location.state) setCar(history.location.state);
    else getCar(carID).then(data => setCar(data));
  }, [carID, history.location.state]);

  useEffect(() => {
    if (car.images)
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

  if (!car) return <Spinner />;

  const handleMove = e => {
    if (e.screenX > prevX + 5) setIdx((idx + 1) % images.length);
    else if (e.screenX < prevX - 5)
      setIdx((idx - 1 + images.length) % images.length);
  };

  const debouncedMove = debounce(handleMove, 50);

  const onMouseMove = e => {
    setPrevX(e.screenX);
    debouncedMove(e);
  };

  const onTouchMove = e => {
    setPrevX(e.touches[0].screenX);
    handleMove(e.touches[0]);
  };

  const Draggable = (
    <Flex
      w={{ base: '100%', lg: '60%' }}
      direction="column"
      zIndex={2}
      align="center"
      justify="center"
      m="auto"
      draggable={false}
      onMouseDown={e => {
        setPrevX(e.screenX);
        setPressed(true);
      }}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onMouseMove={pressed ? onMouseMove : () => {}}
      onTouchStart={e => setPrevX(e.touches[0].screenX)}
      onTouchMove={onTouchMove}
      _hover={{
        cursor: pressed ? 'grabbing' : 'grab',
      }}
    >
      {images ? (
        <Box
          mt={{ base: '-5%', lg: '-15%' }}
          as="img"
          draggable={false}
          objectFit="contain"
          src={`${process.env.REACT_APP_SERVER_URL}${images[idx].url}`}
          _selection={{}}
        />
      ) : (
        <Spinner size="xl" />
      )}
      <Box position="relative" w="100%" mt="-25%">
        <Box
          draggable={false}
          mx="auto"
          as="img"
          src="/assets/360line.svg"
          w="90%"
        />
        <Box
          as="img"
          draggable={false}
          src="/assets/360number.svg"
          pos="absolute"
          w="32px"
          left={0}
          right={0}
          bottom={-2}
          mx="auto"
        />
      </Box>
    </Flex>
  );

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        flex={1}
        position="relative"
      >
        <Box
          pos="absolute"
          bottom={0}
          w="100%"
          bg="#333"
          h={{ base: '80%', md: '70%', lg: '45%' }}
        />
        {images ? (
          images.length === 18 ? (
            Draggable
          ) : (
            <Box
              w={{ base: '100%', lg: '60%' }}
              alignSelf="center"
              m="auto"
              my={{ base: 8, lg: 'auto' }}
            >
              <SingleCarousel
                w={{ base: '90%', lg: '100%' }}
                images={images.map(i => {
                  return {
                    src: `${process.env.REACT_APP_SERVER_URL}${i.url}`,
                    alt: i.name,
                  };
                })}
              />
            </Box>
          )
        ) : null}
        <Box
          w={{ base: '80%', lg: '25%' }}
          h={{ base: '45%', md: '50%', lg: '75%' }}
          m="auto"
          zIndex={2}
        >
          <InfoCard {...car} select={onSelect} />
        </Box>
      </Flex>
      <DataPopUp
        options={locations.map(l => {
          return { name: l.title, value: l.id };
        })}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Flex>
  );
};

export default Carro;
