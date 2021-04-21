import styled from 'styled-components/native';
import { mainBlack } from '../themes/colors';
import { Text } from 'react-native';

export const BaseText = styled(Text)<{
  color?: string;
}>`
  font-family: Comfortaa;
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
