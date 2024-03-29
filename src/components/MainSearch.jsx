import React, { useState } from 'react';
import { Box, Checkbox, Flex, Stack, Text } from '@chakra-ui/react';
import Datepicker from './SingleDatepicker/Datepicker.jsx';
import SearchBar from './SearchBar.jsx';
import AppContext from '../context/AppContext.jsx';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

const MainSearch = props => {
  const [checked, setChecked] = useState(true);
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
    startLocation: null,
    endLocation: null,
  });
  const history = useHistory();
  const {
    setStartDate,
    setEndDate,
    setStartLocation,
    setEndLocation,
  } = useContext(AppContext);

  const [t] = useTranslation('common');

  const handleClick = () => {
    if (
      state.startDate &&
      state.endDate &&
      state.startLocation &&
      (checked || state.endLocation)
    ) {
      setStartDate(state.startDate);
      setEndDate(state.endDate);
      setStartLocation(state.startLocation);
      if (checked) setEndLocation(state.startLocation);
      else setEndLocation(state.endLocation);
      history.push(
        `/frota?pickup=${state.startLocation}&delivery=${
          state.endLocation || state.startLocation
        }&date=${state.startDate.toLocaleDateString()}-${state.endDate.toLocaleDateString()}`
      );
    } else {
      alert(t('alerts.fill'));
    }
  };

  return (
    <Stack
      bg={{ base: 'rgba(0,0,0,0.85)', md: 'black' }}
      p="16px"
      borderRadius="lg"
      spacing={4}
    >
      <Stack
        spacing={3}
        direction={{ base: 'column', lg: 'row' }}
        alignItems={{ base: 'center', lg: 'center' }}
      >
        <Stack flex={3} w="100%">
          <SearchBar
            options={props.options}
            value={state.startLocation}
            onChange={e => setState({ ...state, startLocation: e })}
            label={t('pickup')}
            color="white"
          />
          {!checked ? (
            <SearchBar
              options={props.options}
              value={state.endLocation}
              onChange={e => setState({ ...state, endLocation: e })}
              label={t('delivery')}
              color="white"
            />
          ) : null}
        </Stack>
        <Stack
          flex={2}
          w="100%"
          direction={{ base: 'column', md: checked ? 'row' : 'column' }}
        >
          <Stack spacing={1} position="relative">
            <Text color="white" fontWeight="medium">
              {t('pickupDate')}
            </Text>
            <Datepicker
              date={state.startDate}
              minBookingDate={new Date()}
              onDateChange={newDate =>
                setState({
                  ...state,
                  startDate: newDate.startDate,
                })
              }
            />
          </Stack>
          <Stack spacing={1} position="relative">
            <Text color="white" fontWeight="medium">
              {t('deliveryDate')}
            </Text>
            <Datepicker
              date={state.endDate}
              minBookingDate={state.startDate}
              isDisabled={state.startDate === null}
              onDateChange={newDate =>
                setState({
                  ...state,
                  endDate: newDate.startDate,
                })
              }
            />
          </Stack>
        </Stack>
      </Stack>
      <Flex direction="row" justify="space-between">
        <Checkbox
          isChecked={checked}
          onChange={e => setChecked(e.target.checked)}
          colorScheme="gray"
          iconColor="black"
        >
          <Text color="white" fontSize="sm">
            {t('search.checkbox')}
          </Text>
        </Checkbox>
        <Box
          as="button"
          bg="gray.300"
          px={2}
          py={1}
          borderRadius="sm"
          fontWeight="semibold"
          color="black"
          onClick={handleClick}
        >
          {t('search.button')}
        </Box>
      </Flex>
    </Stack>
  );
};

export default MainSearch;
