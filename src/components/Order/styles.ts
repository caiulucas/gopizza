import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface StatusProps {
  status: 'ready' | 'preparing' | 'delivered';
}

const statusCss = {
  ready: css`
    border-color: ${({ theme }) => theme.COLORS.SUCCESS_900};
    background-color: ${({ theme }) => theme.COLORS.SUCCESS_900};
  `,
  preparing: css`
    border-color: ${({ theme }) => theme.COLORS.ALERT_800};
    background-color: ${({ theme }) => theme.COLORS.ALERT_50};
  `,
  delivered: css`
    border-color: ${({ theme }) => theme.COLORS.SECONDARY_900};
    background-color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  `,
};

export const Container = styled.View`
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.SHAPE};
  padding: 24px 0;
`;

export const Title = styled.Text`
  margin-top: 20px;
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
`;

export const Description = styled.Text`
  margin-top: 12px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.SECONDARY_500};
`;

export const Status = styled.View<StatusProps>`
  height: 28px;
  margin-top: 16px;
  padding: 0 16px;
  border-radius: 12px;
  border-width: 1px;

  justify-content: center;
  align-items: center;
  ${({ status }) => statusCss[status]}
`;

export const StatusText = styled.Text<StatusProps>`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.FONTS.BUTTON};
  color: ${({ theme, status }) =>
    status !== 'preparing' ? theme.COLORS.TITLE : theme.COLORS.ALERT_800};
`;
