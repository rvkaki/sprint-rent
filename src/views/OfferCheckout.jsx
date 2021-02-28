import { Box, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import OrderInfo from '../components/OrderInfo';
import OfferUserForm from '../components/OfferUserForm';
import Loader from '../components/Loader';
import { getOffer } from '../util/apiCalls';
import { sendOrderOfferEmail } from '../util/email';

const OfferCheckout = () => {
  const location = useLocation();
  const id = parseInt(location.search.split('?id=')[1]);

  const [t] = useTranslation('common');
  const modal = global['modal'];

  const [offer, setOffer] = useState();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getOffer(id).then(data => setOffer(data));
  }, [id]);

  const submit = (name, email, contact, date) => {
    setLoading(true);
    sendOrderOfferEmail(name, email, contact, date, offer)
      .then(res => {
        setLoading(false);
        if (res.ok)
          modal.open(t('checkout.order.requested'), t('checkout.order.text'));
        else
          modal.open(
            t('checkout.order.error.label'),
            t('checkout.order.error.text') + 'geral@sprinttravelviagens.com'
          );
      })
      .catch(error => {
        modal.open(
          t('checkout.order.error.label'),
          t('checkout.order.error.text') + 'geral@sprinttravelviagens.com'
        );
      });
  };

  return (
    <Box>
      <Box minH="100vh">
        <Header />
        <Loader loading={loading} />
        <Flex direction={{ base: 'column', lg: 'row' }} m={{ base: 4, lg: 8 }}>
          <Box flex={2} px={{ base: 0, md: 8 }} mb={{ base: 8, lg: 0 }}>
            <Text fontSize="2xl" fontWeight="semibold" color="black">
              {t('checkout.info.label')}
            </Text>
            {offer ? (
              <OfferUserForm
                submit={submit}
                minBookingDate={new Date()}
              />
            ) : null}
          </Box>
          <Box flex={1} px={{ base: 0, md: 8 }}>
            <Text fontSize="2xl" fontWeight="semibold" color="black">
              {t('checkout.order.label')}
            </Text>
            {offer ? <OrderInfo {...offer} /> : null}
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default OfferCheckout;
