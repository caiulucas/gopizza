import React from 'react';

import PathSvg from '@assets/path.svg';

import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Content,
  TitleContainer,
  Title,
  Description,
} from './styles';
import { PizzaImage } from '../PizzaImage';

export type Pizza = {
  id: string;
  name: string;
  description: string;
  photo_url: string;
};

interface PizzaCardProps extends TouchableOpacityProps {
  data: Pizza;
}

export const PizzaCard: React.FC<PizzaCardProps> = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      <PizzaImage uri={data.photo_url} />
      <Content>
        <TitleContainer>
          <Title>{data.name}</Title>
          <PathSvg height={RFValue(8)} />
        </TitleContainer>
        <Description>{data.description}</Description>
      </Content>
    </Container>
  );
};
