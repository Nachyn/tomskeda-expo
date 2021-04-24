import React from 'react';
import styled from 'styled-components/native';
import { ColumnFlex } from '../../typograhpy/flex';
import { sizes } from '../../../styles/media';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  return <LayoutComponent>{props.children}</LayoutComponent>;
}

const LayoutComponent = styled(ColumnFlex)`
  width: 100%;
  height: 100%;
  max-width: ${sizes.desktop}px;
  align-self: center;
`;