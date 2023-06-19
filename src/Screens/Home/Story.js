import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {HomeScreenStyle} from './HomeStyle';
import Entypo from 'react-native-vector-icons/Entypo';
import {ICON_NAME} from '../../Icons/Icons';
import {SCREEN_NAMES} from '../../AppNavigation/ScreenConstants';
import {useNavigation} from '@react-navigation/native';

const Story = () => {
  const navigation = useNavigation();
  const storyInfo = [
    {
      id: 1,
      name: 'Your Story',
      image: require('../../Images/francesco-tommasini-JINPheIkUek-unsplash.jpg'),
    },
    {
      id: 0,
      name: 'Ram',
      image: require('../../Images/anita-austvika-dmxI7DA_YmY-unsplash.jpg'),
    },
    {
      id: 0,
      name: 'Janu',
      image: require('../../Images/junior-reis-EqbpO90cEIM-unsplash.jpg'),
    },
    {
      id: 0,
      name: 'Kathir',
      image: require('../../Images/mailchimp-KR0WW6bjtt0-unsplash.jpg'),
    },
    {
      id: 0,
      name: 'Kumar',
      image: require('../../Images/neom-AC3T7tvwPrY-unsplash.jpg'),
    },
    {
      id: 0,
      name: 'Krish',
      image: require('../../Images/steve-johnson-qQWxYWVKSsc-unsplash.jpg'),
    },
    {
      id: 0,
      name: 'Lavan',
      image: require('../../Images/neom-AC3T7tvwPrY-unsplash.jpg'),
    },
    {
      id: 0,
      name: 'Manoj',
      image: require('../../Images/junior-reis-EqbpO90cEIM-unsplash.jpg'),
    },
  ];
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={HomeScreenStyle.storyRootContainer}
        onPress={() =>
          navigation.navigate(SCREEN_NAMES.STATUS.route, {
            name: item.name,
            image: item.image,
          })
        }>
        <View style={HomeScreenStyle.plusIconContainer}>
          {item.id === 1 ? (
            // <View>
            <Entypo
              name={ICON_NAME.CIRCLE_WITH_PLUS}
              style={HomeScreenStyle.plusIconStyle}
            />
          ) : // </View>
          null}
        </View>
        <View style={HomeScreenStyle.imageViewStyle}>
          <Image source={item.image} style={HomeScreenStyle.imageStyle} />
        </View>
        <Text
          style={[
            HomeScreenStyle.textStyle,
            {opacity: item.id === 0 ? 1 : 0.5},
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={HomeScreenStyle.storyContainer}
      data={storyInfo}
      keyExtractor={item => item.name.toString()}
      renderItem={renderItem}
    />
  );
};

export default Story;
