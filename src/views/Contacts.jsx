import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Locations from '../components/Locations';
import { getLocations } from '../util/apiCalls';

const Contacts = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    getLocations().then(data => setLocations(data));
  }, []);

  return (
    <Box>
      <Header />
      <Locations locations={locations} />
      <Footer />
    </Box>
  );
};

export default Contacts;
