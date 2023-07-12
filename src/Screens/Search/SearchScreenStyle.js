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
  imageStyle: {height: 140, width: 133},
  imageButtonStyle: {padding: 2},
});
