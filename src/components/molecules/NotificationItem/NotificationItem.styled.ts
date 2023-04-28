import styled from 'styled-components';
import { PaletteType } from 'theme/theme.types';

export const NotificationItemContainer = styled.div<{ palette: PaletteType }>`
  align-items: center;
  border-bottom: 1px solid ${({ palette }) => palette.sidebarTabs};
  display: flex;
  justify-content: space-between;
  margin-left: 1.125rem;
  margin-right: 1rem;
  padding: 0.875rem 1.458rem 0.875rem 0.518rem;
  position: relative;
  :last-child {
    margin-bottom: 1.125rem;
  }
`;

export const NotificationItemText = styled.div`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: -0.203rem;
  white-space: nowrap;
  width: 14rem;
`;
