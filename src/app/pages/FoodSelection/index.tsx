import React from 'react';
import {
  CenteredColumnFlex,
  CenteredRowFlex,
  RowFlex
} from '../../typograhpy/flex';
import { FSHeader } from './components/FSHeader';
import styled from 'styled-components/native';
import { FSDayOfWeek } from './components/FSDayOfWeek';
import { FSFoodType } from './components/FSFoodType';
import { FoodType } from '../../models/food-type';
import CustomScroll from '../../components/CustomScroll';
import { FSFood } from './components/FSFood';
import { ScrollView } from 'react-native';

export function FoodSelection() {
  const testDays = [
    new Date('2021-04-30'),
    new Date('2021-05-01'),
    new Date('2021-05-02'),
    new Date('2021-05-03'),
    new Date('2021-05-04'),
    new Date('2021-05-04'),
    new Date('2021-05-04'),
    new Date('2021-05-05')
  ];

  const testFoodsTypes = Object.values(FoodType);

  return (
    <Scroll>
      <FoodSelectionComponent>
        <FSHeader />

        <CustomScroll>
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
        </CustomScroll>

        <CustomScroll>
          <FoodTypes>
            {testFoodsTypes.map((foodType, index) => (
              <FSFoodType
                key={index}
                type={foodType}
                isSelected={index === 0}
              />
            ))}
          </FoodTypes>
        </CustomScroll>

        <Foods>
          <FSFood />
          <FSFood />
          <FSFood />
          <FSFood />
          <FSFood />
          <FSFood />
          <FSFood />
          <FSFood />
        </Foods>
      </FoodSelectionComponent>
    </Scroll>
  );
}

const FoodSelectionComponent = styled(CenteredColumnFlex)``;

const DaysOfWeek = styled(RowFlex)`
  padding: 30px 20px 10px 20px;
`;

const FoodTypes = styled(RowFlex)`
  padding: 30px 20px 10px 20px;
`;

const Foods = styled(CenteredRowFlex)`
  padding: 30px 20px 10px 20px;
  flex-wrap: wrap;
`;
const Scroll = styled(ScrollView)`
  width: 100%;
  height: 100%;
`;
