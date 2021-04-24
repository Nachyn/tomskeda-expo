import { useFonts } from 'expo-font';

export enum FontComfortaa {
  Bold = 'Comfortaa-Bold',
  Light = 'Comfortaa-Light',
  Medium = 'Comfortaa-Medium',
  Regular = 'Comfortaa-Regular',
  SemiBold = 'Comfortaa-SemiBold'
}

export const useLoadFontComfortaa = () =>
  useFonts({
    [FontComfortaa.Bold]: require('../../../../assets/fonts/Comfortaa/Comfortaa-Bold.ttf'),
    [FontComfortaa.Light]: require('../../../../assets/fonts/Comfortaa/Comfortaa-Light.ttf'),
    [FontComfortaa.Medium]: require('../../../../assets/fonts/Comfortaa/Comfortaa-Medium.ttf'),
    [FontComfortaa.Regular]: require('../../../../assets/fonts/Comfortaa/Comfortaa-Regular.ttf'),
    [FontComfortaa.SemiBold]: require('../../../../assets/fonts/Comfortaa/Comfortaa-SemiBold.ttf')
  });