import React, { useState } from 'react';
import { FoodSelection } from './pages/FoodSelection';
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
import { Contacts } from './pages/Contacts';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { useLoadFontComfortaa } from './fonts/comfortaa';

const Stack = createStackNavigator();

export function App() {
  const [fontIsLoaded] = useLoadFontComfortaa();

  const [navIsReady, setNavIsReady] = useState(false);
  const appIsReady = fontIsLoaded && navIsReady;

  return (
    <Provider store={store}>
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
                  headerShown: false,
                  animationTypeForReplace: 'pop'
                }}
              >
                <Stack.Screen
                  name={RouteNames.FoodSelection}
                  component={FoodSelection}
                />
                <Stack.Screen
                  name={RouteNames.DeliveryInfo}
                  component={DeliveryInfo}
                />
                <Stack.Screen name={RouteNames.Contacts} component={Contacts} />
              </Stack.Navigator>
              <Navbar />
            </>
          ) : (
            <AppLoading />
          )}
        </AppComponent>
      </NavigationContainer>
    </Provider>
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