import styled from 'styled-components';
import initialTheme from 'theme/initialTheme';

export const Switcher = styled.label`
  display: flex;
  height: 2.5rem;
  position: relative;
  width: 5rem;
`;

export const Slider = styled.span<{ checked: boolean }>`
  -webkit-transition: 0.4s;
  align-items: center;
  background-color: ${initialTheme.palette.sidebarTabs};
  border-radius: 8px;
  bottom: 0;
  cursor: pointer;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  position: absolute;
  top: 0;
  transition: 0.4s;
  width: 100%;
  z-index: 2;
  &:before {
    -webkit-transition: 0.4s;
    background-color: ${initialTheme.palette.light};
    border-radius: 8px;
    bottom: 0;
    content: '';
    height: 2.5rem;
    left: 0;
    position: absolute;
    transform: ${({ checked }) => (checked ? 'translateX(40px)' : 'translateX(0px)')};
    transition: 0.4s;
    width: 2.5rem;
    z-index: -1;
  }
`;

export const CustomInput = styled.input`
  height: 0;
  opacity: 0;
  width: 0;
`;
