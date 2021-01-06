import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';

const Carro = props => {
  const history = useHistory();
  const car = history.location.state;
  console.log(car);

  return (
    <Box>
      <Header />
      <Flex dir="row" h="100vh" w="100%">
        <Box
          as="img"
          w="60%"
          h="100%"
          objectFit="contain"
          src={`${process.env.REACT_APP_SERVER_URL}${
            car.images.find(x => x.name === '0.png').url
          }`}
        />
        <Box w="40%" h="100%" bg="gray.400"></Box>
      </Flex>
    </Box>
  );
};

export default Carro;
