import React from 'react';
import { useTheme } from 'styled-components';

import { Order } from '@components/Order';

import { Container, Header, HeaderTitle, Content } from './styles';

export const OrderList: React.FC = () => {
  const theme = useTheme();
  return (
    <Container>
      <Header colors={theme.COLORS.GRADIENT}>
        <HeaderTitle>Pedidos feitos</HeaderTitle>
      </Header>
      <Content>
        <Order status="preparing" />
      </Content>
    </Container>
  );
};
