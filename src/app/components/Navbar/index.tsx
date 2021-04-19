import React from 'react';
import { Foundation, MaterialIcons } from '@expo/vector-icons';
import { NavbarItem } from '../NavbarItem';
import { IconSize } from '../../models/icon-size';
import { mainWhite } from '../../themes/colors';
import styled from 'styled-components/native';
import { CenteredRowFlex } from '../../typograhpy/flex';

export function Navbar() {
  return (
    <NavbarComponent>
      <NavbarItem
        icon={Foundation}
        iconName={'home'}
        iconSize={IconSize.s16x16}
        iconInnerSize={20}
        text={'Заказать'}
        isActive={true}
      />
      <LastNavbarItem
        icon={MaterialIcons}
        iconName={'delivery-dining'}
        iconSize={IconSize.s16x16}
        iconInnerSize={20}
        text={'Доставка и оплата'}
        isActive={false}
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