import React from 'react';

import { Button } from '@components/Button';
import { BackButton } from '@components/BackButton';

import { useTheme } from 'styled-components';
import {
  Container,
  Content,
  Form,
  Header,
  Input,
  InputContainer,
  Label,
  PizzaImage,
  Title,
} from './styles';

export const PizzaDetail: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <Header colors={theme.COLORS.GRADIENT}>
        <BackButton />

        <PizzaImage
          source={{
            uri: 'https://i.ibb.co/kS6dVkX/Adobe-Stock-227594488-1-1.png',
          }}
        />
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
        <Button title="Confirmar Pedido" color={theme.COLORS.SUCCESS_900} />
      </Content>
    </Container>
  );
};
