import { FoodType } from './food-type';

export interface Food {
  id: number;
  type: FoodType;
  name: string;
  price: number;
  imgUrl: string;
  quantity: number;
}
