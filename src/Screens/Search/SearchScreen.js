import React from 'react';
import {View, Text} from 'react-native';
import {SearchScreenStyles} from './SearchScreenStyle';
import SearchBox from './SearchBox';
import SearchContent from './SearchContent';

const SearchScreen = () => {
  return (
    <View style={SearchScreenStyles.rootContainer}>
      <SearchBox />
      <SearchContent />
    </View>
  );
};

export default SearchScreen;
