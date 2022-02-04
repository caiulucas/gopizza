import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Menu } from '@screens/Menu';
import { PizzaRegister } from '@screens/admin/PizzaRegister';
import { PizzaDetail } from '@screens/waiter/PizzaDetail';

import { useAuth } from '@hooks/auth';

import { UserTabRoutes } from './user.tab.routes';

const { Navigator, Screen, Group } = createNativeStackNavigator();

export const UserStackRoutes: React.FC = () => {
  const { user } = useAuth();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user?.isAdmin ? (
        <Group>
          <Screen name="menu" component={Menu} />
          <Screen name="pizzaRegister" component={PizzaRegister} />
        </Group>
      ) : (
        <Group>
          <Screen name="UserTabRoutes" component={UserTabRoutes} />
          <Screen name="pizza" component={PizzaDetail} />
        </Group>
      )}
    </Navigator>
  );
};
