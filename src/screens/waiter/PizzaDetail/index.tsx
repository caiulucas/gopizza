import React from 'react';

import { Button } from '@components/Button';
import { BackButton } from '@components/BackButton';
import { Label } from '@components/Label';
import { PizzaImage } from '@components/PizzaImage';

import { useTheme } from 'styled-components';

import {
  Container,
  Content,
  Form,
  Header,
  Input,
  InputContainer,
  PizzaImageContainer,
  Title,
} from './styles';

export const PizzaDetail: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <Header colors={theme.COLORS.GRADIENT}>
        <BackButton />

        <PizzaImageContainer>
          <PizzaImage
            height={240}
            uri="https://i.ibb.co/kS6dVkX/Adobe-Stock-227594488-1-1.png"
          />
        </PizzaImageContainer>
      </Header>

      <Content>
        <Title>Margherita</Title>
        <Form>
          <InputContainer>
            <Label>Número da mesa</Label>
            <Input />
          </InputContainer>
          <InputContainer style={{ marginLeft: 15 }}>
            <Label>Quantidade</Label>
            <Input />
          </InputContainer>
        </Form>

        <Label style={{ textAlign: 'right', marginBottom: 24 }}>
          Total: R$ 10,00
        </Label>
        <Button title="Confirmar Pedido" type="secondary" />
      </Content>
    </Container>
  );
};
