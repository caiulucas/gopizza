import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-width: 1px;
  border-radius: 12px;
  border-color: ${({ theme }) => theme.COLORS.PRIMARY_100};
  justify-content: center;
  align-items: center;
`;
