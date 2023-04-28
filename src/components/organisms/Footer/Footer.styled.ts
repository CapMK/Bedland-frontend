import styled from 'styled-components';
import { Palette } from 'theme/theme.types';
import { FOOTER_HEIGHT } from 'utils/constans';

export const FooterBox = styled.div<Palette>`
  align-items: center;
  background-color: ${({ palette }) => palette.footer};
  display: flex;
  height: ${FOOTER_HEIGHT}px;
  justify-content: center;
`;

export default FooterBox;
