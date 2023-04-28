import styled from 'styled-components';
import initialTheme from 'theme/initialTheme';
import { STATIC_VALUES } from './SearchBar.utils';

const searchBarTypography = {
  ...initialTheme.typography.dataInputsAndTooltips,
};

export const SearchBarContainer = styled.div<{
  ifInputFocused: boolean;
  ifDropdownVisible: boolean;
}>`
  align-items: center;
  background-color: ${initialTheme.palette.white};
  border: 1px solid
    ${({ ifInputFocused }) =>
      ifInputFocused ? initialTheme.palette.blueDark : initialTheme.palette.white};
  border-bottom: 1px solid
    ${({ ifDropdownVisible, ifInputFocused }) =>
      // eslint-disable-next-line no-nested-ternary
      ifDropdownVisible
        ? initialTheme.palette.sidebarTabs
        : ifInputFocused
        ? initialTheme.palette.blueDark
        : 'transparent'};
  border-radius: ${({ ifDropdownVisible }) => (ifDropdownVisible ? '8px 8px 0 0' : '8px')};
  display: flex;
  justify-content: space-between;
  padding: 0.375rem
    ${({ ifDropdownVisible, ifInputFocused }) =>
      ifDropdownVisible || ifInputFocused ? 0.6875 : 0}rem
    0.375rem ${STATIC_VALUES.containerPaddingLeft / 16}rem;
  width: 17.5rem;
`;

export const SearchBarContent = styled.div`
  align-items: center;
  background-color: ${initialTheme.palette.white};
  display: flex;
  flex-wrap: nowrap;
  gap: ${STATIC_VALUES.contentGap / 16}rem;
  height: 1.75rem;
  justify-content: start;
`;

export const Input = styled.input`
  ${searchBarTypography}
  width: 100%;
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownList = styled.ul<{ ifDropdownVisible: boolean }>`
  background-color: ${({ ifDropdownVisible }) =>
    ifDropdownVisible ? initialTheme.palette.white : 'transparent'};
  border: 1px solid
    ${({ ifDropdownVisible }) =>
      ifDropdownVisible ? initialTheme.palette.blueDark : 'transparent'};
  border-radius: 0 0 8px 8px;
  border-top: 1px solid
    ${({ ifDropdownVisible }) =>
      ifDropdownVisible ? initialTheme.palette.sidebarTabs : 'transparent'};
  position: absolute;
  width: 100%;
`;

export const DropdownTextContainer = styled.li`
  cursor: pointer;
  display: flex;
  padding: 0.5rem 0 0.6875rem
    ${(STATIC_VALUES.iconSize + STATIC_VALUES.containerPaddingLeft + STATIC_VALUES.contentGap) /
    16}rem;
`;

export const BoldedLetter = styled.span`
  font-weight: bold;
`;
