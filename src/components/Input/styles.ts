import { RFValue } from 'react-native-responsive-fontsize';
import { ColorValue, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

interface InputProps extends TextInputProps {
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
  border-color: ${({ theme }) => theme.COLORS.PRIMARY_100};

  margin-bottom: ${({ last }) => (last ? 0 : 20)}px;
`;
