import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ContainerProps {
  small?: boolean;
}

export const Container = styled.Text<ContainerProps>`
  font-size: ${({ small }) => RFValue(small ? 10 : 14)}px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
`;
