import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { SignIn } from '@screens/SignIn';

import { useAuth } from '@hooks/auth';
import { UserStackRoutes } from './user.stack.routes';

export const Routes: React.FC = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <UserStackRoutes /> : <SignIn />}
    </NavigationContainer>
  );
};
