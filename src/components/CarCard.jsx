import { Box, Flex, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { faGasPump, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

const CarCard = props => {
  const history = useHistory();
  const imgSrc =
    process.env.REACT_APP_SERVER_URL +
    props.car.images.find(x => x.name.match(/0\.\w+/g)).url;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [t] = useTranslation('common');

  const handleSelect = e => {
    e.stopPropagation();
    props.select(props.car.id);
  };

  return (
    <Flex
      w="100%"
      h={props.grid ? '50vh' : 'auto'}
      shadow="lg"
      border="1px solid"
      borderColor="gray.200"
      direction={props.grid ? 'column' : 'row'}
      transition="transform linear 0.2s"
      _hover={{
        transform: 'scale(1.01)',
        shadow: 'xl',
      }}
      onClick={() => history.push(`/frota/${props.car.id}`, props.car)}
    >
      {props.car.images.length > 0 ? (
        <Box
          h={props.grid ? '50%' : '100%'}
          w={props.grid ? '100%' : '40%'}
          position="relative"
          onMouseOver={onOpen}
          onMouseOut={onClose}
        >
          <Box
            position="absolute"
            h="100%"
            w="100%"
            as="img"
            src={imgSrc}
            alt={props.car.images[0].url}
            objectFit="cover"
          />
          <Box
            as="button"
            position="absolute"
            w="100%"
            h="100%"
            display={isOpen ? 'flex' : 'none'}
            bg="gray.800"
            opacity={0.8}
            alignItems="center"
            justifyContent="center"
          >
            <Text color="white" fontSize="2xl">
              {t('car.more')}
            </Text>
          </Box>
        </Box>
      ) : null}
      <Flex
        w="100%"
        h={props.grid ? '50%' : '100%'}
        bg="gray.200"
        dir="row"
        p={4}
        justify="space-between"
      >
        <Box>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight="semibold"
            color="black"
          >
            {props.car.brand + ' ' + props.car.model}
          </Text>
          <Stack spacing={1} mt={2}>
            <Flex dir="row">
              <Flex w="30px" justify="center" align="center">
                <FontAwesomeIcon icon={faUserFriends} size="lg" color="black" />
              </Flex>
              <Text>
                {props.car.seats} {t('car.seats')}
              </Text>
            </Flex>
            <Flex dir="row">
              <Flex w="30px" justify="center" align="center">
                <Box
                  as="img"
                  w="28px"
                  src="https://img.icons8.com/pastel-glyph/64/000000/gearbox-selector.png"
                />
              </Flex>
              <Text textTransform="capitalize">{props.car.mode}</Text>
            </Flex>
            <Flex dir="row">
              <Flex w="30px" justify="center" align="center">
                <FontAwesomeIcon icon={faGasPump} size="lg" color="black" />
              </Flex>
              <Text textTransform="capitalize">{props.car.gas}</Text>
            </Flex>
            <Flex dir="row">
              <Flex w="30px" justify="center" align="center">
                <Box
                  as="img"
                  w="24px"
                  src="https://img.icons8.com/material/24/000000/car-door--v2.png"
                />
              </Flex>
              <Text textTransform="capitalize">
                {props.car.doors} {t('car.doors')}
              </Text>
            </Flex>
          </Stack>
        </Box>
        <Flex direction="column" justify="space-between" align="flex-end">
          <Box
            as="button"
            border="2px solid"
            borderColor="gray.400"
            borderRadius="4px"
            px={2}
            py={1}
            fontSize="lg"
            color="gray.600"
            onClick={handleSelect}
          >
            {t('select')}
          </Box>
          <Flex dir="row" align="baseline">
            <Text fontSize="4xl" fontWeight="bold" color="black">
              {props.car.price}€
            </Text>
            <Text>/{t('day')}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CarCard;
