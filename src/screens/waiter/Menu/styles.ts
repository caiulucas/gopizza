import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Content = styled.View`
  margin: 48px 24px 0;
`;

export const MenuInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 22px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
`;

export const PizzaCounter = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
`;

export const PizzaList = styled.ScrollView``;
