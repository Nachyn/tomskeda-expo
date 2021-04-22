import { combineReducers } from '@reduxjs/toolkit';
import foodSelection from './foodSelection/slice';

export const rootReducer = combineReducers({
  foodSelection
});