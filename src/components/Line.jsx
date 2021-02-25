import { Box } from '@chakra-ui/react';

const Line = props => {
  return (
    <Box
      w="100%"
      borderTopWidth={props.stroke || 1}
      borderColor={props.color || 'black'}
    />
  );
};

export default Line;
