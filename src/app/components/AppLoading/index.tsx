import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { CenteredColumnFlex } from '../../typograhpy/flex';
import { mainBlack } from '../../themes/colors';

export function AppLoading() {
  return (
    <InDevelopComponent>
      <ActivityIndicator size={64} color={mainBlack} />
    </InDevelopComponent>
  );
}

const InDevelopComponent = styled(CenteredColumnFlex)`
  height: 100%;
`;
