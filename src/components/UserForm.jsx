import React, { useState } from 'react';
import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const emailRegex =
  "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

const UserForm = props => {
  const [name, setName] = useState();
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState();
  const [checked, setChecked] = useState(false);

  const [t] = useTranslation('common');

  const isFormValid = () => {
    return name && email.match(emailRegex) && contact && checked;
  };

  const handleClick = () => {
    if (isFormValid()) {
      props.submit(name, email, contact);
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
      <Checkbox
        isRequired
        isChecked={checked}
        onChange={e => setChecked(e.target.checked)}
        colorScheme="gray"
        size="lg"
        iconColor="white"
      >
        <Flex dir="row" color="black">
          <Text fontSize="lg">{t('checkout.info.accept')}</Text>
          <Text ml={1} fontWeight="semibold">
            {t('checkout.info.terms')}
          </Text>
        </Flex>
      </Checkbox>
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
        {t('checkout.info.request')}
      </Box>
    </Stack>
  );
};

export default UserForm;
