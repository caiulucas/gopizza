import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  padding-top: ${Number(StatusBar.currentHeight) + 30}px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-left: 24px;
  margin-right: 20px;
`;

export const WelcomeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  margin-left: 12px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const LogoutButton = styled(BorderlessButton)``;

export const SearchContainer = styled.View`
  flex-direction: row;
  margin: 0px 22px;
  position: relative;
  top: 24px;
`;

export const InputArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.TITLE};
  border-radius: 16px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 48px;
  padding: 0 16px;
`;

export const ClearButton = styled.TouchableOpacity`
  margin-right: 6px;
`;

export const SearchButton = styled(RectButton)`
  margin-left: 8px;
  width: 48px;
  height: 48px;
  border-radius: 12px

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.SUCCESS_900};
`;
