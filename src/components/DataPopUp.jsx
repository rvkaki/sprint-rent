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
import Datepicker from './SingleDatepicker/Datepicker';
import SearchBar from './SearchBar';

const DataPopUp = props => {
  const [t] = useTranslation('common');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);

  const history = useHistory();

  const appContext = useContext(AppContext);

  const handleClick = () => {
    if (startDate && endDate && startLocation && endLocation) {
      appContext.setStartDate(startDate);
      appContext.setEndDate(endDate);
      appContext.setStartLocation(startLocation);
      appContext.setEndLocation(endLocation);
      history.push('/checkout');
    } else {
      alert(t('alerts.fill'));
    }
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={() => {
        setStartLocation(null);
        setEndLocation(null);
        setEndDate(null);
        setStartDate(null);
        props.onClose();
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t('popup.label')}</ModalHeader>
        <ModalCloseButton _hover={{}} _focus={{}} _active={{}} />
        <ModalBody>
          <Stack spacing={2}>
            <SearchBar
              options={props.options}
              value={startLocation}
              onChange={e => {
                setStartLocation(e);
                setEndLocation(e);
              }}
              label={t('pickup')}
              color="black"
            />
            <SearchBar
              options={props.options}
              value={endLocation}
              onChange={e => setEndLocation(e)}
              label={t('delivery')}
              color="black"
            />
            <Box>
              <Text color="black" fontWeight="medium">
                {t('pickupDate')}
              </Text>
              <Datepicker
                date={startDate}
                minBookingDate={new Date()}
                onDateChange={newDate => setStartDate(newDate.startDate)}
              />
            </Box>
            <Box>
              <Text color="black" fontWeight="medium">
                {t('deliveryDate')}
              </Text>
              <Datepicker
                date={endDate}
                minBookingDate={startDate}
                isDisabled={startDate === null}
                onDateChange={newDate => setEndDate(newDate.startDate)}
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
