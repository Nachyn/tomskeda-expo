import { Food } from './models/food';
import {
  getCreateActionFromStore,
  getCreatePayloadActionFromStore
} from '../helpers';

const storeName = 'foodSelection';
const createPayloadAction = getCreatePayloadActionFromStore(storeName);
const createAction = getCreateActionFromStore(storeName);

export const loadFoods = createAction('loadFoods');
export const loadFoodsSuccess = createPayloadAction<Food[]>('loadFoodsSuccess');
