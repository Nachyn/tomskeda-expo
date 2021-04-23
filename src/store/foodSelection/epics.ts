import { Action } from '@reduxjs/toolkit';
import { ActionsObservable, combineEpics, ofType } from 'redux-observable';
import * as actions from './actions';
import { map } from 'rxjs/operators';
import { foodsMock } from '../../mocks/foods-mock';

const loadFoodsEpic$ = (action$: ActionsObservable<Action>) =>
  action$.pipe(
    ofType(actions.loadFoods.type),
    map(() => actions.loadFoodsSuccess(foodsMock))
  );

export const foodSelectionEpics = combineEpics(loadFoodsEpic$);