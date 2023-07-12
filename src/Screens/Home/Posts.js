import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {HomeScreenStyle} from './HomeStyle';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import {ICON_NAME} from '../../Icons/Icons';
import {COLORS} from '../../Colors/Colors';

const Posts = () => {
  const [postInfo, setPostInfo] = useState([
    {
      id: 1,
      postTitle: 'Mr Sherman',
      postImage: require('../../Images/francesco-tommasini-JINPheIkUek-unsplash.jpg'),
      postPersonImage: require('../../Images/francesco-tommasini-JINPheIkUek-unsplash.jpg'),
      isLiked: true,
      likes: 765,
    },
    {
      id: 2,
      postTitle: 'Mr Sherman',
      postImage: require('../../Images/francesco-tommasini-JINPheIkUek-unsplash.jpg'),
      postPersonImage: require('../../Images/francesco-tommasini-JINPheIkUek-unsplash.jpg'),
      isLiked: true,
      likes: 765,
    },
  ]);
  const renderItem = ({item, index}) => {
    const onPressLike = () => {
      setPostInfo(prevPostInfo => {
        const updatedPostInfo = [...prevPostInfo]; // Create a new copy of the array
        updatedPostInfo[index].isLiked = !updatedPostInfo[index].isLiked; // Update the isLiked property for the specific item
        return updatedPostInfo; // Set the updated array as the new state
      });
    };
    return (
      <View style={HomeScreenStyle.postRootContainer}>
        <View style={HomeScreenStyle.postInnerContainerStyle}>
          <View style={HomeScreenStyle.postHeaderViewStyle}>
            <Image
              source={item.postPersonImage}
              style={HomeScreenStyle.personHeaderIconStyle}
            />
            <Text style={HomeScreenStyle.postHeaderNameStyle}>
              {item.postTitle}
            </Text>
          </View>
          <Feather
            name={ICON_NAME.VERTICAL_DOT}
            style={HomeScreenStyle.verticalDotIconStyle}
          />
        </View>
        <Image source={item.postImage} style={HomeScreenStyle.postImageStyle} />
        <View style={HomeScreenStyle.postBottomConatiner}>
          <View style={HomeScreenStyle.postBottomIconViewContainer}>
            <TouchableOpacity onPress={onPressLike}>
              <AntDesign
                name={item.isLiked ? ICON_NAME.HEART : ICON_NAME.HEARTO}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  color: item.isLiked ? COLORS.RED : COLORS.BLACK,
                  fontSize: 20,
                  paddingRight: 10,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionic
                name={ICON_NAME.IOS_CHATBUBBLE_OUTLINE}
                style={HomeScreenStyle.postChatIconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather
                name={ICON_NAME.NAVIGATION}
                style={HomeScreenStyle.postNavigationIconStyle}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Feather
              name={ICON_NAME.BOOKMARK}
              style={HomeScreenStyle.postBookmarkIconStyle}
            />
          </TouchableOpacity>
        </View>
        <View style={HomeScreenStyle.likeContainerStyle}>
          <Text style={{color: COLORS.BLACK}}>
            Liked By {item.isLiked ? 'you and' : ''}{' '}
            {item.isLiked ? item.likes + 1 : item.likes}
          </Text>
          <Text style={HomeScreenStyle.descriptionTextStyle}>
            Instagram clone helps me to learn about react native!!
          </Text>
          <Text style={HomeScreenStyle.viewAllCommentStyle}>
            View All Comments
          </Text>
          <View style={HomeScreenStyle.commentViewStyle}>
            <Image
              source={item.postPersonImage}
              style={HomeScreenStyle.commentsIconPersonStyle}
            />
            <TextInput placeholder="Add your comment" />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={postInfo}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Posts;
