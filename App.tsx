import React from 'react';
import { App } from './src/app';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default function () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
