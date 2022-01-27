import { RFValue } from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient)`
  flex: 1;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_800};
`;

export const Content = styled.View`
  padding: 0 32px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 364px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};

  margin-top: 10px;
  margin-bottom: 24px;
`;

export const ForgotPassword = styled.View`
  margin: 20px 0;
  width: 100%;
  align-items: flex-end;
`;

export const ForgotPasswordTouchable = styled.TouchableOpacity``;

export const ForgotPasswordText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
`;
