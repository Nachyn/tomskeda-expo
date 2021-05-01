import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectState = createSelector(
  (state: RootState) => state,
  state => state.foodSelection
);

export const selectIsLoaded = createSelector(
  selectState,
  state => state.isLoaded
);

export const selectFoods = createSelector(
  selectState,
  ({ selectedDate, selectedFoodType, foodsDays }) =>
    foodsDays
      .find(d => d.date === selectedDate)
      ?.foods.filter(f => f.type === selectedFoodType)
);

export const selectDates = createSelector(selectState, state =>
  state.foodsDays.map(d => d.date)
);

export const selectSelectedDate = createSelector(
  selectState,
  state => state.selectedDate
);

export const selectSelectedFoodType = createSelector(
  selectState,
  state => state.selectedFoodType
);