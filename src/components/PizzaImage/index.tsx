import React from 'react';
import { ViewProps } from 'react-native';

import { Container, Image, Text } from './styles';

interface PizzaImageProps extends ViewProps {
  uri?: string | undefined;
  height?: number;
}

export const PizzaImage: React.FC<PizzaImageProps> = ({ uri, height }) => {
  return (
    <Container height={height}>
      {uri ? (
        <Image height={height} source={{ uri }} />
      ) : (
        <Text>Nenhuma imagem{'\n'}carregada</Text>
      )}
    </Container>
  );
};

PizzaImage.defaultProps = {
  uri: undefined,
  height: 104,
};
