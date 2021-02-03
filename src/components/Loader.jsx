import { Flex, Spinner } from '@chakra-ui/react';

const Loader = props => {
  if (!props.loading) return null;
  return (
    <Flex
      position="absolute"
      top={0}
      left={0}
      w="100%"
      h="100%"
      bg="rgba(0,0,0,0.7)"
      zIndex={9999}
      align="center"
      justify="center"
    >
      <Spinner size="xl" thickness="4px" color="white" />
    </Flex>
  );
};

export default Loader;
