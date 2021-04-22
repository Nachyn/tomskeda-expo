import { Food } from './models/food';
import { createSlice } from '@reduxjs/toolkit';
import * as actions from './actions';

export interface FoodSelectionState {
  isLoaded: boolean;
  foods: Food[];
}

const initialState: FoodSelectionState = {
  isLoaded: false,
  foods: []
};

export const foodSelectionSlice = createSlice({
  name: 'foodSelection',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(actions.loadFoodsSuccess, (state, { payload }) => {
      return { ...state, foods: payload, isLoaded: true };
    });
  }
});

export default foodSelectionSlice.reducer;