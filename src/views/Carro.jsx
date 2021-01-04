import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const getCar = async id => {
  try {
    const res = await fetch(`http://localhost:1337/cars/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Carro = props => {
  const { id } = useParams();
  useEffect(() => {
    getCar(id).then(res => setData(res));
  }, [id]);

  const [data, setData] = useState(null);
  console.log(data);
  return <Box>{id}</Box>;
};

export default Carro;
