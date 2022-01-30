import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ContainerProps {
  last?: boolean;
}

export const Container = styled.View<ContainerProps>`
  height: 56px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BORDER};
  border-radius: 12px;

  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.TITLE};
  margin-bottom: ${({ last }) => (last ? 0 : 8)}px;
`;

export const Size = styled.View`
  height: 56px;
  width: 56px;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.COLORS.BORDER};
`;

export const InputContainer = styled.View`
  margin-left: 18px;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 56px;
  padding: 0 16px 0 3px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(14)}px;
`;
