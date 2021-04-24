import React from 'react';
import styled from 'styled-components/native';
import { mainBlack, mainWhite, primaryColor } from '../../themes/colors';
import { Hint } from '../../typograhpy/text';
import { CenteredRowFlex } from '../../typograhpy/flex';
import { IconSize } from '../../models/icon-size';
import { IconWrapper } from '../IconWrapper';
import { StyleProp, TouchableWithoutFeedback, ViewStyle } from 'react-native';
import { isWeb } from '../../helpers/platform-helpers';
import { FontCeraPro } from '../../fonts/CeraPro';

interface NavbarItemProps {
  icon: React.ComponentType<
    { name: string; size: number; color: string } & any
  >;
  iconName: string;
  iconSize: IconSize;
  iconInnerSize?: number;

  text: string;
  isActive: boolean;
  isShort: boolean;

  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export function NavbarItem(props: NavbarItemProps) {
  const currentColor = props.isActive ? primaryColor : mainBlack;

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <NavbarItemComponent style={props.style}>
        <IconWrapper
          icon={props.icon}
          name={props.iconName}
          size={props.iconSize}
          iconSize={props.iconInnerSize}
          color={currentColor}
        />
        {(props.isActive || !props.isShort) && (
          <NavbarItemText color={mainBlack}>{props.text}</NavbarItemText>
        )}
      </NavbarItemComponent>
    </TouchableWithoutFeedback>
  );
}

const NavbarItemComponent = styled(CenteredRowFlex)`
  ${isWeb() &&
  `
    cursor: pointer;
  `}
  border-radius: 20px;
  height: 36px;
  background: ${mainWhite};
  padding: 10px 20px;

  margin-right: 10px;
`;

const NavbarItemText = styled(Hint)`
  font-family: ${FontCeraPro.Bold};
  margin-left: 10px;
`;