import { ImageStyle, StyleProp } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { mainWhite } from '../../themes/colors';

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
    backgroundColor: mainWhite
  }
};