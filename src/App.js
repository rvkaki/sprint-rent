import React, { Component } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import Root from './routes/Root';
import AppContext from './context/AppContext';

import common_en from './translations/en/common.json';
import common_pt from './translations/pt/common.json';

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

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'pt',
  resources: {
    en: {
      common: common_en,
    },
    pt: {
      common: common_pt,
    },
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleFilters = (key, value) => {
      const newFilters = { ...this.state.filters };
      const idx = newFilters[key].indexOf(value);
      if (idx !== -1) newFilters[key].splice(idx, 1);
      else newFilters[key].push(value);
      this.setState({ filters: newFilters });
    };

    this.setStartDate = date => {
      this.setState({ startDate: date });
    };

    this.setEndDate = date => {
      this.setState({ endDate: date });
    };

    this.setStartLocation = location => {
      this.setState({ startLocation: location });
    };

    this.setEndLocation = location => {
      this.setState({ endLocation: location });
    };

    this.setCar = id => {
      this.setState({ car: id });
    };

    this.state = {
      startDate: null,
      endDate: null,
      startLocation: null,
      endLocation: null,
      car: null,
      setStartDate: this.setStartDate,
      setEndDate: this.setEndDate,
      setStartLocation: this.setStartLocation,
      setEndLocation: this.setEndLocation,
      setCar: this.setCar,
      filters: { gas: [], model: [], mode: [], type: [] },
      toggleFilters: this.toggleFilters,
    };
  }

  render() {
    return (
      <ChakraProvider theme={theme}>
        <I18nextProvider i18n={i18next}>
          <AppContext.Provider value={this.state}>
            <Root />
          </AppContext.Provider>
        </I18nextProvider>
      </ChakraProvider>
    );
  }
}

export default App;
