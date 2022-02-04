import React, { useCallback, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import { SearchHeader } from '@components/SearchHeader';
import { PizzaCard, Pizza } from '@components/PizzaCard';

import { Alert, FlatList } from 'react-native';
import { Button } from '@components/Button';
import { useAuth } from '@hooks/auth';
import {
  Container,
  Content,
  MenuInfo,
  Title,
  PizzaCounter,
  NewPizzaButtonArea,
} from './styles';

export const Menu: React.FC = () => {
  const { navigate } = useNavigation();
  const { user } = useAuth();

  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [search, setSearch] = useState('');

  const loadPizzas = useCallback(async (value: string) => {
    const formattedValue = value.trim().toLocaleLowerCase();
    try {
      const response = await firestore()
        .collection('pizzas')
        .orderBy('name_insensitive')
        .startAt(formattedValue)
        .endAt(`${formattedValue}\uf8ff`)
        .get();

      const data = response.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Pizza[];

      setPizzas(data);
    } catch (error) {
      Alert.alert('Erro na busca', 'Não foi possível realizar busca de pizzas');
    }
  }, []);

  const handleNavigation = useCallback(
    (id: string) => {
      if (user?.isAdmin) return navigate('pizzaRegister', { id });
      return navigate('pizza', { id });
    },
    [navigate, user?.isAdmin],
  );

  useFocusEffect(() => {
    loadPizzas('');
  });

  const handleSearch = useCallback(() => {
    loadPizzas(search);
  }, [loadPizzas, search]);

  const handleClear = useCallback(() => {
    setSearch('');
    loadPizzas('');
  }, [loadPizzas]);

  return (
    <Container>
      <SearchHeader
        value={search}
        onChangeText={setSearch}
        onSearch={handleSearch}
        onClear={handleClear}
      />

      <Content>
        <MenuInfo>
          <Title>Cardápio</Title>
          <PizzaCounter>{pizzas.length} pizzas</PizzaCounter>
        </MenuInfo>
      </Content>
      <FlatList
        data={pizzas}
        keyExtractor={({ id }) => id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 8,
          paddingBottom: 125,
          paddingHorizontal: 24,
        }}
        renderItem={({ item }) => (
          <PizzaCard data={item} onPress={() => handleNavigation(item.id)} />
        )}
      />

      {user?.isAdmin && (
        <NewPizzaButtonArea>
          <Button
            title="Cadastrar pizza"
            onPress={() => navigate('pizzaRegister', {})}
          />
        </NewPizzaButtonArea>
      )}
    </Container>
  );
};
