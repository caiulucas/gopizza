import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';

interface InputProps extends TextInputProps {
  type?: 'primary' | 'secondary';
  last?: boolean;
}

const Input: React.FC<InputProps> = ({ type, last, ...rest }) => {
  return <Container type={type} last={last} {...rest} />;
};

Input.defaultProps = {
  type: 'primary',
  last: false,
};

export { Input };
