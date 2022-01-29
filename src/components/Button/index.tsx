import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { ButtonText, Container } from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
  loading?: boolean;
  color?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  loading,
  color,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <Container color={color} enabled={!loading} {...rest}>
      {loading ? (
        <ActivityIndicator color={theme.COLORS.PRIMARY_50} />
      ) : (
        <ButtonText>{title}</ButtonText>
      )}
    </Container>
  );
};

Button.defaultProps = {
  loading: false,
  color: 'default',
};
