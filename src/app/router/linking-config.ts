import * as Linking from 'expo-linking';
import { RouteNames } from './routes';
import { LinkingOptions } from '@react-navigation/native';

const prefix = Linking.createURL('/');

export const linking: LinkingOptions & { routes: Array<{ name: string }> } = {
  prefixes: [prefix],
  routes: [
    {
      name: RouteNames.FoodSelection
    },
    {
      name: RouteNames.DeliveryInfo
    }
  ]
};