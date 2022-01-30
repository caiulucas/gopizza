import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { ButtonText, Container } from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
  width?: number | undefined;
  loading?: boolean;

  type?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  title,
  loading,
  type,
  width,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <Container width={width} type={type} enabled={!loading} {...rest}>
      {loading ? (
        <ActivityIndicator color={theme.COLORS.TITLE} />
      ) : (
        <ButtonText>{title}</ButtonText>
      )}
    </Container>
  );
};

Button.defaultProps = {
  loading: false,
  width: undefined,
  type: 'primary',
};
