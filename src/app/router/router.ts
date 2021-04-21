import { NavigationContainerRef } from '@react-navigation/native';
import React from 'react';
import { RouteNames } from './routes';

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: RouteNames) {
  navigationRef.current?.navigate(name);
}

const stateEventName = 'state';

export const addGetCurrentRouteListener = (
  routeNameCallback: (routeName: string | undefined) => void
) =>
  navigationRef.current!.addListener(stateEventName, ({ data: { state } }) => {
    const routes = state?.routes;
    const index = state?.index;

    if (routes && index !== undefined) {
      routeNameCallback(routes[index].name);
      return;
    }
    routeNameCallback(undefined);
  });