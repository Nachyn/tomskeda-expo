import {
  getCreateActionFromStore,
  getCreatePayloadActionFromStore
} from '../helpers';
import { FoodsDay } from './models/foods-day';
import { FoodType } from './models/food-type';

const storeName = 'foodSelection';
const createPayloadAction = getCreatePayloadActionFromStore(storeName);
const createAction = getCreateActionFromStore(storeName);

export const loadFoods = createAction('loadFoods');
export const loadFoodsSuccess = createPayloadAction<FoodsDay[]>(
  'loadFoodsSuccess'
);

export const increaseFoodQuantity = createPayloadAction<{ foodId: number }>(
  'increaseFoodQuantity'
);
export const decreaseFoodQuantity = createPayloadAction<{ foodId: number }>(
  'decreaseFoodQuantity'
);

export const setSelectedDay = createPayloadAction<Date>('setSelectedDay');
export const setSelectedFoodType = createPayloadAction<FoodType>(
  'setSelectedFoodType'
);