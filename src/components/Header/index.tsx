import React from 'react';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

import EmojiSvg from '@assets/emoji.svg';
import LogoutSvg from '@assets/logout.svg';
import SearchSvg from '@assets/search.svg';

import {
  Container,
  Content,
  WelcomeContainer,
  Title,
  LogoutButton,
  SearchContainer,
  Input,
  SearchButton,
} from './styles';

export const Header: React.FC = () => {
  const theme = useTheme();
  return (
    <Container colors={theme.COLORS.GRADIENT}>
      <Content>
        <WelcomeContainer>
          <EmojiSvg height={RFValue(32)} />
          <Title>Olá, Garçom</Title>
        </WelcomeContainer>

        <LogoutButton>
          <LogoutSvg height={RFValue(24)} />
        </LogoutButton>
      </Content>

      <SearchContainer>
        <Input placeholder="Pesquise uma pizza" />
        <SearchButton>
          <SearchSvg height={RFValue(24)} />
        </SearchButton>
      </SearchContainer>
    </Container>
  );
};
