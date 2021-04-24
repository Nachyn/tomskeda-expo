import { useFonts } from 'expo-font';

export enum FontCeraPro {
  Black = 'CeraPro-Black',
  BlackItalic = 'CeraPro-BlackItalic',
  Bold = 'CeraPro-Bold',
  BoldItalic = 'CeraPro-BoldItalic',
  Italic = 'CeraPro-Italic',
  Light = 'CeraPro-Light',
  LightItalic = 'CeraPro-LightItalic',
  Medium = 'CeraPro-Medium',
  MediumItalic = 'CeraPro-MediumItalic',
  Regular = 'CeraPro-Regular',
  Thin = 'CeraPro-Thin',
  ThinItalic = 'CeraPro-ThinItalic'
}

export const useLoadFontCeraPro = () =>
  useFonts({
    [FontCeraPro.Black]: require('../../../../assets/fonts/CeraPro/CeraPro-Black.ttf'),
    [FontCeraPro.BlackItalic]: require('../../../../assets/fonts/CeraPro/CeraPro-BlackItalic.ttf'),
    [FontCeraPro.Bold]: require('../../../../assets/fonts/CeraPro/CeraPro-Bold.ttf'),
    [FontCeraPro.BoldItalic]: require('../../../../assets/fonts/CeraPro/CeraPro-BoldItalic.ttf'),
    [FontCeraPro.Italic]: require('../../../../assets/fonts/CeraPro/CeraPro-Italic.ttf'),
    [FontCeraPro.Light]: require('../../../../assets/fonts/CeraPro/CeraPro-Light.ttf'),
    [FontCeraPro.LightItalic]: require('../../../../assets/fonts/CeraPro/CeraPro-LightItalic.ttf'),
    [FontCeraPro.Medium]: require('../../../../assets/fonts/CeraPro/CeraPro-Medium.ttf'),
    [FontCeraPro.MediumItalic]: require('../../../../assets/fonts/CeraPro/CeraPro-MediumItalic.ttf'),
    [FontCeraPro.Regular]: require('../../../../assets/fonts/CeraPro/CeraPro-Regular.ttf'),
    [FontCeraPro.Thin]: require('../../../../assets/fonts/CeraPro/CeraPro-Thin.ttf'),
    [FontCeraPro.ThinItalic]: require('../../../../assets/fonts/CeraPro/CeraPro-ThinItalic.ttf')
  });
