import React, { useEffect, useState } from 'react';
import { FoodSelection } from './pages/FoodSelection';
import { AppLoading } from './components/AppLoading';
import { ImageBackground, StatusBar } from 'react-native';
import { Navbar } from './components/Navbar';
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
import { useDispatch, useSelector } from 'react-redux';
import {
  appLoadingSyntheticDelayMs,
  imageBackgroundImageStyle,
  stackNavigatorScreenOptions
} from './consts/app/app-consts';
import { useLoadFontCeraPro } from './fonts/CeraPro';
import { Layout } from './components/Layout';
import appBackground from './images/app_background_2.jpg';
import * as fsSelectors from '../store/foodSelection/selectors';
import * as fsActions from '../store/foodSelection/actions';

const Stack = createStackNavigator();

export function App() {
  const dispatch = useDispatch();

  const [fontIsLoaded] = useLoadFontCeraPro();
  const [navIsReady, setNavIsReady] = useState(false);
  const [syntheticDelayIsComplete, setSyntheticDelayIsComplete] = useState(
    false
  );
  const foodsIsLoaded = useSelector(fsSelectors.selectIsLoaded);
  const appIsReady =
    fontIsLoaded && navIsReady && syntheticDelayIsComplete && foodsIsLoaded;

  useEffect(() => {
    setTimeout(
      () => setSyntheticDelayIsComplete(true),
      appLoadingSyntheticDelayMs
    );
    dispatch(fsActions.loadFoods());
  }, []);

  return (
    <NavigationContainer
      linking={linking}
      ref={navigationRef}
      onReady={() => setNavIsReady(true)}
    >
      <AppComponent>
        <ImageBackground
          source={appBackground}
          style={{ height: '100%' }}
          imageStyle={imageBackgroundImageStyle}
        >
          <Layout>
            {appIsReady ? (
              <Layout>
                <Stack.Navigator screenOptions={stackNavigatorScreenOptions}>
                  <Stack.Screen
                    name={RouteNames.FoodSelection}
                    component={FoodSelection}
                  />
                  <Stack.Screen
                    name={RouteNames.DeliveryInfo}
                    component={DeliveryInfo}
                  />
                  <Stack.Screen
                    name={RouteNames.Contacts}
                    component={Contacts}
                  />
                </Stack.Navigator>
                <Navbar />
              </Layout>
            ) : (
              <AppLoading />
            )}
          </Layout>
        </ImageBackground>
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
  height: 100%;
`;