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
    builder
      .addCase(actions.loadFoodsSuccess, (state, { payload }) => {
        return {
          ...state,
          foodsDays: payload,
          selectedDate: payload[0].date,
          selectedFoodType: FoodType.First,
          isLoaded: true
        };
      })
      .addCase(actions.increaseFoodQuantity, (state, { payload }) => {
        const food = selectFoodByIdAndSelectedDate(state, payload.foodId);
        if (!!food && food.quantity !== undefined) {
          food.quantity = food.quantity + 1;
        }
      })
      .addCase(actions.decreaseFoodQuantity, (state, { payload }) => {
        const food = selectFoodByIdAndSelectedDate(state, payload.foodId);
        if (!!food && food.quantity !== undefined) {
          food.quantity = food.quantity > 0 ? food.quantity - 1 : 0;
        }
      })
      .addCase(actions.setSelectedDay, (state, { payload }) => {
        state.selectedDate = payload;
      })
      .addCase(actions.setSelectedFoodType, (state, { payload }) => {
        state.selectedFoodType = payload;
      })
      .addCase(actions.setSelectedFirstFoodId, (state, { payload }) => {
        const complexFood = selectComplexFood(state);
        if (!!complexFood) {
          complexFood.selectedFirstFoodId = payload.foodId;
        }
      })
      .addCase(actions.setSelectedSecondFoodId, (state, { payload }) => {
        const complexFood = selectComplexFood(state);
        if (!!complexFood) {
          complexFood.selectedSecondFoodId = payload.foodId;
        }
      })
      .addCase(actions.setSelectedSideDishesFoodId, (state, { payload }) => {
        const complexFood = selectComplexFood(state);
        if (!!complexFood) {
          complexFood.selectedSideDishesFoodId = payload.foodId;
        }
      });
  }
});

function selectFoodByIdAndSelectedDate(
  state: FoodSelectionState,
  foodId: number
) {
  return state.foodsDays
    .find(d => d.date === state.selectedDate)
    ?.foods?.find(f => f.id === foodId);
}

function selectComplexFood(state: FoodSelectionState) {
  return state.foodsDays.find(d => d.date === state.selectedDate)?.complexFood;
}

export default foodSelectionSlice.reducer;