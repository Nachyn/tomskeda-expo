import React from 'react';
import styled from 'styled-components/native';
import { CenteredRowFlex } from '../../../../typograhpy/flex';
import {
  mainBlack,
  mainGray,
  mainWhite,
  primaryColor
} from '../../../../themes/colors';
import { Hint } from '../../../../typograhpy/text';
import { dayOfWeekNames } from '../../../../consts/food-selection/food-selection-consts';
import { DayOfWeek } from '../../../../models/day-of-week';
import format from 'date-fns/format';
import { FontCeraPro } from '../../../../fonts/CeraPro';
import { isWeb } from '../../../../helpers/platform-helpers';
import * as fsActions from '../../../../../store/foodSelection/actions';
import { useDispatch } from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native';

interface FSDayOfWeekProps {
  date: Date;
  isSelected: boolean;
  isWithMargin: boolean;
}

export function FSDayOfWeek(props: FSDayOfWeekProps) {
  const dispatch = useDispatch();
  const dayOfWeekName = dayOfWeekNames[props.date.getDay() as DayOfWeek];

  return (
    <TouchableWithoutFeedback
      onPress={() => dispatch(fsActions.setSelectedDay(props.date))}
    >
      <FSDayOfWeekComponent
        isWithMargin={props.isWithMargin}
        isSelected={props.isSelected}
      >
        <DayText isSelected={props.isSelected}>
          {`${dayOfWeekName} ${format(props.date, 'dd/MM')}`}
        </DayText>
      </FSDayOfWeekComponent>
    </TouchableWithoutFeedback>
  );
}

const FSDayOfWeekComponent = styled(CenteredRowFlex)<{
  isWithMargin: boolean;
  isSelected: boolean;
}>`
  padding: 7px 10px;
  background: ${p => (p.isSelected ? primaryColor : mainGray)};
  border-radius: 10px;
  margin-right: ${p => (p.isWithMargin ? '10px' : '0')};

  ${isWeb() &&
  `
    cursor: pointer;
  `}
`;

const DayText = styled(Hint)<{
  isSelected: boolean;
}>`
  color: ${p => (p.isSelected ? mainWhite : mainBlack)};
  font-family: ${FontCeraPro.Medium};
`;