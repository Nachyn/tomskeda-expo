import { Platform } from 'react-native';
import { PlatformName } from '../models/expo';

export const isWeb = () => Platform.OS === PlatformName.Web;