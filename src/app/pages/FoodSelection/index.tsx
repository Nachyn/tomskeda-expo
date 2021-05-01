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
import { FoodType } from '../../../store/foodSelection/models/food-type';
import CustomScroll from '../../components/CustomScroll';
import { FSFood } from './components/FSFood';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import * as fsSelectors from '../../../store/foodSelection/selectors';

export function FoodSelection() {
  const dates = useSelector(fsSelectors.selectDates);
  const foods = useSelector(fsSelectors.selectFoods);
  const selectedDay = useSelector(fsSelectors.selectSelectedDate);
  const selectedFoodType = useSelector(fsSelectors.selectSelectedFoodType);

  const foodsTypes = Object.values(FoodType);

  return (
    <Scroll>
      <FoodSelectionComponent>
        <FSHeader />

        <CustomScroll>
          <DaysOfWeek>
            {dates.map((date, index) => (
              <FSDayOfWeek
                key={index}
                date={date}
                isWithMargin={index !== dates.length - 1}
                isSelected={selectedDay === date}
              />
            ))}
          </DaysOfWeek>
        </CustomScroll>

        <CustomScroll>
          <FoodTypes>
            {foodsTypes.map((foodType, index) => (
              <FSFoodType
                key={index}
                type={foodType}
                isSelected={selectedFoodType === foodType}
              />
            ))}
          </FoodTypes>
        </CustomScroll>

        <Foods>
          {foods?.map(food => (
            <FSFood key={food.id} food={food} />
          ))}
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
