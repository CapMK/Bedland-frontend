import styled from 'styled-components';
import { Palette } from 'theme/theme.types';

export const StyledItemList = styled.li<Palette>`
  width: 200px;
  &:hover {
    background: ${({ palette }) => palette.sidebarTabs}10;
  }
`;

export const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  height: 2.625rem;
  justify-content: space-between;
  padding: 0.625rem 1.25rem;
`;

export const ContentDiv = styled.div`
  align-items: center;
  display: flex;
  gap: 0.9rem;
  justify-content: flex-start;
`;

export const Badge = styled.div<Palette>`
  align-items: center;
  background: ${({ palette }) => palette.redDark};
  border-radius: 50%;
  display: flex;
  font-size: 11px;
  font-weight: 600;
  height: 1rem;
  justify-content: center;
  line-height: 1rem;
  width: 1rem;
`;
