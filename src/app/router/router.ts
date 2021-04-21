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
    const routeNames = state?.routeNames;
    const index = state?.index;
    if (routeNames && index !== undefined) {
      routeNameCallback(routeNames[index]);
      return;
    }
    routeNameCallback(undefined);
  });