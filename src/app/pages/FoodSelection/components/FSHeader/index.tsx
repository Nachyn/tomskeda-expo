import React from 'react';
import styled from 'styled-components/native';
import {
  CenteredRowFlex,
  ColumnFlex,
  SpaceBetweenRowFlex
} from '../../../../typograhpy/flex';
import { Header, Hint, TextRegular } from '../../../../typograhpy/text';
import {
  FSHOrderTimeColor,
  mainOrange,
  mainWhite
} from '../../../../themes/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { IconWrapper } from '../../../../components/IconWrapper';
import { IconSize } from '../../../../models/icon-size';
import { Media, useIsMini } from '../../../../../styles/media';

export function FSHeader() {
  const isMini = useIsMini();

  return (
    <FSHeaderComponent isMini={isMini}>
      <Info>
        <Header>Домашняя кухня tomskeda.ru</Header>
        <OrderTime>Заказы ежедневно с 9:00 до 20:00</OrderTime>
      </Info>
      <Basket>
        <IconWrapper
          icon={MaterialCommunityIcons}
          color={mainWhite}
          name={'shopping-outline'}
          size={IconSize.s16x16}
        />
        <BasketCount>10</BasketCount>
      </Basket>
    </FSHeaderComponent>
  );
}

const FSHeaderComponent = styled(SpaceBetweenRowFlex)<Media>`
  width: 320px;
  margin-top: 20px;

  ${p =>
    p.isMini &&
    `
    width: 300px;
  `}
`;

const Info = styled(ColumnFlex)`
  width: 220px;
`;

const OrderTime = styled(Hint)`
  color: ${FSHOrderTimeColor};
  margin-top: 6px;
`;

const Basket = styled(CenteredRowFlex)`
  margin-top: 10px;
  align-self: flex-start;
  padding: 15px;
  border-radius: 16px;
  background: ${mainOrange};
`;

const BasketCount = styled(TextRegular)`
  color: ${mainWhite};
  margin-left: 8px;
`;