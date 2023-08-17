import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {SearchScreenStyles} from './SearchScreenStyle';
import SearchBox from './SearchBox';
import SearchContent from './SearchContent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ICON_NAME} from '../../Icons/Icons';

const SearchScreen = () => {
  return (
    <View style={SearchScreenStyles.rootContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox />
        <SearchContent />
      </ScrollView>
      <TouchableOpacity style={SearchScreenStyles.plusIconContainerStyle}>
        <AntDesign
          name={ICON_NAME.CIRCLEO}
          style={SearchScreenStyles.plusIconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchScreen;
