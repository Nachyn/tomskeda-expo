import React from 'react';
import {
  CenteredColumnFlex,
  CenteredRowFlex,
  RowFlex
} from '../../typograhpy/flex';
import { Header } from '../../typograhpy/text';
import { FSHeader } from './components/FSHeader';
import styled from 'styled-components/native';
import { FSDayOfWeek } from './components/FSDayOfWeek';
import { FoodType } from '../../../store/foodSelection/models/food-type';
import CustomScroll from '../../components/CustomScroll';
import { FSFood, FSFoodMode } from './components/FSFood';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import * as fsSelectors from '../../../store/foodSelection/selectors';
import { FSFoodType } from './components/FSFoodType';
import { BaseButton } from '../../components/BaseButton';
import { FontAwesome } from '@expo/vector-icons';
import { IconWrapper } from '../../components/IconWrapper';
import {mainBlack, mainGray} from '../../themes/colors';
import { IconSize } from '../../models/icon-size';
import {FontCeraPro} from "../../fonts/CeraPro";

export function FoodSelection() {
  const foodMock = {
    id: 1,
    type: FoodType.First,
    name: 'Мясная окрошка на квасе со сметаной',
    price: 108,
    imgUrl:
      'https://tomskeda.ru/pict/eda/suhoj-nabor-dla-okroski-masnoj-so-smetanoj-11182.jpg',
    quantity: 0
  };

  const dates = useSelector(fsSelectors.selectDates);
  const foods = useSelector(fsSelectors.selectFoods);
  const selectedDay = useSelector(fsSelectors.selectSelectedDate);
  const selectedFoodType = useSelector(fsSelectors.selectSelectedFoodType);

  const foodsTypes = useSelector(fsSelectors.selectFoodTypes);

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

        {!!foods?.length && (
          <Foods>
            {foods.map(food => (
              <FSFood key={food.id} food={food} mode={FSFoodMode.Default} />
            ))}
          </Foods>
        )}
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
  padding: 20px;
  flex-wrap: wrap;
`;

const Scroll = styled(ScrollView)`
  width: 100%;
  height: 100%;
`;

const Complex = styled(CenteredColumnFlex)`
  padding: 20px;
  margin-bottom: 20px;
`;

const ComplexHeader = styled(Header)`
  text-align: center;
  margin-bottom: 10px;
  font-family: ${FontCeraPro.Medium};
`;

const ComplexFoods = styled(CenteredRowFlex)`
  flex-wrap: wrap;
`

const ButtonAddComplex = styled(BaseButton).attrs({
  textStyle: {fontSize: 18, marginLeft: 10}
})`
  padding: 5px 10px;
  background: ${mainGray};
  border-radius: 10px;
`