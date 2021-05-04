import React from 'react';
import styled from 'styled-components/native';
import {
  CenteredColumnFlex,
  CenteredRowFlex
} from '../../../../typograhpy/flex';
import {
  mainBlack,
  mainGray,
  mainTransparent,
  mainWhite
} from '../../../../themes/colors';
import { ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { TextRegular } from '../../../../typograhpy/text';
import { FontCeraPro } from '../../../../fonts/CeraPro';
import { ButtonCounter } from '../../../../components/ButtonCounter';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { IconWrapper } from '../../../../components/IconWrapper';
import { IconSize } from '../../../../models/icon-size';
import { numberWithSpaces } from '../../../../helpers/number-helpers';
import { Food } from '../../../../../store/foodSelection/models/food';
import * as fsActions from '../../../../../store/foodSelection/actions';
import { useDispatch } from 'react-redux';
import { isWeb } from '../../../../helpers/platform-helpers';

export enum FSFoodMode {
  Default,
  ComplexSelect,
  ComplexOnlyShow
}

interface FSFoodProps {
  food: Food;
  mode: FSFoodMode;

  isSelectedComplex?: boolean;
  onPress?: (foodId: number) => void;
}

export function FSFood(props: FSFoodProps) {
  const dispatch = useDispatch();

  return (
    <TouchableWithoutFeedback
      onPress={() => !!props.onPress && props.onPress(props.food.id)}
    >
      <FSFoodComponent
        isComplexSelect={props.mode === FSFoodMode.ComplexSelect}
      >
        <Name>{props.food.name}</Name>
        <Image
          source={{
            uri: props.food.imgUrl
          }}
        >
          <Info>
            <IconWrapper
              size={IconSize.s20x20}
              name={'infocirlceo'}
              color={mainBlack}
              icon={AntDesign}
              iconSize={19}
            />
          </Info>
          {props.mode === FSFoodMode.Default && (
            <Sum>
              <TextRegular>{`${numberWithSpaces(
                !!props.food.price ? props.food.price : 0
              )} ₽`}</TextRegular>
            </Sum>
          )}
          {props.mode === FSFoodMode.ComplexSelect && (
            <CheckMark>
              <IconWrapper
                icon={MaterialIcons}
                color={props.isSelectedComplex ? mainBlack : mainTransparent}
                name={'check-circle'}
                size={IconSize.s24x24}
              />
            </CheckMark>
          )}
        </Image>
        {props.mode === FSFoodMode.Default && (
          <StyledButtonCounter
            onIncrease={() => {
              dispatch(
                fsActions.increaseFoodQuantity({ foodId: props.food.id })
              );
            }}
            onDecrease={() =>
              dispatch(
                fsActions.decreaseFoodQuantity({ foodId: props.food.id })
              )
            }
            score={props.food.quantity}
          />
        )}
      </FSFoodComponent>
    </TouchableWithoutFeedback>
  );
}

const FSFoodComponent = styled(CenteredColumnFlex)<{
  isComplexSelect: boolean;
}>`
  padding: 5px;
  width: 200px;

  border-radius: 10px;
  margin-bottom: 20px;
  align-self: flex-end;

  ${p => p.isComplexSelect && isWeb() && 'cursor: pointer'};
`;

const Image = styled(ImageBackground).attrs({
  imageStyle: { borderRadius: 10, borderWidth: 1, borderColor: mainBlack }
})`
  width: 100%;
  height: 150px;
  background: ${mainGray};
  border-radius: 10px;
  position: relative;
`;

const Sum = styled(CenteredRowFlex)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: ${mainWhite};
  border-radius: 10px;
  padding: 0 5px;
  border: 1px solid ${mainBlack};
`;

const Info = styled(CenteredRowFlex)`
  position: absolute;
  top: 10px;
  left: 10px;
  background: ${mainWhite};
  border-radius: 30px;
`;

const CheckMark = styled(CenteredRowFlex)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: ${mainWhite};
  border-radius: 30px;
  height: 20px;
  width: 20px;
  border: 1px solid ${mainBlack};
`;

const Name = styled(TextRegular)`
  text-align: center;
  margin-bottom: 15px;
  font-family: ${FontCeraPro.Medium};
`;

const StyledButtonCounter = styled(ButtonCounter)`
  margin-top: 10px;
  width: 120px;
`;
