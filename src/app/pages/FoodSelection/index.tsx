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
import CustomScroll from '../../components/CustomScroll';
import { FSFood, FSFoodMode } from './components/FSFood';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as fsSelectors from '../../../store/foodSelection/selectors';
import * as fsActions from '../../../store/foodSelection/actions';
import { FSFoodType } from './components/FSFoodType';
import { BaseButton } from '../../components/BaseButton';
import { FontAwesome } from '@expo/vector-icons';
import { IconWrapper } from '../../components/IconWrapper';
import { mainBlack, mainGray } from '../../themes/colors';
import { IconSize } from '../../models/icon-size';
import { FontCeraPro } from '../../fonts/CeraPro';
import { Food } from '../../../store/foodSelection/models/food';

export function FoodSelection() {
  const dispatch = useDispatch();

  const dates = useSelector(fsSelectors.selectDates);
  const foods = useSelector(fsSelectors.selectFoods);
  const selectedDay = useSelector(fsSelectors.selectSelectedDate);
  const selectedFoodType = useSelector(fsSelectors.selectSelectedFoodType);

  const foodsTypes = useSelector(fsSelectors.selectFoodTypes);

  const complexFood = useSelector(fsSelectors.selectComplexFood);

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

        {!!complexFood && (
          <Complex>
            <ComplexFoods
              header={'Выберите первое блюдо'}
              mode={FSFoodMode.ComplexSelect}
              foods={complexFood.firstFoods}
              selectedFoodId={complexFood.selectedFirstFoodId}
              onPress={foodId =>
                dispatch(fsActions.setSelectedFirstFoodId({ foodId }))
              }
            />
            <ComplexFoods
              header={'Выберите второе блюдо'}
              mode={FSFoodMode.ComplexSelect}
              foods={complexFood.secondFoods}
              selectedFoodId={complexFood.selectedSecondFoodId}
              onPress={foodId =>
                dispatch(fsActions.setSelectedSecondFoodId({ foodId }))
              }
            />
            <ComplexFoods
              header={'Выберите овощное блюдо / гарнир'}
              mode={FSFoodMode.ComplexSelect}
              foods={complexFood.sideDishes}
              selectedFoodId={complexFood.selectedSideDishesFoodId}
              onPress={foodId =>
                dispatch(fsActions.setSelectedSideDishesFoodId({ foodId }))
              }
            />
            <ComplexFoods
              header={'Дополнительно входит'}
              mode={FSFoodMode.ComplexOnlyShow}
              foods={complexFood.extraFood}
            />
            <ButtonAddComplex
              text={'Добавить в корзину'}
              icon={
                <IconWrapper
                  icon={FontAwesome}
                  color={mainBlack}
                  name={'cart-plus'}
                  size={IconSize.s24x24}
                />
              }
            />
          </Complex>
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

const ComplexFoodsWrapper = styled(CenteredRowFlex)`
  flex-wrap: wrap;
`;

const ButtonAddComplex = styled(BaseButton).attrs({
  textStyle: { fontSize: 18, marginLeft: 10 }
})`
  padding: 5px 10px;
  background: ${mainGray};
  border-radius: 10px;
`;

const ComplexFoods = (props: {
  header: string;
  mode: FSFoodMode;
  foods?: Food[];
  selectedFoodId?: number;
  onPress?: (foodId: number) => void;
}) =>
  !!props.foods?.length ? (
    <>
      <ComplexHeader>{props.header}</ComplexHeader>
      <ComplexFoodsWrapper>
        {props.foods.map(food => (
          <FSFood
            key={food.id}
            food={food}
            mode={props.mode}
            isSelectedComplex={food.id === props.selectedFoodId}
            onPress={props.onPress}
          />
        ))}
      </ComplexFoodsWrapper>
    </>
  ) : null;