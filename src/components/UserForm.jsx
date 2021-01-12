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

const emailRegex =
  "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

const UserForm = props => {
  const [name, setName] = useState();
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState();
  const [checked, setChecked] = useState(false);

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
        <FormLabel>Nome</FormLabel>
        <Input
          borderColor="gray.300"
          shadow="md"
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          shadow="md"
          type="email"
          isInvalid={!(email === '' || email.match(emailRegex))}
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="contact" isRequired>
        <FormLabel>Contacto</FormLabel>
        <Input
          borderColor="gray.300"
          shadow="md"
          placeholder="Contacto"
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
          <Text fontSize="lg">Aceito os</Text>
          <Text ml={1} fontWeight="semibold">
            Termos e Condições
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
        Fazer pedido
      </Box>
    </Stack>
  );
};

export default UserForm;
