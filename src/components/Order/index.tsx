import React from 'react';

import {
  Container,
  PizzaImage,
  Title,
  Description,
  Status,
  StatusText,
} from './styles';

interface OrderProps {
  status: 'ready' | 'preparing' | 'delivered';
}

const statusText = {
  ready: 'Pronto',
  preparing: 'Preparando',
  delivered: 'Entregue',
};

export const Order: React.FC<OrderProps> = ({ status }) => {
  return (
    <Container>
      <PizzaImage
        source={{
          uri: 'https://i.ibb.co/kS6dVkX/Adobe-Stock-227594488-1-1.png',
        }}
      />

      <Title>Margherita</Title>
      <Description>Mesa 01 • Qnt: 1</Description>
      <Status status={status}>
        <StatusText status={status}>{statusText[status]}</StatusText>
      </Status>
    </Container>
  );
};
