import { RFValue } from 'react-native-responsive-fontsize';
import { ColorValue, TextInputProps } from 'react-native';
import styled, { css } from 'styled-components/native';

interface InputProps extends TextInputProps {
  type?: 'primary' | 'secondary';
  last?: boolean;
}

const cssScheme = {
  primary: css`
    color: ${({ theme }) => theme.COLORS.SECONDARY_900};
    border-color: ${({ theme }) => theme.COLORS.BORDER};
    background-color: ${({ theme }) => theme.COLORS.TITLE};
  `,
  secondary: css`
    color: ${({ theme }) => theme.COLORS.TITLE};
    border-color: ${({ theme }) => theme.COLORS.PRIMARY_100};
  `,
};

export const Container = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.SHAPE as ColorValue,
}))<InputProps>`
  width: 100%;
  height: 56px;
  padding: 0 20px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(14)}px;

  border-width: 1px;
  border-radius: 12px;
  ${({ type }) => type && cssScheme[type]}

  margin-bottom: ${({ last }) => (last ? 0 : 16)}px;
`;
