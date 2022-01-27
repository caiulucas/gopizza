import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';

interface InputProps extends TextInputProps {
  last?: boolean;
}

const Input: React.FC<InputProps> = ({ last, ...rest }) => {
  return <Container last={last} {...rest} />;
};

Input.defaultProps = {
  last: false,
};

export { Input };
