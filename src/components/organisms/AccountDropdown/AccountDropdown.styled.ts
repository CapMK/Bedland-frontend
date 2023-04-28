import styled from 'styled-components';
import { HEADER_HEIGHT } from 'utils/constans';
import { PaletteType } from 'theme/theme.types';

export const DropdownBox = styled.div`
  display: block;
  height: 100%;
  position: relative;
`;

export const DropdownMenu = styled.div<{ palette: PaletteType }>`
  background-color: ${({ palette }) => palette.light};
  border-radius: 0 0 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 12.5rem;
  padding: 1rem;
  position: relative;
  right: 1.5rem;
  transition: height 2s, transform 2s;
`;

export const DropdownBreak = styled.hr<{ palette: PaletteType }>`
  border-bottom: 1px solid ${({ palette }) => palette.sidebarTabs};
  margin-top: 0.5rem;
`;

export const UserInfoBox = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  height: ${HEADER_HEIGHT}px;
  margin-right: 2rem;
  min-width: 11.5rem;
`;
