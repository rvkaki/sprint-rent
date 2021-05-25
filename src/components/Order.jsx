import React, { useContext } from 'react';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { faGasPump, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { getPrice } from '../util/functions';
import AppContext from '../context/AppContext';

const Order = props => {
  const image = props.car.images.find(i => i.name === '0.png');
  const appContext = useContext(AppContext);

  const [t] = useTranslation('common');
  return (
    <Box w="100%">
      <Box w="100%" position="relative">
        <Box
          as="img"
          src={`${process.env.REACT_APP_SERVER_URL}${image?.url}`}
          alt={image?.name}
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
                    size="1x"
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
                  <FontAwesomeIcon icon={faGasPump} size="1x" color="black" />
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
              {t('checkout.order.price')}
            </Text>
            <Flex mx={4} dir="row" justify="space-between">
              <Text>Base:</Text>
              <Text>
                {props.numDays} x {getPrice(props.car, appContext)}€
              </Text>
              <Text>{getPrice(props.car, appContext) * props.numDays}€</Text>
            </Flex>
          </Box>
        </Stack>
        <Flex mt={16} dir="row" align="baseline">
          <Text fontSize="lg">Total:</Text>
          <Text ml={2} fontSize="3xl" fontWeight="bold">
            {getPrice(props.car, appContext) * props.numDays}€
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Order;
