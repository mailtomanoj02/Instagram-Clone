import React from 'react';
import FastImage from 'react-native-fast-image';
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
        require('./../../Images/post1.jpg'),
        require('./../../Images/post10.jpg'),
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
                      <FastImage
                        source={image}
                        style={SearchScreenStyles.imageStyle}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : item.id === 1 ? (
              <View style={SearchScreenStyles.multiImageMainContainerStyle}>
                <View style={SearchScreenStyles.multiImageContainerStyle}>
                  {item.images.slice(0, 4).map((item, index) => {
                    return (
                      <TouchableOpacity>
                        <FastImage
                          source={item}
                          style={SearchScreenStyles.imageStyle}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity>
                  <FastImage
                    source={item.images[5]}
                    style={{width: 128, height: 280}}
                  />
                </TouchableOpacity>
              </View>
            ) : item.id === 2 ? (
              <View style={SearchScreenStyles.finalImageContainer}>
                <TouchableOpacity>
                  <FastImage
                    source={item.images[2]}
                    style={{width: 260, height: 285}}
                  />
                </TouchableOpacity>
                <View style={SearchScreenStyles.finalImageInnerContainer}>
                  {item.images.slice(0, 2).map((image, index) => {
                    return (
                      <TouchableOpacity style={{paddingBottom: 2}}>
                        <FastImage
                          source={image}
                          style={{width: 128, height: 142}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </>
        );
      })}
    </View>
  );
};

export default React.memo(SearchContent);
