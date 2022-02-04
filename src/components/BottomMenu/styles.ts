import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface TitleProps {
  color: string;
}

interface NotificationProps {
  hasNotification: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text<TitleProps>`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ color }) => color};
`;

export const Notification = styled.View<NotificationProps>`
  height: 20px;
  border-radius: 10px;
  padding: 0 12px;
  margin-left: 8px;
  align-items: center;
  justify-content: center;
  border-color: ${({ theme }) => theme.COLORS.SHAPE};
  border-width: ${({ hasNotification }) => (hasNotification ? 0 : 1)}px;
  background-color: ${({ theme, hasNotification }) =>
    hasNotification ? theme.COLORS.SUCCESS_900 : 'transparent'};
`;

export const Quantity = styled.Text<NotificationProps>`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.FONTS.BUTTON};
  color: ${({ theme, hasNotification }) =>
    hasNotification ? theme.COLORS.TITLE : theme.COLORS.SECONDARY_500};
`;
