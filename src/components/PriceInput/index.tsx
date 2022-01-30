import React from 'react';
import { TextInputProps } from 'react-native';
import { Label } from '../Label';

import { Container, Size, InputContainer, Input } from './styles';

interface PriceInputProps extends TextInputProps {
  last?: boolean;
  size: 'P' | 'M' | 'G';
}

export const PriceInput: React.FC<PriceInputProps> = ({
  last,
  size,
  ...rest
}) => {
  return (
    <Container last={last}>
      <Size>
        <Label>{size}</Label>
      </Size>
      <InputContainer>
        <Label>R$</Label>
        <Input keyboardType="numeric" {...rest} />
      </InputContainer>
    </Container>
  );
};

PriceInput.defaultProps = {
  last: false,
};
