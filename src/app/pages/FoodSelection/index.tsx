import React from 'react';
import { CenteredColumnFlex, CenteredRowFlex } from '../../typograhpy/flex';
import { FSHeader } from './components/FSHeader';
import styled from 'styled-components/native';
import { FSDayOfWeek } from './components/FSDayOfWeek';

export function FoodSelection() {
  const testDays = [
    new Date('2021-04-30'),
    new Date('2021-05-01'),
    new Date('2021-05-02'),
    new Date('2021-05-03'),
    new Date('2021-05-04'),
    new Date('2021-05-05'),
    new Date('2021-05-06')
  ];

  return (
    <FoodSelectionComponent>
      <FSHeader />

      <DaysOfWeek>
        {testDays.map((date, index) => (
          <FSDayOfWeek
            key={index}
            date={date}
            isWithMargin={index !== testDays.length - 1}
            isSelected={index === 0}
          />
        ))}
      </DaysOfWeek>
    </FoodSelectionComponent>
  );
}

const FoodSelectionComponent = styled(CenteredColumnFlex)``;

const DaysOfWeek = styled(CenteredRowFlex)`
  margin: 30px 10px 0 10px;
  flex-wrap: wrap;
`;