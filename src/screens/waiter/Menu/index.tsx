import React from 'react';
import { Header } from '@components/Header';
import { PizzaCard } from '@components/PizzaCard';

import {
  Container,
  Content,
  MenuInfo,
  Title,
  PizzaCounter,
  PizzaList,
} from './styles';

export const Menu: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <MenuInfo>
          <Title>Cardápio</Title>
          <PizzaCounter>32 pizzas</PizzaCounter>
        </MenuInfo>

        <PizzaList>
          <PizzaCard />
          <PizzaCard />
        </PizzaList>
      </Content>
    </Container>
  );
};
