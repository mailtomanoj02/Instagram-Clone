import {StyleSheet} from 'react-native';
import {COLORS} from '../../Colors/Colors';
import {FONT_FAMILY} from '../../Fonts/FONTS';
export const HomeScreenStyle = StyleSheet.create({
  topBarContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 7,
    alignItems: 'center',
  },
  InstagramTextStyle: {
    fontFamily: FONT_FAMILY.LOBSTER_REGULAR,
    fontSize: 20,
    fontWeight: 500,
    color: COLORS.BLACK,
  },
  fontRightContainerStyle: {flexDirection: 'row'},
  fontStyle: {fontSize: 24, color: COLORS.BLACK, marginHorizontal: 10},
});
