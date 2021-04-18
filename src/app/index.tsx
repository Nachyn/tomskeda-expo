import React from 'react';
import styled from 'styled-components/native';
import { FoodSelection } from './pages/FoodSelection';

export function App() {
  return (
    <AppComponent>
      <FoodSelection />
    </AppComponent>
  );
}

const AppComponent = styled.View``;