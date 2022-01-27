import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View``;

export const Header = styled(LinearGradient)``;

export const HeaderTitle = styled.Text`
  margin: 64px 0 32px;
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.TITLE};

  text-align: center;
`;

export const Content = styled.View`
  padding: 0 20px;
`;
