import React, { useCallback, useEffect, useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import { Button } from '@components/Button';
import { BackButton } from '@components/BackButton';
import { Label } from '@components/Label';
import { PizzaImage } from '@components/PizzaImage';
import { RadioButton } from '@components/RadioButton';

import { useAuth } from '@hooks/auth';

import { PIZZA_TYPES } from '../../../utils/pizzaTypes';

import { PizzaNavigationProps } from '../../../@types/navigation';
import {
  Container,
  Content,
  Form,
  Sizes,
  Header,
  Input,
  InputContainer,
  PizzaImageContainer,
  Title,
} from './styles';

type PizzaResponse = {
  name: string;
  photo_url: string;
  prices_sizes: {
    [key: string]: string;
  };
};

export const PizzaDetail: React.FC = () => {
  const theme = useTheme();
  const { user } = useAuth();
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const { id } = params as PizzaNavigationProps;

  const [pizza, setPizza] = useState<PizzaResponse>({} as PizzaResponse);
  const [loading, setLoading] = useState(false);

  const [size, setSize] = useState('');
  const [table, setTable] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const amount =
    size && quantity > 0
      ? Number(pizza.prices_sizes[size].replace(',', '.')) * quantity
      : 0;

  const amountString = String(amount.toFixed(2)).replace('.', ',');

  useEffect(() => {
    async function loadPizza() {
      const response = await firestore().collection('pizzas').doc(id).get();

      const pizzaResponse = response.data() as PizzaResponse;
      setPizza(pizzaResponse);
    }

    loadPizza();
  }, [id]);

  const handleAdd = useCallback(async () => {
    if (!size) return Alert.alert('Pedido', 'Informe o tamanho da pizza.');
    if (table <= 0) return Alert.alert('Pedido', 'Informe o número da mesa.');
    if (quantity <= 0) return Alert.alert('Pedido', 'Informe a quantidade.');

    setLoading(true);

    try {
      await firestore().collection('orders').add({
        pizza: pizza.name,
        image: pizza.photo_url,
        waiter_id: user?.id,
        size,
        table,
        quantity,
        amount,
        status: 'preparing',
      });

      return navigate('menu');
    } catch (error) {
      setLoading(false);
      return Alert.alert(
        'Falha ao cadastrar',
        'Não foi possível realizar o cadastro da pizza.',
      );
    }
  }, [
    size,
    table,
    quantity,
    pizza.name,
    pizza.photo_url,
    user?.id,
    amount,
    navigate,
  ]);

  return (
    <Container behavior="position">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header colors={theme.COLORS.GRADIENT}>
          <BackButton />

          <PizzaImageContainer>
            <PizzaImage height={240} uri={pizza.photo_url} />
          </PizzaImageContainer>
        </Header>

        <Content>
          <Title>{pizza.name}</Title>

          <Label>Selecione um tamanho</Label>
          <Sizes>
            {PIZZA_TYPES.map(item => (
              <RadioButton
                key={item.id}
                title={item.name}
                onPress={() => setSize(item.id)}
                selected={size === item.id}
              />
            ))}
          </Sizes>
          <Form>
            <InputContainer>
              <Label>Número da mesa</Label>
              <Input
                keyboardType="numeric"
                onChangeText={value => setTable(Number(value))}
              />
            </InputContainer>
            <InputContainer style={{ marginLeft: 15 }}>
              <Label>Quantidade</Label>
              <Input
                keyboardType="numeric"
                onChangeText={value => setQuantity(Number(value))}
              />
            </InputContainer>
          </Form>

          <Label style={{ textAlign: 'right', marginBottom: 24 }}>
            Total: R$ {amountString}
          </Label>

          <Button
            title="Confirmar Pedido"
            type="secondary"
            loading={loading}
            onPress={handleAdd}
          />
        </Content>
      </ScrollView>
    </Container>
  );
};
