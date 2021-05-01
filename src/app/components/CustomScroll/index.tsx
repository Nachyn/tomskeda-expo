import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

interface CustomScrollProps {
  children: React.ReactNode;
}

export default function (props: CustomScrollProps) {
  return <CustomScroll>{props.children}</CustomScroll>;
}

const CustomScroll = styled(ScrollView).attrs({
  horizontal: true,
  contentContainerStyle: { flexGrow: 1, justifyContent: 'center' }
})`
  width: 100%;
`;
