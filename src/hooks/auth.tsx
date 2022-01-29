import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Alert, AlertStatic } from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
  id: string;
  name: string;
  isAdmin: boolean;
};

type AuthContextData = {
  user: User | null;
  isLogging: boolean;
  signIn: (email: string, password: string) => Promise<string | void>;
  signOut: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
};

type AuthError = {
  message: string;
  code: string;
};

const USER_COLLECTION = '@gopizza:user';

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [isLogging, setIsLogging] = useState(false);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadUser() {
      setIsLogging(true);
      const storedUser = await AsyncStorage.getItem(USER_COLLECTION);

      if (storedUser) {
        const userData = JSON.parse(storedUser) as User;
        setUser(userData);
      }
      setIsLogging(false);
    }

    loadUser();
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    if (!email || !password)
      return Alert.alert(
        'Preencha os campos de texto!',
        'Você precisa preencher os campos de email e senha para continuar.',
      );

    setIsLogging(true);
    try {
      const { user: authUser } = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const profile = await firestore()
        .collection('users')
        .doc(authUser.uid)
        .get();
      const { name, isAdmin } = profile.data() as User;

      if (profile.exists) {
        const userData = { id: authUser.uid, name, isAdmin };

        await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(userData));
        setUser(userData);
      }
      return email;
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
      setIsLogging(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    await auth().signOut();
    await AsyncStorage.removeItem(USER_COLLECTION);
    setUser(null);
  }, []);

  const forgotPassword = useCallback(async (email: string) => {
    if (!email)
      return Alert.alert('Redefinir senha', 'Por favor, informe um email');

    try {
      await auth().sendPasswordResetEmail(email);
      return Alert.alert(
        'Redefinir senha',
        'Enviamos um link no seu e-mail para redefinir sua senha',
      );
    } catch (error) {
      return Alert.alert(
        'Redefinir senha',
        'Não foi possível enviar o e-mail para redefinição de senha',
      );
    }
  }, []);

  const values = useMemo(
    () => ({ user, isLogging, signIn, signOut, forgotPassword }),
    [user, isLogging, signIn, signOut, forgotPassword],
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
