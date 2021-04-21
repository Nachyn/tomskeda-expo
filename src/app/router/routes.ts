import { StackNavigationProp } from '@react-navigation/stack';

export enum RouteNames {
  FoodSelection = 'food-selection',
  DeliveryInfo = 'delivery-info'
}

type RootStackParamList = {
  [RouteNames.FoodSelection]: undefined;
  [RouteNames.DeliveryInfo]: undefined;
};

export type FoodSelectionNavigationProp = StackNavigationProp<
  RootStackParamList,
  RouteNames.FoodSelection
>;

export type DeliveryInfoNavigationProp = StackNavigationProp<
  RootStackParamList,
  RouteNames.DeliveryInfo
>;
