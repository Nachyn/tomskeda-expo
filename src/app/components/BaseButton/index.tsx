import React from 'react';
import styled from 'styled-components/native';
import { CenteredRowFlex } from '../../typograhpy/flex';
import {
  StyleProp,
  TextStyle,
  TouchableWithoutFeedback,
  ViewStyle
} from 'react-native';
import { TextRegular } from '../../typograhpy/text';
import { isWeb } from '../../helpers/platform-helpers';
import { FontCeraPro } from '../../fonts/CeraPro';

interface BaseButtonProps {
  icon?: React.ReactNode;
  text: string;
  onPress?: () => void;

  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export function BaseButton(props: BaseButtonProps) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <BaseButtonComponent style={props.style}>
        {!!props.icon && <Icon>{props.icon}</Icon>}
        <TextRegular font={FontCeraPro.Medium} style={props.textStyle}>
          {props.text}
        </TextRegular>
      </BaseButtonComponent>
    </TouchableWithoutFeedback>
  );
}

const BaseButtonComponent = styled(CenteredRowFlex)`
  ${isWeb() && 'cursor: pointer;'}
`;

const Icon = styled(CenteredRowFlex)``;