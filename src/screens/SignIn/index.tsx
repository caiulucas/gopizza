import React, { useState } from 'react';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import PizzaImg from '@assets/pizzaSignIn.png';
import { useTheme } from 'styled-components';

import { useAuth } from '@hooks/auth';
import {
  Container,
  Content,
  Image,
  Title,
  ForgotPasswordTouchable,
  ForgotPasswordText,
  ForgotPassword,
} from './styles';

export const SignIn: React.FC = () => {
  const theme = useTheme();
  const { signIn, forgotPassword, isLogging } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container colors={[theme.COLORS.PRIMARY_800, theme.COLORS.PRIMARY_900]}>
      <Content>
        <Image source={PizzaImg} resizeMode="stretch" />

        <Title>Login</Title>

        <Input
          type="secondary"
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          type="secondary"
          last
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <ForgotPassword>
          <ForgotPasswordTouchable onPress={() => forgotPassword(email)}>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPasswordTouchable>
        </ForgotPassword>
        <Button
          title="Entrar"
          loading={isLogging}
          onPress={() => signIn(email, password)}
        />
      </Content>
    </Container>
  );
};
