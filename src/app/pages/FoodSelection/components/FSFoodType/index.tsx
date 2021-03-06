import React from 'react';
import styled from 'styled-components/native';
import {
  CenteredColumnFlex,
  CenteredRowFlex
} from '../../../../typograhpy/flex';
import {
  mainBlack,
  mainGray,
  mainWhite,
  primaryColor
} from '../../../../themes/colors';
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  Octicons
} from '@expo/vector-icons';
import { Hint } from '../../../../typograhpy/text';
import { FontCeraPro } from '../../../../fonts/CeraPro';
import { IconWrapper } from '../../../../components/IconWrapper';
import { IconSize } from '../../../../models/icon-size';
import { FoodType } from '../../../../../store/foodSelection/models/food-type';
import { useDispatch } from 'react-redux';
import * as fsActions from '../../../../../store/foodSelection/actions';
import { TouchableWithoutFeedback } from 'react-native';
import { isWeb } from '../../../../helpers/platform-helpers';

interface FSFoodTypeProps {
  type: FoodType;
  isSelected: boolean;
}

export function FSFoodType(props: FSFoodTypeProps) {
  const dispatch = useDispatch();
  const iconColor = props.isSelected ? mainWhite : mainBlack;

  return (
    <TouchableWithoutFeedback
      onPress={() => dispatch(fsActions.setSelectedFoodType(props.type))}
    >
      <FSFoodTypeComponent>
        <IconFrame isSelected={props.isSelected}>
          {foodTypeIcons(iconColor)[props.type]}
        </IconFrame>
        <NameText>{foodTypeNames[props.type]}</NameText>
      </FSFoodTypeComponent>
    </TouchableWithoutFeedback>
  );
}

const FSFoodTypeComponent = styled(CenteredColumnFlex)`
  width: 70px;
  justify-content: flex-start;

  ${isWeb() &&
  `
    cursor: pointer;
  `}
`;

const IconFrame = styled(CenteredRowFlex)<{
  isSelected: boolean;
}>`
  width: 50px;
  height: 50px;
  background: ${p => (p.isSelected ? primaryColor : mainGray)};
  border-radius: 16px;
  margin-bottom: 10px;
`;

const NameText = styled(Hint)`
  text-align: center;
  font-family: ${FontCeraPro.Medium};
`;

const foodTypeNames = {
  [FoodType.Complex]: <>????????????????.{'\n'}??????????</>,
  [FoodType.First]: <>????????????{'\n'}??????????</>,
  [FoodType.Second]: <>????????????{'\n'}??????????</>,
  [FoodType.VegetablesAndSideDishes]: (
    <>
      ??????????????{'\n'}?????????? ??{'\n'}??????????????
    </>
  ),
  [FoodType.SaladsAndSnacks]: <>???????????? ??{'\n'}??????????????</>,
  [FoodType.DessertsAndBakery]: <>?????????????? ?? {'\n'}??????????????</>,
  [FoodType.Pancakes]: <>??????????</>,
  [FoodType.Sandwiches]: <>??????????-{'\n'}??????????</>,
  [FoodType.Drinks]: <>??????????????</>,
  [FoodType.DietFood]: <>????????????.{'\n'}??????????????</>,
  [FoodType.FestiveDishes]: <>????????????????.{'\n'}??????????</>,
  [FoodType.SaucesAndSpices]: <>?????????? ??{'\n'}????????????????</>,
  [FoodType.Bread]: <>????????</>,
  [FoodType.DisposableTableware]: <>??????????????.{'\n'}????????????</>
};

const foodTypeIcons = (color: string) => ({
  [FoodType.Complex]: (
    <IconWrapper
      icon={MaterialCommunityIcons}
      name={'creation'}
      size={IconSize.s30x30}
      color={color}
    />
  ),
  [FoodType.First]: (
    <IconWrapper
      icon={MaterialCommunityIcons}
      name={'pot-mix-outline'}
      size={IconSize.s30x30}
      color={color}
    />
  ),
  [FoodType.Second]: (
    <IconWrapper
      icon={MaterialCommunityIcons}
      name={'food-drumstick-outline'}
      size={IconSize.s30x30}
      color={color}
    />
  ),
  [FoodType.VegetablesAndSideDishes]: (
    <IconWrapper
      icon={Entypo}
      name={'leaf'}
      size={IconSize.s30x30}
      color={color}
    />
  ),
  [FoodType.SaladsAndSnacks]: (
    <IconWrapper
      icon={FontAwesome}
      name={'leaf'}
      size={IconSize.s30x30}
      color={color}
    />
  ),
  [FoodType.DessertsAndBakery]: (
    <IconWrapper
      icon={MaterialCommunityIcons}
      name={'food-croissant'}
      size={IconSize.s30x30}
      color={color}
    />
  ),
  [FoodType.Pancakes]: (
    <IconWrapper
      icon={FontAwesome5}
      name={'dot-circle'}
      size={IconSize.s30x30}
      color={color}
    />
  ),
  [FoodType.Sandwiches]: (
    <IconWrapper
      icon={Ionicons}
      name={'ios-fast-food-outline'}
      size={IconSize.s30x30}
      color={color}
    />
  ),
  [FoodType.Drinks]: (
    <IconWrapper
      icon={MaterialCommunityIcons}
      name={'tea'}
      size={IconSize.s30x30}
      color={color}
    />
  ),
  [FoodType.DietFood]: (
    <IconWrapper
      icon={MaterialCommunityIcons}
      name={'food-apple-outline'}
      size={IconSize.s30x30}
      color={color}
    />
  ),
  [FoodType.FestiveDishes]: (
    <IconWrapper
      icon={Octicons}
      name={'star'}
      size={IconSize.s30x30}
      color={color}
    />
  ),
  [FoodType.SaucesAndSpices]: (
    <IconWrapper
      icon={MaterialCommunityIcons}
      name={'soy-sauce'}
      size={IconSize.s30x30}
      color={color}
    />
  ),
  [FoodType.Bread]: (
    <IconWrapper
      icon={MaterialCommunityIcons}
      name={'bread-slice-outline'}
      size={IconSize.s30x30}
      color={color}
    />
  ),
  [FoodType.DisposableTableware]: (
    <IconWrapper
      icon={MaterialCommunityIcons}
      name={'silverware-spoon'}
      size={IconSize.s30x30}
      color={color}
    />
  )
});