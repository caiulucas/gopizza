import React, { useCallback, useState } from 'react';
import auth from '@react-native-firebase/auth';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import PizzaImg from '@assets/pizzaSignIn.png';
import { useTheme } from 'styled-components';
import { Alert } from 'react-native';
import {
  Container,
  Content,
  Image,
  Title,
  ForgotPasswordTouchable,
  ForgotPasswordText,
  ForgotPassword,
} from './styles';

type AuthError = {
  message: string;
  code: string;
};

export const SignIn: React.FC = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = useCallback(async () => {
    if (!email || !password)
      return Alert.alert(
        'Preencha os campos de texto!',
        'Você precisa preencher os campos de email e senha para continuar.',
      );

    try {
      setLoading(true);
      return await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      const authError = error as AuthError;

      if (
        authError.code === 'auth/user-not-found' ||
        authError.code === 'auth/wrong-password'
      ) {
        return Alert.alert(
          'E-mail ou senha inválidos!',
          'Por favor, verifique seus dados de acesso.',
        );
      }
      return Alert.alert('Error!', authError.message);
    } finally {
      setLoading(false);
    }
  }, [email, password]);

  return (
    <Container colors={[theme.COLORS.PRIMARY_800, theme.COLORS.PRIMARY_900]}>
      <Content>
        <Image source={PizzaImg} resizeMode="stretch" />

        <Title>Login</Title>

        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          last
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <ForgotPassword>
          <ForgotPasswordTouchable
            onPress={() => {
              handleSignIn();
            }}
          >
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPasswordTouchable>
        </ForgotPassword>
        <Button title="Entrar" loading={loading} onPress={handleSignIn} />
      </Content>
    </Container>
  );
};
