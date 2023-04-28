import styled from 'styled-components';
import { PaletteType } from 'theme/theme.types';

export const SetNewPasswordContainer = styled.div<{ palette: PaletteType }>`
  color: ${({ palette }) => (palette as PaletteType).light};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 27.6875rem;
  justify-content: center;
  width: 25.625rem;
`;
export const ResPassCenteredHeading = styled.h1`
  display: flex;
  justify-content: center;
`;
