import React from 'react';
import styled from 'styled-components/native';
import { CenteredRowFlex, SpaceBetweenRowFlex } from '../../typograhpy/flex';
import { TextRegular } from '../../typograhpy/text';
import { isWeb } from '../../helpers/platform-helpers';
import { StyleProp, TouchableWithoutFeedback, ViewStyle } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { IconWrapper } from '../IconWrapper';
import { IconSize } from '../../models/icon-size';
import { mainBlack, mainGray } from '../../themes/colors';
import { FontCeraPro } from '../../fonts/CeraPro';

interface ButtonCounterProps {
  score: number;
  onIncrease: () => void;
  onDecrease: () => void;
  style?: StyleProp<ViewStyle>;
}

export function ButtonCounter(props: ButtonCounterProps) {
  return (
    <ButtonCounterComponent style={props.style}>
      <TouchableWithoutFeedback onPress={props.onDecrease}>
        <Button>
          <IconWrapper
            icon={AntDesign}
            color={mainBlack}
            name={'caretleft'}
            size={IconSize.s20x20}
          />
        </Button>
      </TouchableWithoutFeedback>
      <Score>{props.score > 0 ? `${props.score}` : '—'}</Score>
      <TouchableWithoutFeedback onPress={props.onIncrease}>
        <Button>
          <IconWrapper
            icon={AntDesign}
            color={mainBlack}
            name={'caretright'}
            size={IconSize.s20x20}
          />
        </Button>
      </TouchableWithoutFeedback>
    </ButtonCounterComponent>
  );
}

const ButtonCounterComponent = styled(SpaceBetweenRowFlex)`
  width: 100%;
  background: ${mainGray};
  border-radius: 10px;
  padding: 5px 0;
  align-items: center;
`;

const Button = styled(CenteredRowFlex)`
  padding: 0 10px;
  height: 100%;

  ${isWeb() &&
  `
    cursor: pointer;
  `}
`;

const Score = styled(TextRegular)`
  font-family: ${FontCeraPro.Bold};
`;