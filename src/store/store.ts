import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './root-epic';

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware]
});

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>;
