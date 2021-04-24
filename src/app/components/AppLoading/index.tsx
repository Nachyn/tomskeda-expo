import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { CenteredColumnFlex } from '../../typograhpy/flex';
import { mainBlack, mainWhite } from '../../themes/colors';

export function AppLoading() {
  return (
    <InDevelopComponent>
      <ActivityIndicatorWrapper>
        <ActivityIndicator size={64} color={mainBlack} />
      </ActivityIndicatorWrapper>
    </InDevelopComponent>
  );
}

const InDevelopComponent = styled(CenteredColumnFlex)`
  height: 100%;
`;

const ActivityIndicatorWrapper = styled(CenteredColumnFlex)`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background: ${mainWhite};
`;