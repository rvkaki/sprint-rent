import { Box, Flex, Stack } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import CarCard from '../components/CarCard';
import Filters from '../components/Filters';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FilterContext from '../context/FilterContext';

const getCars = async filters => {
  try {
    let query = '?';
    for (const key in filters) {
      const elem = filters[key];
      let elemQuery = '';
      if (elem.length > 0) {
        elem.forEach(x => (elemQuery += `${key}_in=${x}&`));
        query += elemQuery;
      }
    }
    query = query.slice(0, -1);
    const res = await fetch('http://localhost:1337/cars' + query);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Frota = props => {
  const [cars, setCars] = useState([]);
  const { filters } = useContext(FilterContext);

  useEffect(() => {
    getCars(filters).then(data => setCars(data));
  }, [filters]);

  return (
    <Box>
      <Header />
      {/* Progresso da reserva */}
      <Box bg="gray.700" w="100%" h="100px" />
      <Flex w="100%" dir="row" p={16} justify="space-between">
        {/* Filtros */}
        <Filters flex={1} />
        <Stack flex={4} align="center" spacing={5}>
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
