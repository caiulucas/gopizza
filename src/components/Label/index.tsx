import React from 'react';
import { TextProps } from 'react-native';

import { Container } from './styles';

interface LabelProps extends TextProps {
  small?: boolean;
}

export const Label: React.FC<LabelProps> = ({ children, small, ...rest }) => {
  return (
    <Container small={small} {...rest}>
      {children}
    </Container>
  );
};

Label.defaultProps = {
  small: false,
};
