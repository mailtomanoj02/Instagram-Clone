import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import {ICON_NAME} from '../../Icons/Icons';
import {SearchScreenStyles} from './SearchScreenStyle';
import {COLORS} from '../../Colors/Colors';

const SearchBox = () => {
  return (
    <View style={SearchScreenStyles.searchBoxContainer}>
      <Ionic
        name={ICON_NAME.SEARCH_FILL}
        style={SearchScreenStyles.SearchIconStyle}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor={COLORS.GREY}
        style={SearchScreenStyles.searchInputStyle}
      />
    </View>
  );
};

export default SearchBox;
