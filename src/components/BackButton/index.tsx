import React from 'react';
import { useNavigation } from '@react-navigation/native';

import BackSvg from '@assets/back.svg';
import { Container } from './styles';

export const BackButton: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <Container onPress={goBack}>
      <BackSvg height={32} />
    </Container>
  );
};
