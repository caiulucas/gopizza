import React, { useCallback, useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { useTheme } from 'styled-components';
import * as ImagePicker from 'expo-image-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Input } from '@components/Input';
import { BackButton } from '@components/BackButton';
import { PizzaImage } from '@components/PizzaImage';
import { Button } from '@components/Button';
import { PriceInput } from '@components/PriceInput';

import { PizzaNavigationProps } from '@src/@types/navigation';
import {
  Container,
  Header,
  HeaderContent,
  HeaderTitle,
  DeleteButton,
  DeleteButtonText,
  Content,
  LabelContainer,
  Label,
  ImageUploadContainer,
} from './styles';

type PizzaResponse = {
  id: string;
  name: string;
  description: string;
  prices_sizes: {
    s: string;
    m: string;
    l: string;
  };
  photo_url: string;
  photo_path: string;
};

export const PizzaRegister: React.FC = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const { id } = params as PizzaNavigationProps;

  const [imagePath, setImagePath] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priceSizeS, setPriceSizeS] = useState('');
  const [priceSizeM, setPriceSizeM] = useState('');
  const [priceSizeL, setPriceSizeL] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadPizza() {
      const response = await firestore().collection('pizzas').doc(id).get();

      const pizza = response.data() as PizzaResponse;
      setName(pizza.name);
      setDescription(pizza.description);
      setPriceSizeS(pizza.prices_sizes.s);
      setPriceSizeM(pizza.prices_sizes.m);
      setPriceSizeL(pizza.prices_sizes.l);
      setImage(pizza.photo_url);
      setImagePath(pizza.photo_path);
    }

    if (id) loadPizza();
  }, [id]);

  const handleImagePicker = useCallback(async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 4],
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  }, []);

  const handleAdd = useCallback(async () => {
    if (!name.trim())
      return Alert.alert('Cadastro', 'Informe o nome da pizza.');

    if (!description.trim())
      return Alert.alert('Cadastro', 'Informe a descrição da pizza.');

    if (!image) return Alert.alert('Cadastro', 'Selecione a imagem da pizza.');

    if (!priceSizeS || !priceSizeM || !priceSizeL)
      return Alert.alert(
        'Cadastro',
        'Informe o preço de todos os tamanhos da pizza.',
      );

    setLoading(true);
    const fileName = new Date().getTime();

    try {
      const reference = storage().ref(`/pizzas/${fileName}.png`);
      await reference.putFile(image);
      const photo_url = await reference.getDownloadURL();

      await firestore()
        .collection('pizzas')
        .add({
          name,
          name_insensitive: name.toLowerCase().trim(),
          description,
          prices_sizes: {
            s: priceSizeS,
            m: priceSizeM,
            l: priceSizeL,
          },
          photo_url,
          photo_path: reference.fullPath,
        });
      return navigate('menu');
    } catch (error) {
      setLoading(false);
      return Alert.alert(
        'Falha ao cadastrar',
        'Não foi possível realizar o cadastro da pizza.',
      );
    }
  }, [name, description, image, priceSizeS, priceSizeM, priceSizeL, navigate]);

  const handleDelete = useCallback(() => {
    firestore()
      .collection('pizzas')
      .doc(id)
      .delete()
      .then(() => {
        storage()
          .ref(imagePath)
          .delete()
          .then(() => navigate('menu'));
      });
  }, [id, imagePath, navigate]);

  return (
    <Container>
      <Header colors={theme.COLORS.GRADIENT}>
        <HeaderContent>
          <BackButton />
          <HeaderTitle>Cadastrar</HeaderTitle>
          {id ? (
            <DeleteButton onPress={handleDelete}>
              <DeleteButtonText>Deletar</DeleteButtonText>
            </DeleteButton>
          ) : (
            <View style={{ width: 20 }} />
          )}
        </HeaderContent>
      </Header>

      <Content>
        <ImageUploadContainer>
          <PizzaImage height={160} uri={image} />
          {!id && (
            <Button
              title="Carregar"
              width={90}
              style={{ marginLeft: 32 }}
              onPress={() => handleImagePicker()}
            />
          )}
        </ImageUploadContainer>
        <Label>Nome</Label>
        <Input
          placeholder="Qual o nome da pizza?"
          onChangeText={setName}
          value={name}
        />

        <LabelContainer>
          <Label>Descrição</Label>
          <Label small>Max 60 caracteres</Label>
        </LabelContainer>
        <Input
          multiline
          maxLength={60}
          style={{ height: 80, marginBottom: 16 }}
          onChangeText={setDescription}
          value={description}
        />

        <Label>Tamanhos e preços</Label>
        <PriceInput size="P" onChangeText={setPriceSizeS} value={priceSizeS} />
        <PriceInput size="M" onChangeText={setPriceSizeM} value={priceSizeM} />
        <PriceInput size="G" onChangeText={setPriceSizeL} value={priceSizeL} />
        {!id && (
          <Button
            style={{ marginVertical: 32 }}
            type="secondary"
            title="Cadastrar pizza"
            loading={loading}
            onPress={handleAdd}
          />
        )}
      </Content>
    </Container>
  );
};
