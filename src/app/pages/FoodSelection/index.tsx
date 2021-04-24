import React from 'react';
import {CenteredColumnFlex} from '../../typograhpy/flex';
import {FSHeader} from './components/FSHeader';
import styled from 'styled-components/native';

export function FoodSelection() {
  return (
    <FoodSelectionComponent>
      <FSHeader/>
    </FoodSelectionComponent>
  );
}

const FoodSelectionComponent = styled(CenteredColumnFlex)``;
