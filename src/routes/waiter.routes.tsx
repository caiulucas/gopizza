import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Menu } from '@screens/waiter/Menu';
import { PizzaDetail } from '@screens/waiter/PizzaDetail';

const { Navigator, Screen } = createNativeStackNavigator();

export const WaiterRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Menu" component={Menu} />
      <Screen name="PizzaDetail" component={PizzaDetail} />
    </Navigator>
  );
};
