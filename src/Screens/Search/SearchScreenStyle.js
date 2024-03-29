import {StyleSheet} from 'react-native';
import {COLORS} from './../../Colors/Colors';

export const SearchScreenStyles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  searchBoxContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  SearchIconStyle: {
    fontSize: 18,
    opacity: 0.7,
    position: 'absolute',
    zIndex: 1,
    left: 25,
    top: 18,
  },
  searchInputStyle: {
    backgroundColor: COLORS.BACKGROUND_GREY,
    width: '94%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    paddingLeft: 40,
    padding: 4,
  },
  imageContainerView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageStyle: {height: 140, width: 126},
  imageButtonStyle: {padding: 2},
  multiImageMainContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  multiImageContainerStyle: {
    width: 257,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: 3,
    marginTop: 2,
  },
  finalImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
  },
  finalImageInnerContainer: {
    width: 130,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  plusIconContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  plusIconStyle: {fontSize: 40, opacity: 0.5},
});
