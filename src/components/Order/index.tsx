import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { PizzaImage } from '../PizzaImage';

import { Container, Title, Description, Status, StatusText } from './styles';

export type OrderResponse = {
  id: string;
  status: 'ready' | 'preparing' | 'delivered';
  pizza: string;
  image: string;
  table: number;
  quantity: number;
};

interface OrderProps extends TouchableOpacityProps {
  index: number;
  order: OrderResponse;
}

const statusText = {
  ready: 'Pronto',
  preparing: 'Preparando',
  delivered: 'Entregue',
};

export const Order: React.FC<OrderProps> = ({ order, index, ...rest }) => {
  return (
    <Container index={index} {...rest} disabled={order.status === 'delivered'}>
      <PizzaImage uri={order.image} />

      <Title>{order.pizza}</Title>
      <Description>
        Mesa {order.table} • Qnt: {order.quantity}
      </Description>
      <Status status={order.status}>
        <StatusText status={order.status}>
          {statusText[order.status]}
        </StatusText>
      </Status>
    </Container>
  );
};
