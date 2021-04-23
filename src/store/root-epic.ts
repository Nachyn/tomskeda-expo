import { combineEpics } from 'redux-observable';
import { foodSelectionEpics } from './foodSelection/epics';

export const rootEpic = combineEpics(foodSelectionEpics);