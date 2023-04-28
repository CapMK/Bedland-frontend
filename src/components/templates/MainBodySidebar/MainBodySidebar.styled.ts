import styled from 'styled-components';
import { Palette } from 'theme/theme.types';
import { HEADER_HEIGHT, FOOTER_HEIGHT } from 'utils/constans';

export const Box = styled.div<Palette & { isLoggedIn: boolean }>`
  background: ${({ palette }) => palette.greyLight};
  display: flex;
  min-height: calc(
    100vh -
      ${({ isLoggedIn }) =>
        isLoggedIn ? `${HEADER_HEIGHT}px` : `${HEADER_HEIGHT + FOOTER_HEIGHT}px`}
  );
`;

export default Box;
