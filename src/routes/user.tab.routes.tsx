import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import firestore from '@react-native-firebase/firestore';

import { useTheme } from 'styled-components';
import { OrderList } from '@screens/waiter/OrderList';
import { BottomMenu } from '@components/BottomMenu';

import { Menu } from '@screens/Menu';

const { Navigator, Screen } = createBottomTabNavigator();

export const UserTabRoutes: React.FC = () => {
  const { COLORS } = useTheme();

  const [notifications, setNotifications] = useState('0');

  useEffect(() => {
    const subscribe = firestore()
      .collection('orders')
      .where('status', '!=', 'delivered')
      .onSnapshot(querySnapshot =>
        setNotifications(String(querySnapshot.docs.length)),
      );

    return () => subscribe();
  }, []);

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.SECONDARY_900,
        tabBarInactiveTintColor: COLORS.SECONDARY_400,
        tabBarStyle: {
          height: 80,
          backgroundColor: COLORS.TITLE,
        },
      }}
    >
      <Screen
        name="menu"
        component={Menu}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomMenu title="Cardápio" color={color} />
          ),
        }}
      />
      <Screen
        name="orders"
        component={OrderList}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomMenu
              title="Pedidos"
              color={color}
              notifications={notifications}
            />
          ),
        }}
      />
    </Navigator>
  );
};
