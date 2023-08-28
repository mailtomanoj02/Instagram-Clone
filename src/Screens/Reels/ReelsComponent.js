import React, {useState} from 'react';
import { View, Text, FlatList } from "react-native";
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import SingleReel from './SingleReel';
const ReelsComponent = () => {
  const videoData = [
    {
      video: require('../../Videos/video1.mp4'),
      title: 'Manoj',
      description: 'Feel the beaty of nature',
      likes: '245k',
      isLiked: false,
    },
    {
      video: require('../../Videos/video2.mp4'),
      title: 'The_groot',
      description: 'Feel the beaty of nature',
      likes: '245k',
      isLiked: false,
    },
    {
      video: require('../../Videos/video3.mp4'),
      title: 'the_nature_guy',
      description: 'Feel the beaty of nature',
      likes: '245k',
      isLiked: false,
    },
    {
      video: require('../../Videos/video4.mp4'),
      title: 'the_gay_boy',
      description: 'Feel the beaty of nature',
      likes: '245k',
      isLiked: false,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <FlatList
      vertical={true}
      data={videoData}
      onChangeIndex={({index}) => setCurrentIndex(index)}
      renderItem={({item, index}) => (
        <SingleReel item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={({item, index}) => index}
      decelerationRate="fast"
      snapToInterval={320}
    />
  );
};
export default ReelsComponent;
