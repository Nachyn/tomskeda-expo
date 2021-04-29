import React from 'react';
import { CenteredColumnFlex, RowFlex } from '../../typograhpy/flex';
import { FSHeader } from './components/FSHeader';
import styled from 'styled-components/native';
import { FSDayOfWeek } from './components/FSDayOfWeek';
import { FSFoodType } from './components/FSFoodType';
import { FoodType } from '../../models/food-type';
import { ScrollView } from 'react-native';

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

  const testFoodsTypes = Object.values(FoodType);

  return (
    <FoodSelectionComponent>
      <FSHeader />

      <StyledScroll>
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
      </StyledScroll>

      <StyledScroll>
        <FoodTypes>
          {testFoodsTypes.map((foodType, index) => (
            <FSFoodType key={index} type={foodType} isSelected={index === 0} />
          ))}
        </FoodTypes>
      </StyledScroll>
    </FoodSelectionComponent>
  );
}

const FoodSelectionComponent = styled(CenteredColumnFlex)``;

const StyledScroll = styled(ScrollView).attrs({
  horizontal: true,
  contentContainerStyle: { flexGrow: 1, justifyContent: 'center' }
})`
  width: 100%;
`;

const DaysOfWeek = styled(RowFlex)`
  padding: 30px 20px 10px 20px;
`;

const FoodTypes = styled(RowFlex)`
  padding: 15px 20px 10px 20px;
`;