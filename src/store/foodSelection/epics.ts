import { Action } from '@reduxjs/toolkit';
import {
  ActionsObservable,
  combineEpics,
  ofType,
  StateObservable
} from 'redux-observable';
import * as actions from './actions';
import { concatMap, map, withLatestFrom } from 'rxjs/operators';
import { foodsDaysMock } from '../../mocks/foods-mock';
import { FoodSelectionState } from './slice';
import * as selectors from './selectors';
import { FoodType } from './models/food-type';
import { EMPTY } from 'rxjs';

const loadFoodsEpic$ = (action$: ActionsObservable<Action>) =>
  action$.pipe(
    ofType(actions.loadFoods.type),
    map(() => actions.loadFoodsSuccess(foodsDaysMock))
  );

const setSelectedDayEpic$ = (
  action$: ActionsObservable<Action>,
  state$: StateObservable<{ foodSelection: FoodSelectionState }>
) =>
  action$.pipe(
    ofType(actions.setSelectedDay.type),
    withLatestFrom(state$, (_, state) => state),
    concatMap(state => {
      const currentFoodType = selectors.selectSelectedFoodType(state);
      const currentFoodTypes = selectors.selectFoodTypes(state);
      return currentFoodType === FoodType.Complex &&
        !currentFoodTypes.includes(FoodType.Complex)
        ? [actions.setSelectedFoodType(currentFoodTypes[0])]
        : EMPTY;
    })
  );

export const foodSelectionEpics = combineEpics(
  loadFoodsEpic$,
  setSelectedDayEpic$
);