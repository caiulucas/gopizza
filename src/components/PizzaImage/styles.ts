import styled from 'styled-components/native';
import { Label } from '../Label';

interface ContainerProps {
  height?: number;
}

export const Container = styled.View<ContainerProps>`
  height: ${({ height }) => height || 104}px;
  width: ${({ height }) => height || 104}px;
  border-radius: ${({ height }) => (height || 104) / 2}px;
  background-color: ${({ theme }) => theme.COLORS.TITLE};

  border-width: 1px;
  border-style: dashed;
  border-color: ${({ theme }) => theme.COLORS.SECONDARY_900};

  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  height: ${({ height }) => height || 104}px;
  width: ${({ height }) => height || 104}px;
  border-radius: ${({ height }) => (height || 104) / 2}px;
`;

export const Text = styled(Label)`
  text-align: center;
`;
