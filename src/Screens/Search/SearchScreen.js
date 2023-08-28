import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Animated,
  Image,
} from 'react-native';
import {SearchScreenStyles} from './SearchScreenStyle';
import SearchBox from './SearchBox';
import SearchContent from './SearchContent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ICON_NAME} from '../../Icons/Icons';
import {COLORS} from '../../Colors/Colors';

const SearchScreen = () => {
  const [image, setImage] = useState(null);
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const getData = data => {
    setImage(data);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
    console.log('called');
  };
  const resetData1 = () => {
    console.log('called');
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      setImage(null);
    }, 300);
  };
  console.log(opacity);
  return (
    <View style={SearchScreenStyles.rootContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox />
        <SearchContent getImage={getData} resetData={resetData1} />
        <TouchableOpacity style={SearchScreenStyles.plusIconContainerStyle}>
          <AntDesign
            name={ICON_NAME.CIRCLEO}
            style={SearchScreenStyles.plusIconStyle}
          />
        </TouchableOpacity>
      </ScrollView>
      {image ? (
        <Animated.View
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            zIndex: 1,
            opacity, // Use the animated opacity value here
          }}>
          <StatusBar
            backgroundColor={COLORS.STATUSBAR}
            barStyle={'dark-content'}
          />
          <View style={SearchScreenStyles.imagePopUpInnerContainer}>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 15,
                paddingVertical: 10,
                alignItems: 'center',
              }}>
              <Image
                source={image}
                style={{width: 30, height: 30, borderRadius: 100}}
              />
              <View style={{paddingLeft: 8}}>
                <Text style={{fontSize: 12, fontWeight: '600'}}>
                  the_anonymous_guy
                </Text>
              </View>
            </View>
            <Image source={image} style={{width: '100%', height: '80%'}} />
          </View>
        </Animated.View>
      ) : null}
    </View>
  );
};

export default SearchScreen;
