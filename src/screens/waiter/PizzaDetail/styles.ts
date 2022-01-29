import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View``;

export const Header = styled(LinearGradient)`
  padding: ${Number(StatusBar.currentHeight) + RFValue(25)}px 24px 0;
  height: ${RFValue(180)}px;
`;

export const PizzaImageContainer = styled.View`
  position: absolute;
  top: 84px;
  align-self: center;
`;

export const Content = styled.View`
  padding: 0 24px;
  margin-top: 144px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  text-align: center;
`;

export const Form = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 0 24px;
`;

export const InputContainer = styled.View`
  flex: 1;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.TITLE};
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.SHAPE};
  border-radius: 8px;
  text-align: center;
  margin-top: 16px;
`;
