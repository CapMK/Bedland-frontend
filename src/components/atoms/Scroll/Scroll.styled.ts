import styled from 'styled-components';
import { PaletteType } from 'theme/theme.types';

const THUMB_WIDTH = 0.5;
const SCROLLBAR_RIGHT_PADDING = 0.375;
const SCROLLBAR_BORDER_RADIUS = 8;
const SCROLLBAR_WIDTH = THUMB_WIDTH + 2 * SCROLLBAR_RIGHT_PADDING;

export const ScrollBar = styled.div<{
  contentSize: number;
  palette: PaletteType;
}>`
  height: ${({ contentSize }) => contentSize}rem;
  overflow-y: scroll;

  @supports (overflow: overlay) {
    overflow: overlay;
  }

  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: ${SCROLLBAR_WIDTH}rem;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ palette }) => palette.blueDark};
    border-radius: ${2 * SCROLLBAR_BORDER_RADIUS}px;
    border: ${SCROLLBAR_RIGHT_PADDING}rem solid transparent;
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-track {
    margin-bottom: 0.5rem;
    scrollbar-color: ${({ palette }) => palette.white};
  }
`;

export default ScrollBar;
