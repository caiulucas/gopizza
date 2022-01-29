import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)<{ color: string | undefined }>`
  width: 100%;
  height: 56px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, color }) =>
    color !== 'default' && color ? color : theme.COLORS.PRIMARY_800};
  border-radius: 12px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BUTTON};
  font-size: ${RFValue(14)}px
  color: ${({ theme }) => theme.COLORS.TITLE};
`;
