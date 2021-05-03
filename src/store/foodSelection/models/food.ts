import { FoodType } from './food-type';

export interface Food {
  id: number;
  name: string;
  imgUrl: string;
  price?: number;
  type?: FoodType;
  quantity?: number;
}
