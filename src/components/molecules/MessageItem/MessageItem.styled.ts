import styled from 'styled-components';
import { PaletteType } from 'theme/theme.types';

export const HoverContainer = styled.div<{ palette: PaletteType }>`
  :hover {
    background: ${({ palette }) => `${palette.sidebarTabsPressed}10`};
  }
  :last-child {
    margin-bottom: 0.75rem;
  }
`;

export const MessageContainer = styled.div<{ palette: PaletteType }>`
  align-items: center;
  border-bottom: 1px solid ${({ palette }) => palette.sidebarTabs};
  display: flex;
  margin-left: 1.125rem;
  margin-right: 1rem;
  padding: 0.875rem 1.938rem 0.875rem 1.438rem;
`;

export const NameWrapper = styled.div`
  flex: 1;
  margin-left: 1rem;
`;
