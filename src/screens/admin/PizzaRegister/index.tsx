import React from 'react';
import { useTheme } from 'styled-components';

import { Input } from '@components/Input';
import { BackButton } from '@components/BackButton';

import {
  Container,
  Header,
  HeaderContent,
  HeaderTitle,
  DeleteButton,
  DeleteButtonText,
  Content,
  LabelContainer,
  Label,
} from './styles';

export const PizzaRegister: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <Header colors={theme.COLORS.GRADIENT}>
        <HeaderContent>
          <BackButton />
          <HeaderTitle>Cadastrar</HeaderTitle>
          <DeleteButton>
            <DeleteButtonText>Deletar</DeleteButtonText>
          </DeleteButton>
        </HeaderContent>
      </Header>

      <Content>
        <Label>Nome</Label>
        <Input />

        <LabelContainer>
          <Label>Descrição</Label>
          <Label small>Max 60 caracteres</Label>
        </LabelContainer>
        <Input />
      </Content>
    </Container>
  );
};
