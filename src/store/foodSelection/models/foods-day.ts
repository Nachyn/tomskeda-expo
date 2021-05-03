import { Food } from './food';
import { ComplexFood } from './complex-food';

export interface FoodsDay {
  date: Date;
  isDayOff: boolean;
  foods?: Food[];
  complexFood?: ComplexFood;
}