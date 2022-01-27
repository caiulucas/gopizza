import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const PizzaImage = styled.Image`
  height: 104px;
  width: 104px;
  border-radius: 52px;
  margin: 12px 0;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  padding: 30px 0;
  margin-left: 20px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
`;

export const Description = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.SECONDARY_500};
  margin-top: 8px;
`;
