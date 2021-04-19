import React from 'react';
import styled from 'styled-components/native';
import { CenteredRowFlex } from '../../typograhpy/flex';
import { IconSize } from '../../models/icon-size';

interface IconWrapperProps {
  icon: React.ComponentType<
    { name: string; size: number; color: string } & any
  >;
  color: string;
  name: string;
  size: IconSize;
  iconSize?: number;
}

export function IconWrapper(props: IconWrapperProps) {
  return (
    <IconWrapperComponent size={props.size}>
      <props.icon
        color={props.color}
        name={props.name}
        size={props.iconSize || props.size}
      />
    </IconWrapperComponent>
  );
}

const IconWrapperComponent = styled(CenteredRowFlex)<{
  size: IconSize;
}>`
  overflow: hidden;
  height: ${p => p.size}px;
  width: ${p => p.size}px;
`;