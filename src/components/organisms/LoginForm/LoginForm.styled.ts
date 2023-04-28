import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PaletteType } from 'theme/theme.types';

export const LoginFormContainer = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 2.84375rem 0rem 2.84375rem;
  width: 25.625rem;
`;

export const ResetPasswordLink = styled(Link)<{ palette: PaletteType }>`
  color: ${({ palette }) => (palette as PaletteType).orangeDark};
  display: flex;
  justify-content: center;
`;

export default LoginFormContainer;
