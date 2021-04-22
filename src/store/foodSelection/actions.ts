import { Food } from './models/food';
import { getCreatePayloadActionFromStore } from '../helpers';

const createPayloadAction = getCreatePayloadActionFromStore('foodSelection');

export const loadFoodsSuccess = createPayloadAction<Food[]>('loadFoodsSuccess');
