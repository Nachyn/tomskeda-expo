import React from 'react';
import styled from 'styled-components/native';
import {
  CenteredColumnFlex,
  CenteredRowFlex
} from '../../../../typograhpy/flex';
import { mainGray } from '../../../../themes/colors';
import { AntDesign } from '@expo/vector-icons';
import { Hint } from '../../../../typograhpy/text';
import { FontCeraPro } from '../../../../fonts/CeraPro';
import { IconWrapper } from '../../../../components/IconWrapper';
import { IconSize } from '../../../../models/icon-size';
import { FoodType } from '../../../../models/food-type';

interface FSFoodTypeProps {
  type: FoodType;
}

export function FSFoodType(props: FSFoodTypeProps) {
  return (
    <FSFoodTypeComponent>
      <IconFrame>{foodTypeIcons[props.type]}</IconFrame>
      <NameText>{foodTypeNames[props.type]}</NameText>
    </FSFoodTypeComponent>
  );
}

const FSFoodTypeComponent = styled(CenteredColumnFlex)`
  width: 70px;
  justify-content: flex-start;
`;

const IconFrame = styled(CenteredRowFlex)`
  width: 50px;
  height: 50px;
  background: ${mainGray};
  border-radius: 16px;
  margin-bottom: 10px;
`;

const NameText = styled(Hint)`
  text-align: center;
  font-family: ${FontCeraPro.Medium};
`;

const foodTypeNames = {
  [FoodType.Complex]: <>Комплекс.{'\n'}обеды</>,
  [FoodType.First]: <>Первые{'\n'}блюда</>,
  [FoodType.Second]: <>Вторые{'\n'}блюда</>,
  [FoodType.VegetablesAndSideDishes]: (
    <>
      Овощные{'\n'}блюда и{'\n'}гарниры
    </>
  ),
  [FoodType.SaladsAndSnacks]: <>Салаты и{'\n'}закуски</>,
  [FoodType.DessertsAndBakery]: <>Десерты и {'\n'}выпечка</>,
  [FoodType.Pancakes]: <>Блины</>,
  [FoodType.Sandwiches]: <>Бутер-{'\n'}броды</>,
  [FoodType.Drinks]: <>Напитки</>,
  [FoodType.DietFood]: <>Диетич.{'\n'}питание</>,
  [FoodType.FestiveDishes]: <>Празднич.{'\n'}блюда</>,
  [FoodType.SaucesAndSpices]: <>Соусы и{'\n'}приправы</>,
  [FoodType.Bread]: <>Хлеб</>,
  [FoodType.DisposableTableware]: <>Однораз.{'\n'}посуда</>
};

const foodTypeIcons = {
  [FoodType.Complex]: (
    <IconWrapper
      icon={AntDesign}
      name={'hearto'}
      size={IconSize.s30x30}
      color="black"
    />
  ),
  [FoodType.First]: (
    <IconWrapper
      icon={AntDesign}
      name={'hearto'}
      size={IconSize.s30x30}
      color="black"
    />
  ),
  [FoodType.Second]: (
    <IconWrapper
      icon={AntDesign}
      name={'hearto'}
      size={IconSize.s30x30}
      color="black"
    />
  ),
  [FoodType.VegetablesAndSideDishes]: (
    <IconWrapper
      icon={AntDesign}
      name={'hearto'}
      size={IconSize.s30x30}
      color="black"
    />
  ),
  [FoodType.SaladsAndSnacks]: (
    <IconWrapper
      icon={AntDesign}
      name={'hearto'}
      size={IconSize.s30x30}
      color="black"
    />
  ),
  [FoodType.DessertsAndBakery]: (
    <IconWrapper
      icon={AntDesign}
      name={'hearto'}
      size={IconSize.s30x30}
      color="black"
    />
  ),
  [FoodType.Pancakes]: (
    <IconWrapper
      icon={AntDesign}
      name={'hearto'}
      size={IconSize.s30x30}
      color="black"
    />
  ),
  [FoodType.Sandwiches]: (
    <IconWrapper
      icon={AntDesign}
      name={'hearto'}
      size={IconSize.s30x30}
      color="black"
    />
  ),
  [FoodType.Drinks]: (
    <IconWrapper
      icon={AntDesign}
      name={'hearto'}
      size={IconSize.s30x30}
      color="black"
    />
  ),
  [FoodType.DietFood]: (
    <IconWrapper
      icon={AntDesign}
      name={'hearto'}
      size={IconSize.s30x30}
      color="black"
    />
  ),
  [FoodType.FestiveDishes]: (
    <IconWrapper
      icon={AntDesign}
      name={'hearto'}
      size={IconSize.s30x30}
      color="black"
    />
  ),
  [FoodType.SaucesAndSpices]: (
    <IconWrapper
      icon={AntDesign}
      name={'hearto'}
      size={IconSize.s30x30}
      color="black"
    />
  ),
  [FoodType.Bread]: (
    <IconWrapper
      icon={AntDesign}
      name={'hearto'}
      size={IconSize.s30x30}
      color="black"
    />
  ),
  [FoodType.DisposableTableware]: (
    <IconWrapper
      icon={AntDesign}
      name={'hearto'}
      size={IconSize.s30x30}
      color="black"
    />
  )
};