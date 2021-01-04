import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const getModels = async () => {
  try {
    const res = await fetch('http://localhost:1337/cars/params?t=model');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Filters = props => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    getModels().then(data => setModels(data));
  }, []);

  console.log(models);

  return <Box w={props.w} h={props.h} bg="gray.800"></Box>;
};

export default Filters;
