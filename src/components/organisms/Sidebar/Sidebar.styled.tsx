import styled from 'styled-components';
import { Palette } from 'theme/theme.types';

export const Box = styled.div<Palette>`
  background: ${({ palette }) => palette.sidebar};
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const StyledList = styled.ul`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin: 1.625rem 0;
`;
