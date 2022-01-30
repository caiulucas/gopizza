import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ContainerProps {
  type?: 'primary' | 'secondary';
  width?: number | undefined;
}

export const Container = styled(RectButton)<ContainerProps>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: 56px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.COLORS.PRIMARY_800 : theme.COLORS.SUCCESS_900};
  border-radius: 12px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BUTTON};
  font-size: ${RFValue(14)}px
  color: ${({ theme }) => theme.COLORS.TITLE};
`;
