import React from 'react';
import styled from 'styled-components/native';
import {CenteredColumnFlex, CenteredRowFlex} from '../../typograhpy/flex';
import { IconWrapper } from '../IconWrapper';
import { Entypo } from '@expo/vector-icons';
import { mainBlack } from '../../themes/colors';
import { Header } from '../../typograhpy/text';

export function InDevelop() {
  return (
    <InDevelopComponent>
      <IconWrapper icon={Entypo} color={mainBlack} name={'tools'} size={64} />
      <Info>В разработке...</Info>
    </InDevelopComponent>
  );
}

const InDevelopComponent = styled(CenteredColumnFlex)`
  height: 100%;
`;

const Info = styled(Header)`
  margin-top: 10px;
`;