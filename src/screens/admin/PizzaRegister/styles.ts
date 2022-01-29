import { Label as LabelComponent } from '@components/Label';
import { RFValue } from 'react-native-responsive-fontsize';
import { StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const Header = styled(LinearGradient)`
  padding-top: ${Number(StatusBar.currentHeight) + 25}px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 0 24px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const DeleteButton = styled.TouchableOpacity``;

export const DeleteButtonText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const Content = styled.View`
  padding: 0 24px;
`;

export const LabelContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled(LabelComponent)`
  margin-bottom: 12px;
`;
