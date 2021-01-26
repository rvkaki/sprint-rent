import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const emailRegex =
  "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

const FranchiseForm = props => {
  const [name, setName] = useState();
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState();
  const [area, setArea] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const [t] = useTranslation('common');

  const isFormValid = () => {
    return (
      name && email.match(emailRegex) && contact && area && subject && message
    );
  };

  const handleClick = () => {
    if (isFormValid()) {
      props.submit(name, email, contact, area, subject, message);
    } else alert('Por favor preencha todos os campos');
  };

  return (
    <Stack spacing={6}>
      <FormControl id="name" isRequired>
        <FormLabel>{t('franchise.info.name')}</FormLabel>
        <Input
          borderColor="gray.300"
          shadow="md"
          placeholder={t('franchise.info.name')}
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>{t('franchise.info.email')}</FormLabel>
        <Input
          shadow="md"
          type="email"
          isInvalid={!(email === '' || email.match(emailRegex))}
          placeholder={t('franchise.info.email')}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="contact" isRequired>
        <FormLabel>{t('franchise.info.contact')}</FormLabel>
        <Input
          borderColor="gray.300"
          shadow="md"
          placeholder={t('franchise.info.contact')}
          value={contact}
          onChange={e => setContact(e.target.value)}
        />
      </FormControl>
      <FormControl id="area" isRequired>
        <FormLabel>{t('franchise.info.area')}</FormLabel>
        <Input
          borderColor="gray.300"
          shadow="md"
          placeholder={t('franchise.info.area')}
          value={area}
          onChange={e => setArea(e.target.value)}
        />
      </FormControl>
      <FormControl id="subject" isRequired>
        <FormLabel>{t('franchise.info.subject')}</FormLabel>
        <Input
          borderColor="gray.300"
          shadow="md"
          placeholder={t('franchise.info.subject')}
          value={subject}
          onChange={e => setSubject(e.target.value)}
        />
      </FormControl>
      <FormControl id="message" isRequired>
        <FormLabel>{t('franchise.info.message')}</FormLabel>
        <Textarea
          borderColor="gray.300"
          shadow="md"
          size="lg"
          placeholder={t('franchise.info.message')}
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </FormControl>
      <Box
        as="button"
        w={{ base: '100%', md: '30%' }}
        alignSelf="flex-end"
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
        {t('franchise.info.request')}
      </Box>
    </Stack>
  );
};

export default FranchiseForm;
