import { Food } from './food';

export interface ComplexFood {
  id: number;
  price: number;

  firstFoods: Food[];
  selectedFirstFoodId?: number;

  secondFoods: Food[];
  selectedSecondFoodId?: number;

  sideDishes: Food[];
  selectedSideDishesFoodId?: number;

  extraFood: Food[];
}