import React from 'react';
import styled from 'styled-components/native';
import {
  CenteredColumnFlex,
  CenteredRowFlex
} from '../../../../typograhpy/flex';
import { mainBlack, mainGray, mainWhite } from '../../../../themes/colors';
import { ImageBackground } from 'react-native';
import { TextRegular } from '../../../../typograhpy/text';
import { FontCeraPro } from '../../../../fonts/CeraPro';
import { ButtonCounter } from '../../../../components/ButtonCounter';
import { AntDesign } from '@expo/vector-icons';
import { IconWrapper } from '../../../../components/IconWrapper';
import { IconSize } from '../../../../models/icon-size';
import { numberWithSpaces } from '../../../../helpers/number-helpers';
import { Food } from '../../../../../store/foodSelection/models/food';
import * as fsActions from '../../../../../store/foodSelection/actions';
import { useDispatch } from 'react-redux';

interface FSFoodProps {
  food: Food;
}

export function FSFood(props: FSFoodProps) {
  const dispatch = useDispatch();

  return (
    <FSFoodComponent>
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
        <Sum>
          <TextRegular>{`${numberWithSpaces(props.food.price)} ₽`}</TextRegular>
        </Sum>
      </Image>
      <StyledButtonCounter
        onIncrease={() => {
          dispatch(fsActions.increaseFoodQuantity({ foodId: props.food.id }));
        }}
        onDecrease={() =>
          dispatch(fsActions.decreaseFoodQuantity({ foodId: props.food.id }))
        }
        score={props.food.quantity}
      />
    </FSFoodComponent>
  );
}

const FSFoodComponent = styled(CenteredColumnFlex)`
  padding: 5px;
  width: 200px;

  border-radius: 10px;
  margin-bottom: 20px;
  align-self: flex-end;
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
  border-radius: 20px;
`;

const Name = styled(TextRegular)`
  text-align: center;
  margin-bottom: 20px;
  font-family: ${FontCeraPro.Bold};
`;

const StyledButtonCounter = styled(ButtonCounter)`
  margin-top: 10px;
  width: 120px;
`;