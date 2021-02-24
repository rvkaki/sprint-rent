import {
  Box,
  Flex,
  Input,
  Spinner,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { sendNumberEmail } from '../util/email';

const phoneNumberReg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

const HelpDesk = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [t] = useTranslation('common');

  const [number, setNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const close = () => {
    setError(false);
    setSuccess(false);
    setLoading(false);
    setNumber('');
    onClose();
  };

  const ref = useRef(null);
  useEffect(() => {
    function handleOutsideClick(event) {
      if (isOpen && ref.current && !ref.current.contains(event.target)) close();
    }
    document.addEventListener('click', handleOutsideClick, true);
    return () => {
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, []);

  const submit = () => {
    if (number.match(phoneNumberReg)) {
      setLoading(true);
      sendNumberEmail(number).then(res => {
        setLoading(false);
        if (res.ok) setSuccess(true);
        else setError(true);
      });
    }
  };

  return (
    <Box flex={1} mr={3}>
      <Text onClick={isOpen ? onClose : onOpen} _hover={{ cursor: 'pointer' }}>
        Helpdesk
      </Text>
      {isOpen ? (
        <Box
          ref={ref}
          position="absolute"
          right={0}
          p={4}
          h="150px"
          w="250px"
          bg="white"
          shadow="dark-lg"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
          zIndex="9999"
        >
          {loading ? (
            <Spinner />
          ) : success ? (
            <Box>
              <Text>{t('helpdesk.success')}</Text>
              <Box
                as="button"
                bg="gray.800"
                color="white"
                borderRadius="md"
                px={4}
                py={1}
                mt={2}
                alignSelf="flex-end"
                onClick={close}
              >
                {t('helpdesk.close')}
              </Box>
            </Box>
          ) : error ? (
            <Box>
              <Text>{t('helpdesk.error')}</Text>
              <Box
                as="button"
                bg="gray.800"
                color="white"
                borderRadius="md"
                px={4}
                py={1}
                mt={2}
                alignSelf="flex-end"
                onClick={() => setError(false)}
              >
                {t('helpdesk.retry')}
              </Box>
            </Box>
          ) : (
            <>
              <Flex align="center">
                <FontAwesomeIcon icon={faPhoneAlt} size="1x" color="black" />
                <Text ml={2}>{t('helpdesk.call')}</Text>
              </Flex>
              <Input
                mt={4}
                borderColor="gray.600"
                placeholder="Nº telemovel"
                value={number}
                onChange={e => {
                  e.stopPropagation();
                  setNumber(e.target.value);
                }}
                onSubmit={submit}
              />
              <Box
                as="button"
                bg="gray.800"
                color="white"
                borderRadius="md"
                px={4}
                py={1}
                mt={2}
                alignSelf="flex-end"
                onClick={submit}
              >
                OK
              </Box>
            </>
          )}
        </Box>
      ) : null}
    </Box>
  );
};

export default HelpDesk;
