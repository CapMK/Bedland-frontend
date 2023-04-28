import styled from 'styled-components';
import { PaletteType } from 'theme/theme.types';

export const DropdownBox = styled.div`
  position: relative;
`;

export const SortDropdown = styled.div<{ palette: PaletteType }>`
  background: ${({ palette }) => palette.white};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin-top: 0.75rem;
  padding: 0.5rem 0.375rem;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export const SortItem = styled.div<{ palette: PaletteType; active: boolean }>`
  background: ${({ palette, active }) => (active ? palette.blueDark : palette.white)};
  border-radius: 8px;
  padding: 0.563rem 0;
  text-align: center;

  :hover {
    background: ${({ palette, active }) => !active && `${palette.blueDark}15`};
    cursor: pointer;
  }
`;
