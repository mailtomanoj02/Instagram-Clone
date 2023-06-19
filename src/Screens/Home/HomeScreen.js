import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {HomeScreenStyle} from './HomeStyle';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {ICON_NAME} from '../../Icons/Icons';
import Story from './Story';
import Posts from './Posts';

const HomeScreen = () => {
  return (
    <View>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View style={HomeScreenStyle.topBarContainerStyle}>
        <View>
          <Text style={HomeScreenStyle.InstagramTextStyle}>Instagram</Text>
        </View>
        <View style={HomeScreenStyle.fontRightContainerStyle}>
          <TouchableOpacity>
            <Ionic
              name={ICON_NAME.HEART_UNFILL}
              style={HomeScreenStyle.fontStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="navigation" style={HomeScreenStyle.fontStyle} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <Story />
        <Posts />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
