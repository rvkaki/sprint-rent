import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Datepicker from './Datepicker/Datepicker';
import SearchBar from './SearchBar';

const DataPopUp = props => {
  const [t] = useTranslation('common');
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

  const handleClick = () => {
    if (
      state.startDate &&
      state.endDate &&
      state.startLocation &&
      state.endLocation
    ) {
      setStartDate(state.startDate);
      setEndDate(state.endDate);
      setStartLocation(state.startLocation);
      setEndLocation(state.endLocation);
      history.push('/checkout');
    } else {
      alert(t('alerts.fill'));
    }
  };

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t('popup.label')}</ModalHeader>
        <ModalCloseButton _hover={{}} _focus={{}} _active={{}} />
        <ModalBody>
          <Stack spacing={2}>
            <SearchBar
              options={props.options}
              value={state.startLocation}
              onChange={e =>
                setState({ ...state, startLocation: e, endLocation: e })
              }
              label={t('pickup')}
              color="black"
            />
            <SearchBar
              options={props.options}
              value={state.endLocation}
              onChange={e => setState({ ...state, endLocation: e })}
              label={t('delivery')}
              color="black"
            />
            <Box>
              <Text color="black" fontWeight="medium">
                {t('date')}
              </Text>
              <Datepicker
                startDate={state.startDate}
                endDate={state.endDate}
                onDateChange={newDate =>
                  setState({
                    ...state,
                    startDate: newDate.startDate,
                    endDate: newDate.endDate,
                  })
                }
              />
            </Box>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Box
            as="button"
            fontSize="lg"
            color="white"
            fontWeight="semibold"
            bg="gray.800"
            px={3}
            py={1}
            borderRadius="md"
            onClick={handleClick}
          >
            {t('popup.continue')}
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DataPopUp;
