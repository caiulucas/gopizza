import React from 'react';
import { Header } from '@components/Header';
import { PizzaCard } from '@components/PizzaCard';

import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Content,
  MenuInfo,
  Title,
  PizzaCounter,
  PizzaList,
} from './styles';

export const Menu: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Header />

      <Content>
        <MenuInfo>
          <Title>Cardápio</Title>
          <PizzaCounter>32 pizzas</PizzaCounter>
        </MenuInfo>

        <PizzaList>
          <PizzaCard onPress={() => navigate('PizzaDetail' as never)} />
          <PizzaCard onPress={() => navigate('PizzaRegister' as never)} />
        </PizzaList>
      </Content>
    </Container>
  );
};
