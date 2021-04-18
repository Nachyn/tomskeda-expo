import styled from 'styled-components/native';

export const Flex = styled.View`
  display: flex;
`;

export const ColumnFlex = styled(Flex)`
  flex-direction: column;
`;

export const CenteredColumnFlex = styled(ColumnFlex)`
  justify-content: center;
  align-items: center;
`;

export const CenteredColumnFlexWithSpacing = styled(CenteredColumnFlex)<{
  spacing: string;
}>`
  > *:not(:last-child) {
    margin-bottom: ${(props) => props.spacing};
  }
`;

export const RowFlex = styled(Flex)`
  flex-direction: row;
`;

export const CenteredRowFlex = styled(RowFlex)`
  justify-content: center;
  align-items: center;
`;

export const CenteredRowFlexWithSpacing = styled(CenteredRowFlex)<{
  spacing: string;
}>`
  > *:not(:last-child) {
    margin-right: ${(props) => props.spacing};
  }
`;
