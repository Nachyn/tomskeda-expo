import { createSlice } from '@reduxjs/toolkit';
import * as actions from './actions';
import { FoodsDay } from './models/foods-day';
import { FoodType } from './models/food-type';

export interface FoodSelectionState {
  isLoaded: boolean;
  foodsDays: FoodsDay[];
  selectedDate: Date;
  selectedFoodType: FoodType;
}

const initialState: FoodSelectionState = {
  isLoaded: false,
  foodsDays: [],
  selectedDate: new Date(0),
  selectedFoodType: FoodType.First
};

export const foodSelectionSlice = createSlice({
  name: 'foodSelection',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(actions.loadFoodsSuccess, (state, { payload }) => {
      return {
        ...state,
        foodsDays: payload,
        selectedDate: payload[0].date,
        selectedFoodType: FoodType.First,
        isLoaded: true
      };
    });
  }
});

export default foodSelectionSlice.reducer;