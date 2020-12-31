import { Box, Flex, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CarCard from '../components/CarCard';
import Footer from '../components/Footer';
import Header from '../components/Header';

const getCars = async () => {
  try {
    const res = await fetch('http://localhost:1337/cars');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Frota = props => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars().then(data => setCars(data));
  }, []);

  return (
    <Box>
      <Header />
      {/* Progresso da reserva */}
      <Box bg="gray.700" w="100%" h="100px" />
      <Flex w="100%" dir="row" p={16} justify="space-between">
        {/* Filtros */}
        <Box w="30%" bg="gray.400" />
        <Stack spacing={5}>
          {cars.map(car => (
            <CarCard key={car.id} {...car} />
          ))}
        </Stack>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Frota;
