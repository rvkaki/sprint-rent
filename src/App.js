import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Root from './routes/Root';

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
  colors: {
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Root />
    </ChakraProvider>
  );
}

export default App;
