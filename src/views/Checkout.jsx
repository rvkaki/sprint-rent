import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getCar, getLocation } from '../util/apiCalls';
import Order from '../components/Order';
import UserForm from '../components/UserForm';

const Checkout = props => {
  const [carInfo, setCarInfo] = useState();
  const [pickup, setPickup] = useState({});
  const [delivery, setDelivery] = useState({});

  const { startLocation, endLocation, startDate, endDate, car } = useContext(
    AppContext
  );

  useEffect(() => {
    const fetchData = async () => {
      const carData = await getCar(car);
      setCarInfo(carData);
      const pickupData = await getLocation(startLocation);
      setPickup(pickupData);
      const deliveryData = await getLocation(endLocation);
      setDelivery(deliveryData);
    };

    fetchData();
  }, [car, startLocation, endLocation]);

  const submit = (name, email, contact) => {
    console.log('Order:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Contact: ${contact}`);
    console.log(`Car: ${carInfo.brand} ${carInfo.model}`);
    console.log(
      `From: ${startDate.toLocaleDateString()}, To: ${endDate.toLocaleDateString()}`
    );
    console.log(`Pickup: ${pickup.title}, Delivery: ${delivery.title}`);
  };

  return (
    <Flex direction="column">
      <Header />
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justifyContent={{ base: 'center', lg: 'space-between' }}
        align={{ base: 'center', lg: 'flex-start' }}
      >
        <Box flex={2} py={8} px={{ base: 4, md: 8 }} w="100%">
          <Text fontSize="2xl" color="black" fontWeight="semibold">
            Identificação
          </Text>
          <UserForm submit={submit} />
        </Box>
        <Box flex={1} py={8} px={{ base: 0, md: 8 }} w="100%">
          <Text
            px={{ base: 4, lg: 0 }}
            fontSize="2xl"
            color="black"
            fontWeight="semibold"
          >
            A sua reserva
          </Text>
          {carInfo ? (
            <Order
              car={carInfo}
              pickup={pickup}
              delivery={delivery}
              startDate={startDate}
              endDate={endDate}
            />
          ) : null}
        </Box>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Checkout;
