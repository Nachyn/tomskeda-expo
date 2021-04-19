import React from 'react';
import styled from 'styled-components/native';
import { mainBlack, mainGray, primaryColor } from '../../themes/colors';
import { Hint } from '../../typograhpy/text';
import { CenteredRowFlex } from '../../typograhpy/flex';
import { IconSize } from '../../models/icon-size';
import { IconWrapper } from '../IconWrapper';
import { StyleProp, ViewStyle } from 'react-native';

interface NavbarItemProps {
  icon: React.ComponentType<
    { name: string; size: number; color: string } & any
  >;
  iconName: string;
  iconSize: IconSize;
  iconInnerSize: number;

  text: string;
  isActive: boolean;

  style?: StyleProp<ViewStyle>;
}

export function NavbarItem(props: NavbarItemProps) {
  const currentColor = props.isActive ? primaryColor : mainBlack;

  return (
    <NavbarItemComponent style={props.style}>
      <IconWrapper
        icon={props.icon}
        name={props.iconName}
        size={props.iconSize}
        iconSize={props.iconInnerSize}
        color={currentColor}
      />
      <NavbarItemText color={currentColor}>{props.text}</NavbarItemText>
    </NavbarItemComponent>
  );
}

const NavbarItemComponent = styled(CenteredRowFlex)`
  border-radius: 20px;
  height: 36px;
  background: ${mainGray};
  padding: 10px 20px;

  margin-right: 10px;
`;

const NavbarItemText = styled(Hint)`
  margin-left: 10px;
  font-weight: bold;
`;