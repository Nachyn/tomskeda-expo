import React, { useState } from 'react';
import { FoodSelection } from './pages/FoodSelection';
import { useFonts } from 'expo-font';
import { AppLoading } from './components/AppLoading';
import { StatusBar } from 'react-native';
import { Navbar } from './components/Navbar';
import { mainGray } from './themes/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DeliveryInfo } from './pages/DeliveryInfo';
import { RouteNames } from './router/routes';
import { linking } from './router/linking-config';
import { navigationRef } from './router/router';
import { isWeb } from './helpers/platform-helpers';
import { ColumnFlex } from './typograhpy/flex';
import styled from 'styled-components/native';

const Stack = createStackNavigator();

export function App() {
  const [fontIsLoaded] = useFonts({
    Comfortaa: require('../../assets/fonts/Comfortaa-VariableFont_wght.ttf')
  });

  const [navIsReady, setNavIsReady] = useState(false);
  const appIsReady = fontIsLoaded && navIsReady;

  return (
    <NavigationContainer
      linking={linking}
      ref={navigationRef}
      onReady={() => setNavIsReady(true)}
    >
      <AppComponent>
        {appIsReady ? (
          <>
            <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}
            >
              <Stack.Screen
                name={RouteNames.DeliveryInfo}
                options={{}}
                component={DeliveryInfo}
              />
              <Stack.Screen
                name={RouteNames.FoodSelection}
                component={FoodSelection}
              />
            </Stack.Navigator>
            <Navbar />
          </>
        ) : (
          <AppLoading />
        )}
      </AppComponent>
    </NavigationContainer>
  );
}

const AppComponent = styled(ColumnFlex)`
  ${isWeb() &&
  `
    user-select: none;
  `}
  padding-top: ${StatusBar.currentHeight}px;
  background: ${mainGray};
  height: 100%;
`;