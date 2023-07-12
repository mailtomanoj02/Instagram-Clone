import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import {ICON_NAME} from '../../Icons/Icons';
import {SearchScreenStyles} from './SearchScreenStyle';
import {COLORS} from '../../Colors/Colors';

const SearchContent = () => {
  const data = [
    {
      id: 0,
      images: [
        require('./../../Images/post1.jpg'),
        require('./../../Images/post2.jpg'),
        require('./../../Images/post3.jpg'),
        require('./../../Images/post4.jpg'),
        require('./../../Images/post5.jpg'),
        require('./../../Images/post6.jpg'),
      ],
    },
    {
      id: 1,
      images: [
        require('./../../Images/post7.jpg'),
        require('./../../Images/post8.jpg'),
        require('./../../Images/post9.jpg'),
        require('./../../Images/post10.jpg'),
        require('./../../Images/post11.jpg'),
        require('./../../Images/post12.jpg'),
      ],
    },
    {
      id: 2,
      images: [
        require('./../../Images/post13.jpg'),
        require('./../../Images/post14.jpg'),
      ],
    },
  ];
  return (
    <View>
      {data.map((item, index) => {
        return (
          <>
            {item.id === 0 ? (
              <View style={SearchScreenStyles.imageContainerView}>
                {item.images.map((image, index) => {
                  return (
                    <TouchableOpacity
                      style={SearchScreenStyles.imageButtonStyle}>
                      <Image
                        source={image}
                        style={SearchScreenStyles.imageStyle}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : item.id === 1 ? (
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <View
                  style={{
                    width: 260,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    backgroundColor: 'red',
                  }}>
                  {item.images.splice(0, 4).map((item, index) => {
                    return (
                      <TouchableOpacity>
                        <Image
                          source={item}
                          style={SearchScreenStyles.imageStyle}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : (
              <Text>manojx</Text>
            )}
          </>
        );
      })}
    </View>
  );
};

export default SearchContent;
