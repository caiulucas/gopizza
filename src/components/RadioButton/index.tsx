import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { Container, Radio, SelectedRadio, Title } from './styles';

interface RadioButtonProps extends TouchableOpacityProps {
  title: string;
  selected?: boolean;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  title,
  selected,
  ...rest
}) => {
  return (
    <Container selected={selected} {...rest}>
      <Radio selected={selected}>{selected && <SelectedRadio />}</Radio>
      <Title>{title}</Title>
    </Container>
  );
};

RadioButton.defaultProps = {
  selected: false,
};
