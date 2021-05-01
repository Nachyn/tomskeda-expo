import { Food } from './food';

export interface FoodsDay {
  date: Date;
  isDayOff: boolean;
  foods: Food[];
}