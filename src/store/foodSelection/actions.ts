import {
  getCreateActionFromStore,
  getCreatePayloadActionFromStore
} from '../helpers';
import { FoodsDay } from './models/foods-day';

const storeName = 'foodSelection';
const createPayloadAction = getCreatePayloadActionFromStore(storeName);
const createAction = getCreateActionFromStore(storeName);

export const loadFoods = createAction('loadFoods');
export const loadFoodsSuccess = createPayloadAction<FoodsDay[]>(
  'loadFoodsSuccess'
);
