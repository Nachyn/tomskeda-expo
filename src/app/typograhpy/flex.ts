import styled from 'styled-components/native';
import { View } from 'react-native';

export const Flex = styled(View)`
  display: flex;
`;

export const ColumnFlex = styled(Flex)`
  flex-direction: column;
`;

export const CenteredColumnFlex = styled(ColumnFlex)`
  justify-content: center;
  align-items: center;
`;

export const RowFlex = styled(Flex)`
  flex-direction: row;
`;

export const CenteredRowFlex = styled(RowFlex)`
  justify-content: center;
  align-items: center;
`;
