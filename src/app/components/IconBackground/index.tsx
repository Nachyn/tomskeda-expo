import React from 'react';
import { IconSize } from '../../models/icon-size';
import styled from 'styled-components/native';
import { RowFlex } from '../../typograhpy/flex';

interface IconBackgroundProps {
  size: IconSize;
  url: string;
}

export function IconBackground(props: IconBackgroundProps) {
  return <IconBackgroundComponent size={props.size} url={props.url} />;
}

const IconBackgroundComponent = styled(RowFlex)<{
  size: IconSize;
  url: string;
}>`
  height: ${p => `${p.size}px`};
  width: ${p => `${p.size}px`};
  background-image: url(${p => p.url});
`;
