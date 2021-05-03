import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { FoodType } from './models/food-type';

export const selectState = createSelector(
  (state: RootState) => state,
  state => state.foodSelection
);

export const selectIsLoaded = createSelector(
  selectState,
  state => state.isLoaded
);

const selectFoodDay = createSelector(
  selectState,
  ({ selectedDate, selectedFoodType, foodsDays }) =>
    foodsDays.find(d => d.date === selectedDate)
);

export const selectSelectedDate = createSelector(
  selectState,
  state => state.selectedDate
);

export const selectSelectedFoodType = createSelector(
  selectState,
  state => state.selectedFoodType
);

export const selectFoods = createSelector(
  selectFoodDay,
  selectSelectedFoodType,
  (foodDay, foodType) =>
    !!foodDay?.isDayOff
      ? undefined
      : foodDay?.foods?.filter(f => f.type === foodType)
);

export const selectDates = createSelector(selectState, state =>
  state.foodsDays.map(d => d.date)
);

export const selectComplexFood = createSelector(selectFoodDay, foodDay =>
  !!foodDay?.isDayOff ? undefined : foodDay?.complexFood
);

export const selectFoodTypes = createSelector(selectFoodDay, foodDay => {
  const foodTypes = Object.values(FoodType);
  return !foodDay?.isDayOff && !!foodDay?.complexFood
    ? foodTypes
    : foodTypes.slice(1);
});

export const selectIsDayOff = createSelector(
  selectFoodDay,
  foodDay => !!foodDay?.isDayOff
);
