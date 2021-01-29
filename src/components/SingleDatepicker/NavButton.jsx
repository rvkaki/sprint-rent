import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export default function NavButton({ side, onClick, enabled }) {
  return (
    <IconButton
      onClick={onClick}
      icon={
        <FontAwesomeIcon
          icon={
            side === 'left'
              ? faChevronLeft
              : side === 'right'
              ? faChevronRight
              : null
          }
          size="lg"
        />
      }
      isDisabled={!enabled}
      color="black"
      variant="ghost"
      size="sm"
      _hover={{}}
      _focus={{}}
      _active={{
        opacity: 0.8,
      }}
      _disabled={{
        opacity: 0,
        cursor: 'auto',
      }}
    />
  );
}
