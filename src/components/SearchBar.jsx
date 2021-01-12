import React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import SelectSearch from 'react-select-search';
import './SearchBar.css';
import { useTranslation } from 'react-i18next';

const SearchBar = props => {
  const [t] = useTranslation('common');
  return (
    <Stack spacing={1}>
      <Text color={props.color} fontWeight="medium">
        {props.label}
      </Text>
      <SelectSearch
        options={props.options}
        value={props.value}
        onChange={props.onChange}
        search
        placeholder={t('search.placeholder')}
      />
    </Stack>
  );
};

export default SearchBar;
