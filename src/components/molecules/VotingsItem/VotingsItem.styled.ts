import styled from 'styled-components';
import { PaletteType } from 'theme/theme.types';

export const VotingsItemContainer = styled.div<{ palette: PaletteType }>`
  align-items: center;
  border-bottom: 1px solid ${({ palette }) => palette.sidebarTabs};
  display: flex;
  flex-direction: column;
  margin-left: 1.125rem;
  margin-right: 1.125rem;
  width: calc(100% - 2.25rem);
  :last-child {
    margin-bottom: 0.938rem;
  }
`;

export const VotingsItemHeader = styled(VotingsItemContainer)`
  border-bottom: none;
  cursor: pointer;
  flex-direction: row;
  padding: 2rem 0 2rem 0rem;
  :last-child {
    margin-bottom: 0rem;
  }
`;
export const UnfoldContainer = styled.div<{ isUnfold: boolean; date: number }>`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  height: ${({ isUnfold, date }) => {
    if (isUnfold) {
      return date < 0 ? '20rem' : '10rem';
    }
    return '0px';
  }};
  justify-content: flex-start;
  opacity: ${({ isUnfold }) => (isUnfold ? 1 : 0)};
  overflow: hidden;
  transition: opacity 0.25s linear, height 0.3s linear, visibility 0.3s linear;
  visibility: ${({ isUnfold }) => (isUnfold ? 'visible' : 'hidden')};
  width: calc(100% - 2.25rem);
`;

export const ChartWrapper = styled.div`
  height: 12.5rem;
  width: 27.25rem;
`;

export const IconWrapper = styled.div<{ isUnfold: boolean }>`
  transform: ${({ isUnfold }) => (isUnfold ? 'rotate(270deg)' : 'rotate(90deg)')};
  transition-duration: 0.3s;
`;

export default VotingsItemContainer;
