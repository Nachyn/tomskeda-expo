import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectState = createSelector(
  (state: RootState) => state,
  state => state.foodSelection
);

export const selectFoods = createSelector(selectState, state => state.foods);

export const selectIsLoaded = createSelector(
  selectState,
  state => state.isLoaded
);