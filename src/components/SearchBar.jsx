import React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import SelectSearch from 'react-select-search';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <Stack spacing={1}>
      <Text color="white" fontWeight="medium">
        {props.label}
      </Text>
      <SelectSearch
        options={props.options}
        value={props.value}
        onChange={props.onChange}
        search
        placeholder="Selecionar Data"
      />
    </Stack>
  );
};

export default SearchBar;
