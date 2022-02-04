import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface RadioButtonProps {
  selected?: boolean;
}

export const Container = styled.TouchableOpacity<RadioButtonProps>`
  height: 82px;
  width: 104px;
  padding: 14px 16px 16px;

  background-color: ${({ theme, selected }) =>
    selected ? theme.COLORS.SUCCESS_50 : theme.COLORS.TITLE};
  border: 1px solid
    ${({ theme, selected }) =>
      selected ? theme.COLORS.SUCCESS_900 : theme.COLORS.SHAPE};
  border-radius: 8px;
`;

export const Radio = styled.View<RadioButtonProps>`
  width: 20px;
  height: 20px;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({ theme, selected }) =>
    selected ? theme.COLORS.SUCCESS_900 : theme.COLORS.SECONDARY_900};
`;

export const SelectedRadio = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.SUCCESS_900};
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
`;
