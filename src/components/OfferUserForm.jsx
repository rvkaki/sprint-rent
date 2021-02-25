import React, { useState } from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Datepicker from './SingleDatepicker/Datepicker';

const emailRegex =
  "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

const UserForm = props => {
  const [name, setName] = useState();
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState();
  const [departureDate, setDepartureDate] = useState();

  const [t] = useTranslation('common');

  const isFormValid = () => {
    return (
      name &&
      email.match(emailRegex) &&
      contact &&
      departureDate
    );
  };

  const handleClick = () => {
    if (isFormValid()) {
      props.submit(
        name,
        email,
        contact,
        departureDate
      );
    } else alert('Por favor preencha todos os campos');
  };

  return (
    <Stack spacing={6}>
      <FormControl id="name" isRequired>
        <FormLabel>{t('checkout.info.name')}</FormLabel>
        <Input
          borderColor="gray.300"
          shadow="md"
          placeholder={t('checkout.info.name')}
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>{t('checkout.info.email')}</FormLabel>
        <Input
          shadow="md"
          type="email"
          isInvalid={!(email === '' || email.match(emailRegex))}
          placeholder={t('checkout.info.email')}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="contact" isRequired>
        <FormLabel>{t('checkout.info.contact')}</FormLabel>
        <Input
          borderColor="gray.300"
          shadow="md"
          placeholder={t('checkout.info.contact')}
          value={contact}
          onChange={e => setContact(e.target.value)}
        />
      </FormControl>
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        align={{ base: 'flex-start', sm: 'center' }}
        justify="space-between"
      >
        <Stack
          spacing={1}
          mb={{ base: 6, sm: 0 }}
          w={{ base: '100%', sm: 'auto' }}
        >
          <Text color="gray.800" fontWeight="medium">
            {t('checkout.info.date')}
          </Text>
          <Datepicker
            date={departureDate}
            minBookingDate={props.minBookingDate}
            onDateChange={newDate => setDepartureDate(newDate.startDate)}
          />
        </Stack>
      </Flex>
      <Box
        as="button"
        bg="gray.800"
        py={1}
        borderRadius="md"
        color="white"
        fontSize="lg"
        fontWeight="medium"
        shadow="lg"
        transition="ease-in-out 0.2s"
        _hover={{
          transform: 'scale(1.03)',
          shadow: '2xl',
          bg: 'gray.900',
        }}
        onClick={handleClick}
      >
        <Box>
          <Text fontSize="xl">{t('checkout.info.request')}</Text>
          <Text fontSize="sm">({t('checkout.info.confirmation')})</Text>
        </Box>
      </Box>
    </Stack>
  );
};

export default UserForm;
