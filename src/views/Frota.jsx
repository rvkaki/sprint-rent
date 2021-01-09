import { Box, Flex, Grid, Spinner, Stack, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CarCard from '../components/CarCard';
import Filters from '../components/Filters';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ViewToggle from '../components/ViewToggle';
import AppContext from '../context/AppContext';
import { getCars } from '../util/apiCalls';

const Frota = props => {
  const [cars, setCars] = useState();
  const [grid, setGrid] = useState(false);
  const { filters } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
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
    getCars(query).then(data => setCars(data));
  }, [filters]);

  return (
    <Flex direction="column">
      <Header />
      {/* Progresso da reserva */}
      <Box bg="gray.700" w="100%" h="100px" />
      <ViewToggle grid={grid} setGrid={setGrid} />
      <Flex
        w="100%"
        direction={{ base: 'column', lg: 'row' }}
        px={{ base: 0, lg: '5%', xl: '8%' }}
        pb={16}
        justify="space-between"
      >
        <Filters />

        {cars ? (
          cars.length === 0 ? (
            <Box m="auto">
              <Text fontSize="2xl" color="black">
                Sem Resultados
              </Text>
            </Box>
          ) : (
            <>
              {/* Renders on <= medium-sized screens */}
              <Box
                justifyContent="center"
                display={{ base: 'inherit', lg: 'none' }}
              >
                <Grid
                  templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                  gap={6}
                  w="90%"
                >
                  {cars.map(car => (
                    <CarCard grid key={car.id} {...car} />
                  ))}
                </Grid>
              </Box>

              {/* Renders on > medium-sized screens */}
              <Box
                display={{ base: 'none', lg: 'inherit' }}
                flex={1}
                justifyContent="flex-end"
              >
                {grid ? (
                  <Grid templateColumns="repeat(2, 1fr)" gap={6} w="80%">
                    {cars.map(car => (
                      <CarCard grid key={car.id} {...car} />
                    ))}
                  </Grid>
                ) : (
                  <Stack align="center" spacing={5} w="80%">
                    {cars.map(car => (
                      <CarCard key={car.id} {...car} />
                    ))}
                  </Stack>
                )}
              </Box>
            </>
          )
        ) : (
          <Box m="auto">
            <Spinner />
          </Box>
        )}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Frota;
