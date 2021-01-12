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
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getCar, getLocation } from '../util/apiCalls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const emailRegex =
  "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

function dateDiffInDays(a, b) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

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

const Order = props => {
  const image = props.car.images.find(i => i.name === '0.png');
  const numDays = dateDiffInDays(props.startDate, props.endDate) + 1;
  const [t] = useTranslation('common');
  return (
    <Box w="100%">
      <Box w="100%" position="relative">
        <Box
          as="img"
          src={`${process.env.REACT_APP_SERVER_URL}${image.url}`}
          alt={image.name}
          w="100%"
          h="100%"
          objectFit="cover"
          bg="gray.700"
        />
        <Box
          position="absolute"
          bottom={0}
          w="100%"
          bg="#EEEEEE90"
          px={4}
          py={2}
          color="black"
        >
          <Text fontSize={{ base: 'lg', lg: 'md' }} fontWeight="medium">
            {props.car.brand} {props.car.model}
          </Text>
          <Flex dir="row" fontSize={{ base: 'md', lg: 'sm' }}>
            <Stack spacing={1} mr={8}>
              <Flex dir="row">
                <Flex w="20px" justify="center" align="center">
                  <FontAwesomeIcon
                    icon={faUserFriends}
                    size="md"
                    color="black"
                  />
                </Flex>
                <Text>
                  {props.car.seats} {t('car.seats')}
                </Text>
              </Flex>
              <Flex dir="row">
                <Flex w="18px" justify="center" align="center">
                  <Box
                    as="img"
                    w="18px"
                    src="https://img.icons8.com/pastel-glyph/64/000000/gearbox-selector.png"
                  />
                </Flex>
                <Text textTransform="capitalize">{props.car.mode}</Text>
              </Flex>
            </Stack>
            <Stack spacing={1}>
              <Flex dir="row">
                <Flex w="20px" justify="center" align="center">
                  <FontAwesomeIcon icon={faGasPump} size="md" color="black" />
                </Flex>
                <Text textTransform="capitalize">{props.car.gas}</Text>
              </Flex>
              <Flex dir="row">
                <Flex w="18px" justify="center" align="center">
                  <Box
                    as="img"
                    w="18px"
                    src="https://img.icons8.com/material/24/000000/car-door--v2.png"
                  />
                </Flex>
                <Text textTransform="capitalize">
                  {props.car.doors} {t('car.doors')}
                </Text>
              </Flex>
            </Stack>
          </Flex>
        </Box>
      </Box>
      <Box bg="gray.300" h="100%" w="100%" color="black" py={2} px={4}>
        <Stack spacing={4}>
          <Box>
            <Text fontSize="lg" fontWeight="semibold">
              {t('pickup')}
            </Text>
            <Box ml={4}>
              <Text>{props.pickup.title},</Text>
              <Text>{props.startDate.toLocaleDateString()}</Text>
            </Box>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="semibold">
              {t('delivery')}
            </Text>
            <Box ml={4}>
              <Text>{props.delivery.title},</Text>
              <Text>{props.endDate.toLocaleDateString()}</Text>
            </Box>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="semibold">
              Preço
            </Text>
            <Flex mx={4} dir="row" justify="space-between">
              <Text>Base:</Text>
              <Text>
                {numDays} x {props.car.price}€
              </Text>
              <Text>{props.car.price * numDays}€</Text>
            </Flex>
          </Box>
        </Stack>
        <Flex mt={16} dir="row" align="baseline">
          <Text fontSize="lg">Total:</Text>
          <Text ml={2} fontSize="3xl" fontWeight="bold">
            {props.car.price * numDays}€
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

const Checkout = props => {
  const [carInfo, setCarInfo] = useState({});
  const [pickup, setPickup] = useState({});
  const [delivery, setDelivery] = useState({});

  const { startLocation, endLocation, startDate, endDate, car } = useContext(
    AppContext
  );

  useEffect(() => {
    getCar(car).then(data => setCarInfo(data));
    getLocation(startLocation).then(data => setPickup(data));
    getLocation(endLocation).then(data => setDelivery(data));
  }, [car, startLocation, endLocation]);

  const submit = (name, email, contact) => {
    console.log('Order:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Contact: ${contact}`);
    console.log(`Car: ${carInfo.brand} ${carInfo.model}`);
    console.log(
      `From: ${startDate.toLocaleDateString()}, To: ${endDate.toLocaleDateString()}`
    );
    console.log(`Pickup: ${pickup.title}, Delivery: ${delivery.title}`);
  };

  return (
    <Flex direction="column">
      <Header />
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justifyContent={{ base: 'center', lg: 'space-between' }}
        align={{ base: 'center', lg: 'flex-start' }}
      >
        <Box flex={2} py={8} px={{ base: 4, lg: 16 }} w="100%">
          <Text fontSize="2xl" color="black" fontWeight="semibold">
            Identificação
          </Text>
          <UserForm submit={submit} />
        </Box>
        <Box flex={1} py={8} px={{ base: 0, md: 8 }} w="100%">
          <Text
            px={{ base: 4, lg: 0 }}
            fontSize="2xl"
            color="black"
            fontWeight="semibold"
          >
            A sua reserva
          </Text>
          <Order
            car={carInfo}
            pickup={pickup}
            delivery={delivery}
            startDate={startDate}
            endDate={endDate}
          />
        </Box>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Checkout;
