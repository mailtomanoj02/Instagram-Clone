import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
} from 'react-native';
import {COLORS} from '../../Colors/Colors';
import {HomeScreenStyle} from './HomeStyle';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {ICON_NAME} from '../../Icons/Icons';

const Status = ({route, navigation}) => {
  const handleBackNavigation = () => {
    navigation.goBack();
  };
  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });
  console.log(progressAnimation);
  useEffect(() => {
    let timer = setTimeout(handleBackNavigation, 5000);
    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {name, image} = route.params;
  return (
    <View style={HomeScreenStyle.statusRootContainerStyle}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.BLACK} />
      <View style={HomeScreenStyle.statusLoadingContainerStyle}>
        <Animated.View
          style={[
            HomeScreenStyle.statusLoadingInnerViewStyle,
            {width: progressAnimation},
          ]}
        />
      </View>
      <View style={HomeScreenStyle.statusImageViewStyle}>
        <Image source={image} style={HomeScreenStyle.statusImageStyle} />
        <View style={HomeScreenStyle.statusTopContainerStyle}>
          <Text style={HomeScreenStyle.statusNameStyle}>{name}</Text>
          <TouchableOpacity onPress={handleBackNavigation}>
            <Ionic name="close" style={HomeScreenStyle.closeIconStyle} />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={image} style={HomeScreenStyle.mainStatusImageStyle} />
      <View style={HomeScreenStyle.textInputContainerStyle}>
        <TextInput
          placeholder="Send Message"
          placeholderTextColor={COLORS.WHITE}
          style={HomeScreenStyle.textInputStyle}
        />
        <TouchableOpacity onPress={handleBackNavigation}>
          <Feather
            name={ICON_NAME.NAVIGATION}
            style={HomeScreenStyle.navigationIconStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Status;
