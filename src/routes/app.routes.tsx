import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

import { OrderList } from '@screens/waiter/OrderList';
import { WaiterRoutes } from './waiter.routes';

const { Navigator, Screen } = createBottomTabNavigator();

export const AppRoutes: React.FC = () => {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarIconStyle: { display: 'none' },
        tabBarStyle: {
          height: 80,
          backgroundColor: theme.COLORS.TITLE,
        },
        tabBarLabelStyle: {
          fontFamily: theme.FONTS.TITLE,
          fontSize: RFValue(18),
          color: theme.COLORS.SECONDARY_900,
        },
      }}
    >
      <Screen name="Cardápio" component={WaiterRoutes} />
      <Screen name="Pedidos" component={OrderList} />
    </Navigator>
  );
};
