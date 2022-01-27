import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import { SignIn } from '@screens/SignIn';
import { AppRoutes } from './app.routes';

export const Routes: React.FC = () => {
  const [user, setUser] = useState<{ uid: string } | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(authUser => {
      setUser(authUser);
    });

    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  );
};
