import React from 'react';
import {View, Text} from 'react-native';
import {ReelsScreenStyle} from './ReelsScreenStyle';
import Feather from 'react-native-vector-icons/Feather';
import {ICON_NAME} from '../../Icons/Icons';
import ReelsComponent from './ReelsComponent';

const Reels = () => {
  return (
    <View style={ReelsScreenStyle.rootContainer}>
      <View style={ReelsScreenStyle.topContainer}>
        <Text style={[ReelsScreenStyle.iconStyle, {fontSize: 20}]}>Reels</Text>
        <Feather
          name={ICON_NAME.CAMERA}
          style={[ReelsScreenStyle.iconStyle, {fontSize: 25}]}
        />
      </View>
      <ReelsComponent />
    </View>
  );
};

export default Reels;
