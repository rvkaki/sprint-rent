import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Home from './views/Home';

const theme = extendTheme({
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif',
  },
  fontWeights: {
    light: '200',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
