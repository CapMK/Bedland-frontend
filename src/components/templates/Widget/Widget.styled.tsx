import styled from 'styled-components';
import { Palette } from 'theme/theme.types';
import { WidgetELementProps, WidgetProps } from './Widget.types';

export const WidgetElement = styled.div<WidgetELementProps & Palette>`
  background-color: ${({ palette }) => palette.light};
  border-radius: 8px;
  box-shadow: 0px 6px 6px -2px rgba(0, 0, 0, 0.15);
  min-height: ${({ minHeight }) => minHeight};
  min-width: ${({ minWidth }) => minWidth};
`;

export const WidgetHeader = styled.div<Palette & Pick<WidgetProps, 'mode'>>`
  align-items: center;
  background-color: ${({ palette, mode }) => (mode === 'dark' ? palette.blueDark : palette.white)};
  border-bottom: 1px solid ${({ palette, mode }) => (mode === 'light' ? palette.blueDark : 'none')};
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.875rem 1.5rem;
`;
