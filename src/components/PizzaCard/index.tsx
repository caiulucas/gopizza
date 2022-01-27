import React from 'react';

import PathSvg from '@assets/path.svg';

import { RFValue } from 'react-native-responsive-fontsize';
import {
  Container,
  PizzaImage,
  Content,
  TitleContainer,
  Title,
  Description,
} from './styles';

export const PizzaCard: React.FC = () => {
  return (
    <Container>
      <PizzaImage
        source={{
          uri: 'https://i.ibb.co/kS6dVkX/Adobe-Stock-227594488-1-1.png',
        }}
      />
      <Content>
        <TitleContainer>
          <Title>Margherita</Title>
          <PathSvg height={RFValue(8)} />
        </TitleContainer>
        <Description>
          Mussarela, manjericão fresco, parmesão e tomate.
        </Description>
      </Content>
    </Container>
  );
};
