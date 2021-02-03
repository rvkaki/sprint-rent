import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getCar, getLocation, getTermsAndConditions } from '../util/apiCalls';
import Order from '../components/Order';
import UserForm from '../components/UserForm';
import { useTranslation } from 'react-i18next';
import Loader from '../components/Loader';
import { sendOrderEmail } from '../util/email';

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

function dateDiffInDays(a, b) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

const Checkout = props => {
  const [carInfo, setCarInfo] = useState();
  const [pickup, setPickup] = useState({});
  const [delivery, setDelivery] = useState({});

  const [terms, setTerms] = useState();
  const modal = global['modal'];

  const [loading, setLoading] = useState(false);

  const [t] = useTranslation('common');

  const { startLocation, endLocation, startDate, endDate, car } = useContext(
    AppContext
  );

  const numDays = dateDiffInDays(startDate, endDate) + 1;

  useEffect(() => {
    getTermsAndConditions().then(data => setTerms(data.text));
  }, []);

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
    setLoading(true);
    sendOrderEmail(
      name,
      email,
      contact,
      carInfo,
      startDate,
      endDate,
      pickup,
      delivery,
      numDays
    ).then(res => {
      console.log(res);
      setLoading(false);
      if (res.ok)
        modal.open(t('checkout.order.requested'), t('checkout.order.text'));
      else
        modal.open(
          t('checkout.order.error.label'),
          t('checkout.order.error.text') + pickup.emails[0].email
        );
    });
  };

  return (
    <Flex direction="column">
      <Header />
      <Loader loading={loading} />
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justifyContent={{ base: 'center', lg: 'space-between' }}
        align={{ base: 'center', lg: 'flex-start' }}
      >
        <Box flex={2} py={8} px={{ base: 4, md: 8 }} w="100%">
          <Text fontSize="2xl" color="black" fontWeight="semibold">
            {t('checkout.info.label')}
          </Text>
          <UserForm submit={submit} terms={terms} />
        </Box>
        <Box flex={1} py={8} px={{ base: 0, md: 8 }} w="100%">
          <Text
            px={{ base: 4, lg: 0 }}
            fontSize="2xl"
            color="black"
            fontWeight="semibold"
          >
            {t('checkout.order.label')}
          </Text>
          {carInfo ? (
            <Order
              car={carInfo}
              pickup={pickup}
              delivery={delivery}
              startDate={startDate}
              endDate={endDate}
              numDays={numDays}
            />
          ) : null}
        </Box>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Checkout;
