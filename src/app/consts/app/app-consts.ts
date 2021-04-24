import { ImageStyle, StyleProp } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { mainBlack, mainWhite } from '../../themes/colors';

export const appLoadingSyntheticDelayMs = 1500;

export const imageBackgroundImageStyle: StyleProp<ImageStyle> = {
  resizeMode: 'repeat',
  overflow: 'visible',
  backfaceVisibility: 'visible',
  flex: 1
};

export const stackNavigatorScreenOptions: StackNavigationOptions = {
  headerShown: false,
  animationEnabled: false,
  cardStyle: {
    backgroundColor: mainWhite,
    borderRightWidth: 1,
    borderRightColor: mainBlack,
    borderLeftWidth: 1,
    borderLeftColor: mainBlack
  }
};