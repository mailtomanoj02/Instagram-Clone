import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const ReelsScreenStyle = StyleSheet.create({
  rootContainer: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'black',
  },
  topContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    zIndex: 1,
  },
  iconStyle: {color: 'white', fontWeight: 'bold'},
  singleReelRootContainer: {height: windowHeight, width: windowWidth},
});
