import '@expo/match-media';
import { useMediaQuery } from 'react-responsive';

export interface Media {
  isMini?: boolean;
  isMobile?: boolean;
}

const sizes = {
  mini: 360,
  mobile: 720,
  desktop: 1100
};

export const useIsMini = () =>
  useMediaQuery({
    maxDeviceWidth: sizes.mini
  });

export const useIsMobile = () =>
  useMediaQuery({
    maxDeviceWidth: sizes.mobile
  });

export const useIsStrictMobile = () =>
  useMediaQuery({
    maxDeviceWidth: sizes.mobile,
    minDeviceWidth: sizes.mini
  });
