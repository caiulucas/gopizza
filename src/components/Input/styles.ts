import { RFValue } from 'react-native-responsive-fontsize';
import { ColorValue, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

interface InputProps extends TextInputProps {
  type?: 'primary' | 'secondary';
  last?: boolean;
}

export const Container = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.SHAPE as ColorValue,
}))<InputProps>`
  width: 100%;
  height: 56px;
  padding: 0 20px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.SHAPE};

  border-width: 1px;
  border-radius: 12px;
  border-color: ${({ theme, type }) =>
    type === 'primary' ? theme.COLORS.BORDER : theme.COLORS.PRIMARY_100};
  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.COLORS.TITLE : 'transparent'};

  margin-bottom: ${({ last }) => (last ? 0 : 16)}px;
`;
