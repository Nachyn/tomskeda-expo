import React from 'react';
import styled from 'styled-components/native';
import { FoodSelection } from './pages/FoodSelection';
import { useFonts } from 'expo-font';
import { AppLoading } from './components/AppLoading';
import { ColumnFlex } from './typograhpy/flex';
import { Platform, StatusBar } from 'react-native';
import { Navbar } from './components/Navbar';
import { mainGray } from './themes/colors';
import { PlatformName } from './consts/expo';

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
      <Navbar />
    </AppComponent>
  );
}

const AppComponent = styled(ColumnFlex)`
  ${Platform.OS === PlatformName.Web &&
  `
    user-select: none;
  `}
  padding-top: ${StatusBar.currentHeight}px;
  background: ${mainGray};
  height: 100%;
`;