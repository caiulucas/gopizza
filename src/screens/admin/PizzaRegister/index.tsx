import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';
import * as ImagePicker from 'expo-image-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import { Input } from '@components/Input';
import { BackButton } from '@components/BackButton';
import { PizzaImage } from '@components/PizzaImage';
import { Button } from '@components/Button';
import { PriceInput } from '@components/PriceInput';

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

export const PizzaRegister: React.FC = () => {
  const theme = useTheme();

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priceSizeS, setPriceSizeS] = useState('');
  const [priceSizeM, setPriceSizeM] = useState('');
  const [priceSizeL, setPriceSizeL] = useState('');
  const [loading, setLoading] = useState(false);

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
    if (!name.trim()) {
      return Alert.alert('Cadastro', 'Informe o nome da pizza.');
    }
    if (!description.trim()) {
      return Alert.alert('Cadastro', 'Informe a descrição da pizza.');
    }
    if (!image) {
      return Alert.alert('Cadastro', 'Selecione a imagem da pizza.');
    }
    if (!priceSizeS || !priceSizeM || !priceSizeL) {
      return Alert.alert(
        'Cadastro',
        'Informe o preço de todos os tamanhos da pizza.',
      );
    }

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
            p: priceSizeS,
            m: priceSizeM,
            g: priceSizeL,
          },
          photo_url,
          photo_path: reference.fullPath,
        });
      return Alert.alert(
        'Cadastro realizado!',
        'Sua pizza foi cadastrada com sucesso!',
      );
    } catch (error) {
      return Alert.alert(
        'Falha ao cadastrar',
        'Não foi possível realizar o cadastro da pizza.',
      );
    } finally {
      setLoading(false);
    }
  }, [name, description, priceSizeS, priceSizeM, priceSizeL, image]);

  return (
    <Container>
      <Header colors={theme.COLORS.GRADIENT}>
        <HeaderContent>
          <BackButton />
          <HeaderTitle>Cadastrar</HeaderTitle>
          <DeleteButton>
            <DeleteButtonText>Deletar</DeleteButtonText>
          </DeleteButton>
        </HeaderContent>
      </Header>

      <Content>
        <ImageUploadContainer>
          <PizzaImage height={160} uri={image} />
          <Button
            title="Carregar"
            width={90}
            onPress={() => handleImagePicker()}
          />
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

        <Button
          style={{ marginVertical: 32 }}
          type="secondary"
          title="Cadastrar pizza"
          loading={loading}
          onPress={handleAdd}
        />
      </Content>
    </Container>
  );
};
