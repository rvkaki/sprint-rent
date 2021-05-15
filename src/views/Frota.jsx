import {
  Box,
  Flex,
  Grid,
  Spinner,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import CarCard from '../components/CarCard';
import DataPopUp from '../components/DataPopUp';
import Filters from '../components/Filters';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Progress from '../components/Progress';
import ViewToggle from '../components/ViewToggle';
import AppContext from '../context/AppContext';
import { getCars, getLocations } from '../util/apiCalls';

const Frota = props => {
  const [cars, setCars] = useState();
  const [locations, setLocations] = useState([]);
  const [grid, setGrid] = useState(false);
  const [fleet, setFleet] = useState('');
  const appState = useContext(AppContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    getLocations().then(data => setLocations(data));
  }, []);

  useEffect(() => {
    const setStateFromQuery = async () => {
      const params = location.search.slice(1).split('&');
      if (params.length === 1) {
        setFleet(params[0].split('=')[1]);
      } else {
        const [pickup, delivery, date] = params;
        appState.setStartLocation(parseInt(pickup.split('=')[1]));
        appState.setEndLocation(parseInt(delivery.split('=')[1]));
        if (locations.length > 0)
          setFleet(
            locations.find(l => l.id === parseInt(pickup.split('=')[1]))
              .fleet || 'continente'
          );
        const [startDate, endDate] = date.split('=')[1].split('-');
        // convert from DD/MM/YYYY to MM/DD/YYYY to create date
        appState.setStartDate(
          new Date(
            `${startDate.split('/')[1]}/${startDate.split('/')[0]}/${
              startDate.split('/')[2]
            }`
          )
        );
        appState.setEndDate(
          new Date(
            `${endDate.split('/')[1]}/${endDate.split('/')[0]}/${
              endDate.split('/')[2]
            }`
          )
        );
      }
    };

    const clearState = async () => {
      appState.setEndDate(null);
      appState.setEndLocation(null);
      appState.setStartDate(null);
      appState.setStartLocation(null);
    };

    if (location.search !== '') setStateFromQuery();
    else clearState();
  }, [location.search, locations]);

  useEffect(() => {
    let query = '?';
    for (const key in appState.filters) {
      const elem = appState.filters[key];
      let elemQuery = '';
      if (elem.length > 0) {
        elem.forEach(x => (elemQuery += `${key}_in=${x}&`));
        query += elemQuery;
      }
    }
    query = query.slice(0, -1);
    getCars(query).then(data =>
      setCars(
        data
          .filter(c =>
            fleet !== 'continente'
              ? c.fleet === fleet
              : c.fleet === fleet || c.fleet === null
          )
          .sort((c1, c2) => (c2.model > c1.model ? -1 : 1))
      )
    );
  }, [appState.filters, fleet]);

  const selectCar = id => {
    appState.setCar(id);
    if (appState.startLocation) {
      history.push('/checkout/carro');
    } else onOpen();
  };

  return (
    <Flex direction="column">
      <Header />
      {/* Progresso da reserva */}
      {appState.startLocation && locations.length > 0 ? (
        <Progress locations={locations} state={appState} />
      ) : null}
      <ViewToggle grid={grid} setGrid={setGrid} />
      <Flex
        w="100%"
        direction={{ base: 'column', lg: 'row' }}
        px={{ base: 0, lg: '5%', xl: '8%' }}
        pb={16}
        justify="space-between"
      >
        <Filters fleet={fleet} />

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
                    <CarCard grid key={car.id} car={car} select={selectCar} />
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
                      <CarCard grid key={car.id} car={car} select={selectCar} />
                    ))}
                  </Grid>
                ) : (
                  <Stack align="center" spacing={5} w="80%">
                    {cars.map(car => (
                      <CarCard key={car.id} car={car} select={selectCar} />
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

      <DataPopUp
        options={locations.map(l => {
          return { name: l.title, value: l.id };
        })}
        isOpen={isOpen}
        onClose={onClose}
      />

      <Footer />
    </Flex>
  );
};

export default Frota;
