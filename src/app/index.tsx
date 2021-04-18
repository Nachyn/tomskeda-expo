import React from 'react';
import styled from 'styled-components/native';
import { FoodSelection } from './pages/FoodSelection';
import { useFonts } from 'expo-font';
import { AppLoading } from './components/AppLoading';

export function App() {
  const [fontIsLoaded] = useFonts({
    Comfortaa: require('../../assets/fonts/Comfortaa-VariableFont_wght.ttf')
  });

  if (!fontIsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppComponent>
      <FoodSelection />
    </AppComponent>
  );
}

const AppComponent = styled.View``;