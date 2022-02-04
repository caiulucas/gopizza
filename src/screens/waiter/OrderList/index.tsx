import React, { useCallback, useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { FlatList } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

import { Order, OrderResponse } from '@components/Order';
import { Separator } from '@components/Separator';

import { useAuth } from '@hooks/auth';
import { Alert } from 'react-native';
import { Container, Header, HeaderTitle } from './styles';

export const OrderList: React.FC = () => {
  const theme = useTheme();
  const { user } = useAuth();

  const [orders, setOrders] = useState<OrderResponse[]>([]);

  useEffect(() => {
    const subscribe = firestore()
      .collection('orders')
      .where('waiter_id', '==', user?.id)
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as OrderResponse[];

        setOrders(data);
      });

    return () => subscribe();
  }, [user?.id]);

  const handlePizzaDelivery = useCallback((id: string) => {
    Alert.alert('Pedido', 'Deseja confirmar a entrega da pizza?', [
      { text: 'Não', style: 'cancel' },
      {
        text: 'sim',
        onPress: () => {
          firestore().collection('orders').doc(id).update({
            status: 'delivered',
          });
        },
      },
    ]);
  }, []);

  return (
    <Container>
      <Header colors={theme.COLORS.GRADIENT}>
        <HeaderTitle>Pedidos feitos</HeaderTitle>
      </Header>
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 125 }}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item, index }) => (
          <Order
            index={index}
            order={item}
            onPress={() => handlePizzaDelivery(item.id)}
          />
        )}
      />
    </Container>
  );
};
