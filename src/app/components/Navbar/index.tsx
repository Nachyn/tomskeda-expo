import React, { useEffect, useState } from 'react';
import { Foundation, MaterialIcons } from '@expo/vector-icons';
import { NavbarItem } from '../NavbarItem';
import { IconSize } from '../../models/icon-size';
import { mainWhite } from '../../themes/colors';
import styled from 'styled-components/native';
import { CenteredRowFlex } from '../../typograhpy/flex';
import * as Router from '../../router/router';
import { RouteNames } from '../../router/routes';
import { useIsMobile } from '../../../styles/media';

export function Navbar() {
  const [currentRouteName, setCurrentRouteName] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const unsubscribe = Router.addGetCurrentRouteListener(setCurrentRouteName);

    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);

  const isMobile = useIsMobile();

  return (
    <NavbarComponent>
      <NavbarItem
        onPress={() => Router.navigate(RouteNames.FoodSelection)}
        icon={Foundation}
        iconName={'home'}
        iconSize={IconSize.s20x20}
        text={'Заказать'}
        isActive={currentRouteName === RouteNames.FoodSelection}
        isShort={isMobile}
      />
      <NavbarItem
        onPress={() => Router.navigate(RouteNames.DeliveryInfo)}
        icon={MaterialIcons}
        iconName={'delivery-dining'}
        iconSize={IconSize.s20x20}
        text={'Доставка и оплата'}
        isActive={currentRouteName === RouteNames.DeliveryInfo}
        isShort={isMobile}
      />
      <LastNavbarItem
        onPress={() => Router.navigate(RouteNames.Contacts)}
        icon={MaterialIcons}
        iconName={'quick-contacts-dialer'}
        iconSize={IconSize.s20x20}
        text={'Контакты'}
        isActive={currentRouteName === RouteNames.Contacts}
        isShort={isMobile}
      />
    </NavbarComponent>
  );
}

const NavbarComponent = styled(CenteredRowFlex)`
  margin-top: auto;
  height: 64px;
  background: ${mainWhite};
`;

const LastNavbarItem = styled(NavbarItem)`
  margin-right: 0;
`;