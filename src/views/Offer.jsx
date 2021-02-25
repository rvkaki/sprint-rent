import { Box, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MediaContainer from '../components/MediaContainer';
import OfferInfo from '../components/OfferInfo';
import { getOffer } from '../util/apiCalls';

const Offer = () => {
  const { id } = useParams();
  const history = useHistory();

  const [offer, setOffer] = useState();

  useEffect(() => {
    getOffer(id).then(data => setOffer(data));
  }, [id]);

  if (!offer) return null;

  return (
    <Box>
      <Box minH="100vh">
        <Header />
        <Box px={8} py={4} h="100%">
          <Text
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight="bold"
            fontColor="black"
          >
            {offer.title}
          </Text>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            justify="space-between"
            align="center"
          >
            <MediaContainer
              images={offer.images.map(i => {
                return {
                  src: `${process.env.REACT_APP_SERVER_URL}${i.url}`,
                  alt: i.name,
                };
              })}
            />
            <OfferInfo
              {...offer}
              shareUrl={window.location.href}
              checkout={() => history.push(`/checkout/oferta?id=${id}`)}
            />
          </Flex>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Offer;
