import styled from 'styled-components/native';
import { mainBlack } from '../themes/colors';
import { Text } from 'react-native';
import { FontComfortaa } from '../fonts/comfortaa';

export const BaseText = styled(Text)<{
  color?: string;
  font?: FontComfortaa;
}>`
  font-family: ${p => p.font || FontComfortaa.Regular};
  color: ${p => p.color || mainBlack};
`;

export const TextRegular = styled(BaseText)`
  font-size: 14px;
  line-height: 16px;
`;

export const Hint = styled(BaseText)`
  font-size: 12px;
  line-height: 16px;
`;

export const Header = styled(BaseText)`
  font-size: 24px;
  line-height: 32px;
  font-family: ${FontComfortaa.Bold};
`;