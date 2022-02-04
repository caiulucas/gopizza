import React from 'react';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

import EmojiSvg from '@assets/emoji.svg';
import LogoutSvg from '@assets/logout.svg';
import SearchSvg from '@assets/search.svg';
import CloseSvg from '@assets/close.svg';

import { useAuth } from '@hooks/auth';
import { TextInputProps } from 'react-native';
import {
  Container,
  Content,
  WelcomeContainer,
  Title,
  LogoutButton,
  SearchContainer,
  InputArea,
  Input,
  ClearButton,
  SearchButton,
} from './styles';

interface SearchHeaderProps extends TextInputProps {
  onSearch: () => void;
  onClear: () => void;
}

export const SearchHeader: React.FC<SearchHeaderProps> = ({
  onSearch,
  onClear,
  ...rest
}) => {
  const theme = useTheme();
  const { signOut } = useAuth();

  return (
    <Container colors={theme.COLORS.GRADIENT}>
      <Content>
        <WelcomeContainer>
          <EmojiSvg height={RFValue(32)} />
          <Title>Olá, Garçom</Title>
        </WelcomeContainer>

        <LogoutButton onPress={signOut}>
          <LogoutSvg height={RFValue(24)} />
        </LogoutButton>
      </Content>

      <SearchContainer>
        <InputArea>
          <Input placeholder="Pesquise uma pizza" {...rest} />
          <ClearButton onPress={onClear}>
            <CloseSvg color={theme.COLORS.SECONDARY_900} height={16} />
          </ClearButton>
        </InputArea>
        <SearchButton onPress={onSearch}>
          <SearchSvg height={RFValue(24)} />
        </SearchButton>
      </SearchContainer>
    </Container>
  );
};
